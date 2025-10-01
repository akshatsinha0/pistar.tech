import HomeTwoBlogs from "@/components/blogs/home-2-blogs";
import ClintLogo from "@/components/clint-logo/logo";
import FancyBannerOne from "@/components/fancy-banner/fancy-banner-one";
import FancyBannerTwo from "@/components/fancy-banner/fancy-banner-two";
import FaqSectionOne from "@/components/faq/faq-section-one";
import FeedbackOne from "@/components/feedback/feedback-one";
import HeroBannerTwo from "@/components/hero-banner/hero-banner-two";
import HowWeDo from "@/components/home-data/how-we-do";
import StaffingSolutions from "@/components/home-data/staffing-solutions";
import WhatsNew from "@/components/home-data/whats-new";
import CeoData from "@/components/leadership/ceo";
import PartnersLogos from "@/components/partners/partners-logo";
import TabsData from "@/components/tabs/tabs";
import TeamSectionOne from "@/components/team/team-section-one";
import TextFeatureHome from "@/components/text-feature/text-feature-home";
import TextFeatureNine from "@/components/text-feature/text-feature-nine";
import TextFeatureOne from "@/components/text-feature/text-feature-one";
import FooterOne from "@/layout/footer/footer-one";
import Header from "@/layout/header/Header";
import Wrapper from "@/layout/wrapper";
import type { Metadata } from "next";
import Image from "next/image";
import logo from "@/assets/images/logo/logo.png";
import HeroVideoOne from "@/components/hero-banner/hero-video-one";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import FancyBannerFive from "@/components/fancy-banner/fancy-banner-five";
import FancyBannerFour from "@/components/fancy-banner/fancy-banner-four";
import FancyBannerSix from "@/components/fancy-banner/fancy-banner-six";
import BlockFeatureSeven from "@/components/block-feature/block-feature-seven";
import BlockFeatureThree from "@/components/block-feature/block-feature-three";
import mat1 from "@/assets/images/pistar/1.png";
import FancyVideo from "@/components/fancy-banner/fancy-video";
import PortfolioTwo from "@/components/portfolio/portfolio-two";
import ContactArea from "@/components/contact/contact-area";
import ContactForm from "@/components/forms/contact-form";
import icon_1 from "@/assets/images/icon/icon_90.svg";
import icon_2 from "@/assets/images/icon/icon_91.svg";
import icon_3 from "@/assets/images/icon/icon_92.svg";
import Link from "next/link";
import bg_image2 from "@/assets/images/background/counter_dark_pattern.png";
import bg_image1 from "@/assets/images/background/background-explore.jpg";
import img4 from "@/assets/images/media/doctor.jpg";
import mat from "@/assets/images/pistar/1.png";
import smartchair1 from "@/assets/images/pistar/chair.png";
import AwardsSection from "@/components/company/awards-section";
import TeamTwoArea from "@/components/team/team-v2-area";
import TeamOneArea from "@/components/team/team-v1-area";
import TeamThreeArea from "@/components/team/team-v3-area";
import TextFeatureSeven from "@/components/text-feature/text-feature-seven";
import TextFeatureEight from "@/components/text-feature/text-feature-eight";
import TextFeatureTen from "@/components/text-feature/text-freature-ten";
import PopUpModal from "@/components/common/popup-model";
import ImgPopUp from "@/components/common/img-popup";

const backImg1 = {
  backgroundImage: `url('${bg_image1.src}')`,
  backgroundSize: "cover,auto",
  backgroundPosition: "center",
  backgroundAttachment: "local",
  backgroundColor: "#292e31",
};

const backImg2 = {
  backgroundImage: `url('${bg_image2.src}')`,
  backgroundSize: "auto",
  backgroundPosition: "center",
  backgroundAttachment: "local",
  backgroundColor: "#292e31",
};

export const metadata = {
  title: "Advanced Foot Systems Podiatry | Diabetic Foot Care Solutions",
  description:
    "Discover PiStarTech flexible pressure sensor technology designed for diabetic foot care, providing accurate podiatry insights to enhance foot health and prevent complications.",
  keywords:
    "foot systems podiatry, flexible pressure sensor, Diabetic Foot Care ",
  openGraph: {
    title: "Advanced Foot Systems Podiatry | Diabetic Foot Care Solutions",
    description:
      "Discover PiStarTech flexible pressure sensor technology designed for diabetic foot care, providing accurate podiatry insights to enhance foot health and prevent complications.",
    images: [
      {
        url: "@/assets/images/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Pistar logo Image",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <Header />
        <main>
          <HeroBannerTwo />

          <div className="fancy-banner-two pt-80 lg-pt-80 pb-80 lg-pb-60 service-details">
            <div className="container">
              <div className="wow fadeInUp">
                <div className="row">
                  <div className="col-lg-4 col-md-6 m-auto wow fadeInLeft  order-last order-md-first">
                    <div className="media-wrapper md-mt-60">
                      <Image
                        src={smartchair1}
                        alt="screen"
                        className="lazy-img"
                        layout="responsive"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 wow fadeInRight">
                    <div className="title-three mb-35 md-mb-20 details-meta">
                      <h2>Why Smart Chair?</h2>
                    </div>
                    <p className="text-lg mt-40 lg-mt-30 mb-30">
                      In today&apos;s sedentary lifestyle, a person spends a
                      substantial amount of time in a sitting position. Having a
                      poor sitting posture can put more stress on specific
                      muscles and joints, forcing them to be overworked and
                      causing them to fatigue which results in back pains. This
                      is already leading to widespread chronic back pain and
                      other related health issues, particularly in young adults.
                      <br /> <br />
                      According to the estimates, 60% of the Indian population
                      experiences back pain at some time in their lives. It is
                      the third most common reason for a doctor&apos;s visit,
                      and as we all know that &quot;Prevention is better than cure&quot;,
                      We present to you, a patented smart seating solution
                      called- smart chair which is the best preventive measure
                      for all types of pains that may occur to incorrect seating
                      postures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fancy-banner-two pt-80 lg-pt-80 pb-80 lg-pb-60 service-details" style={{ background: "rgb(41, 46, 49)" }}>
            <div className="container">
              <div className="wow fadeInUp">
                <div className="row">
                  <div className="col-lg-6 wow fadeInRight">
                    <div className="title-three mb-35 md-mb-20 details-meta">
                      <h2 style={{ color: "white" }}>Why is the Podiascanner Mat so easy to adopt?</h2>
                    </div>
                    <p className="text-lg mt-40 lg-mt-30 mb-30" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                      The <b>Podiascanner Mat</b> from PiStarTech Private Limited is designed for easy adoption into any clinical setting. Its portable, flexible design allows it to seamlessly integrate into existing medical workflows without the need for extensive training or changes to the current setup. The device is user-friendly and highly adaptable, making it suitable for clinics and hospitals of any size. 
                      <br /> <br />
                      Since it provides instant, digital plantar pressure analysis in just 5 seconds, healthcare professionals can easily incorporate the Podiascanner Mat into their patient evaluation process, streamlining diagnosis and enhancing accuracy without interrupting day-to-day operations. Its affordability and ease of use make it accessible to a wide range of practitioners, ensuring they can upgrade to modern foot analysis technology with minimal effort.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-8 m-auto wow fadeInLeft">
                    <div className="media-wrapper md-mt-60">
                      <Image
                        src={mat1}
                        alt="Podiascanner Mat"
                        className="lazy-img"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ClintLogo />

          <PartnersLogos />

          <PortfolioTwo />

          <AwardsSection />
          
          <ImgPopUp />
        </main>

        <FooterOne />
      </div>
    </Wrapper>
  );
}