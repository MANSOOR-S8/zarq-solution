import "../App.css";
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
      <section>
        <div className="banner-sec overflow-x-hidden bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[47px] text-center   break-words leading-tight max-w-3xl mx-auto hed-text pt-10">
              <span ref={textRef} className=" font-[900]  text-bold ">
                Boost Your Online Presence & Drive More Traffic
              </span>
            </h2>

            {/* <h1 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[50px] text-center  font-bold break-words leading-tight max-w-3xl mx-auto hed-text"></h1> */}
            <p className="text-[15px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-center pt-4 sm:pt-6 break-words leading-relaxed max-w-2xl mx-auto ">
              We help businesses grow by crafting{" "}
              <span className=" font-bold">
                {" "}
                result-driven SEO, PPC, and digital marketing strategies
              </span>{" "}
              tailored to their goals. From boosting search engine visibility
              and generating qualified traffic to increasing customer engagement
              and driving higher conversions — our full-funnel approach ensures
              measurable growth and long-term success. Whether you’re launching
              a brand or scaling your reach, we deliver impactful digital
              solutions that make every click count.
            </p>
          </div>
        </div>
      </section>
      {/* our service cards */}
      <section className="bg-[#f0f4f8] py-12 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#0B80DA]  mb-2">
            Our Digital Marketing Services
          </h2>
          <p className="text-black">
            Drive Traffic, Increase Conversions, and Build Your Brand
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto h-auto"
          data-aos="fade-up"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-white rounded-lg shadow-md p-6 transition-all duration-300 transform hover:scale-[1.02] group overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-[#EF6025] to-[#16A87A] transition-opacity duration-300 rounded-lg z-0" />

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
      <section className="bg-[#0b80da] py-12 border border-b-1 border-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-10">
            <h2 className="text-[34px] font-bold text-white">
              Technologies We Use
            </h2>
            <p className="text-gray-200 mt-2">
              Powering Your Software with the Latest Tech
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className="bg-white rounded-md shadow hover:shadow-lg transition p-6 flex items-center justify-center"
              >
                <img
                  src={tech.img}
                  alt="Technology"
                  className="h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* stages section */}

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default DigitalMarket;
