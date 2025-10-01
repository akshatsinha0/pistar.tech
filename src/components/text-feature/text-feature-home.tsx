import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import CounterUp from "../common/counter-up";
import bg_image from "@/assets/images/background/counter_dark_pattern.png";
import bg_image2 from "@/assets/images/background/background-explore.jpg";

const backImg = {
  backgroundImage: `url('${bg_image.src}')`,
  backgroundSize: "cover,auto",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundColor: "#292e31",
};
const backImg2 = {
  backgroundImage: `url('${bg_image2.src}')`,
  backgroundSize: "cover,auto",
  backgroundPosition: "center",
  backgroundAttachment: "local",
  backgroundColor: "#292e31",
};

// counter block
function CounterBlock({
  num,
  text,
  title,
  prev_text,
  delay,
  decimal = false,
}: {
  num: number;
  text: string;
  title: string;
  delay?: string;
  prev_text?: string;
  decimal?: boolean;
}) {
  return (
    <div
      className="counter-block-two mt-35 mb-35 wow fadeInUp"
      data-wow-delay={`0.${delay}s`}
    >
      <div className="main-count fw-500 d-flex" style={{ color: "#62c087" }}>
        {prev_text && prev_text}
        <span className="counter">
          <CounterUp number={num} text={text} decimal={decimal} />
        </span>
      </div>
      <p className="m0 text-md text-white" style={{width:"80%"}}>{title}</p>
    </div>
  );
}

const TextFeatureHome = ({ style_2 = false }: { style_2?: boolean }) => {
  return (
    <>
      {!style_2 && (
        <div
          className="text-feature-one service-details pt-150 lg-pt-100 pb-150 lg-pb-100"
          style={backImg2}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 wow fadeInLeft">
                <div className="title-one details-meta">
                  <div className="upper-title">About Us</div>
                  <h3>
                    Transforming Foot Care with Cutting-Edge Pressure Analysis
                    Technology
                  </h3>
                </div>
                <p className="text-lg">
                  PiStarTech Private Limited develops innovative solutions like
                  the Diabetic PodiaScan Mat (Podiascanner Mat), providing precise
                  plantar pressure analysis for improved foot health
                  diagnostics. Our technology offers a reliable, cost-effective
                  tool to support medical professionals and enhance patient care
                  through accurate, real-time data.
                </p>
                <div className="d-inline-flex flex-wrap align-items-center">
                  <Link href="/about-us" className="btn-four mt-15 me-4">
                    More About Us
                  </Link>
                  {/* <Link href="/contact" className="btn-three icon-link mt-15">
                    <span>Request a Callback</span>
                    <Image src={icon} alt="icon" className="lazy-img icon ms-1"/>
                  </Link> */}
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 wow fadeInRight">
                {/* <Image src={ab} alt="About us" className="w-100"></Image> */}
                <div className="media-list-item ms-auto pe-xxl-5 pe-4 ps-xxl-5 ps-4 pb-35 md-mt-60 d-flex align-items-end">
                  <ul className="style-none">
                    <li>IT Consulting</li>
                    <li>Workforce Solutions </li>
                    <li>Digital Growth Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {style_2 && (
        <div 
        style={backImg}
        // style={{background:"#292e31"}}
        >
          <div className="container">
            <div className="counter-wrapper pt-80 pb-80 lg-mt-20 lg-mb-20">
              <div className="row">
                <div className="title-one details-meta">
                  {/* <div className="upper-title">About Us</div> */}
                  <h2 style={{ color: "#62c087" }}>By the Numbers</h2>
                </div>
                <div className="col-md-4 col-6">
                  <CounterBlock num={28} text="M+" title="Annual number of people in the India who develop pressure ulcers." />
                </div>
                <div className="col-md-4 col-6">
                  <CounterBlock
                    num={1.8}
                    text="M"
                    title="Number of Hospital Acquired Pressure Injuries (HAPIs) related patient deaths in the India per year."
                    // prev_text="$"
                    delay="1"
                    decimal={true}
                  />
                </div>
                <div className="col-md-4 col-6">
                  <CounterBlock
                    num={20}
                    text="%"
                    title="Of HAPIs are attributed to the operating room."
                    prev_text="~"
                    delay="2"
                  />
                </div>
                {/* <div className="col-md-3 col-6">
                  <CounterBlock
                    num={6}
                    text="+"
                    title="Global Delivery Center"
                    delay="3"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TextFeatureHome;
