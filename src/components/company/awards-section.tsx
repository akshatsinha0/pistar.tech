import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import awardsimg from "@/assets/images/company/awards/talentlinkedin.svg";
import awardsimg2 from "@/assets/images/company/awards/grat-work.jpg";
import awardsimg3 from "@/assets/images/company/awards/indian-achive-logo.png";
import cert1 from "@/assets/pdf/certificate_img1.jpg";
import award from "@/assets/pdf/ihw_award.jpg";
import iso from "@/assets/pdf/iso.jpg";
// import pdf from "@/assets/pdf/certificate.pdf";
import icon_10 from "@/assets/images/icon/icon_81.svg";
import icon_11 from "@/assets/images/icon/icon_82.svg";
import icon_12 from "@/assets/images/icon/icon_83.svg";
import icon_13 from "@/assets/images/icon/icon_84.svg";
import ils_icon from "@/assets/images/assets/ils_03.svg";
import SideBar from "./side-bar";

// CardItem
function CardItem({
  icon,
  link,
  title,
  subtitle,
}: {
  icon: StaticImageData;
  link:string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="card-style-sixteen text-center mt-40">
      <div className=" m-auto  d-flex align-items-center justify-content-center">
        <Link href={link} className="w-50" target="_blank"  rel="noopener noreferrer"> 
          <Image src={icon} alt="icon" layout="responsive" className="lazy-img" />
        </Link>
      </div>
      {/* <h4 className="fw-bold mt-35 lg-mt-30 mb-15">{title}</h4> */}
      {/* <p className="m0">{subtitle}</p> */}
    </div>
  );
}
// style
const imgStyle = {
  height: "auto",
};
const AwardsSection = () => {
  return (
    <div className="service-details mt-80 lg-mt-80">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12 col-lg-12">
            <div className="details-meta ps-xxl-5 ps-xl-3">
              <h2>Acheivements!</h2>
              <p>
                We aspire to be the visionary of a future where the seamless
                integration of unparalleled talent and cutting-edge technology
                not only redefines success for businesses but sets an entirely
                new standard for global excellence
              </p>
              <div className="line-wrapper pb-30 mt-60 lg-mt-40 mb-70 lg-mb-40">
                <div className="row">
                  <div className="col-md-4 wow fadeInUp">
                    <CardItem
                      link={'/pdf/certificate.pdf'}
                      icon={cert1}
                      title="Collect Doc"
                      subtitle="We collect require documents & send for check"
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                    <CardItem
                    link={'/pdf/ihw_award.pdf'}
                      icon={award}
                      title="Check & Finalize"
                      subtitle="We check the documents & send for final approval"
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                    <CardItem
                    link={'/pdf/iso.pdf'}
                      icon={iso}
                      title="Approved"
                      subtitle="After approve you ready to use your accounts"
                    />
                  </div>
                </div>
              </div>
              {/* <div className="img-meta mb-60 lg-mb-40">
                <Image src={service_img} alt="service_img" className="lazy-img w-100 rounded-4" 
                style={imgStyle}/>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
