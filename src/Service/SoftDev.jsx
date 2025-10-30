import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import "../App.css";
import Footer from "../components/Footer/Footer";

//icons
import { FaToolbox } from "react-icons/fa";
import { MdOutlineCloudSync, MdOutlineWeb } from "react-icons/md";
import { FaPen } from "react-icons/fa";

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
//banner
import softwareDev from "../assets/softDev.webp";

//services
const services = [
  {
    id: 1,
    title: "Enterprise Software Development",
    description: "Seamless integration with third-party applications.",
    icon: <FaToolbox className="text-4xl text-[#0B80DA]" />,
  },
  {
    id: 2,
    title: "SaaS (Software as a Service) Solutions",
    description: "Scalable, secure, and accessible ERP systems.",
    icon: <MdOutlineCloudSync className="text-4xl text-[#0B80DA]" />,
  },
  {
    id: 3,
    title: "Web Application Development",
    description: "Tailor-made solutions designed for your business needs.",
    icon: <MdOutlineWeb className="text-4xl text-[#0B80DA]" />,
  },
  {
    id: 4,
    title: "Legacy Software Modernization",
    description: "Seamless integration with third-party applications.",
    icon: <FaPen className="text-4xl text-[#0B80DA]" />,
  },
];

// technologies
const technologies = [
  { id: 1, img: slider1 },
  { id: 2, img: slider2 },
  { id: 3, img: slider3 },
  { id: 4, img: slider4 },
  { id: 5, img: slider5 },
  { id: 6, img: slider6 },
  { id: 7, img: slider7 },
  { id: 8, img: slider8 },
  { id: 9, img: slider9 },
  { id: 10, img: slider10 },
  { id: 11, img: slider11 },
  { id: 12, img: slider12 },
];

// stages
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
    desc: "Launching and integrating software smoothly with minimal business disruption.",
  },
  {
    number: "06.",
    title: "Ongoing Support & Maintenance",
    desc: "Providing regular updates, improvements, and reliable technical support.",
  },
];

gsap.registerPlugin(SplitText);

function SoftDev() {
  const textRef = useRef();

  useEffect(() => {
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
    <div className="overflow-x-hidden">
      {/* Banner Section */}
      <section
        className="bg-cover bg-center bg-no-repeat py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,40,0.96), rgba(0,0,50,0.7)), url(${softwareDev})`,
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2
            ref={textRef}
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[800] leading-tight max-w-4xl mx-auto"
          >
            Custom Software for Business Growth
          </h2>
          <p className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[22px] text-gray-200 mt-6 max-w-3xl mx-auto leading-relaxed">
            We develop scalable, secure, and high performance custom software
            solutions tailored to your business needs, ensuring seamless
            integration, enhanced efficiency, and long-term growth.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#f0f4f8] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#0B80DA] mb-3">
            Our Custom Software Services
          </h2>
          <p className="text-gray-600 text-[16px] md:text-[18px]">
            Our Expertise in Custom Software Development
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-white rounded-lg shadow-md p-6 transition-all duration-300 transform hover:scale-[1.03] group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-[#EF6025] to-[#16A87A] transition-opacity duration-300 rounded-lg"></div>
              <div className="relative z-10 text-left">
                <div className="bg-gray-100 w-14 h-14 flex items-center justify-center rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-[22px] font-semibold text-[#0B80DA] mb-2">
                  {service.title}
                </h3>
                <p className="text-[16px] text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-[#0b80da] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-white mb-3">
            Technologies We Use
          </h2>
          <p className="text-gray-200 text-[16px] md:text-[18px]">
            Powering Your Software with the Latest Tech
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-[1400px] mx-auto">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="bg-white rounded-md shadow hover:shadow-lg transition p-6 flex items-center justify-center"
            >
              <img
                src={tech.img}
                alt="Technology"
                className="h-16 sm:h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Stages Section */}
      <section className="py-16 bg-[#eceff4] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] text-[#0B80DA] font-bold text-center mb-12">
            Stages of Working With Us
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 p-10 relative rounded-md shadow-sm"
              >
                <span
                  className="absolute top-3 left-4 text-gray-100 font-extrabold"
                  style={{ fontSize: "80px" }}
                >
                  {step.number}
                </span>
                <div className="mt-12 relative">
                  <h3 className="text-[20px] font-bold text-[#0B80DA] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-[16px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default SoftDev;
