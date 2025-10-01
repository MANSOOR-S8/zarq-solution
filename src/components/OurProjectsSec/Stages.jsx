import React from "react";

const steps = [
  {
    number: "01.",
    title: "Discover",
    desc: "Analyzing client requirements, studying market trends, and identifying potential growth opportunities to develop a tailored and effective solution.",
  },
  {
    number: "02.",
    title: "Define",
    desc: "Defining the project's scope, objectives, and detailed requirements to ensure alignment with client expectations and a clear development roadmap.",
  },
  {
    number: "03.",
    title: "Design",
    desc: "Designing intuitive, visually appealing, and user-friendly UI/UX interfaces that enhance user experience, accessibility, and overall engagement.",
  },
  {
    number: "04.",
    title: "Develop",
    desc: "Developing robust, scalable, and efficient software using industry best practices, modern technologies, and clean coding standards.",
  },
  {
    number: "05.",
    title: "Deploy",
    desc: "Deploying the product seamlessly while ensuring compatibility, security, and smooth integration with existing systems.",
  },
  {
    number: "06.",
    title: "Deliver",
    desc: "Conducting thorough testing, performance optimization, and ongoing support to maintain high quality, reliability, and client satisfaction.",
  },
];

function Stages() {
  return (
    <section className="py-12 bg-[#eceff4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0B80DA] mb-10">
          Stages of Working With Us
        </h2>

        {/*  */}
        <div
          className="grid md:grid-cols-3 border border-gray-200"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-10 relative"
            >
              {/* Number background */}
              <span className="text-7xl font-extrabold text-gray-100 absolute top-6 left-5">
                {step.number}
              </span>

              {/* Content */}
              <div className="mt-12 relative">
                <h3 className="text-[20px] font-bold text-[#0B80DA] mb-3">
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
  );
}

export default Stages;
