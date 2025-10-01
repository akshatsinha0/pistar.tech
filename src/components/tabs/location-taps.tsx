import React from "react";
import Link from "next/link";

import Image, { StaticImageData } from "next/image";
// internal
import icon_1 from "@/assets/images/icon/icon_90.svg";
import icon_2 from "@/assets/images/icon/icon_91.svg";
import icon_3 from "@/assets/images/icon/icon_92.svg";
import icon_4 from "@/assets/images/assets/ils_07.svg";
import ContactForm from "../forms/contact-form";

const maxcontent = {
  width: "fit-content",
  "border-radius": "30px",
};

function AddressBlock({
  icon,
  title,
  subtitle,
  para,
}: {
  icon: StaticImageData;
  title: string;
  subtitle: string;
  para:string;
}) {
  return (
    <div className="address-block-one text-center mb-40">
      <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <h5 className="title">{title}</h5>
      <p dangerouslySetInnerHTML={{ __html: subtitle }}></p>
      <h5 className="title">{para}</h5>
    </div>
  );
}

const LocationTabsData = () => {
  return (
    <>
      {/* starts from here  */}
      {/* <div className="text-feature-one service-details pt-80 lg-pt-80">
        <div className="container">
          <div className="row align-items-center details-meta">
            <div className="title-one">
              <h3 className="text-center">CGB offices around the world</h3>
              <p className="text-lg text-center px-4 mb-35 md-mb-30">
                Join our global team with offices in vibrant cities worldwide
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* Ends from here  */}
      <div className="faq-section-three  pb-50 lg-pb-80 ">
        <div className="container">
          <div className="tab-content mt-20 lg-mt-40">
            {/* tab 1start form her  */}
            <div
              className="tab-pane fade show active"
              id="nav-oracle"
              role="tabpanel"
              tabIndex={0}
            >
              <div className="accordion accordion-style-one" id="accordionOne">
                <div className="row justify-content-center">
                  <div className="col-md-3 pt-30 wow fadeInUp">
                    <AddressBlock
                      icon={icon_1}
                      title="Visit Us"
                      subtitle="IIIT-H Foundation, Desk B70, Vindhya C5, IIIT-Hyd Campus, Survey#25, Gachibowli, Hyderabad, Rangareddi, Telangana, India, 500032"
                      para="Hyderabad"
                    />
                  </div>
                  <div className="col-md-3 pt-30 wow fadeInUp">
                    <AddressBlock
                      icon={icon_1}
                      title="Branch Address"
                      subtitle="VIT TBI, Technology Tower, Vellore Institute of Technology, Vellore, Tamil Nadu 632014"
                      para="Vellore"
                    />
                  </div>
                  <div className="col-md-3 pt-30 wow fadeInUp">
                    <AddressBlock
                      icon={icon_2}
                      title="Call Us"
                      subtitle="Something important? We are just a call away! "
                      para="+91 9908127810"
                    />
                  </div>
                  <div className="col-md-3 pt-30 wow fadeInUp">
                    <AddressBlock
                      icon={icon_3}
                      title="Contact Us "
                      subtitle="If there is anything we can help you with just drop a mail at "
                      para="info@pistar.tech"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* tab 1end form her  */}

            {/* tab 5end form her  */}
            {/* <div
              className="tab-pane fade"
              id="nav-devops"
              role="tabpanel"
              tabIndex={0}
            >
              <div className="accordion accordion-style-one" id="accordionSix">
                <div className="row align-items-center">
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationTabsData;
