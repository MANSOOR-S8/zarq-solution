import "../App.css";
import { useEffect, useRef } from "react";
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
    number: "01.",
    title: "Our IT Consultancy & Support Process",
    desc: "We evaluate your current IT infrastructure, pinpoint challenges, and uncover opportunities for digital transformation.",
  },
  {
    number: "02.",
    title: "Developing a Roadmap for IT Enhancement",
    desc: "Our experts create a customized IT strategy aligned with your business goals, ensuring long-term efficiency and scalability.",
  },
  {
    number: "03.",
    title: "Deploying Tailored IT Solutions",
    desc: "We seamlessly integrate new technologies, software, and systems while minimizing operational disruptions.",
  },
  {
    number: "04.",
    title: "Ensuring Data Protection & Regulatory Compliance",
    desc: "We conduct security audits, implement risk mitigation strategies, and ensure compliance with industry standards like GDPR, HIPAA, and ISO.",
  },
  {
    number: "05.",
    title: "Maintaining System Performance & Reliability",
    desc: " Providing 24/7 IT support, proactive maintenance, and real-time monitoring to prevent issues before they impact business operations.",
  },
  {
    number: "06.",
    title: "Enhancing IT Efficiency & Preparing for Growth",
    desc: "We continuously refine your IT infrastructure to improve performance, reduce costs, and ensure your technology adapts to future business needs.",
  },
];

// Register the plugin
gsap.registerPlugin(SplitText);

function ITSupport() {
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
      <section className="bg-[#f0f4f8] py-12 px-4 max-w-[1400px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-[48px] md:text-5xl font-bold text-[#0B80DA]  mb-2">
            Our IT Consultancy & Support Services
          </h2>
          <p className="text-gray-600">
            Expert IT Solutions to Enhance Security, Efficiency, and Business
            Growth.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto h-auto"
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

      {/* stages section */}
      <section className="py-12 bg-[#eceff4] ">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-3xl md:text-3xl lg:text-[48px] text-[#0B80DA] font-bold text-center mb-10">
            Our IT Consultancy & Support Process
          </h2>
          {/* Cards */}
          <div className="grid md:grid-cols-3 " data-aos="fade-left">
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
                <div className="mt-16">
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

export default ITSupport;
