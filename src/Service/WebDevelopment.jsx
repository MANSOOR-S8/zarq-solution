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

//banner image
import webDev from "../assets/webDev.webp";

// data arrays
const services = [
  {
    id: 1,
    title: "Custom Website Development",
    description:
      "We design and develop fully customized websites that reflect your brand identity and meet your business objectives. Our solutions ensure a seamless user experience, high performance, and strong security for long-term success.",
    icon: <IoCode className="text-4xl text-[#0B80DA]" />,
  },
  {
    id: 2,
    title: "CMS Development",
    description:
      "Our CMS solutions empower businesses with easy-to-use, flexible, and scalable platforms like WordPress, Shopify, and Joomla, allowing you to manage website content effortlessly without coding knowledge.",
    icon: <FaQrcode className="text-4xl text-[#0B80DA]" />,
  },
  {
    id: 3,
    title: "Progressive Web Apps (PWA)",
    description:
      "We develop modern Progressive Web Apps that combine the best of web and mobile, offering fast loading speeds and offline functionality.",
    icon: <MdDeveloperMode className="text-4xl text-[#0B80DA]" />,
  },
  {
    id: 4,
    title: "Website Redesign & Optimization",
    description:
      "Transform your outdated website with a fresh design, faster load times, and improved user experience that boosts engagement and SEO.",
    icon: <FaPaintBrush className="text-4xl text-[#0B80DA]" />,
  },
  {
    id: 5,
    title: "API Development & Integration",
    description:
      "Enhance your site’s functionality with third-party services, payment gateways, and custom APIs for seamless automation.",
    icon: <MdWebhook className="text-4xl text-[#0B80DA]" />,
  },
  {
    id: 6,
    title: "Website Maintenance & Support",
    description:
      "We provide ongoing technical support, updates, and performance optimization to ensure your site stays secure and efficient.",
    icon: <MdOutlineSupportAgent className="text-4xl text-[#0B80DA]" />,
  },
];

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
  { id: 13, img: slider13 },
  { id: 14, img: slider14 },
  { id: 15, img: slider15 },
  { id: 16, img: slider16 },
  { id: 17, img: slider17 },
  { id: 18, img: slider18 },
];

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
    desc: "Launching and integrating software smoothly with minimal disruption.",
  },
  {
    number: "06.",
    title: "Ongoing Support & Maintenance",
    desc: "Providing regular updates, improvements, and reliable technical support.",
  },
];

gsap.registerPlugin(SplitText);

function WebDevelopment() {
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
    return () => split.revert();
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-no-repeat py-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,40,0.96), rgba(0,0,50,0.7)), url(${webDev})`,
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <div className=" pt-12">
            <h2 className="text-4xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-7xl font-[800] text-white leading-tight max-w-3xl mx-auto">
              <span ref={textRef}>Web Development Services</span>
            </h2>
            <p className="text-[15px] sm:text-[16px] md:text-[18px] text-gray-200 mt-6 max-w-2xl mx-auto leading-relaxed">
              Building lightning fast, user-centric websites that don’t just
              look great they convert. We craft high-performance digital
              experiences optimized for speed, usability, and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#f0f4f8] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto text-center mb-10 ">
          <h2 className="lg:text-[48px] sm:text-4xl text-4xl font-[500] text-[#0B80DA] mb-3">
            We Provide a Wide Range of Services
          </h2>
          <p className="text-gray-600 sm:text-3xl ">
            From custom web apps to full-scale CMS and integrations our team
            delivers innovative, secure, and scalable digital solutions that
            drive business growth.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-[1400px] mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-[1.02] group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-[#EF6025] to-[#16A87A] transition-opacity duration-300 rounded-lg"></div>
              <div className="relative z-10 text-left">
                <div className="bg-gray-100 w-14 h-14 flex items-center justify-center rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-[20px] font-semibold text-[#0B80DA] mb-2">
                  {service.title}
                </h3>
                <p className="text-[16px] text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-[#0b80da] py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className=" sm:text-[36px] lg:text-[48px] font-[500] text-white mb-3">
            Technologies We Use
          </h2>
          <p className="text-gray-200 mb-10">
            Powering your software with the latest tech
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
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
        </div>
      </section>

      {/* Stages Section */}
      <section className="py-16 bg-[#eceff4]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="lg:text-[48px] md:text-3xl text-[#0B80DA] font-[500] text-center mb-10">
            Stages of Working With Us
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 p-10 relative rounded-md shadow-sm"
              >
                <span
                  className="absolute top-4 left-5 text-gray-100 font-extrabold"
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

export default WebDevelopment;
