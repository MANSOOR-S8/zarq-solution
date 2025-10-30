import "../App.css";
import { useEffect, useRef } from "react";
import Footer from "../components/Footer/Footer";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

//icons
import { CiCloudOn } from "react-icons/ci";
import { LuDownload } from "react-icons/lu";
import { MdOutlineCloudSync } from "react-icons/md";
import { FaCube } from "react-icons/fa6";
import { RiCodeView } from "react-icons/ri";
import { TbTransformFilled } from "react-icons/tb";
import { RiFlashlightLine } from "react-icons/ri";
import { IoMdTrendingUp } from "react-icons/io";

//images
import slider1 from "../assets/techSlider/googlecloud.webp";
import slider2 from "../assets/techSlider/DigitalOsean.png";
import slider3 from "../assets/techSlider/AWS.png";
import slider4 from "../assets/techSlider/Github.png";
import slider5 from "../assets/techSlider/Azure.png";
//banner
import cloudBanner from "../assets/cloudbanner.webp";

const services = [
  {
    id: 1,
    title: "Cloud Consulting & Strategy",
    description:
      "Guiding businesses in cloud adoption, architecture design, and migration strategies for optimal performance.",
    icon: <CiCloudOn className="text-4xl text-[#0B80DA]" />,
  },
  {
    id: 2,
    title: "Cloud Migration & Deployment",
    description:
      "Seamlessly migrating applications, data, and infrastructure to AWS, Azure, or Google Cloud.",
    icon: <LuDownload className="text-4xl text-[#0B80DA]" />,
  },
  {
    id: 3,
    title: "Multi-Cloud & Hybrid Cloud Solutions",
    description:
      "Implementing flexible cloud strategies that combine on-premises, private, and public cloud environments.",
    icon: <MdOutlineCloudSync className="text-4xl text-[#0B80DA]" />,
  },
  {
    id: 4,
    title: "Containerization & Kubernetes",
    description:
      "Using Docker and Kubernetes to enable containerized applications for faster deployment and scalability.",
    icon: <FaCube className="text-4xl text-[#0B80DA]" />,
  },
  {
    id: 5,
    title: "Infrastructure as Code (IaC)",
    description:
      "Automating infrastructure provisioning using Terraform, Ansible, and CloudFormation.",
    icon: <RiCodeView className="text-4xl text-[#0B80DA]" />,
  },
  {
    id: 6,
    title: "CI/CD Pipeline Implementation",
    description:
      "Developing continuous integration and delivery pipelines to streamline software deployment.",
    icon: <TbTransformFilled className="text-4xl text-[#0B80DA]" />,
  },
  {
    id: 7,
    title: "Serverless Computing & Microservices",
    description:
      "Building serverless applications and microservices architectures for cost efficiency and scalability.",
    icon: <RiFlashlightLine className="text-4xl text-[#0B80DA]" />,
  },
  {
    id: 8,
    title: "DevOps Automation & Monitoring",
    description:
      "Implementing real-time monitoring, logging, and automated workflows for high availability.",
    icon: <IoMdTrendingUp className="text-4xl text-[#0B80DA]" />,
  },
];

const technologies = [
  { id: 1, img: slider1 },
  { id: 2, img: slider2 },
  { id: 3, img: slider3 },
  { id: 4, img: slider4 },
  { id: 5, img: slider5 },
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
    desc: " Launching and integrating software smoothly with minimal business disruption.",
  },
  {
    number: "06.",
    title: "Ongoing Support & Maintenance",
    desc: "Providing regular updates, improvements, and reliable technical support.",
  },
];

gsap.registerPlugin(SplitText);

function Cloud() {
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
    <div className="w-full">
      {/* ======= Banner Section ======= */}
      <section
        className="min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat relative py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,40,0.96), rgba(0,0,13,0.7)), url(${cloudBanner})`,
        }}
      >
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8  text-center">
          <h2
            ref={textRef}
            className="text-white text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-bold leading-tight break-words"
          >
            Cloud Solutions & DevOps
          </h2>
          <p className="text-white text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] mt-5 max-w-2xl mx-auto leading-relaxed">
            We help businesses leverage cloud computing and modern DevOps to
            boost agility, streamline workflows, and deliver software faster and
            more reliably empowering teams to innovate without limits.
          </p>
        </div>
      </section>

      {/* ======= Services Section ======= */}
      <section className="bg-[#f0f4f8] py-12 px-4">
        <div className="text-center mb-10 max-w-[1400px] mx-auto">
          <h2 className="text-3xl sm:text-3xl md:text-5xl lg:text-[48px] font-bold text-[#0B80DA] mb-2">
            Our Cloud Solutions & DevOps Services
          </h2>
          <p className="text-gray-600">
            Scalable, Secure, and Automated Cloud & DevOps Solutions for
            Business Growth.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto"
          data-aos="fade-up"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-white rounded-lg shadow-md p-6 transition-all duration-300 transform hover:scale-[1.02] group overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-[#EF6025] to-[#16A87A] transition-opacity duration-300 rounded-lg z-0" />
              <div className="relative z-10">
                <div className="bg-gray-100 w-14 h-14 flex items-center justify-center rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-[22px] font-semibold text-[#0B80DA] mb-2">
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

      {/* ======= Technologies Section ======= */}
      <section className="bg-[#0b80da] py-12">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="lg:text-[48px] sm:text-3xl text-3xl font-bold text-white">
              Technologies We Use
            </h2>
            <p className="text-gray-200 mt-2">
              Powering Your Software with the Latest Tech
            </p>
          </div>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            data-aos="fade-right"
          >
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

      {/* ======= Process Section ======= */}
      <section className="py-12 bg-[#eceff4]">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-3xl md:text-3xl sm:text-3xl lg:text-[48px] text-[#0B80DA] font-bold text-center mb-10">
            Our UI/UX Design Process
          </h2>

          <div className="grid md:grid-cols-3 gap-6" data-aos="fade-up">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 p-10 relative rounded-lg"
              >
                <span
                  className="absolute top-0 left-3"
                  style={{
                    fontSize: "90px",
                    fontWeight: 800,
                    color: "#f2f4f8",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {step.number}
                </span>
                <div className="mt-17">
                  <h3 className="text-[20px] font-bold text-[#0B80DA] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-[18px] leading-relaxed">
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

export default Cloud;
