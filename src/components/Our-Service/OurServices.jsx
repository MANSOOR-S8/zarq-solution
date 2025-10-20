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
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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

function OurServices() {
  return (
    <section className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-3">
            We offer innovative and tailored digital solutions to help you grow
            your business efficiently and effectively.
          </p>
        </div>

        {/* Services cards */}
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
      </div>
    </section>
  );
}

export default OurServices;
