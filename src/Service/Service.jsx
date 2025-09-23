import Footer from "../components/Footer/Footer";

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

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building fast, responsive, and user-friendly websites that enhance digital presence and customer engagement.",
    icon: <FaLaptopCode className="text-3xl text-[#0B80DA] " />,
  },
  {
    id: 2,
    title: "E-Commerce Solutions",
    description:
      "Building secure, high-converting e-commerce platforms with integrated payment gateways and custom features.",
    icon: <FaShoppingCart className="text-3xl text-[#0B80DA] " />,
  },
  {
    id: 3,
    title: "Digital Marketing (SEO)",
    description:
      "Boosting online visibility with data-driven SEO strategies, content marketing, and targeted campaigns.",
    icon: <FaChartLine className="text-3xl text-[#0B80DA] " />,
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Delivering intuitive, aesthetically pleasing, and functional designs that enhance user interaction and satisfaction.",
    icon: <FaPencilRuler className="text-3xl text-[#0B80DA] " />,
  },
  {
    id: 5,
    title: "Mobile App Development",
    description:
      "Creating high-performance mobile apps with seamless user experience for both Android and iOS platforms.",
    icon: <FaMobileAlt className="text-3xl text-[#0B80DA] " />,
  },
  {
    id: 6,
    title: "Custom Software Development",
    description:
      "We craft tailored software solutions that optimize your business processes, improve efficiency, and drive innovation.",
    icon: <FaCogs className="text-3xl text-[#0B80DA] " />,
  },
  {
    id: 7,
    title: "IT Consultancy & Support",
    description:
      "Providing expert IT consultation and round-the-clock support to ensure smooth business operations.",
    icon: <FaHeadset className="text-3xl text-[#0B80DA] " />,
  },
  {
    id: 8,
    title: "Cloud Solutions & DevOps",
    description:
      "Optimizing cloud infrastructure and implementing DevOps strategies for seamless deployment and scalability.",
    icon: <FaCloud className="text-3xl text-[#0B80DA] " />,
  },
];

function Service() {
  return (
    <section>
      <div className="banner-sec overflow-x-hidden bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[50px] text-center pt-24  font-bold break-words leading-tight max-w-3xl mx-auto hed-text">
            We provide a wide range of Services
          </h1>
          <p className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-center pt-4 sm:pt-6 break-words leading-relaxed max-w-2xl mx-auto ">
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
            <h2 className="text-3xl font-bold text-[#0B80DA]  mb-2">
              Our Services
            </h2>
            <p className="text-gray-600">
              Our Services: Innovating Digital Solutions for Your Success
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
      </div>
      <div className="footer">
        <Footer />
      </div>
    </section>
  );
}

export default Service;
