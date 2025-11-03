import styles from "./css/services.module.css";
import { useEffect, useState } from "react";

import Footer from "../components/Footer/Footer";
//animation
import gsap from "gsap";
//icons
import { MdDeveloperMode } from "react-icons/md";
import SplitText from "gsap/SplitText";
import { TfiMobile } from "react-icons/tfi";
import { PiDeviceMobile } from "react-icons/pi";
import { GrPowerCycle } from "react-icons/gr";
import { GrCart } from "react-icons/gr";
import { IoColorPaletteSharp } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";

//images
import slider1 from "../assets/techSlider/flutter2.png";
import slider2 from "../assets/techSlider/firebase.png";
import slider3 from "../assets/techSlider/Java.png";
import slider4 from "../assets/techSlider/swift12.webp";
import slider5 from "../assets/techSlider/kotlin2.webp";
import slider6 from "../assets/techSlider/restapi.webp";
//banner image
import mobApp from "../assets/mobApp.webp";

const services = [
  {
    id: 1,
    title: " Custom Mobile App Development  ",
    description:
      "We create tailor-made mobile applications that align with your business needs, ensuring scalability and efficiency.  ",
    icon: <MdDeveloperMode className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 2,
    title: "iOS App Development",
    description:
      "OurDeveloping high-performance, feature-rich iOS applications using Swift and Objective-C for Apple devices.  ",
    icon: <TfiMobile className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 3,
    title: "Android App Development",
    description:
      "Crafting robust and secure Android apps with Kotlin and Java to ensure smooth performance on all Android devices. ",
    icon: <PiDeviceMobile className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 4,
    title: "Cross-Platform App Development ",
    description:
      "Using frameworks like React Native and Flutter, we build apps that work seamlessly across both iOS and Android, reducing development time and costs. ",
    icon: <GrPowerCycle className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 5,
    title: "E-Commerce Mobile App Development ",
    description:
      "Developing mobile solutions for e-commerce businesses with features like secure checkout, product catalogs, and personalized recommendations.",
    icon: <GrCart className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 6,
    title: "UI/UX Design for Mobile Apps ",
    description:
      "We design intuitive and visually appealing app interfaces that enhance user experience and increase engagement. ",
    icon: <IoColorPaletteSharp className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 7,
    title: "App Testing & Quality Assurance  ",
    description:
      "Thorough testing to ensure bug-free performance, smooth functionality, and optimal user experience. ",
    icon: <FaRegCheckCircle className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 8,
    title: "App Maintenance & Support ",
    description:
      "Providing continuous updates, performance optimizations, and security enhancements to keep your app running smoothly. ",
    icon: <MdEventAvailable className="text-4xl text-[#0B80DA] " />,
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

//ui ux cards
const steps = [
  {
    id: 1,
    title: "Discovery & Planning",
    desc: "We analyze business goals, user needs, and market trends to define a solid app strategy.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    desc: "Creating user-friendly and visually appealing interfaces for seamless interactions.",
  },
  {
    id: 3,
    title: "App Development",
    desc: "Coding the app using the latest technologies, ensuring high performance and scalability.",
  },
  {
    id: 4,
    title: "Testing & Quality Assurance",
    desc: "Performing rigorous testing for functionality, security, and usability to deliver a bug free app.",
  },
  {
    id: 5,
    title: "Deployment & Launch",
    desc: "Publishing the app on App Store & Google Play, ensuring compliance and a smooth release.",
  },
];

// Register the plugin
gsap.registerPlugin(SplitText);

function MobApp() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration (ms)
      once: true, // animation only once
    });
  }, []);

  //tech cards
  const firstRow = technologies.slice(0, 12);

  // stages
  const [active, setActive] = useState(1);

  return (
    <div>
      <section>
        <div
          className=" overflow-x-hidden bg-white justify-center min-h-[80vh] w-full  py-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,40,0.96), rgba(0,0,50,0.7)), url(${mobApp})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
            <div className=" pt-20">
              <h2 className="text-4xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-7xl font-[800] text-white leading-tight max-w-5xl mx-auto">
                Build Fast, Seamless Mobile Apps
              </h2>
              <p className="text-[15px] sm:text-[16px] md:text-[18px] text-gray-200 mt-6 max-w-2xl mx-auto leading-relaxed">
                We specialize in designing and developing custom mobile
                applications that offer seamless user experiences, high
                performance, and robust functionality.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* our service cards */}
      <section className="bg-[#f0f4f8] py-14s px-4 pb-10">
        <div className="text-center mb-10">
          <h2 className="lg:text-[48px] sm:text-3xl font-[500] text-[#0B80DA]  mb-2 pt-7">
            Our Mobile App Development Services
          </h2>
          <p className="text-gray-600">
            Innovative, Scalable & High-Performance Mobile App Solutions
            Tailored for Your Business.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto h-auto"
          data-aos="fade-up"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-white rounded-lg shadow-md p-6 transition-all duration-300 transform hover:scale-[1.02] group overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0  transition-opacity duration-300 rounded-lg z-0" />

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

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default MobApp;
