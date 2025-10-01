import React from "react";
import Image, { StaticImageData } from "next/image";
// internal
import icon_1 from "@/assets/images/icon/icon_36.svg";
import icon_2 from "@/assets/images/icon/icon_37.svg";
import icon_3 from "@/assets/images/icon/icon_38.svg";
import screen_1 from "@/assets/images/assets/screen_08.svg";
import screen_2 from "@/assets/images/assets/screen_09.svg";
import screen_3 from "@/assets/images/assets/screen_10.svg";
import img1 from "@/assets/images/media/detailed-planatar-pressure.png";
import img2 from "@/assets/images/media/support-health-care-providers.png";
import img3 from "@/assets/images/media/precise-footpain-diagnosis.png";
import shape from "@/assets/images/shape/shape_13.svg";

// image style

// card item
type IProps = {
  icon: StaticImageData;
  title: string;
  desc: string;
  bg_img: StaticImageData;
};
function CardItem({ icon, title, desc, bg_img }: IProps) {
  return (
    <div className="card-style-nine vstack tran3s w-100 mt-30 bgcolor2">
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div
          className={`icon tran3s rounded-circle d-flex align-items-center justify-content-center order-last`}
        >
          <Image src={icon} alt="icon" className="lazy-img" />
        </div>
        <h3
          className="fw-bold m0 text-dark order-first text-white"
          style={{ width: "86%" }}
        >
          {title}
        </h3>
      </div>
      <p className="mt-35 lg-mt-30 mb-60 lg-mb-40 paracolor">{desc}</p>
      <Image
        src={bg_img}
        alt="bg-img"
        className="lazy-img mt-auto me-auto ms-auto w-100"
        layout="responsive"
      />
    </div>
  );
}

const BlockFeatureSeven = () => {
  return (
    <div className="block-feature-seven position-relative pt-150 lg-pt-80 pb-150 lg-pb-80 service-details ">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-xl-11 wow fadeInLeft">
              <div className="title-one pe-xxl-5 mb-50 lg-mb-30 details-meta">
                <h3 className="text-dark">Executive Summary</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 d-flex wow fadeInUp">
              <CardItem
                icon={icon_1}
                title="Support for Healthcare Providers"
                desc="The Podiascanner Mat provides valuable assistance to healthcare professionals at various stages of clinical assessment and treatment. It identifies both normal and abnormal foot postures, delivering data that improves diagnostic accuracy. By capturing static podiatric pressure patterns (SPPP) when standing and dynamic podiatric pressure patterns (DPPP) while walking, it helps to substantiate clinical findings with statistical evidence and supports patient recovery monitoring after injuries or surgeries."
                bg_img={img2}
              />
            </div>
            <div className="col-lg-6 d-flex wow fadeInUp" data-wow-delay="0.1s">
              <CardItem
                icon={icon_2}
                title="Meeting the Need for Precise Foot Pain Diagnosis"
                desc="Foot and ankle pain is a widespread issue, with studies showing that one in three people experience such pain at some point. Traditional diagnostic methods depend significantly on the doctor's experience and often use outdated tools like ink-based harris mats, which lack reliability. Expensive digital foot scanning systems are available to only a small fraction of doctors. The Podiascanner Mat offers an affordable, automated solution that provides thorough plantar pressure analysis in just five seconds, enabling precise diagnoses and tailored treatment plans."
                bg_img={img3}
              />
            </div>
            <div className="col-12 d-flex wow fadeInUp" data-wow-delay="0.2s">
              <div className="card-style-nine vstack tran3s w-100 mt-30 bgcolor2">
                <div className="row align-items-end">
                  <div className="col-lg-6">
                    {/* <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                      <Image src={icon_3} alt="" className="lazy-img" />
                    </div>
                    <h3 className="fw-bold mt-30 lg-mt-20 text-dark">
                      Detailed Plantar Pressure Analysis
                    </h3> */}
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                      <div
                        className={`icon tran3s rounded-circle d-flex align-items-center justify-content-center order-last`}
                      >
                        <Image src={icon_3} alt="icon" className="lazy-img" />
                      </div>
                      <h3
                        className="fw-bold m0 text-white order-first"
                        style={{ width: "86%" }}
                      >
                        Detailed Plantar Pressure Analysis
                      </h3>
                    </div>
                    <p className="mt-35 lg-mt-30 mb-40 paracolor">
                      Our solution provides extensive plantar pressure analysis,
                      or pedobarography, to aid in diagnosing and treating foot
                      conditions. By assessing pressure distribution during both
                      static and dynamic activities, the Podiascanner Mat helps to
                      identify foot types, high-pressure zones, and potential
                      problems such as calluses or ulcers. This evidence-based
                      approach not only informs doctors but also educates
                      patients about their conditions and supports personalized
                      treatment strategies.
                    </p>
                  </div>
                  <div className="col-lg-5 ms-auto">
                    <Image
                      src={img1}
                      alt=""
                      className="lazy-img mt-auto me-auto ms-auto w-100"
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
        </div>
      </div>
    </div>
  );
};

export default BlockFeatureSeven;
