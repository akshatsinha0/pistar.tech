import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
// import FooterThree from "@/layout/footer/footer-three";
import FooterOne from "@/layout/footer/footer-one";
import about_bg from "@/assets/images/media/Aboutbanner.png";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import shape from "@/assets/images/shape/shape_25.svg";
import TextFeatureOne from "@/components/text-feature/text-feature-one";
import BlockFeatureOne from "@/components/block-feature/block-feature-one";
import TextFeatureThree from "@/components/text-feature/text-feature-three";
import FeedbackOne from "@/components/feedback/feedback-one";
import PartnersSliderOne from "@/components/partners/partners-slider-one";
import TeamSectionThree from "@/components/team/team-section-three";
import HomeFourBlogs from "@/components/blogs/home-4-blogs";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import TextFeatureHome from "@/components/text-feature/text-feature-home";
import TextFeatureAbout from "@/components/text-feature/text-feature-about";
import BlockFeatureAbout from "@/components/block-feature/block-feature-about";
import DottedMap from "@/components/map/maps";
import HowWeDo from "@/components/home-data/how-we-do";
import logo_2 from "@/assets/images/logo/logome.png";
import HeroVideoTwo from "@/components/hero-banner/hero-video-two";
import FaqSolutionsThree from "@/components/faq/faq-section-three";

export const metadata = {
  title: "About PiStar | Foot Scan with High-Accuracy Sensors",
  description:"Learn about PiStar's innovative Foot Scan Podiascan and high-accuracy pressure sensors, dedicated to providing precise podiatric insights for optimal foot health.",
  keywords:"Foot Scan (Podiascan), high accuracy pressure sensor",
  openGraph: {
    title: "Advanced Foot Systems Podiatry | Diabetic Foot Care Solutions",
    description: "Learn about PiStar's innovative Foot Scan Podiascan and high-accuracy pressure sensors, dedicated to providing precise podiatric insights for optimal foot health.",
    images: [
      {
        url: "@/assets/images/logo/logo.png", // URL of the image
        width: 1200, // Optional: specify the width of the image
        height: 630, // Optional: specify the height of the image
        alt: "Pistar logo Image", // Optional: alternative text for the image
      },
    ],
  },
};

const AboutUsPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main className="bgcolor2">
          {/* breadcrumb start */}
            <HeroVideoTwo />
          {/* <BreadcrumbOne
            title="About Us"
            subtitle="Navigating Your Financial Growth With Experience & Insightful Solutions."
            page="About Us"
            bg_img={about_bg}
            style_2={true}
          /> */}
          {/* breadcrumb end */}

          {/* text feature one area start */}
          <TextFeatureAbout />
          {/* text feature one area end */}

          {/* text feature one area start */}
          <TextFeatureAbout style_2={true} />
          {/* text feature one area end */}



          {/* block feature one area start */}
          {/* <BlockFeatureOne style_2={true} /> */}
          {/* block feature one area end */}

          {/* text feature one area start */}
          {/* <TextFeatureThree style_2={true} /> */}
          {/* text feature one area end */}

          {/* <BlockFeatureAbout style_2={true} /> */}

          {/* <HowWeDo /> */}

          {/* feedback one start */}
          {/* <FeedbackOne cls="top-border pt-80 pb-80" /> */}
          {/* feedback one end */}

          {/* partner logo start */}
          <div className="partner-logo-one pt-80 lg-pt-40 pb-80 lg-pb-40">
            <div className="container">
            <div className="title-one details-meta mb-40 lg-mb-10 wow fadeInUp">
                <h3 className="text-white">Supported by: </h3>
              </div>
              <PartnersSliderOne />
            </div>
          </div>
          {/* partner logo end */}

          {/* <FaqSolutionsThree 
                      title="Frequently Asked Questions"
                      para=""
                      page="companyfaq"
          /> */}
          

          {/* team three start */}
          <TeamSectionThree />
          {/* team three end */}

          {/* <div className="partner-logo-one pt-80 lg-pt-40 pb-80 lg-pb-40">
            <div className="container">
              <DottedMap />
            </div>
          </div> */}

          {/* blogs start */}
          {/* <HomeFourBlogs cls="mt-180 lg-mt-80 mb-180 lg-mb-80" /> */}
          {/* blogs end */}

          {/* fancy banner three start */}
          {/* <FancyBannerThree /> */}
          {/* fancy banner three end */}

          {/* news letter start */}
          {/* <NewsletterBanner /> */}
          {/* news letter end */}
        </main>

        {/* footer start */}
        {/* <FooterThree style_2={true} /> */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default AboutUsPage;
