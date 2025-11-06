import styles from "./css/services.module.css";
import { useEffect, useRef, useState } from "react";

import Footer from "../components/Footer/Footer";

import gsap from "gsap";
import SplitText from "gsap/SplitText";

import { IoSearchOutline } from "react-icons/io5";
import { BsQrCodeScan } from "react-icons/bs";
import { PiDeviceMobileLight } from "react-icons/pi";
import { MdOutlineWeb } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoColorPaletteSharp } from "react-icons/io5";

//images

import slider1 from "../assets/techSlider/figma2.png";
import slider2 from "../assets/techSlider/Adobeillustrator.png";
import slider3 from "../assets/techSlider/XD.png";
import slider4 from "../assets/techSlider/Sketch.png";
import slider5 from "../assets/techSlider/Photoshop.png";
import slider6 from "../assets/techSlider/invision.png";
//banner
import UIUX from "../assets/uiux.webp";

const services = [
  {
    id: 1,
    title: " User Research & Analysis ",
    description:
      "We conduct in-depth research on user behavior, market trends, and competitor analysis to create data-driven designs that align with customer needs and expectations. ",
    icon: <IoSearchOutline className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 2,
    title: "Dashboard UI Design ",
    description:
      "We create intuitive dashboards and user interfaces for SaaS applications, making complex data visualization and user interactions easy and efficient. ",
    icon: <BsQrCodeScan className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 3,
    title: "Mobile App UI/UX Design ",
    description:
      "We design visually appealing, user-friendly mobile app interfaces that provide a seamless experience across Android and iOS platforms, enhancing user retention and engagement. ",
    icon: <PiDeviceMobileLight className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 4,
    title: "Web UI/UX Design ",
    description:
      "Our team crafts modern, responsive, and aesthetically pleasing website designs that prioritize usability, ensuring smooth navigation and a great user experience across all devices. ",
    icon: <MdOutlineWeb className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 5,
    title: "Wireframing & Prototyping ",
    description:
      " Using low and high-fidelity wireframes, we create structured layouts and interactive prototypes, allowing stakeholders to visualize user flows before development begins.",
    icon: <FaNetworkWired className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 6,
    title: "E-Commerce UI/UX Design ",
    description:
      "Optimized for conversions, our e-commerce UI/UX designs focus on creating a smooth shopping experience with engaging product displays, easy navigation, and secure checkout flows. ",
    icon: <FaShoppingCart className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 7,
    title: "Usability Testing & Optimization ",
    description:
      "We conduct rigorous usability testing to identify pain points and refine the design, ensuring an intuitive and frictionless user experience. ",
    icon: <FaRegCheckCircle className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 8,
    title: "Design System & Branding ",
    description:
      "We establish cohesive design systems, including typography, color palettes, UI components, and brand identity guidelines, ensuring consistency across all digital platforms.  ",
    icon: <IoColorPaletteSharp className="text-4xl text-[#0B80DA] " />,
  },
];

// why choose us

const features = [
  {
    title: "Best Quality Designs",
    content:
      "We craft visually stunning, user-friendly designs that enhance engagement and ensure a seamless user experience. Our designs are tailored to your brand’s identity and business goals.",
  },
  {
    title: "24x7 Live Support",
    content:
      "Our dedicated support team is available around the clock to assist you with any queries or technical issues, ensuring smooth and uninterrupted operations.",
  },
  {
    title: "Result Oriented Projects",
    content:
      "We focus on delivering measurable outcomes by combining strategic planning, innovation, and the latest technology to drive your business forward.",
  },
  {
    title: "Award Winning Support Team",
    content:
      "Recognized for excellence, our support team goes above and beyond to provide quick and efficient solutions, ensuring customer satisfaction at every step.",
  },
  {
    title: "Best ROI Techniques",
    content:
      "We implement data-driven strategies and proven methodologies to maximize your return on investment, helping you achieve sustainable growth.",
  },
  {
    title: "Experienced Professionals",
    content:
      "Our team consists of highly skilled experts with years of industry experience, ensuring that you receive top-notch solutions tailored to your needs.",
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
];

//ui ux cards stages
const steps = [
  {
    id: 1,
    title: "Discovery & Research",
    desc: "We begin by conducting thorough research to understand your target audience, industry trends, and business objectives. ",
  },
  {
    id: 2,
    title: "Wireframing & Prototyping",
    desc: "Before diving into design, we create wireframes and interactive prototypes to map out user flows, ensuring a seamless and engaging navigation experience.",
  },
  {
    id: 3,
    title: "Visual Design & Branding",
    desc: "We design visually stunning interfaces that elevate your brand with perfect colors, typography, and interactivity.",
  },
  {
    id: 4,
    title: "User Testing & Refinement",
    desc: "Through usability testing and real user feedback, we identify pain points, refine the design, and optimize interactions to enhance overall user experience.",
  },
  {
    id: 5,
    title: "Development Handoff",
    desc: "Once the design is finalized, we provide developers with pixel-perfect UI assets, design specifications, and style guides to ensure a smooth development process.",
  },
];

// Register the plugin
gsap.registerPlugin(SplitText);

function UIUXDesign() {
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

  //tech cards
  const firstRow = technologies.slice(0, 12);
  //stages
  const [active, setActive] = useState(1);

  // why choose us
  const [activeIndex, setActiveIndex] = useState(null); // null means none is open

  const toggleItem = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <section className="relative flex items-center justify-center min-h-[80vh] w-full overflow-hidden px-3 sm:px-6 lg:px-12">
        {/* Background Gradient with Image */}
        <div
          className="absolute inset-0 py-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,40,0.60), rgba(0,0,50,0.7)), url(${UIUX})`,
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
            Building Powerful User Experiences
          </h1>

          <p
            className="text-white max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Crafting intuitive, stunning UI/UX experiences that captivate users
            and drive results.
          </p>
        </div>
      </section>
      {/* our service cards */}
      <div className="our-projects">
        <section className="bg-[#fff] py-12 px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#0B80DA]  mb-2">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Our UI/UX Services
              </span>
            </h2>
            <p className="text-gray-600">
              Crafting Intuitive Designs for Exceptional User Experiences
            </p>
          </div>

          <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-16">
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
      {/* why choose us */}
      <section>
        <div className="bg-[#f0f4f8]">
          <div className="text-center pt-7 bg-[#f0f4f8] max-w-[1400px] mx-auto  ">
            <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-[48px] font-bold text-[#0B80DA] mb-3">
              Why Choose Us?
            </h2>
            <p className="text-gray-700 mb-6 text-[16px] ">
              Innovative solutions, expert team, and seamless technology Zarq
              Solution delivers excellence for your success.
            </p>
          </div>

          <div
            className="bg-white rounded-lg shadow-md p-5 space-y-4 max-w-[1400px] mx-auto px-4 lg:px-5"
            data-aos="fade-down"
          >
            {features.map((item, index) => {
              const isOpen = index === activeIndex;

              return (
                <div
                  key={index}
                  className={`transition-all duration-300 ${
                    isOpen ? "bg-[#ffffff] p-4 rounded" : "p-2"
                  }`}
                >
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleItem(index)}
                  >
                    <p
                      className={`font-semibold text-[16px] md:text-[18px] ${
                        isOpen ? "text-[#0B80DA]" : "text-black "
                      }`}
                    >
                      {item.title}
                    </p>

                    <div className="text-xl text-[#0B80DA]">
                      {isOpen ? (
                        <span className="font-bold text-2xl">−</span>
                      ) : (
                        <span className="font-bold text-2xl">+</span>
                      )}
                    </div>
                  </div>

                  {isOpen && item.content && (
                    <p className="mt-3 text-black text-[15px]">
                      {item.content}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* technology we use */}
      <section className="bg-[#fff] py-6 ">
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
        </div>
      </section>

      {/* stages section */}
      <section className="bg-white py-16 mt-12 ">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 sm:grid-cols-2 lg:flex lg:flex-row overflow-hidden lg:px-5">
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

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default UIUXDesign;
