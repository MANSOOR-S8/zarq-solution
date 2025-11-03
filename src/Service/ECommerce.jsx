import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import styles from "./css/services.module.css";
import Footer from "../components/Footer/Footer";

//=====icons
import { FaQrcode } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineCloudSync } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { MdWebhook } from "react-icons/md";
import { FaHeadset } from "react-icons/fa6";

//images
import slider1 from "../assets/techSlider/React2.png";
import slider2 from "../assets/techSlider/Laravel.webp";
import slider3 from "../assets/techSlider/Codigniter.png";
import slider4 from "../assets/techSlider/Node.png";
import slider5 from "../assets/techSlider/VueJs.png";
import slider6 from "../assets/techSlider/Php.png";
import slider7 from "../assets/techSlider/Docker.png";
import slider8 from "../assets/techSlider/wordpress-original.png";
import slider9 from "../assets/techSlider/shopify.webp";
import slider10 from "../assets/techSlider/wix.webp";
import slider11 from "../assets/techSlider/Bootstrap.png";
import slider12 from "../assets/techSlider/Angular.png";
import slider13 from "../assets/techSlider/googlecloud.webp";
import slider14 from "../assets/techSlider/Net.png";
import slider15 from "../assets/techSlider/MySQL.png";
import slider16 from "../assets/techSlider/AWS.png";
import slider17 from "../assets/techSlider/symfony.webp";
import slider18 from "../assets/techSlider/tailwind-css-1.svg";
//banner image

import ecommerece from "../assets/ecommerece.webp";

const services = [
  {
    id: 1,
    title: "Custom E-Commerce Development ",
    description:
      "We build tailored e-commerce platforms that align with your brand identity, ensuring a smooth and engaging shopping experience for your customers. ",
    icon: <FaShoppingCart className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 2,
    title: "CMS Development ",
    description:
      "Our CMS solutions empower businesses with easy-to-use, flexible, and scalable platforms like WordPress, Shopify, and Joomla, allowing you to manage website content effortlessly without coding knowledge. ",
    icon: <FaQrcode className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 3,
    title: "Progressive Web Apps (PWA) ",
    description:
      "We develop cutting-edge Progressive Web Apps that combine the best of websites and mobile apps, offering fast loading speeds, offline functionality, and an app-like user experience without requiring installation. ",
    icon: <MdOutlineCloudSync className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 4,
    title: "Website Redesign & Optimization ",
    description:
      "Transform your outdated website with a modern, visually appealing design, faster load times, and an improved user experience that boosts engagement, conversions, and search engine rankings.  ",
    icon: <FaPaintBrush className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 5,
    title: "API Development & Integration ",
    description:
      "Enhance your website’s functionality by integrating third-party services, payment gateways, and custom APIs, ensuring smooth data exchange and automation between different platforms.  ",
    icon: <MdWebhook className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 6,
    title: "Website Maintenance & Support ",
    description:
      "We provide ongoing technical support, performance monitoring, security updates, and regular maintenance to keep your website running smoothly, securely, and efficiently. ",
    icon: <FaHeadset className="text-4xl text-[#0B80DA] " />,
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
  {
    id: 13,
    img: slider13,
  },
  {
    id: 14,
    img: slider14,
  },
  {
    id: 15,
    img: slider15,
  },
  {
    id: 16,
    img: slider16,
  },
  {
    id: 17,
    img: slider17,
  },
  {
    id: 18,
    img: slider18,
  },
];

//stages cards
const steps = [
  {
    id: 1,
    title: "Requirement Analysis",
    desc: "Identifying business needs, goals, and challenges to build the right solution.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    desc: "Creating user-friendly and visually appealing interfaces for seamless interactions.",
  },
  {
    id: 3,
    title: "Development & Coding",
    desc: "Building scalable, high-performance software using modern technologies.",
  },
  {
    id: 4,
    title: "Testing & Quality Assurance",
    desc: "Ensuring reliability, security, and bug-free performance with thorough testing.",
  },
  {
    id: 5,
    title: "Deployment & Integration",
    desc: " Launching and integrating software smoothly with minimal business disruption.",
  },
];

// Register the plugin
gsap.registerPlugin(SplitText);

function ECommerce() {
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

  //tech cards slider
  const firstRow = technologies.slice(0, 12);
  const secondRow = technologies.slice(12, 24);
  //stages
  const [active, setActive] = useState(1);

  return (
    <div>
      {/* ===== Hero Section ===== */}
      <section>
        <div
          className="overflow-x-hidden bg-white py-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,40,0.96), rgba(0,0,13,0.7)), url(${ecommerece})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-14">
            <h2
              ref={textRef}
              className="text-white text-4xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-7xl font-[800] text-center  leading-tight max-w-4xl mx-auto"
            >
              Next Level E-Commerce Solutions
            </h2>
            <p className="text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-center pt-4 sm:pt-6 max-w-2xl mx-auto leading-relaxed">
              We design and develop high-performance, responsive, and secure
              websites tailored to your business needs, ensuring seamless user
              experience and scalability.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Services Section ===== */}
      <section className="bg-[#f0f4f8] py-12 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-[48px] font-bold text-[#0B80DA] mb-2">
            Our Custom Software Services
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Our Expertise in Custom Software Development
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto"
          data-aos="fade-up"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-white rounded-lg shadow-md p-6 transition-all duration-300 transform hover:scale-[1.02] group overflow-hidden"
            >
              <div className="absolute inset-0  duration-300 rounded-lg z-0" />
              <div className="relative z-10">
                <div className="bg-gray-100 w-14 h-14 flex items-center justify-center rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#0B80DA] mb-2">
                  {service.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Technologies Section ===== */}
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

      {/* ===== Stages Section ===== */}
      <section className="bg-white py-16 mt-12 ">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 sm:grid-cols-2 lg:flex lg:flex-row overflow-hidden lg:px-12">
          {steps.map((step) => (
            <div
              key={step.id}
              onMouseEnter={() => setActive(step.id)}
              onMouseLeave={() => setActive(1)}
              className={`group relative cursor-pointer flex flex-col justify-between items-start p-8 border-r overflow-hidden border-gray-200 
              transition-all duration-500 ease-in-out min-h-[220px]
              ${
                active === step.id
                  ? "lg:flex-[2.5] bg-gray-50"
                  : "lg:flex-[1] bg-white"
              }
            `}
              // style={{ transitionProperty: "flex-grow, background-color, color" }}
            >
              {/* Step number */}
              <h1
                className={`block text-4xl md:text-5xl font-extrabold  transition-all duration-500 ease-in-out ${
                  active === step.id ? "text-blue-500" : "text-gray-400"
                }`}
              >
                0{step.id}
              </h1>

              {/* Text */}
              <div
                className={`absolute bottom-6 left-6 right-6 text-black transition-all duration-500 
                  ${active === step.id ? "lg:opacity-100" : "opacity-0"} 
                  opacity-100`}
              >
                <h2
                  className={`text-lg sm:text-xl font-semibold  ${
                    active === step.id ? "text-gray-900" : "text-gray-700"
                  }`}
                >
                  {step.title}
                </h2>
                <p
                  className={`text-sm sm:text-base mt-2 overflow-y-hidden text-gray-600 leading-snug transition-all duration-500 ${
                    active === step.id
                      ? "opacity-100 max-h-40"
                      : "opacity-0 max-h-0"
                  } overflow-hidden`}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
}

export default ECommerce;
