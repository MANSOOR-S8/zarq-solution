import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import "../App.css";
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
    number: "01.",
    title: "Requirement Analysis",
    desc: "Identifying business needs, goals, and challenges to build the right solution.",
  },
  {
    number: "02.",
    title: "UI/UX Design",
    desc: "Creating user-friendly and visually appealing interfaces for seamless interactions.",
  },
  {
    number: "03.",
    title: "Development & Coding",
    desc: "Building scalable, high-performance software using modern technologies.",
  },
  {
    number: "04.",
    title: "Testing & Quality Assurance",
    desc: "Ensuring reliability, security, and bug-free performance with thorough testing.",
  },
  {
    number: "05.",
    title: "Deployment & Integration",
    desc: " Launching and integrating software smoothly with minimal business disruption.",
  },
  {
    number: "06.",
    title: "Ongoing Support & Maintenance",
    desc: "Providing regular updates, improvements, and reliable technical support.",
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
              className="text-white text-4xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-7xl font-[800] text-center  leading-tight max-w-3xl mx-auto"
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
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-[#EF6025] to-[#16A87A] transition-opacity duration-300 rounded-lg z-0" />
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
      <section className="bg-[#0b80da] py-12">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-3xl lg:text-[48px] font-bold text-white">
              Technologies We Use
            </h2>
            <p className="text-gray-200 mt-2 text-sm sm:text-base">
              Powering Your Software with the Latest Tech
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className="bg-white rounded-md shadow hover:shadow-lg transition p-6 flex items-center justify-center"
              >
                <img
                  src={tech.img}
                  alt="Technology"
                  className="h-14 sm:h-16 md:h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Stages Section ===== */}
      <section className="py-12 bg-[#eceff4]">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-3xl sm:text-3xl lg:text-[48px] text-[#0B80DA] font-bold text-center mb-10">
            Stages of Working With Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-8 sm:p-10 relative rounded-lg shadow-sm"
              >
                <span
                  className="absolute top-0 left-4 sm:text-2xl"
                  style={{
                    fontSize: "80px",
                    fontWeight: 800,
                    color: "#f2f4f8",
                    fontFamily: "inter, sans-serif",
                  }}
                >
                  {step.number}
                </span>

                <div className="mt-12">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B80DA] mb-2 pt-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-[15px] sm:text-[16px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
}

export default ECommerce;
