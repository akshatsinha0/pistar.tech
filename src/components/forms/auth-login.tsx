"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, db } from "@/database/firebase";
import { doc, getDoc } from "firebase/firestore";
import icon from "@/assets/images/icon/icon_13.svg";
import ErrorMsg from "../common/error-msg";
import { notifySuccess, notifyError } from "@/utils/toast";

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const AuthLogin = () => {
  const [showPass, setShowPass] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetError, setResetError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) console.log("User logged in");
      
      else console.log("No user logged in");
      // 1. Close the Bootstrap modal via JS
      const modalEl = document.getElementById("loginModal");
      if (modalEl) {
        const modalInstance = (window as any).bootstrap?.Modal.getInstance(
          modalEl
        );
        modalInstance?.hide();
      }

      // 2. Cleanup leftover backdrop (fallback)
      document.body.classList.remove("modal-open");
      const backdrops = document.getElementsByClassName("modal-backdrop");
      while (backdrops.length > 0) {
        backdrops[0].parentNode?.removeChild(backdrops[0]);
      }
    });
    return () => unsubscribe();
  }, []);

  const submitForm = async (values: FormData) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredential.user;
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.data();

      router.push(
        userData?.role === "admin" ? "/dashboard" : "/user-dashboard"
      );
      notifySuccess("User logged in successfully!");
      reset();
    } catch (error) {
      const errorMessage = (error as Error).message;
      console.error("Firebase Error:", errorMessage);
      notifyError(errorMessage);
    }
  };

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setResetEmailSent(true);
      setResetError(null);
    } catch (error) {
      setResetError("Failed to send password reset email. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="row">
          <div className="col-12">
            <div className="input-group-meta position-relative mb-25">
              <label>Email*</label>
              <input
                type="email"
                {...register("email")}
                placeholder="Youremail@gmail.com"
              />
              {errors.email && <ErrorMsg msg={errors.email?.message || ""} />}
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta position-relative mb-20">
              <label>Password*</label>
              <input
                type={showPass ? "text" : "password"}
                {...register("password")}
                placeholder="Enter Password"
              />
              <span
                className="placeholder_icon"
                onClick={() => setShowPass(!showPass)}
              >
                <span className={`passVicon ${showPass ? "eye-slash" : ""}`}>
                  <Image src={icon} alt="pass-icon" />
                </span>
              </span>
              {errors.password && (
                <ErrorMsg msg={errors.password?.message || ""} />
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-2 remember-wrap">
              <div className="form-check m-0">
                <input className="form-check-input" type="checkbox" id="remember" />
                <label className="form-check-label" htmlFor="remember">Keep me logged in</label>
              </div>
              <Link className="text-decoration-underline" href="#" data-bs-toggle="modal" data-bs-target="#ForgotModal">
                Forgot Password?
              </Link>
            </div>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn-four w-100 tran3s d-block mt-20"
            >
              Login
            </button>
          </div>
        </div>
      </form>

      <div
        className="modal fade"
        id="ForgotModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen modal-dialog-centered">
          <div className="container d-flex align-items-center justify-content-center">
            <div className="user-data-form modal-content p-5">
              <h3 className="text-center">Forgot Password?</h3>
              <p className="text-center">
                Enter your email to reset your password.
              </p>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
              <div className="modal-body">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleForgotPassword();
                  }}
                >
                  <div className="input-group-meta position-relative mb-20">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      placeholder="Your email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-four w-100 tran3s d-block mt-20"
                  >
                    Send Reset Link
                  </button>
                  {resetEmailSent && (
                    <p className="text-success mt-3">
                      Check your inbox for reset instructions.
                    </p>
                  )}
                  {resetError && (
                    <p className="text-danger mt-3">{resetError}</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLogin;
