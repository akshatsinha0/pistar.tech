"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import logo from "@/assets/images/logo/logo-white.png";
import FooterSocial from "./footer-social";
import MapWithCountries from "@/components/map/maps";
import icon_1 from "@/assets/images/icon/icon_49.svg";
import icon_2 from "@/assets/images/icon/icon_50.svg";
import map from "@/assets/images/icon/footer-map.svg";
import Newsletter from "@/components/forms/newsletter";


const FooterOne = () => {
  return (
  <>
    <div className="footer-one" style={{background: "linear-gradient(#313638,#313638)"}}>
      <div className="container">
        <div className="inner-wrapper">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-md-5 footer-intro mb-30">
              <div className="logo">
                <Link href="/" className="d-lg-inline-block mb-25">
                  <Image width={150} src={logo} alt="logo" />
                </Link>
              </div>
              {/* map start  */}
              {/* <h5 className="footer-title">Global Presence</h5>
              <div className="pb-4">
                <MapWithCountries />
              </div> */}
              {/* map end  */}
              {/* <p className="text-white lh-sm mb-35">Top-rated <span className="opacity-50">business <br/> consultancy for your success</span></p> */}
              <h4 className="text-white lh-sm mb-35">
                Head office <br /> <br />
                <span className="opacity-50 mt-2">
                  IIIT-H Foundation, Desk B70, Vindhya C5, IIIT-Hyd Campus, Survey#25,
                  Gachibowli, Hyderabad, Rangareddi, Telangana, India, 500032
                </span>
              </h4>
              {/* <p className="text-white lh-sm mb-35 ">
                <Link
                  href="mailto:info@pistar.tech"
                  className="d-flex align-items-center"
                >
                  <Image
                    src={icon_1}
                    alt="icon"
                    className="lazy-img icon me-3"
                  />
                  info@pistar.tech 
                </Link> <br />
                <Link href="tel:+919888912909" className="d-flex">
                    <Image
                      src={icon_2}
                      alt="icon"
                      className="lazy-img icon me-3"
                    />
                    +91 9908127810
                  </Link>
              </p> */}
            </div>
            <div className="col-xl-3 col-md-3 col-sm-4 mb-20">
              <h5 className="footer-title">Tech Solutions</h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <Link href="/">Foot Systems Podiatry</Link>
                </li>
                <li>
                  <Link href="/product/podiascanner">Podiascanner Mat</Link>
                </li>
                <li>
                  <Link href="/product/footscan">Foot Scan With Podiascan</Link>
                </li>
                <li>
                  <Link href="/product/pressure-mat">Pressure Mat</Link>
                </li>
                <li>
                  <Link href="/product/foot-pressure-mapping">Foot Pressure Mapping</Link>
                </li>
                <li>
                  <Link href="/product/diabetic-foot-care">Diabetic Foot Care</Link>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-md-2 col-sm-4 mb-20">
              <h5 className="footer-title">About</h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/article">Article</Link>
                </li>
                {/* <li>
                  <Link href="/internship">Internship Program</Link>
                </li> */}
              </ul>
            </div>
            <div className="col-xl-2 col-md-2 col-sm-4 mb-20">
              <h5 className="footer-title">Company</h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <Link href="/our-company">Our Company</Link>
                </li>
                <li>
                  <Link href="/leadership">Leadership</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bottom-footer">
          <div className="row align-items-center">
            <div className="col-lg-4 order-lg-last mb-15">
              <div
                className="footer-newsletter float-xl-end"
                style={{ zIndex: "1000000000" }}
              >
                {/* social link */}
                <ul className="style-none d-flex align-items-center social-icon">
                  <FooterSocial />
                </ul>
                {/* social link */}
                {/* <h5 className="footer-title">Subscribe Newsletter</h5>
                <Newsletter /> */}
              </div>
            </div>
            <div className="col-lg-8 order-lg-first mb-15">
              <div className="d-xl-flex align-items-center justify-content-between">
                <div className="copyright me-xl-4 lg-mt-10 order-lg-first">
                  Copyright &#169; 2023 - {new Date().getFullYear()} Pistar
                  Tech.
                </div>
                <ul className="style-none bottom-nav d-flex flex-wrap justify-content-center justify-content-lg-start order-lg-last">
                  <li>
                  <Link
                  href="mailto:info@pistar.tech"
                >
                  info@pistar.tech 
                </Link>
                  </li>
                  <li>
                  <Link href="tel:9908127810">
                    +91 9908127810
                  </Link>
                  </li>
                  {/* <li>
                    <Link href="#">Privacy & Terms</Link>
                  </li>
                  <li>
                    <Link href="#">Cookies</Link>
                  </li>
                  <li>
                    <Link href="#">Contact Us</Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default FooterOne;
