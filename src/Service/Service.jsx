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
    link: "/ECommerce",
  },
  {
    id: 3,
    title: "Digital Marketing (SEO)",
    description:
      "Boosting online visibility with data-driven SEO strategies, content marketing, and targeted campaigns.",
    icon: <FaChartLine className="text-4xl text-[#0B80DA]" />,
    link: "/DigitalMArket",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Delivering intuitive, aesthetically pleasing, and functional designs that enhance user interaction and satisfaction.",
    icon: <FaPencilRuler className="text-4xl text-[#0B80DA]" />,
    link: "/OurUI",
  },
  {
    id: 5,
    title: "Mobile App Development",
    description:
      "Creating high-performance mobile apps with seamless user experience for both Android and iOS platforms.",
    icon: <FaMobileAlt className="text-4xl text-[#0B80DA]" />,
    link: "/MobApp",
  },
  {
    id: 6,
    title: "Custom Software Development",
    description:
      "We craft tailored software solutions that optimize your business processes, improve efficiency, and drive innovation.",
    icon: <FaCogs className="text-4xl text-[#0B80DA]" />,
    link: "/SoftDev",
  },
  {
    id: 7,
    title: "IT Consultancy & Support",
    description:
      "Providing expert IT consultation and round-the-clock support to ensure smooth business operations.",
    icon: <FaHeadset className="text-4xl text-[#0B80DA]" />,
    link: "/ITSupport",
  },
  {
    id: 8,
    title: "Cloud Solutions & DevOps",
    description:
      "Optimizing cloud infrastructure and implementing DevOps strategies for seamless deployment and scalability.",
    icon: <FaCloud className="text-4xl text-[#0B80DA]" />,
    link: "/Cloud",
  },
];

function Service() {
  return (
    <section>
      <div
        className=" overflow-x-hidden bg-white"
        style={{
          backgroundImage: `linear-gradient(rgba(1, 1, 40, 0.87), rgba(0, 0, 0, 0.6)), url(${serviceImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[50px] text-center pt-24  font-bold break-words leading-tight max-w-3xl mx-auto hed-text">
            <span className="text-white">
              We provide a wide range of Services
            </span>
          </h1>
          <p className="text-white text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-center pt-4 sm:pt-6 break-words leading-relaxed max-w-2xl mx-auto ">
            We provide a comprehensive range of services, including web and
            mobile development, software solutions, and IT consulting. Our
            expert team is dedicated to delivering innovative, high-quality, and
            customized solutions that drive business success and enhance digital
            experiences.
          </p>
        </div>
      </div>
      <div className="our-projects">
        <section className="bg-[#f0f4f8] py-12 px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B80DA]  mb-2">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-gray-600">
              Our Services: Innovating Digital Solutions for Your Success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-16">
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
  );
}

export default Service;
