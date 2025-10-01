import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import icons from "@/assets/images/icon/icon_09.svg";
import icon_2 from "@/assets/images/icon/icon_10.svg";
import icon_3 from "@/assets/images/icon/icon_11.svg";
import shape from "@/assets/images/shape/shape_05.svg";
import about from "@/assets/images/assets/about.png";
import mission from "@/assets/images/icon/mission.svg";
import vision from "@/assets/images/icon/vision.svg";
import bg_image1 from "@/assets/images/background/contactbanner.jpg";
import img1 from "@/assets/images/media/visionary-future-resize.png";
import img2 from "@/assets/images/media/Picture1_chair.png";
import img3 from "@/assets/images/media/relentless-mission-resize.png";

const backImg1 = {
  backgroundImage: `url('${bg_image1.src}')`,
  backgroundSize: "cover,auto",
  backgroundPosition: "center",
  backgroundAttachment: "local",
  backgroundColor: "#292e31",
};

// card item
function CardItem({
  icon,
  title,
  desc,
  link,
 bg_img,
}: {
  icon: StaticImageData;
  title: string;
  desc: string;
  link: string;
  bg_img: StaticImageData;
}) {
  return (
    <div className="card-style-three d-flex pt-75 lg-pt-40 ">
      {/* <Image src={icon} alt="icon" className="lazy-img icon" /> */}
      <div className="ps-4">
        {/* <h4 className="fw-bold mb-20 text-white">{title}</h4> */}
        <p className="paracolor"> {desc} </p>
        {/* <Link
          href={link}
          className="btn-three icon-link mt-15 md-mb-40 fontcolor"
        >
          <span>Read More</span>
          <Image src={icons} alt="icon" className="lazy-img icon ms-1" />
        </Link> */}
        <Image
        src={bg_img}
        alt="bg-img"
        className="lazy-img mt-auto me-auto ms-auto w-100"
        layout="responsive"
      />
      </div>
    </div>
  );
}

const TextFeatureAbout = ({ style_2 = false }: { style_2?: boolean }) => {
  return (
    <>
      {!style_2 && (
        <div
          className="text-feature-one pt-150 lg-pt-100 pb-150 lg-pb-100  service-details"
          style={backImg1}
        >
          <div className="container">
            <div className="row align-items-center details-meta">
              <div className="col-xl-5 col-lg-6 order-2 order-lg-1 wow fadeInRight">
                <div className="ms-auto pe-xxl-5 pe-4 ps-xxl-5 ps-4 pb-35 md-mt-60 d-flex align-items-end">
                  <Image
                    src={about}
                    alt="cgb aboutus"
                    className="shap-animate"
                    style={{ height: "auto" }}
                  ></Image>
                  {/* <ul className="style-none">
                        <li>Mobile app easy management & access</li>
                        <li>Ton’s of features for handle the card easily</li>
                        <li>Strong security system.</li>
                    </ul> */}
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 order-1 order-lg-2 wow fadeInLeft">
                <div className="title-one details-meta">
                  {/* <div className="upper-title">About Us</div> */}
                  <h2 className="text-white">About Us</h2>
                </div>
                <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20 paracolor">
                  PiStarTech Private Limited is a cutting-edge healthtech
                  startup, founded on 4th May 2021 by Anis Fatema, and is rooted
                  in her research project. We are proud to be India&lsquo;s
                  first startup with the complete in-house design and
                  manufacturing of the Podiascanner Mat. Our patented pressure
                  sensing technology provides comprehensive plantar pressure
                  analysis, offering valuable insights that support doctors in
                  their diagnosis.
                  <br />
                  Operating from the CIE IIIT Hyderabad incubation center,
                  PiStarTech is committed to innovation in foot pressure
                  analysis. In addition to our flagship product, we offer
                  customized pressure sensing systems tailored to meet the
                  specific needs of our customers, helping them achieve precise
                  and reliable diagnostic outcomes.
                </p>
              </div>
              {/* <div className="col-12 wow fadeInUp order-3">
                <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20 paracolor">
                  Innovation, within our framework, transcends being a mere
                  catchphrase; rather, it stands as a guiding principle that
                  intricately represents every aspect of our operations. We
                  strive to be more than service providers, aspiring to be
                  trusted partners in our clients journeys. This involves
                  understanding their unique challenges and tailoring innovative
                  solutions that effectively address their needs.
                </p>
                <div className="d-inline-flex flex-wrap align-items-center">
                  <Link href="/contact" className="btn-four mt-15 me-4">
                    Contact us
                  </Link>
                  <Link href="/contact" className="btn-three icon-link mt-15">
                        <span>Request a Callback</span>
                    </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      )}
      {style_2 && (
        <div className="text-feature-one service-details">
          <div className="container">
            <div className="line-wrapper position-relative">
              <div className="row align-items-center">
                <div className="col-lg-6 wow fadeInLeft">
                  <div className="title-one details-meta">
                    {/* <div className="upper-title">About us</div> */}
                    <h3 className="text-white">
                      From Vision to Reality: The Founding Story of PiStarTech
                    </h3>
                  </div>
                  <ul className="founding-story-list paracolor text-lg mt-45 lg-mt-30 mb-35 lg-mb-30">
                    <li>PiStarTech was founded by Dr. Anis Fatema and Dr. Aftab M. Hussain, two visionary leaders in the field of electronics and communication engineering.</li>
                    <li>Dr. Anis Fatema earned her Ph.D. in Electronics and Communication Engineering with a specialization in Flexible Electronics from the International Institute of Information Technology Hyderabad (IIITH), graduating in June 2024.</li>
                    <li>Dr. Fatema under the guidance Ph.D. advisor Dr. Aftab M. Hussain spent four years on the research and development and developed the complete make in India solution <b>Podiascanner mat</b>.</li>
                  </ul>
                  {/* <Link
                  href="/our-company"
                  className="btn-three icon-link mt-15 md-mb-40 fontcolor"
                >
                  <span>Read More</span>
                  <Image
                    src={icons}
                    alt="icon"
                    className="lazy-img icon ms-1"
                  />
                </Link> */}
                <Image
        src={img2}
        alt="bg-img"
        className="lazy-img mt-auto me-auto ms-auto w-100"
        layout="responsive"
      />
                </div>
                <div className="col-lg-6 ms-auto wow fadeInRight">
                  <CardItem
                    icon={vision}
                    link="/our-company"
                    title="Our Vision"
                    desc="Since its incorporation in 2021, PiStarTech has been at the forefront of innovation, supported by a range of prestigious government grants. The company received significant funding through initiatives such as MeiTY Tide 2.0, Nidhi Prayas, PRIF, and Nidhi SSS, amassing a total of INR 82 lakhs. These grants have been instrumental in advancing the development of PiStarTech's cutting-edge technologies and reinforcing its commitment to enhancing healthcare solutions."
                    bg_img={img1}
                  />
                  <CardItem
                    icon={mission}
                    link="/our-company"
                    title="Our Mission"
                    desc="Our mission is to revolutionize healthcare through innovative pressure sensing technology, providing precise diagnostic solutions that enhance patient care and improve quality of life."
                    bg_img={img3}
                  />
                </div>
              </div>
              <Image
                src={shape}
                alt="shape"
                className="lazy-img shapes shape_01"
              />
            </div>

            {/* <div className="counter-wrapper mt-80 lg-mt-20">
              <div className="row">

              </div>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default TextFeatureAbout;
