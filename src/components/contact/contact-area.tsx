import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import icon_1 from "@/assets/images/icon/icon_90.svg";
import icon_2 from "@/assets/images/icon/icon_91.svg";
import icon_3 from "@/assets/images/icon/icon_92.svg";
import icon_4 from "@/assets/images/assets/screen_19.png";
import ContactForm from "../forms/contact-form";
import LocationTabsData from "../tabs/location-taps";
import shape from "@/assets/images/background/circle.jpg";
import bg_image2 from "@/assets/images/background/contactbanner.jpg";

const backImg2 = {
  backgroundImage: `url('${bg_image2.src}')`,
  backgroundSize: "auto",
  backgroundPosition: "center",
  backgroundAttachment: "local",
  backgroundColor: "#292e31",
};

// address block item
function AddressBlock({
  icon,
  title,
  subtitle,
}: {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="address-block-one text-center mb-40 wow fadeInUp">
      <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <h5 className="title">{title}</h5>
      <p dangerouslySetInnerHTML={{ __html: subtitle }}></p>
    </div>
  );
}

const ContactArea = () => {
  return (
    <>
    <div className="block-feature-eleven position-relative contact-us-section pt-80 lg-pt-80 pb-80 lg-pb-80" style={backImg2}>
      <div className="container">
        <div className="position-relative">
          <div className="row">
            {/* Location data import */}
            <LocationTabsData />
            {/* Location data import */}
          </div>

          <div className="bg-wrapper mt-80 lg-mt-40">
            <div className="row">
              <div className="col-lg-5 d-flex">
                <div className="d-flex flex-column flex-lg-column-reverse justify-content-center">
                  <div className="row">
                    <div className="col-md-8 col-6 me-auto ms-auto">
                      {/* <Image
                        src={icon_4}
                        alt="icon"
                        layout="responsive"
                        className="lazy-img me-auto ms-auto"
                      /> */}
                    </div>
                  </div>
                  <div className="title-one text-center text-lg-start md-mt-20 mb-70 md-mb-30">
                    <h2 className="text-white">Let&nbsp;s Connect</h2>
                    <p className="text-lg md-pb-20 text-white">
                      Please complete the form for all inquiries. Should you
                      encounter any issues with our products, feel free to
                      contact us <a href="mailto:info@pistar.tech" style={{color:"#62c087"}}>info@pistar.tech</a>
                    </p>
                    <p className="text-white lh-sm mb-35 ">
                <Link
                  href="mailto:info@pistar.tech"
                  className="d-flex align-items-center"
                >
                  <Image
                    src={icon_3}
                    alt="icon"
                    className="lazy-img icon me-3"
                  />
                  info@pistar.tech 
                </Link> <br />
                <Link href="tel:9908127810" className="d-flex">
                    <Image
                      src={icon_2}
                      alt="icon"
                      className="lazy-img icon me-3"
                    />
                    +91 9908127810
                  </Link> <br/>
                  <Link href="tel:9908127810" className="d-flex">
                    <Image
                      src={icon_1}
                      alt="icon"
                      className="lazy-img icon me-3"
                    />
                    IIIT-H Foundation, Desk B70, Vindhya C5, IIIT-Hyd Campus, Survey#25, Gachibowli, Hyderabad, Rangareddi, Telangana, India, 500032
                  </Link>
              </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="form-style-one ps-xl-5">
                  {/* form start */}
                  <ContactForm />
                  {/* form end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Image src={shape} alt="shape" layout="responsive" className="lazy-img shapes shape_01" /> */}
    </div>

    </>
  );
};

export default ContactArea;
