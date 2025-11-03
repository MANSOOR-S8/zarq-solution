import styles from "./css/services.module.css";
import { useEffect, useRef } from "react";
import Footer from "../components/Footer/Footer";

import gsap from "gsap";
import SplitText from "gsap/SplitText";
//icons
import { FiSearch } from "react-icons/fi";
import { AiOutlineDollar } from "react-icons/ai";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoTrendingUpOutline } from "react-icons/io5";
import { MdAddLocationAlt } from "react-icons/md";

//images

import slider1 from "../assets/techSlider/googleanalytics.png";
import slider2 from "../assets/techSlider/googleads.png";
import slider3 from "../assets/techSlider/googleplanner.png";
import slider4 from "../assets/techSlider/Facebookad.png";
import slider5 from "../assets/techSlider/ahref.png";
import slider6 from "../assets/techSlider/semrush.png";
import slider7 from "../assets/techSlider/Moz.png";
import slider8 from "../assets/techSlider/linkdin.png";
import slider9 from "../assets/techSlider/metabusinuss.png";
import slider10 from "../assets/techSlider/screamingfrog.png";
import slider11 from "../assets/techSlider/googleConsol.png";
import slider12 from "../assets/techSlider/grammarly.png";

//images
import digitalMarkeeting from "../assets/digitalMarkeeting.webp";

const services = [
  {
    id: 1,
    title: "Search Engine Optimization (SEO)",
    description:
      "Optimize your website to rank higher on Google with keyword research, on-page SEO, technical SEO, and backlink building. ",
    icon: <FiSearch className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 2,
    title: "Pay-Per-Click (PPC) Advertising",
    description:
      "Launch targeted Google Ads and social media campaigns to drive instant, high-converting traffic to your website. ",
    icon: <AiOutlineDollar className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 3,
    title: "Social Media Marketing (SMM) ",
    description:
      "Build brand awareness and engagement on platforms like Facebook, Instagram, LinkedIn, and Twitter. ",
    icon: <FaUserGroup className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 4,
    title: "Email Marketing & Automation ",
    description:
      "Reach your audience with personalized email campaigns, newsletters, and automated marketing flows. ",
    icon: <MdOutlineEmail className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 5,
    title: "Analytics & Performance Tracking  ",
    description:
      "Track campaign success, monitor website traffic, and optimize marketing efforts with real-time analytics. ",
    icon: <IoTrendingUpOutline className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 6,
    title: "Local SEO & Google My Business Optimization ",
    description:
      "Optimize your business for local searches to attract nearby customers and improve Google My Business rankings.  ",
    icon: <MdAddLocationAlt className="text-4xl text-[#0B80DA] " />,
  },
];

// technology cards

const technologies = [
  {
    id: 1,
    img: slider1,
  },

  {
    id: 2,
    img: slider2,
  },
  {
    id: 3,
    img: slider3,
  },
  {
    id: 4,
    img: slider4,
  },
  {
    id: 5,
    img: slider5,
  },
  {
    id: 6,
    img: slider6,
  },
  {
    id: 7,
    img: slider7,
  },
  {
    id: 8,
    img: slider8,
  },
  {
    id: 9,
    img: slider9,
  },
  {
    id: 10,
    img: slider10,
  },
  {
    id: 11,
    img: slider11,
  },
  {
    id: 12,
    img: slider12,
  },
];

// Register the plugin
gsap.registerPlugin(SplitText);

function DigitalMarket() {
  const firstRow = technologies.slice(0, 6);
  const secondRow = technologies.slice(6, 12);
  const textRef = useRef();

  useEffect(() => {
    // ye text ko split karta hy (alg) karta hy
    const split = new SplitText(textRef.current, { type: "chars" });
    gsap.from(split.chars, {
      duration: 0.6,
      opacity: 0,
      y: 20,
      stagger: 0.05,
      ease: "power2.out",
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <div>
      <section
        className="min-h-[80vh] py-20 flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,40,0.96), rgba(0,0,13,0.7)), url(${digitalMarkeeting})`,
        }}
      >
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 p-12">
          <h2
            ref={textRef}
            className="text-4xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-7xl font-[800] text-white leading-tight max-w-1xl mx-auto"
          >
            Boost Your Online Presence & Drive More Traffic
          </h2>
          <p className="text-white text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] mt-5 max-w-2xl mx-auto leading-relaxed">
            Boost visibility, drive traffic, and convert clicks into growth with
            our result driven digital marketing
          </p>
        </div>
      </section>
      {/* our service cards */}
      <section className="bg-[#f0f4f8] py-12 px-4">
        <div className="text-center mb-10 max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#0B80DA]  mb-2">
            Our Digital Marketing Services
          </h2>
          <p className="text-black">
            Drive Traffic, Increase Conversions, and Build Your Brand
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto h-auto"
          data-aos="fade-up"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-white rounded-lg shadow-md p-6 transition-all duration-300 transform hover:scale-[1.02] group overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0  duration-300 rounded-lg z-0" />

              <div className="relative z-10">
                <div className="bg-gray-100 w-14 h-14 flex items-center justify-center rounded-full mb-4 transition-all duration-300 ">
                  {service.icon}
                </div>
                <h3 className="text-lg text-[22px] font-[600] text-[#0B80DA]  mb-2 ">
                  {service.title}
                </h3>
                <p className="text-[16px] font-[400] text-gray-600  ">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* technology we use */}
      <section className="bg-[#fff] py-16">
        <div className=" mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-balance lg:text-[48px] font-[500] tracking-tight md:text-4xl">
              <span className=" bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Technologies We Use
              </span>
            </h2>
            <p className="text-[#000] mt-2 text-lg">
              Powering Your Software with the Latest Tech
            </p>
          </div>

          <div className={styles["techCard-container"]}>
            <div
              className={`${styles["techCard-track"]} ${styles["scroll-left"]}`}
            >
              {[...firstRow, ...firstRow].map((item, index) => {
                return (
                  <img
                    key={`row1-${item.id}-${index}`}
                    src={item.img}
                    alt=""
                    className={`${styles["techCard-img"]} filter grayscale hover:grayscale-0`}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles["techCard-container-two"]}>
            <div
              className={`${styles["techCard-track"]} ${styles["scroll-right"]} `}
            >
              {[...secondRow, ...secondRow].map((item, index) => {
                return (
                  <img
                    key={`row2-${item.id}-${index}`}
                    src={item.img}
                    alt=""
                    className={` ${styles["techCard-img"]}  filter grayscale hover:grayscale-0`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default DigitalMarket;
