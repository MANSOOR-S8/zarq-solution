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
      <section className="relative flex items-center justify-center min-h-[90vh] w-full overflow-hidden px-3 sm:px-6 lg:px-12">
        {/* Background Gradient with Image */}
        <div
          className="absolute inset-0 py-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,40,0.7), rgba(0,0,50,0.7)), url(${digitalMarkeeting})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center flex flex-col items-center justify-center space-y-6 max-w-3xl w-full pt-12">
          <h1
            className="font-extrabold text-white leading-tight text-4xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl px-2"
            data-aos="fade-up"
          >
            Boost Your Online Presence & Drive More Traffic
          </h1>

          <p
            className="text-white max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Boost visibility, drive traffic, and convert clicks into growth with
            our result driven digital marketing
          </p>

          {/* Button */}
        </div>
      </section>
      {/* our service cards */}
      <div className="our-projects">
        <section className="bg-[#f0f4f8] py-12 px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#0B80DA]  mb-2">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Our Digital Marketing Services
              </span>
            </h2>
            <p className="text-gray-600">
              Drive Traffic, Increase Conversions, and Build Your Brand
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-[#f9fafb] rounded-xl p-7 hover:shadow-sm transition-all duration-300 group flex flex-col justify-between h-full"
              >
                {/* Top Section */}
                <div>
                  <div className=" space-x-4 mb-4">
                    <div className="pb-4 transition-all duration-500 ease-in-out transform group-hover:-translate-y-2 group-hover:opacity-100">
                      {service.icon}
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* <div className="mt-6">
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-[#0B80DA] font-medium hover:underline transition-all"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div> */}
              </div>
            ))}
          </div>
        </section>
      </div>
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
