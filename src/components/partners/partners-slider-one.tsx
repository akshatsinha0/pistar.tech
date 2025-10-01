'use client'
import React from "react";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import img1 from "@/assets/images/logo/clints/1.png"
import img2 from "@/assets/images/logo/clints/2.png"
import img3 from "@/assets/images/logo/clints/3.png"
import img4 from "@/assets/images/logo/clints/hubdata.png"
import img5 from "@/assets/images/logo/clints/vit.png"
import img6 from "@/assets/images/logo/clints/DST.png"
import img7 from "@/assets/images/logo/clints/ricard.png"
import img8 from "@/assets/images/logo/clints/nidhiprayas.png"
import img9 from "@/assets/images/logo/clints/Nidhiseed.png"
import img10 from "@/assets/images/logo/clints/Dos.png"

// slider setting
const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

// slider logos
const slider_logos:StaticImageData[] = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const PartnersSliderOne = () => {
  return (
    <Slider {...slider_setting} className="partner-slider-one">
      {slider_logos.map((logo, i) => (
        <div key={i} className="item">
          <div className="d-flex align-items-center justify-content-center">
            <Image src={logo} alt="logo" style={{ height: "auto" }} />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default PartnersSliderOne;
