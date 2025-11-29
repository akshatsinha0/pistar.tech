"use client";
import React from "react";

const Video3DWrapper = () => {
  return (
    <div 
      className="video-wrapper" 
      style={{ 
        borderRadius: "24px", 
        overflow: "hidden", 
        boxShadow: "0 30px 90px rgba(0,0,0,0.3), 0 15px 40px rgba(0,0,0,0.22), inset 0 0 0 1px rgba(255,255,255,0.1)",
        border: "4px solid rgba(255,255,255,0.2)",
        background: "linear-gradient(145deg, #1a1a1a, #000)",
        position: "relative",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: "perspective(1000px) rotateX(2deg) translateY(0)",
        transformStyle: "preserve-3d"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) translateY(-10px) scale(1.02)";
        e.currentTarget.style.boxShadow = "0 40px 120px rgba(0,0,0,0.4), 0 20px 60px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "perspective(1000px) rotateX(2deg) translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 30px 90px rgba(0,0,0,0.3), 0 15px 40px rgba(0,0,0,0.22), inset 0 0 0 1px rgba(255,255,255,0.1)";
      }}
    >
      <div 
        style={{
          position: "absolute",
          top: "-2px",
          left: "-2px",
          right: "-2px",
          bottom: "-2px",
          background: "linear-gradient(45deg, #7fffd4, #40e0d0, #00fa9a, #3cb371)",
          borderRadius: "24px",
          zIndex: -1,
          opacity: 0.5,
          filter: "blur(25px)"
        }}
      ></div>
      <video 
        muted 
        autoPlay 
        loop 
        playsInline
        controls
        style={{ 
          width: "100%", 
          height: "auto", 
          display: "block",
          maxHeight: "600px",
          objectFit: "contain",
          backgroundColor: "#000",
          position: "relative",
          zIndex: 1
        }}
      >
        <source src="/assets/videos/pp-demo-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video3DWrapper;
