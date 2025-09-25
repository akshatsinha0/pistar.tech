"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import shape from "@/assets/images/shape/shape_04.svg";

// imageStyle
const imageStyle = {
  height: "auto",
};
// internal images
import bg_1 from "@/assets/images/banners/foot_1.png";
import bg_2 from "@/assets/images/banners/foot_2.png";
import bg_3 from "@/assets/images/banners/smart_chair.jpg";
// import bg_1 from "@/assets/images/media/img_01.jpg";
// import bg_2 from "@/assets/images/media/img_02.jpg";
// import bg_3 from "@/assets/images/media/img_03.jpg";
import icon from "@/assets/images/icon/icon_02.svg";

// slider bg
const slider_bg = [bg_1, bg_2, bg_3];
// slider setting
const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  pauseOnHover: false,
  draggable: false,
  autoplaySpeed: 3000,
};

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  centerPadding: "0px",
  pauseOnHover: false,
  draggable: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  autoplaySpeed: 3000,
  touchMove: false, // Disable touch events
};

const HeroBannerTwo = () => {
  return (
    <div className="hero-banner-one vh-90 pt-225 xl-pt-200 lg-pt-150 pb-150 lg-pb-100 position-relative vh-100">
      <Slider {...slider_setting} className="hero-slider-one m0">
        {slider_bg.map((bg, i) => (
          <div className="item m0" key={i}>
            <div
              className="hero-img"
              style={{ backgroundImage: `url(${bg.src})` }}
            ></div>
          </div>
        ))}
      </Slider>
      <Slider {...settings}>
        <div>
          <div className="container position-relative h-100 d-flex align-items-center justify-content-center">
            <div className="row">
              <div className="col-lg-10 m-auto text-center">
                <h1 className="hero-heading fw-bold wow fadeInUp mt-10 text-white">
                  Advanced Foot Systems Podiatry Solutions for Better Mobility
                  and Comfort
                  {/* Revolutionizing Foot Health with
                  <span className="d-inline-block position-relative">
                    &nbsp; AI-Driven
                    <Image
                      src={shape}
                      alt="shape"
                      className="lazy-img"
                      style={imageStyle}
                    />
                  </span>{" "}
                  Diagnostics */}
                </h1>
                <p
                  className="text-xl pt-35 pb-35 wow fadeInUp text-white"
                  data-wow-delay="0.1s"
                >
                  Introducing the DiaPS Mat: Accurate, Affordable, and Portable
                  Plantar Pressure Analysis.
                </p>
                <div className="d-inline-flex flex-wrap align-items-center">
<Link href="/about-us" className="btn-four btn-cta-arrow mt-15 me-4">
                    Explore Our Technology
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container position-relative h-100 d-flex align-items-center justify-content-center">
            <div className="row">
              <div className="col-lg-10 m-auto text-center">
                <h1 className="hero-heading fw-bold wow fadeInUp mt-10 text-white">
                Redefining Measurement with Flexible Pressure Sensor Solutions
                  {/* Revolutionizing Foot Health with
                  <span className="d-inline-block position-relative">
                    &nbsp; AI-Driven
                    <Image
                      src={shape}
                      alt="shape"
                      className="lazy-img"
                      style={imageStyle}
                    />
                  </span>
                  Diagnostics */}
                </h1>
                <p
                  className="text-xl pt-35 pb-35 wow fadeInUp text-white"
                  data-wow-delay="0.1s"
                >
                  Enhance performance with PiStarTech&apos;s advanced flexible pressure sensors tailored for medical diagnostics
                </p>
                <div className="d-inline-flex flex-wrap align-items-center">
<Link href="/about-us" className="btn-four btn-cta-arrow mt-15 me-4">
                    Explore Our Technology
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container position-relative h-100 d-flex align-items-center justify-content-center">
            <div className="row">
              <div className="col-lg-10 m-auto text-center">
                <h1 className="hero-heading fw-bold wow fadeInUp mt-10 text-white">
                AI-Powered Healthtech for Smart Posture Solutions
                  {/* Revolutionizing Foot Health with
                  <span className="d-inline-block position-relative">
                    &nbsp; AI-Driven
                    <Image
                      src={shape}
                      alt="shape"
                      className="lazy-img"
                      style={imageStyle}
                    />
                  </span>
                  Diagnostics */}
                </h1>
                <p
                  className="text-xl pt-35 pb-35 wow fadeInUp text-white"
                  data-wow-delay="0.1s"
                >
                 Innovating healthtech with artificial intelligence for smart sensor-integrated solutions to ensure correct seating and standing postures.
                </p>
                <div className="d-inline-flex flex-wrap align-items-center">
<Link href="/about-us" className="btn-four btn-cta-arrow mt-15 me-4">
                    Explore Our Technology
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      {/* <Link href="/contact"
        className="more-btn rounded-circle d-flex align-items-center justify-content-center tran3s wow fadeInLeft"
        target="_blank"
      >
        <i className="bi bi-arrow-up-right"></i>
      </Link> */}
    </div>
  );
};

export default HeroBannerTwo;
