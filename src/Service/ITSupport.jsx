import "../App.css";
import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer/Footer";

import gsap from "gsap";
import SplitText from "gsap/SplitText";

import { GoLightBulb } from "react-icons/go";
import { CiCloudOn } from "react-icons/ci";
import { MdOutlineSecurity } from "react-icons/md";
import { MdStorage } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GrPowerCycle } from "react-icons/gr";
import { MdOutlineCloudSync } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
//banner image
import ITBanner from "../assets/ITSol.webp";

const services = [
  {
    id: 1,
    title: "IT Strategy & Digital Transformation  ",
    description:
      "We develop IT roadmaps and digital transformation strategies to align technology with business goals.",
    icon: <GoLightBulb className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 2,
    title: "Cloud Consulting & Migration ",
    description:
      "Guiding businesses in adopting cloud solutions like AWS, Azure, and Google Cloud for improved scalability and performance. ",
    icon: <CiCloudOn className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 3,
    title: "Cybersecurity Consulting ",
    description:
      "Providing security audits, risk assessments, and compliance solutions to protect your data and IT infrastructure. ",
    icon: <MdOutlineSecurity className="text-4xl text-[#0B80DA] " />,
  },
  {
    id: 4,
    title: "Infrastructure & Network Management",
    description:
      "Designing, optimizing, and managing IT infrastructure to ensure seamless connectivity and operational efficiency. ",
    icon: <MdStorage className="text-3xl text-[#0B80DA] " />,
  },
  {
    id: 5,
    title: "IT Helpdesk & Technical Support  ",
    description:
      "Offering 24/7 IT support, troubleshooting, and remote assistance to resolve technical issues quickly. ",
    icon: <MdOutlineSupportAgent className="text-3xl text-[#0B80DA] " />,
  },
  {
    id: 6,
    title: "Software & System Integration ",
    description:
      "Ensuring smooth integration of third-party software, APIs, and legacy systems for enhanced functionality.  ",
    icon: <GrPowerCycle className="text-3xl text-[#0B80DA] " />,
  },
  {
    id: 7,
    title: "Business Continuity & Disaster Recovery  ",
    description:
      "Developing backup and disaster recovery plans to ensure data security and business continuity in case of system failures.  ",
    icon: <MdOutlineCloudSync className="text-3xl text-[#0B80DA] " />,
  },
  {
    id: 8,
    title: "IT Compliance & Risk Management ",
    description:
      "Helping businesses meet industry regulations (GDPR, HIPAA, ISO) and mitigate IT-related risks.  ",
    icon: <FaRegCheckCircle className="text-3xl text-[#0B80DA] " />,
  },
];

// technology cards

//stages cards
const steps = [
  {
    id: 1,
    title: "Our IT Consultancy & Support Process",
    desc: "We evaluate your current IT infrastructure, pinpoint challenges, and uncover opportunities for digital transformation.",
  },
  {
    id: 2,
    title: "Developing a Roadmap for IT Enhancement",
    desc: "Our experts create a customized IT strategy aligned with your business goals, ensuring long-term efficiency and scalability.",
  },
  {
    id: 3,
    title: "Deploying Tailored IT Solutions",
    desc: "We seamlessly integrate new technologies, software, and systems while minimizing operational disruptions.",
  },
  {
    id: 4,
    title: "Ensuring Data Protection & Regulatory Compliance",
    desc: "We conduct security audits, implement risk mitigation strategies, and ensure compliance with industry standards like GDPR, HIPAA, and ISO.",
  },
  {
    id: 5,
    title: "Maintaining System Performance & Reliability",
    desc: " Providing 24/7 IT support, proactive maintenance, and real-time monitoring to prevent issues before they impact business operations.",
  },
];

// Register the plugin
gsap.registerPlugin(SplitText);

function ITSupport() {
  //stages
  const [active, setActive] = useState(1);
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
        className="min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat relative py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,40,0.96), rgba(0,0,13,0.7)), url(${ITBanner})`,
        }}
      >
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 text-center py-10">
          <h2
            ref={textRef}
            className="text-white text-3xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-7xl font-bold leading-tight break-words"
          >
            IT Consultancy & Support
          </h2>
          <p className="text-white text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] mt-5 max-w-2xl mx-auto leading-relaxed">
            We provide strategic IT consultancy and dependable support services
            designed to help businesses improve operational efficiency,
            strengthen security, and achieve scalable growth.
          </p>
        </div>
      </section>
      {/* our service cards */}
      <section className="bg-[#f0f4f8] py-12 px-4 ">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-[48px] md:text-5xl font-bold text-[#0B80DA] mb-2 max-w-[1400px] mx-auto">
            Our IT Consultancy & Support Services
          </h2>
          <p className="text-gray-600">
            Expert IT Solutions to Enhance Security, Efficiency, and Business
            Growth.
          </p>
        </div>

        <div
          className="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto h-auto"
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
                className={`absolute -bottom-1 left-6 right-6  text-black transition-all duration-500 
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

export default ITSupport;
