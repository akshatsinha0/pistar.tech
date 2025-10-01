import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import Image, { StaticImageData } from "next/image";
import FooterOne from "@/layout/footer/footer-one";
import about_bg from "@/assets/images/banners/diaspmat.jpg";
import Link from "next/link";
import ProductDetailsArea from "@/components/shop/product-details/product-details-area";
import product_data from "@/data/product-data";
import chair from "@/assets/images/pistar/chair.png";

export const metadata: Metadata = {
  title: "Smart Chair - Pistar Tech",
  description: "Smart Chair by PiStarTech - Advanced Seating for Posture & Health Monitoring",
  keywords: "Smart Chair, Posture Monitoring, Health Technology",
};

function FeatureItem({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="col-lg-6 mb-50">
      <div className="card-style-nine h-100" style={{ background: "#f8f9fa", padding: "40px 30px" }}>
        <h3 className="fw-bold mb-30 text-dark">{title}</h3>
        <ul className="style-none">
          {items.map((item, index) => (
            <li key={index} className="d-flex align-items-start mb-15">
              <div className="icon-check me-3 mt-1">
                <i className="bi bi-check-circle-fill" style={{ color: "#28a745", fontSize: "1.2rem" }}></i>
              </div>
              <span className="text-dark">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const SmartChairPage = () => {
  const product = product_data[1];
  
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <HeaderTwo />
        <main>
          <BreadcrumbOne
            title="Smart Chair"
            subtitle="Smart Chair by PiStarTech - Advanced Seating for Posture & Health Monitoring"
            page="Smart Chair"
            maincls="bg-bottom"
            bg_img={about_bg}
            style_2={true}
          />

          <ProductDetailsArea product={product} />

          <div className="fancy-banner-two pt-80 lg-pt-80 pb-80 lg-pb-60 service-details" style={{ background: "#f8f9fa" }}>
            <div className="container">
              <div className="wow fadeInUp">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <FeatureItem
                        title="Key Features at a Glance"
                        items={[
                          "Real-time posture analysis and feedback",
                          "Durable and ergonomically designed for extended use",
                          "Easy-to-integrate with health tracking systems",
                          "Powered by innovative flex sensor technology",
                          "Portable and lightweight for enhanced mobility"
                        ]}
                      />
                      <FeatureItem
                        title="The SMART CHAIR: Where Technology Meets Wellness"
                        items={[
                          "Sitting straight",
                          "Left recline",
                          "Right recline",
                          "Slouching",
                          "Leaning backward",
                          "Crossing the left leg",
                          "Crossing the right leg"
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fancy-banner-two pt-80 lg-pt-80 pb-80 lg-pb-60 service-details" style={{ background: "rgb(10,14,20)", color: "white" }}>
            <div className="container">
              <div className="wow fadeInUp">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="title-three mb-35 md-mb-20">
                      <h2 className="text-white">Introducing the Posture-perfect Smart Chair — Elevating Health and Comfort</h2>
                    </div>
                    <p className="text-lg mt-40 lg-mt-30 mb-30 text-white">
                      Sitting may be a part of our everyday lives, but bad posture doesn't have to be. At PiStarTech, we present the revolutionary Posture-perfect Smart Chair, an intelligent solution to ensure your sitting habits are as healthy as they are comfortable.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <div className="video-wrapper">
                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe 
                          className="embed-responsive-item" 
                          src="https://www.youtube.com/embed/GjmX4fUCaDk" 
                          title="Smart Chair & PodiaScanner Mat Revolution"
                          allowFullScreen
                          style={{ width: "100%", height: "300px", borderRadius: "10px" }}
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="faq-section-one service-details pt-80 pb-80 bg-white">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 details-meta">
                  <div className="title-one mb-40 lg-mb-20">
                    <h3>Specifications</h3>
                  </div>
                  <div className="specifications-table">
                    <div className="spec-header">
                      <div className="spec-col-left" style={{ color: "#28a745", fontWeight: "600", paddingBottom: "20px" }}>Technology</div>
                      <div className="spec-col-right" style={{ color: "#28a745", fontWeight: "600", paddingBottom: "20px" }}>Piezoresistive</div>
                    </div>
                    <div className="spec-row" style={{ backgroundColor: "white" }}>
                      <div className="spec-col-left" style={{ paddingTop: "15px", paddingBottom: "15px" }}>Number of sensing pixels on seat</div>
                      <div className="spec-col-right" style={{ paddingTop: "15px", paddingBottom: "15px" }}>512</div>
                    </div>
                    <div className="spec-row" style={{ backgroundColor: "#f8f9fa" }}>
                      <div className="spec-col-left" style={{ paddingTop: "15px", paddingBottom: "15px" }}>Number of sensing pixels on backrest</div>
                      <div className="spec-col-right" style={{ paddingTop: "15px", paddingBottom: "15px" }}>512</div>
                    </div>
                    <div className="spec-row" style={{ backgroundColor: "white" }}>
                      <div className="spec-col-left" style={{ paddingTop: "15px", paddingBottom: "15px" }}>Sensors area on seat</div>
                      <div className="spec-col-right" style={{ paddingTop: "15px", paddingBottom: "15px" }}>48 cm x 48 cm</div>
                    </div>
                    <div className="spec-row" style={{ backgroundColor: "#f8f9fa" }}>
                      <div className="spec-col-left" style={{ paddingTop: "15px", paddingBottom: "15px" }}>Sensor area on backrest</div>
                      <div className="spec-col-right" style={{ paddingTop: "15px", paddingBottom: "15px" }}>46 cm x 48 cm</div>
                    </div>
                    <div className="spec-row" style={{ backgroundColor: "white" }}>
                      <div className="spec-col-left" style={{ paddingTop: "15px", paddingBottom: "15px" }}>Thickness</div>
                      <div className="spec-col-right" style={{ paddingTop: "15px", paddingBottom: "15px" }}>0.4 mm</div>
                    </div>
                    <div className="spec-row" style={{ backgroundColor: "#f8f9fa" }}>
                      <div className="spec-col-left" style={{ paddingTop: "15px", paddingBottom: "15px" }}>Material</div>
                      <div className="spec-col-right" style={{ paddingTop: "15px", paddingBottom: "15px" }}>PVC</div>
                    </div>
                    <div className="spec-row" style={{ backgroundColor: "white" }}>
                      <div className="spec-col-left" style={{ paddingTop: "15px", paddingBottom: "15px" }}>Connectivity</div>
                      <div className="spec-col-right" style={{ paddingTop: "15px", paddingBottom: "15px" }}>Bluetooth</div>
                    </div>
                    <div className="spec-row" style={{ backgroundColor: "#f8f9fa" }}>
                      <div className="spec-col-left" style={{ paddingTop: "15px", paddingBottom: "15px" }}>Weight range</div>
                      <div className="spec-col-right" style={{ paddingTop: "15px", paddingBottom: "15px" }}>10 kg - 120 kg</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default SmartChairPage;