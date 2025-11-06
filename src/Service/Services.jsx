import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import {
  FaLaptopCode,
  FaShoppingCart,
  FaChartLine,
  FaPencilRuler,
  FaMobileAlt,
  FaCogs,
  FaHeadset,
  FaCloud,
} from "react-icons/fa";

//images
import serviceImg from "../assets/servicesimg.webp";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building fast, responsive, and user-friendly websites that enhance digital presence and customer engagement.",
    icon: <FaLaptopCode className="text-4xl text-[#0B80DA]" />,
    link: "/WebDevelopment",
  },
  {
    id: 2,
    title: "E-Commerce Solutions",
    description:
      "Building secure, high-converting e-commerce platforms with integrated payment gateways and custom features.",
    icon: <FaShoppingCart className="text-4xl text-[#0B80DA]" />,
    link: "/ECommerceSolution",
  },
  {
    id: 3,
    title: "Digital Marketing (SEO)",
    description:
      "Boosting online visibility with data-driven SEO strategies, content marketing, and targeted campaigns.",
    icon: <FaChartLine className="text-4xl text-[#0B80DA]" />,
    link: "/DigitalMarketing",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Delivering intuitive, aesthetically pleasing, and functional designs that enhance user interaction and satisfaction.",
    icon: <FaPencilRuler className="text-4xl text-[#0B80DA]" />,
    link: "/UIUXDesign",
  },
  {
    id: 5,
    title: "Mobile App Development",
    description:
      "Creating high-performance mobile apps with seamless user experience for both Android and iOS platforms.",
    icon: <FaMobileAlt className="text-4xl text-[#0B80DA]" />,
    link: "/MobileAppDevelopment",
  },
  {
    id: 6,
    title: "Custom Software Development",
    description:
      "We craft tailored software solutions that optimize your business processes, improve efficiency, and drive innovation.",
    icon: <FaCogs className="text-4xl text-[#0B80DA]" />,
    link: "/CustomSoftwareDevelopment",
  },
  {
    id: 7,
    title: "IT Consultancy & Support",
    description:
      "Providing expert IT consultation and round-the-clock support to ensure smooth business operations.",
    icon: <FaHeadset className="text-4xl text-[#0B80DA]" />,
    link: "/ITConsultancySupport",
  },
  {
    id: 8,
    title: "Cloud Solutions & DevOps",
    description:
      "Optimizing cloud infrastructure and implementing DevOps strategies for seamless deployment and scalability.",
    icon: <FaCloud className="text-4xl text-[#0B80DA]" />,
    link: "/CloudSolutionDevOps",
  },
];

function Services() {
  return (
    <div className="parent">
      <section className="relative flex items-center justify-center min-h-[80vh] w-full overflow-hidden px-3 sm:px-6 lg:px-12">
        {/* Background Gradient with Image */}
        <div
          className="absolute inset-0 py-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,40,0.7), rgba(0,0,50,0.7)), url(${serviceImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Floating Decorative Circles */}
        {/* <div className="absolute inset-0 ">
          <div className="absolute top-10 left-5 sm:top-16 sm:left-16 md:top-24 md:left-24 w-36 h-36 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-cyan-300/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-5 sm:bottom-16 sm:right-16 md:bottom-24 md:right-24 w-44 h-44 sm:w-72 sm:h-72 md:w-[500px] md:h-[500px] bg-blue-300/20 rounded-full blur-3xl animate-float-delayed"></div>
        </div> */}

        {/* Content */}
        <div className="relative z-10 text-center flex flex-col items-center justify-center space-y-6 max-w-3xl w-full pt-12">
          <h1
            className="font-extrabold text-white leading-tight text-4xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl px-2"
            data-aos="fade-up"
          >
            We provide a wide range of Services
          </h1>

          <p
            className="text-white max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We build innovative web, mobile, and software solutions that fuel
            business growth tailored for performance, quality, and lasting
            impact.
          </p>

          {/* Button */}
        </div>
      </section>
      <section>
        <div className="our-projects">
          <section className="bg-[#fff] py-12 px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#0B80DA]  mb-2">
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Our Services
                </span>
              </h2>
              <p className="text-gray-600">
                Our Services: Innovating Digital Solutions for Your Success
              </p>
            </div>

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-16 px-4 lg:px-5">
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

                  <div className="mt-6">
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-[#0B80DA] font-medium hover:underline transition-all"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default Services;
