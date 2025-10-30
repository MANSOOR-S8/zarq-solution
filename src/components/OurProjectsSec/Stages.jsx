// import React from "react";

// const steps = [
//   {
//     number: "01.",
//     title: "Discover",
//     desc: "Analyzing client requirements, studying market trends, and identifying potential growth opportunities to develop a tailored and effective solution.",
//   },
//   {
//     number: "02.",
//     title: "Define",
//     desc: "Defining the project's scope, objectives, and detailed requirements to ensure alignment with client expectations and a clear development roadmap.",
//   },
//   {
//     number: "03.",
//     title: "Design",
//     desc: "Designing intuitive, visually appealing, and user-friendly UI/UX interfaces that enhance user experience, accessibility, and overall engagement.",
//   },
//   {
//     number: "04.",
//     title: "Develop",
//     desc: "Developing robust, scalable, and efficient software using industry best practices, modern technologies, and clean coding standards.",
//   },
//   {
//     number: "05.",
//     title: "Deploy",
//     desc: "Deploying the product seamlessly while ensuring compatibility, security, and smooth integration with existing systems.",
//   },
//   {
//     number: "06.",
//     title: "Deliver",
//     desc: "Conducting thorough testing, performance optimization, and ongoing support to maintain high quality, reliability, and client satisfaction.",
//   },
// ];

// function Stages() {
//   return (
//     <section className="py-12 bg-[#eceff4]">
//       <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
//         <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl mb-10 text-center">
//           <span className=" bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
//             Stages of Working With Us
//           </span>
//         </h2>

//         {/*  */}
//         <div
//           className="grid md:grid-cols-3 border border-gray-200"
//           data-aos="fade-up"
//           data-aos-duration="3000"
//         >
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               className="bg-white border border-gray-200 p-10 relative"
//             >
//               {/* Number background */}
//               <span className="text-7xl font-extrabold text-gray-100 absolute top-6 left-5">
//                 {step.number}
//               </span>

//               {/* Content */}
//               <div className="mt-12 relative">
//                 <h3 className="text-[20px] font-bold text-[#0B80DA] mb-3">
//                   {step.title}
//                 </h3>
//                 <p className="text-gray-600 text-[18px] leading-relaxed">
//                   {step.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Stages;

import React, { useState } from "react";

function Stages() {
  const steps = [
    {
      id: 1,
      title: "Discover",
      desc: "Understanding client needs and market trends for effective solutions.",
    },
    {
      id: 2,
      title: "Define",
      desc: "Select a tech stack tailored for your business goals.",
    },
    {
      id: 3,
      title: "Design",
      desc: "Craft beautiful, functional UI/UX designs.",
    },
    {
      id: 4,
      title: "Develop",
      desc: "Bring your digital vision to life through expert development.",
    },
    {
      id: 5,
      title: "Deploy",
      desc: "Launch with confidence and optimize for growth.",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <section className="bg-white py-16 mt-12 pb-19">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 sm:grid-cols-2 lg:flex lg:flex-row overflow-hidden">
        {steps.map((step) => (
          <div
            key={step.id}
            onMouseEnter={() => setActive(step.id)}
            onMouseLeave={() => setActive(null)}
            className={`group cursor-pointer flex flex-col justify-between items-start p-8 border-r border-gray-200 
              transition-all duration-500 ease-in-out min-h-[220px]
              ${
                active === step.id
                  ? "lg:flex-[2.5] bg-gray-50"
                  : "lg:flex-[1] bg-white"
              }
            `}
            style={{ transitionProperty: "flex-grow, background-color, color" }}
          >
            {/* Step number */}
            <h1
              className={`block text-4xl md:text-5xl font-extrabold mb-4 transition-all duration-500 ${
                active === step.id ? "text-blue-500" : "text-gray-400"
              }`}
            >
              0{step.id}
            </h1>

            {/* Text */}
            <div className="transition-all duration-500">
              <h2
                className={`text-lg sm:text-xl font-semibold mb-2 ${
                  active === step.id ? "text-gray-900" : "text-gray-700"
                }`}
              >
                {step.title}
              </h2>
              <p
                className={`text-sm sm:text-base text-gray-600 leading-snug transition-all duration-500 ${
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
  );
}

export default Stages;
