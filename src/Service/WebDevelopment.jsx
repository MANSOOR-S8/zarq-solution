import "../App.css";
import { useEffect, useRef } from "react";
import Footer from "../components/Footer/Footer";
//animation
import gsap from "gsap";
import SplitText from "gsap/SplitText";
//icons
import { FaQrcode, FaPaintBrush } from "react-icons/fa";
import { IoCode } from "react-icons/io5";
import {
  MdDeveloperMode,
  MdOutlineSupportAgent,
  MdWebhook,
} from "react-icons/md";
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
const services = [
  {
    id: 1,
    title: "Custom Website Development ",
    description:
      "We design and develop fully customized websites that reflect your brand identity and meet your business objectives. Our solutions ensure a seamless user experience, high performance, and strong security for long-term success. ",
    icon: <IoCode className="text-4xl text-[#0B80DA] " />,
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
    icon: <MdDeveloperMode className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 4,
    title: "Website Redesign & Optimization ",
    description:
      "Transform your outdated website with a modern, visually appealing design, faster load times, and an improved user experience that boosts engagement, conversions, and search engine rankings. ",
    icon: <FaPaintBrush className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 5,
    title: "API Development & Integration ",
    description:
      "Enhance your website’s functionality by integrating third-party services, payment gateways, and custom APIs, ensuring smooth data exchange and automation between different platforms. ",
    icon: <MdWebhook className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 6,
    title: "Website Maintenance & Support",
    description:
      "We provide ongoing technical support, performance monitoring, security updates, and regular maintenance to keep your website running smoothly, securely, and efficiently. ",
    icon: <MdOutlineSupportAgent className="text-4xl text-[#0B80DA] " />,
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

function WebDevelopment() {
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
                Web Development Services
              </span>
            </h2>

            {/* <h1 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[50px] text-center  font-bold break-words leading-tight max-w-3xl mx-auto hed-text"></h1> */}
            <p className="text-[15px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-center pt-4 sm:pt-6 break-words leading-relaxed max-w-2xl mx-auto ">
              <span className="font-bold">
                Building lightning-fast, user-centric websites that don’t just
                look great — they convert.
              </span>
              We craft high-performance digital experiences optimized for speed,
              usability, and business growth. From responsive design to seamless
              user journeys, we help brands stand out and succeed online.
            </p>
          </div>
        </div>
      </section>
      {/* our service cards */}
      <section className="bg-[#f0f4f8] py-12 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#0B80DA]  mb-2">
            We provide a wide range of Services
          </h2>
          <p className="text-gray-600">
            We provide a comprehensive range of services, including web and
            mobile development, software solutions, and IT consulting. Our
            expert team is dedicated to delivering innovative, high-quality, and
            customized solutions that drive business success and enhance digital
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto h-auto">
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
      <section className="bg-[#0b80da] py-12">
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
      <section className="py-12 bg-[#eceff4] ">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl text-[#0B80DA] font-bold text-center mb-10">
            Stages of Working With Us
          </h2>
          {/* Cards */}
          <div className="grid md:grid-cols-3 ">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white border-1 border-gray-300  p-12 relative"
              >
                <span
                  className=" absolute top-0 left-2"
                  style={{
                    fontSize: "90px",
                    fontWeight: 800,
                    color: "#f2f4f8",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {step.number}
                </span>

                {/* Content */}
                <div className="mt-12">
                  <h3 className="text-[20px] font-bold text-[#0B80DA] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-[18px] ">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default WebDevelopment;
