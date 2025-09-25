"use client";
import React, { useEffect, useState } from "react";
import Newsletter from "../forms/newsletter";
import Image from "next/image";

const POPUP_BANNER_SRC = "/MY_IMAGE/upcomingEventBanner.png";

const ImgPopUp = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Respect user's opt-out, otherwise show once per day
    const noShow = localStorage.getItem("noShowPopup") === "true";
    const lastShown = localStorage.getItem("popupLastShown");
    let shouldShow = false;
    if (!noShow) {
      if (!lastShown) shouldShow = true; else {
        const last = parseInt(lastShown, 10);
        if (!Number.isNaN(last)) {
          const DAY = 24*60*60*1000;
          if (Date.now()-last>DAY) shouldShow=true;
        } else shouldShow = true;
      }
    }
    if (shouldShow) {
      const id = window.setTimeout(() => {
        setShowModal(true);
        localStorage.setItem("popupLastShown", String(Date.now()));
      }, 3000);
      return () => window.clearTimeout(id);
    }
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleDontShowAgain = () => {
    localStorage.setItem("noShowPopup", "true");
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered entry-popup-dialog">
            <div className="entry-popup-content modal-content p-0">
              <div className="position-relative">
                <Image
                  src={POPUP_BANNER_SRC}
                  alt="Upcoming event banner"
                  width={1600}
                  height={900}
                  sizes="(max-width: 1200px) 96vw, 1200px"
                  style={{width:"100%",height:"auto",display:"block"}}
                  priority
                />
                <button
                  type="button"
                  className="btn-close position-absolute"
                  aria-label="Close"
                  onClick={handleClose}
                  style={{right:8,top:8,filter:"invert(1)"}}
                />
              </div>
              <button
                className="entry-popup-dismiss"
                onClick={handleDontShowAgain}
              >
                Don&apos;t show this again
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImgPopUp;
