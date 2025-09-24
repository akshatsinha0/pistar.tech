"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import google from '@/assets/images/icon/google.png';
import facebook from '@/assets/images/icon/facebook.png';
import RegisterForm from "../forms/register-form";
import LoginForm from "../forms/login-form";
import { Auth } from "firebase/auth";
import AuthLogin from "../forms/auth-login";
import AuthSignup from "../forms/auth-signup";
import CareerVendorForm from "./career-vendor-form";
import CareerJobForm from "./career-job-form";
import BookDemoForm from "./book-demo-form";
const YT_EMBED_URL = "https://www.youtube.com/embed/oCleslN0drs?autoplay=1&mute=1&rel=0&controls=0&modestbranding=1&iv_load_policy=3&playsinline=1&disablekb=1&fs=0&loop=1&playlist=oCleslN0drs";
const BookADemo = () => {
  const [ showVideo, setShowVideo ] = React.useState(false);

  React.useEffect(() => {
    const el=document.getElementById("BookDemo");
    if (!el) return;
    const onShown =()=> setShowVideo(true);
    const onHidden =()=> setShowVideo(false);
    el.addEventListener("shown.bs.modal", onShown);
    el.addEventListener("hide.bs.modal", onHidden);
    el.addEventListener("hidden.bs.modal", onHidden);
    return ()=>{
      el.removeEventListener("shown.bs.modal",onShown);
      el.removeEventListener("hide.bs.modal",onHidden);
      el.removeEventListener("hidden.bs.modal",onHidden);
    };
  }, []);

  return (
    <div
    className="modal fade"
    id="BookDemo"
    tabIndex={-1}
    aria-hidden="true"
  >
      <div className="modal-dialog modal-dialog-centered mb-10 mt-10" style={{width:"75vw",maxWidth:"75vw"}}>
        <div className="container-fluid d-flex align-items-center justify-content-center">
<div className="user-data-form modal-content p-0" style={{boxShadow: "2px 5px 20px rgba(0, 0, 0, 0.1)",background: "#EDF1EE",height:"90vh",overflow:"hidden", position:"relative"}} >
          <button
              type="button"
className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
style={{position:"absolute", left:6, top:6, zIndex:5}}
            ></button>
            <div className="row g-0 w-100 h-100">
              {/* Left: form */}
              <div className="col-12 col-lg-6 d-flex flex-column h-100 overflow-auto">
<div className="form-wrapper w-100 p-5 pb-5" style={{maxWidth: "100%"}}>

                  <div className="tab-content mt-30">
                    <div className="tab-pane show active" role="tabpanel" id="new1">
                      <div className="text-center mb-20">
                        <h2 className="font-weight-bold">Book A Demo</h2>
                      </div>
                      {/* form start */}
                      <BookDemoForm />
                      {/* form end */}
                    </div>
                  </div>

                </div>
              </div>
{/* Right: video (lg+) */}
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

export default BookADemo;
