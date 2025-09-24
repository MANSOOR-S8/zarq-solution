import "../App.css";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Footer from "../components/Footer/Footer";

import gsap from "gsap";
import SplitText from "gsap/SplitText";

import { FaQrcode, FaPaintBrush } from "react-icons/fa";
import { IoCode } from "react-icons/io5";
import { MdDeveloperMode, MdOutlineSupportAgent } from "react-icons/md";
import { DiGitBranch } from "react-icons/di";

const services = [
  {
    id: 1,
    title: " User Research & Analysis ",
    description:
      "We conduct in-depth research on user behavior, market trends, and competitor analysis to create data-driven designs that align with customer needs and expectations. ",
    icon: <IoCode className="text-3xl text-[#0B80DA] " />,
  },
  {
    id: 2,
    title: "Dashboard UI Design ",
    description:
      "We create intuitive dashboards and user interfaces for SaaS applications, making complex data visualization and user interactions easy and efficient. ",
    icon: <FaQrcode className="text-3xl text-[#0B80DA] " />,
  },
  {
    id: 3,
    title: "Mobile App UI/UX Design ",
    description:
      "We design visually appealing, user-friendly mobile app interfaces that provide a seamless experience across Android and iOS platforms, enhancing user retention and engagement. ",
    icon: <MdDeveloperMode className="text-3xl text-[#0B80DA] " />,
  },
  {
    id: 4,
    title: "Web UI/UX Design ",
    description:
      "Our team crafts modern, responsive, and aesthetically pleasing website designs that prioritize usability, ensuring smooth navigation and a great user experience across all devices. ",
    icon: <FaPaintBrush className="text-3xl text-[#0B80DA] " />,
  },
  {
    id: 5,
    title: "Wireframing & Prototyping ",
    description:
      " Using low and high-fidelity wireframes, we create structured layouts and interactive prototypes, allowing stakeholders to visualize user flows before development begins.",
    icon: <DiGitBranch className="text-3xl text-[#0B80DA] " />,
  },
  {
    id: 6,
    title: "E-Commerce UI/UX Design ",
    description:
      "Optimized for conversions, our e-commerce UI/UX designs focus on creating a smooth shopping experience with engaging product displays, easy navigation, and secure checkout flows. ",
    icon: <MdOutlineSupportAgent className="text-3xl text-[#0B80DA] " />,
  },
  {
    id: 7,
    title: "Usability Testing & Optimization ",
    description:
      "We conduct rigorous usability testing to identify pain points and refine the design, ensuring an intuitive and frictionless user experience. ",
    icon: <DiGitBranch className="text-3xl text-[#0B80DA] " />,
  },
  {
    id: 8,
    title: "Design System & Branding ",
    description:
      "We establish cohesive design systems, including typography, color palettes, UI components, and brand identity guidelines, ensuring consistency across all digital platforms.  ",
    icon: <MdOutlineSupportAgent className="text-3xl text-[#0B80DA] " />,
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
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1666.webp",
  },
  {
    id: 2,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1698.webp",
  },
  {
    id: 3,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1670.webp",
  },
  {
    id: 4,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1667.webp",
  },
  {
    id: 5,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1699.webp",
  },
  {
    id: 6,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1668.webp",
  },
];

//ui ux cards
const steps = [
  {
    number: "01.",
    title: "Discovery & Research",
    desc: "We begin by conducting thorough research to understand your target audience, industry trends, and business objectives. This helps us create a design strategy that aligns with your brand and user expectations.",
  },
  {
    number: "02.",
    title: "Wireframing & Prototyping",
    desc: "Before diving into design, we create wireframes and interactive prototypes to map out user flows, ensuring a seamless and engaging navigation experience.",
  },
  {
    number: "03.",
    title: "Visual Design & Branding",
    desc: "We craft visually appealing designs that enhance brand identity, using the right color schemes, typography, and interactive elements to create a compelling user interface.",
  },
  {
    number: "04.",
    title: "User Testing & Refinement",
    desc: "Through usability testing and real user feedback, we identify pain points, refine the design, and optimize interactions to enhance overall user experience.",
  },
  {
    number: "05.",
    title: "Development Handoff",
    desc: "Once the design is finalized, we provide developers with pixel-perfect UI assets, design specifications, and style guides to ensure a smooth development process.",
  },
  {
    number: "06.",
    title: "Support & Optimization",
    desc: "Providing regular updates, improvements, and reliable technical support.",
  },
];

// Register the plugin
gsap.registerPlugin(SplitText);

function OurUI() {
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

  // why choose us
  const [activeIndex, setActiveIndex] = useState(null); // null means none is open

  const toggleItem = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <section>
        <div className="banner-sec overflow-x-hidden bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[47px] text-center   break-words leading-tight max-w-3xl mx-auto hed-text pt-10">
              Create Stunning, User-Centric Digital Experiences.
            </h2>

            {/* <h1 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[50px] text-center  font-bold break-words leading-tight max-w-3xl mx-auto hed-text"></h1> */}
            <p className="text-[15px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-center pt-4 sm:pt-6 break-words leading-relaxed max-w-2xl mx-auto ">
              We craft intuitive, visually compelling, and high-performance
              UI/UX solutions that not only elevate user engagement but also
              strategically drive conversions, helping your business grow
              through seamless digital experiences.
            </p>
          </div>
        </div>
      </section>
      {/* our service cards */}
      <section className="bg-[#f0f4f8] py-12 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#0B80DA]  mb-2">
            Our UI/UX Services
          </h2>
          <p className="text-gray-600">
            Crafting Intuitive Designs for Exceptional User Experiences
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto h-auto">
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
      {/* why choose us */}
      <section>
        <div className="bg-[#f0f4f8]">
          <div className="text-center pt-7 bg-[#f0f4f8] ">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B80DA] mb-3">
              Why Choose Us?
            </h2>
            <p className="text-gray-700 mb-6 text-[16px] ">
              Innovative solutions, expert team, and seamless technology — Zarq
              Solution delivers excellence for your success.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-5 space-y-4">
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
                  <p className="text-gray-600 text-[16px] ">{step.desc}</p>
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

export default OurUI;
