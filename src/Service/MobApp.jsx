import "../App.css";
import { useEffect, useRef } from "react";
import Footer from "../components/Footer/Footer";

import gsap from "gsap";
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
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1682.png",
  },
  {
    id: 2,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1680.png",
  },
  {
    id: 3,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1677.png",
  },
  {
    id: 4,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1676-1.webp",
  },
  {
    id: 5,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1678.webp",
  },
  {
    id: 6,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1681.webp",
  },
];

//ui ux cards
const steps = [
  {
    number: "01.",
    title: "Discovery & Planning",
    desc: "We analyze business goals, user needs, and market trends to define a solid app strategy.",
  },
  {
    number: "02.",
    title: "UI/UX Design",
    desc: "Creating user-friendly designs with wireframes, prototypes, and intuitive interfaces for a seamless experience.",
  },
  {
    number: "03.",
    title: "App Development",
    desc: "Coding the app using the latest technologies, ensuring high performance and scalability.",
  },
  {
    number: "04.",
    title: "Testing & Quality Assurance",
    desc: "Performing rigorous testing for functionality, security, and usability to deliver a bug-free app.",
  },
  {
    number: "05.",
    title: "Deployment & Launch",
    desc: " Publishing the app on App Store & Google Play, ensuring compliance and a smooth release.",
  },
  {
    number: "06.",
    title: "Post-Launch Support & Maintenance",
    desc: "Providing regular updates, bug fixes, and performance enhancements to keep the app running smoothly.",
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
                Build High-Performance User-Friendly Mobile Apps
              </span>
            </h2>

            {/* <h1 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[50px] text-center  font-bold break-words leading-tight max-w-3xl mx-auto hed-text"></h1> */}
            <p className="text-[15px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-center pt-4 sm:pt-6 break-words leading-relaxed max-w-2xl mx-auto ">
              We specialize in designing and developing custom mobile
              applications that offer seamless user experiences, high
              performance, and robust functionality.
            </p>
          </div>
        </div>
      </section>
      {/* our service cards */}
      <section className="bg-[#f0f4f8] py-14s px-4 pb-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#0B80DA]  mb-2 pt-7">
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
      <section className="bg-[#0b80da] py-12 " data-aos="zoom-in">
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
        <div className="max-w-6xl mx-auto px-4" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl text-[#0B80DA] font-bold text-center mb-10">
            Our UI/UX Design Process
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

export default MobApp;
