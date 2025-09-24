import "../App.css";
import { useEffect, useRef } from "react";
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
    title: "IT Strategy & Digital Transformation  ",
    description:
      "We develop IT roadmaps and digital transformation strategies to align technology with business goals.",
    icon: <IoCode className="text-3xl text-[#0B80DA] " />,
  },
  {
    id: 2,
    title: "Cloud Consulting & Migration ",
    description:
      "Guiding businesses in adopting cloud solutions like AWS, Azure, and Google Cloud for improved scalability and performance. ",
    icon: <FaQrcode className="text-3xl text-[#0B80DA] " />,
  },
  {
    id: 3,
    title: "Cybersecurity Consulting ",
    description:
      "Providing security audits, risk assessments, and compliance solutions to protect your data and IT infrastructure. ",
    icon: <MdDeveloperMode className="text-3xl text-[#0B80DA] " />,
  },
  {
    id: 4,
    title: "Infrastructure & Network Management",
    description:
      "Designing, optimizing, and managing IT infrastructure to ensure seamless connectivity and operational efficiency. ",
    icon: <FaPaintBrush className="text-3xl text-[#0B80DA] " />,
  },
  {
    id: 5,
    title: "IT Helpdesk & Technical Support  ",
    description:
      "Offering 24/7 IT support, troubleshooting, and remote assistance to resolve technical issues quickly. ",
    icon: <DiGitBranch className="text-3xl text-[#0B80DA] " />,
  },
  {
    id: 6,
    title: "Software & System Integration ",
    description:
      "Ensuring smooth integration of third-party software, APIs, and legacy systems for enhanced functionality.  ",
    icon: <MdOutlineSupportAgent className="text-3xl text-[#0B80DA] " />,
  },
  {
    id: 7,
    title: "Business Continuity & Disaster Recovery  ",
    description:
      "Developing backup and disaster recovery plans to ensure data security and business continuity in case of system failures.  ",
    icon: <DiGitBranch className="text-3xl text-[#0B80DA] " />,
  },
  {
    id: 8,
    title: "IT Compliance & Risk Management ",
    description:
      "Helping businesses meet industry regulations (GDPR, HIPAA, ISO) and mitigate IT-related risks.  ",
    icon: <DiGitBranch className="text-3xl text-[#0B80DA] " />,
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
      <section>
        <div className="banner-sec overflow-x-hidden bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[47px] text-center   break-words leading-tight max-w-3xl mx-auto hed-text pt-10">
              <span ref={textRef} className=" font-[900]  text-bold ">
                IT Consultancy & Support
              </span>
            </h2>

            {/* <h1 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[50px] text-center  font-bold break-words leading-tight max-w-3xl mx-auto hed-text"></h1> */}
            <p className="text-[15px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-center pt-4 sm:pt-6 break-words leading-relaxed max-w-2xl mx-auto ">
              We provide strategic{" "}
              <span className="font-bold text-black"> IT consultancy</span> and
              dependable{" "}
              <span className="font-bold text-black"> support services </span>{" "}
              designed to help businesses improve operational efficiency,
              strengthen security, and achieve scalable growth. Our experts work
              closely with your team to align technology with business goals,
              ensure infrastructure reliability, and deliver proactive support
              that minimizes downtime and maximizes performance.
            </p>
          </div>
        </div>
      </section>
      {/* our service cards */}
      <section className="bg-[#f0f4f8] py-12 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#0B80DA]  mb-2">
            Our IT Consultancy & Support Services
          </h2>
          <p className="text-gray-600">
            Expert IT Solutions to Enhance Security, Efficiency, and Business
            Growth.
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

      {/* stages section */}
      <section className="py-12 bg-[#eceff4] ">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl text-[#0B80DA] font-bold text-center mb-10">
            Our IT Consultancy & Support Process
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

export default ITSupport;
