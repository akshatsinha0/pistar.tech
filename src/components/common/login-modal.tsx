"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import google from '@/assets/images/icon/google.png';
import facebook from '@/assets/images/icon/facebook.png';
import RegisterForm from "../forms/register-form";
import LoginForm from "../forms/login-form";
import AuthLogin from "../forms/auth-login";
import AuthSignup from "../forms/auth-signup";

const YT_EMBED_URL = "https://www.youtube.com/embed/oCleslN0drs?autoplay=1&mute=1&rel=0&controls=0&modestbranding=1&iv_load_policy=3&playsinline=1&disablekb=1&fs=0&loop=1&playlist=oCleslN0drs";
const LoginModal = () => {
  const [showVideo, setShowVideo]=React.useState(false);
  React.useEffect(() =>{
    const el = document.getElementById("loginModal");
    if (!el) return;
    const onShown=()=>setShowVideo(true);
    const onHidden=()=>setShowVideo(false);
    el.addEventListener("shown.bs.modal", onShown);
    el.addEventListener("hide.bs.modal", onHidden);
    el.addEventListener("hidden.bs.modal", onHidden);
    return ()=>{
      el.removeEventListener("shown.bs.modal",onShown);
      el.removeEventListener("hide.bs.modal",onHidden);
      el.removeEventListener("hidden.bs.modal",onHidden);
    };
  },[]);

  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" style={{width:"75vw",maxWidth:"75vw"}}>
<div className="container-fluid">
<div className="user-data-form modal-content p-0" style={{height:"90vh",overflow:"hidden", position:"relative"}}>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
style={{position:"absolute", left:6, top:6, zIndex:5}}
            ></button>
<div className="row g-0 h-100">
              {/* Left: forms */}
              {/*scrollabe features so that the bottom buttoms do not get hidden and cut*/}
              <div className="col-12 col-lg-6 d-flex flex-column h-100 overflow-auto">
<div className="form-wrapper w-100 p-5 pb-5" style={{maxHeight:"100%"}}>
                  <ul className="nav nav-tabs border-0 w-100" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#fc1"
                        role="tab"
                        aria-selected="true"
                        tabIndex={-1}
                      >
                        Login
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#fc2"
                        role="tab"
                        aria-selected="false"
                        tabIndex={-1}
                      >
                        Signup
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content mt-30">
                    <div className="tab-pane show active" role="tabpanel" id="fc1">
                      <div className="text-center mb-20">
                        <h2>Hi, Welcome Back!</h2>
                        <p>
                          Still do not have an account? <Link href="#">Sign up</Link>
                        </p>
                      </div>
                      {/* login form start */}
                      {/* <LoginForm /> */}
                      <AuthLogin />
                      {/* login form end */}
                    </div>
                    <div className="tab-pane" role="tabpanel" id="fc2">
                      <div className="text-center mb-20">
                        <h2>Register</h2>
                        <p>
                          Already have an account? <Link href="#">Login</Link>
                        </p>
                      </div>
                      {/* register form start */}
                      {/* <RegisterForm /> */}
                      <AuthSignup />
                      {/* register form end */}
                    </div>
                  </div>

                  <div className="d-flex align-items-center mt-30 mb-10">
                    <div className="line"></div>
                    <span className="pe-3 ps-3 fs-6">OR</span>
                    <div className="line"></div>
                  </div>
                  <div className="row mb-4 mb-lg-5">
                    <div className="col-sm-6">
                      <Link href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
                        <Image src={google} alt="google" />
                        <span className="ps-3">Signup with Google</span>
                      </Link>
                    </div>
                    <div className="col-sm-6">
                      <Link href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
                        <Image src={facebook} alt="facebook" />
                        <span className="ps-3">Signup with Facebook</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

{/* Right: video (only on lg+) */}
              <div className="col-12 col-lg-6 d-none d-lg-flex border-start h-100">
                {showVideo && (
                  <div className="modal-video-cover h-100 w-100 flex-grow-1">
                    <iframe
                      src={YT_EMBED_URL}
                      title="PiStarTech demo"
                      className="modal-video-iframe"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
