import React from "react";
import Link from "next/link";
import Image from "next/image";
import sindhu from "@/assets/images/cgbhome/sindhuUpdate.png";
import linkd from "@/assets/images/icon/linkedinicon.png";
import anisfatema from "@/assets/images/team/anisfatema.jpg";
import aftab from "@/assets/images/team/aftab.jpg";

const TeamDetailsArea = () => {
  return (
    <>
      <div id="anis-fatema" className="team-details light-bg border-top pt-120 pb-60 lg-pt-80 ">
        <div className="container">
          <div className="bg-wrapper">
            <div className="row">
              <div className="col-lg-4 align-self-center">
                {/* <div
                className="member-img"
                style={{ backgroundImage: `url(${bg_img.src})` }}
              > */}
                <Image
                  src={anisfatema}
                  layout="responsive"
                  alt="Anis Fatema"
                  className="w-100"
                ></Image>

                {/* <Image src={bg_img} alt="Sindhu mam profile"></Image> */}
                {/* </div> */}
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="pt-45 pb-45 ps-xl-4 ps-lg-0 ps-3 pe-xl-4 pe-lg-3 pe-3 border-right h-100">
                  <h2 className="name fw-bold m-0 d-flex justify-content-between align-items-center">
                    Dr. Anis Fatema
                    <Link
                      href="https://www.linkedin.com/in/anis-f-1034765a/"
                      className=""
                    >
                      <Image
                        src={linkd}
                        width={50}
                        height={50}
                        alt="linkedinicon"
                      ></Image>
                    </Link>
                  </h2>
                  <div className="post pb-5">CEO, PiStar Tech</div>
                  {/* <h6 className="fw-bold">About Me</h6> */}
                  <p className="m-0">
                    Dr. Anis Fatema&apos;s journey as the Founder and CEO of
                    PiStarTech began during her Ph.D. in Electronics and
                    Communication Engineering at the prestigious International
                    Institute of Information Technology (IIIT), Hyderabad. While
                    conducting cutting-edge research on flexible pressure sensor
                    systems, Anis&apos;s work garnered attention, even making
                    headlines in the Times of India. This exposure led to a wave
                    of interest from potential buyers intrigued by her
                    prototype&apos;s innovative capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 bg-white p-3" style={{ borderRadius: "30px" }}>
            <p>
              The demand and excitement around her research sparked Anis&apos;s
              entrepreneurial spirit. With her unwavering passion for technology
              and a desire to make a real-world impact, she co-founded
              PiStarTech. Alongside her mentor,Dr. Aftab M. Hussain, she
              envisioned a company that would leverage advanced technology to
              create solutions that are not only innovative but also
              user-friendly and accessible.
            </p>
            <p>
              Anis&apos;s leadership at PiStarTech is driven by her dedication
              to transforming groundbreaking research into practical,
              life-changing applications. Under her guidance, the company is at
              the forefront of diabetic foot care solutions and also
              revolutionizing ergonomics with pressure-sensing technology to
              improve the quality of care for people worldwide.
            </p>
            <p>
              Anis&apos;s journey from academia to entrepreneurship stands as a
              testament to her visionary mindset, combining research excellence
              with a strong commitment to improving everyday experiences through
              technology.
            </p>
          </div>
        </div>
      </div>
      <div id="aftab-hussain" className="team-details light-bg border-top pt-60 pb-120 lg-pt-80 ">
        <div className="container">
          <div className="bg-wrapper">
            <div className="row">
              <div className="col-lg-4 align-self-center order-lg-last">
                {/* <div
                className="member-img"
                style={{ backgroundImage: `url(${bg_img.src})` }}
              > */}
                <Image
                  src={aftab}
                  layout="responsive"
                  alt="Sindhu profile"
                  className="w-100"
                ></Image>

                {/* <Image src={bg_img} alt="Sindhu mam profile"></Image> */}
                {/* </div> */}
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="pt-45 pb-45 ps-xl-4 ps-lg-0 ps-3 pe-xl-4 pe-lg-3 pe-3 h-100">
                  <h2 className="name fw-bold m-0 d-flex justify-content-between align-items-center">
                    Dr. Aftab Hussain
                    <Link
                      href="https://www.linkedin.com/in/aftab-m-hussain-b9b22518/"
                      className=""
                    >
                      <Image
                        src={linkd}
                        width={50}
                        height={50}
                        alt="linkedinicon"
                      ></Image>
                    </Link>
                  </h2>
                  <div className="post pb-5">Technical Advisor</div>
                  {/* <h6 className="fw-bold">About Me</h6> */}
                  <p className="m-0">
                    A visionary in the field of flexible electronics, Dr. Aftab
                    M. Hussain is the Co-Founder and Chief Technology Officer of
                    PiStarTech. His journey into the world of electronics is
                    deeply rooted in his academic pursuits, combined with an
                    innate passion for solving real-world problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 bg-white p-3" style={{ borderRadius: "30px" }}>
            <p>
              Aftab is currently an associate professor at IIIT Hyderabad, where
              he continually pushes the boundaries of research in flexible
              electronics and innovative technologies. He is renowned for
              authoring the world&apos;s first single-author textbook on Introduction
              to Flexible Electronics, solidifying his status as a pioneer in
              the field. His work at IIIT Hyderabad blends academia with
              practical innovation, inspiring future technologists to explore
              beyond traditional electronic systems.
            </p>
            <p>
              The inception of PiStarTech was born out of Aftab&apos;s
              commitment to transforming cutting-edge research into practical
              solutions. Together with co-founder Dr. Anis Fatema, Aftab&apos;s
              expertise has been instrumental in shaping the vision and
              technological foundation of the company. His passion for
              innovation and hands-on approach has driven PiStarTech&apos;s
              mission to create advanced diagnostic tools, particularly focused
              on diabetic foot care.
            </p>
            <p>
              Known as an &quot;electronics freak,&quot; Aftab thrives on challenging
              conventional approaches and developing solutions that address
              real-world issues. His relentless pursuit of excellence and
              dedication to bridging the gap between research and industry has
              propelled PiStarTech to the forefront of the medical diagnostics
              landscape.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDetailsArea;
