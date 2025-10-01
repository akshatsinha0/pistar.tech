import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import Image, { StaticImageData } from "next/image";
import FooterOne from "@/layout/footer/footer-one";
import about_bg from "@/assets/images/banners/diaspmat.jpg";
import mat0 from "@/assets/images/pistar/2.png";
import mat1 from "@/assets/images/pistar/mat.jpg";
import mat2 from "@/assets/images/pistar/mat1.jpg";
import data from "@/assets/images/pistar/data.jpg";
import Link from "next/link";
import ProductDetailsArea from "@/components/shop/product-details/product-details-area";
import product_data from "@/data/product-data";
import StaffingSolutions from "@/components/home-data/staffing-solutions";

export const metadata: Metadata = {
  title: "Podiascanner Mat - Pistar Tech",
  description:
    "Discover the Podiascanner Mat for precise diabetic foot care and biomechanical analysis. Enhance foot health with cutting-edge technology for early detection.",
  keywords:
    "Podiascanner Mat, FootCare Mat, Advanced Mat, Accurate Foot Pressure, High-resolution sensor mat",
};

function CardItem({
  icon,
  title,
  subtitle,
  li1,
  li2,
  li3,
  li4,
  li5,
  li6,
}: {
  icon?: StaticImageData;
  title: string;
  subtitle?: string;
  li1?: string;
  li2?: string;
  li3?: string;
  li4?: string;
  li5?: string;
  li6?: string;
}) {
  return (
    <div className="card-style-twelve w-100 mt-30">
      <div className="d-flex">
        <h4 className="fw-bold mt-15 mb-15">{title}</h4>
      </div>
      <p className="ps-xl-4 pe-xl-4">{subtitle}</p>
      <ul className="style-none">
        <li>{li1}</li>
        <li>{li2}</li>
        <li>{li3}</li>
        <li>{li4}</li>
        <li>{li5}</li>
        <li>{li6}</li>
      </ul>
    </div>
  );
}

const PodiacannerMat = () => {
  const product = product_data[0];
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <HeaderTwo />
        <main>
          <BreadcrumbOne
            title="Podiascanner Mat"
            subtitle="Podiascanner Mat: Precision Foot Health Monitoring"
            page="Podiascanner Mat"
            maincls="bg-bottom"
            bg_img={about_bg}
            style_2={true}
          />

          <ProductDetailsArea product={product} />

          <div className={`faq-section-one service-details pt-80 pb-80 bg-white`}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 details-meta">
                  <div className="title-one mb-40 lg-mb-20">
                    <h3>Specifications</h3>
                    <p className="text-lg mb-40 lg-mb-20">
                      Need a mat with your own specifications? We will{" "}
                      <b>customize</b> it for you!
                    </p>
                  </div>
                  <table className="table table-bordered">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col" className="fontcolorimp">
                          Features
                        </th>
                        <th scope="col" className="fontcolorimp">
                          FlePS Mat
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="bg-td">Overall Area</td>
                        <td className="bg-td">50 cm x 50 cm</td>
                      </tr>
                      <tr>
                        <td>Sensing Area</td>
                        <td>42 cm x 42 cm</td>
                      </tr>
                      <tr>
                        <td className="bg-td">Number of Sensors</td>
                        <td className="bg-td">1024</td>
                      </tr>
                      <tr>
                        <td>Matrix Topology</td>
                        <td>32 x 32</td>
                      </tr>
                      <tr>
                        <td className="bg-td">Max Weight Range</td>
                        <td className="bg-td">40-120 kg</td>
                      </tr>
                      <tr>
                        <td>Scan Rate</td>
                        <td>20 Hz</td>
                      </tr>
                      <tr>
                        <td className="bg-td">Connection</td>
                        <td className="bg-td">USB Cable</td>
                      </tr>
                      <tr>
                        <td>Operating Temp Range</td>
                        <td>0°C to 50°C</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="d-inline-flex flex-wrap align-items-center">
                    <Link href="/contact" className="btn-four mt-15 me-4">
                      Request for Quotation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fancy-banner-two pt-80 lg-pt-80 pb-80 lg-pb-60 service-details" style={{ background: "#f5f5f5" }}>
            <div className="container details-meta">
              <div className="wow fadeInUp">
                <h3 className="pb-4">Overview</h3>
              </div>
            </div>
          </div>

          <div className="fancy-banner-two pt-80 lg-pt-80 pb-80 lg-pb-60 service-details" style={{ background: "#f5f5f5" }}>
            <div className="container details-meta">
              <div className="wow fadeInUp">
                <div className="row">
                  <div className="col-lg-6 wow fadeInRight order-first order-md-last">
                    <div className="title-three mb-35 md-mb-20">
                      <div>
                        <div className="upper-title d-flex align-items-center">
                          <div className="line-2"></div>Plantar Pressure & Gait Analysis Software
                        </div>
                      </div>
                      <h3>Feature-Rich Software</h3>
                    </div>
                    <p className="text-lg mt-40 lg-mt-30 mb-30">
                      The FlePS Mat comes with comprehensive software that allows users to visualize plantar pressure data with precision. With detailed visualizations, you can make confident, data-backed decisions. The software provides static and dynamic pressure measurement data for foot and gait analysis.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-8 m-auto wow fadeInLeft order-last order-md-first">
                    <div className="media-wrapper md-mt-60 pe-xxl-5 pe-4 ps-xxl-5">
                      <Image
                        src={data}
                        alt="screen"
                        className="lazy-img rounded"
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fancy-banner-two text-feature-seven pt-80 lg-pt-80 pb-80 lg-pb-60 service-details" style={{ background: "#f5f5f5" }}>
            <div className="container details-meta">
              <div className="wow fadeInUp">
                <div className="row">
                  <div className="col-lg-6 wow fadeInRight">
                    <div className="title-three mb-35 md-mb-20">
                      <div>
                        <div className="upper-title d-flex align-items-center">
                          <div className="line-2"></div>Specifications & Performance
                        </div>
                      </div>
                      <h3>Lab-Quality Data in the Field</h3>
                    </div>
                    <p className="text-lg mt-40 lg-mt-30 mb-30">
                      With a robust sensor design, the FlePS Mat delivers accurate, repeatable data. It provides high-speed, high-resolution pressure measurements for human performance testing. The system ensures reliable data collection, even during long-term testing.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-8 m-auto wow fadeInLeft">
                    <div className="media-wrapper md-mt-60 pe-xxl-5 pe-4 ps-xxl-5">
                      <Image
                        src={mat0}
                        alt="screen"
                        className="lazy-img rounded"
                        layout="responsive"
                      />
                    </div>
                  </div>

                  <div className="border-bottom mt-40 pb-50 sm-pb-30">
                    <div className="row">
                      <div className="col-lg-6 d-flex wow fadeInUp">
                        <CardItem
                          title="Key Features"
                          li1="Portable, flexible, and lightweight pressure sensing mat for plantar pressure analysis."
                          li2="Simple and easy to use with a slim convenient design."
                          li3="Provides quantifiable pressure data."
                          li4="Fast and easy setup with USB connection."
                          li5="Most affordable and reliable."
                          li6="Provides static and dynamic pressure measurement data for foot and gait analysis."
                        />
                      </div>
                      <div className="col-lg-6 d-flex wow fadeInUp" data-wow-delay="0.1s">
                        <CardItem
                          title="Applications"
                          li1="Helps in identifying pathologies and making accurate diagnoses."
                          li2="Reduce the incidence of pressure sores or ulcers on feet by analyzing high-pressure points."
                          li3="Identify areas of potential ulcers and calluses."
                          li4="Identify plantar pressure asymmetries between the left and right foot."
                          li5="A screening device for complete plantar pressure analysis."
                          li6="Suggest customized insoles according to the orthotics."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <StaffingSolutions />
        </main>

        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default PodiacannerMat;