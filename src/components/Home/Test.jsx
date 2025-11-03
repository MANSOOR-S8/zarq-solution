// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import {
//   FaLaptopCode,
//   FaShoppingCart,
//   FaChartLine,
//   FaPencilRuler,
//   FaMobileAlt,
//   FaCogs,
// } from "react-icons/fa";
// import { GiGearHammer } from "react-icons/gi";
// import { ArrowRight } from "lucide-react";

// import { Link } from "react-router";

// const services = [
//   {
//     id: 1,
//     title: "Web Development",
//     description:
//       "Building fast, responsive, and user-friendly websites that enhance digital presence and customer engagement.",
//     icon: <FaLaptopCode className="text-4xl text-[#0B80DA]" />,
//     link: "/WebDevelopment",
//     animation: "fade-up",
//   },
//   {
//     id: 2,
//     title: "E-Commerce Solutions",
//     description:
//       "Building secure, high-converting e-commerce platforms with integrated payment gateways and custom features.",
//     icon: <FaShoppingCart className="text-4xl text-[#0B80DA]" />,
//     link: "/ECommerce",
//     animation: "zoom-in",
//   },
//   {
//     id: 3,
//     title: "Digital Marketing (SEO)",
//     description:
//       "Boosting online visibility with data-driven SEO strategies, content marketing, and targeted campaigns.",
//     icon: <FaChartLine className="text-4xl text-[#0B80DA]" />,
//     link: "/DigitalMarket",
//     animation: "fade-right",
//   },
//   {
//     id: 4,
//     title: "UI/UX Design",
//     description:
//       "Designing intuitive user experiences and modern interfaces that improve user satisfaction and engagement.",
//     icon: <FaPencilRuler className="text-4xl text-[#0B80DA]" />,
//     link: "/OurUI",
//     animation: "fade-left",
//   },
//   {
//     id: 5,
//     title: "Mobile App Development",
//     icon: <FaMobileAlt className="text-4xl text-[#0B80DA]" />,
//     link: "/MobApp",
//     animation: "fade-down",
//   },
//   {
//     id: 6,
//     title: "Custom Software Development",
//     icon: <FaCogs className="text-4xl text-[#0B80DA]" />,
//     link: "/SoftDev",
//     animation: "zoom-out",
//   },
// ];

// const TravelGrid = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div className="max-w-[1400px] mx-auto px-6 py-10">
//       <div className="travel-wrapper">
//         <div className="parent p-3">
//           {services.map((service, index) => (
//             <div
//               key={service.id}
//               className={`div${index + 1} service-card relative group`} // relative added
//               data-aos={service.animation}
//               data-aos-delay={index * 100}
//             >
//               <Link
//                 to={service.link}
//                 className="hover:translate-x-1 transition-transform duration-300"
//               >
//                 <div className="flex flex-col h-full justify-between items-start gap-3 p-4">
//                   <div>
//                     <div>{service.icon}</div>
//                     <h3 className="text-xl font-semibold text-gray-900 mt-2">
//                       {service.title}
//                     </h3>
//                     <p className="service-text text-gray-600 leading-relaxed mt-2">
//                       {service.description}
//                     </p>
//                   </div>

//                   {/* Arrow Icon (Bottom Right) */}
//                   <div className="mt-4">
//                     <p
//                       to={service.link}
//                       className="inline-flex items-center text-[#0B80DA] font-medium hover:underline transition-all"
//                     >
//                       Learn More
//                       <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}

//           <div className="div7 intro-card flex flex-col p-8">
//             <div data-aos="fade-left">
//               <h2 className="text-4xl md:text-4xl text-center font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
//                 Our Services
//               </h2>
//               <p className="text-gray-700 leading-relaxed max-w-lg">
//                 At Zarq Solution, we blend creativity with technology to craft
//                 meaningful digital products. From design to deployment, our
//                 mission is to help your business innovate, grow, and thrive in
//                 the digital age.
//               </p>
//             </div>
//             <div className="gear-container" data-aos="fade-up-left">
//               <GiGearHammer className="gear gear1" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TravelGrid;
