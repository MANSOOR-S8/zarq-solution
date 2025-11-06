import styles from "./css/services.module.css";
import { useEffect, useRef, useState } from "react";
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
    id: 1,
    title: "Requirement Analysis",
    desc: "Identifying business needs, goals, and challenges to build the right solution.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    desc: "Creating user-friendly and visually appealing interfaces for seamless interactions.",
  },
  {
    id: 3,
    title: "Development & Coding",
    desc: "Building scalable, high-performance software using modern technologies.",
  },
  {
    id: 4,
    title: "Testing & Quality Assurance",
    desc: "Ensuring reliability, security, and bug-free performance with thorough testing.",
  },
  {
    id: 5,
    title: "Deployment & Integration",
    desc: " Launching and integrating software smoothly with minimal business disruption.",
  },
];

gsap.registerPlugin(SplitText);

function CloudSolutionDevOps() {
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

  //tech cards
  const firstRow = technologies.slice(0, 12);

  //stages
  const [active, setActive] = useState(1);

  return (
    <div className="w-full">
      {/* ======= Banner Section ======= */}
      <section className="relative flex items-center justify-center min-h-[80vh] w-full overflow-hidden px-3 sm:px-6 lg:px-12">
        {/* Background Gradient with Image */}
        <div
          className="absolute inset-0 py-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,40,0.7), rgba(0,0,50,0.7)), url(${cloudBanner})`,
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
            Cloud Solutions & DevOps
          </h1>

          <p
            className="text-white max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We help businesses leverage cloud computing and modern DevOps to
            boost agility, streamline workflows, and deliver software faster and
            more reliably empowering teams to innovate without limits.
          </p>
        </div>
      </section>

      {/* ======= Services Section ======= */}
      <div className="our-projects">
        <section className="bg-[#fff] py-12 px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#0B80DA]  mb-2">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Our Cloud Solutions & DevOps Services
              </span>
            </h2>
            <p className="text-gray-600">
              Scalable, Secure, and Automated Cloud & DevOps Solutions for
              Business Growth
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

      {/* ======= Technologies Section ======= */}

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
              {/* Repeat multiple times for seamless looping */}
              {[...Array(3)].map((_, loopIndex) =>
                firstRow.map((item, index) => (
                  <img
                    key={`row1-${loopIndex}-${item.id}-${index}`}
                    src={item.img}
                    alt=""
                    className={`${styles["techCard-img"]} filter grayscale hover:grayscale-0`}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* stages section */}
      <section className="bg-white py-16 mt-12 ">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 sm:grid-cols-2 lg:flex lg:flex-row overflow-hidden lg:px-4">
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

      <Footer />
    </div>
  );
}

export default CloudSolutionDevOps;
