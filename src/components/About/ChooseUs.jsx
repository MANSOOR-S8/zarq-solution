import React, { useState } from "react";

const features = [
  {
    title: "Best Quality Designs",
    content:
      "We craft visually stunning, user-friendly designs that enhance engagement and ensure a seamless user experience. Our designs are tailored to your brand’s identity and business goals.",
  },
  {
    title: "24x7 Live Support",
    content:
      "Our dedicated support team is available around the clock to assist you with any queries or technical issues, ensuring smooth and uninterrupted operations.",
  },
  {
    title: "Result Oriented Projects",
    content:
      "We focus on delivering measurable outcomes by combining strategic planning, innovation, and the latest technology to drive your business forward.",
  },
  {
    title: "Award Winning Support Team",
    content:
      "Recognized for excellence, our support team goes above and beyond to provide quick and efficient solutions, ensuring customer satisfaction at every step.",
  },
  {
    title: "Best ROI Techniques",
    content:
      "We implement data-driven strategies and proven methodologies to maximize your return on investment, helping you achieve sustainable growth.",
  },
  {
    title: "Experienced Professionals",
    content:
      "Our team consists of highly skilled experts with years of industry experience, ensuring that you receive top-notch solutions tailored to your needs.",
  },
];

const img =
  "https://zarqsolution.com/wp-content/uploads/2020/01/why-choose-us.jpg";

function ChooseUs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-[#eceff4] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div data-aos="fade-right">
          <img
            src={img}
            alt="Why Choose Us"
            className="w-full h-[700px] rounded-md shadow-md object-cover"
          />
        </div>

        {/* Text Section */}
        <div data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B80DA] mb-3">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 mb-6 text-[16px] ">
            Innovative solutions, expert team, and seamless technology — Zarq
            Solution delivers excellence for your success.
          </p>

          <div className="bg-white rounded-lg shadow-md p-5 space-y-4">
            {features.map((item, index) => {
              const isOpen = index === activeIndex;

              return (
                <div
                  key={index}
                  className={`transition-all duration-300 ${
                    isOpen ? "bg-[#ffffff] p-4 rounded" : "p-2"
                  }`}
                >
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleItem(index)}
                  >
                    <p
                      className={`font-semibold text-[16px] md:text-[18px] ${
                        isOpen ? "text-[#0B80DA]" : "text-black "
                      }`}
                    >
                      {item.title}
                    </p>

                    <div className="text-xl text-[#0B80DA]">
                      {isOpen ? (
                        <span className="font-bold text-2xl">−</span>
                      ) : (
                        <span className="font-bold text-2xl">+</span>
                      )}
                    </div>
                  </div>

                  {isOpen && item.content && (
                    <p className="mt-3 text-black text-[15px]">
                      {item.content}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
