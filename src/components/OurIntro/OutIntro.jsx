import React from "react";
import { Link } from "react-router-dom";

function OurIntro() {
  const sideImg = [
    {
      id: 1,
      title: "1st image",
      img: "https://zarqsolution.com/wp-content/uploads/2025/03/Group-143725923.webp",
    },
  ];

  return (
    <section
      className="py-12 bg-cover bg-center bg-no-repeat"
      data-aos="fade-up-left"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* 🔹 Left Content */}
        <div
          className="flex-1 max-w-2xl bg-white/80 p-4 rounded-md lg:pl-8"
          data-aos="fade-right"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B80DA] mb-6">
            Who we are ?
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-8">
            At Zarq Solution, we are a team of passionate and innovative
            technology experts committed to transforming ideas into powerful and
            scalable digital solutions. We specialize in designing and
            developing customized software, dynamic websites, and feature-rich
            mobile applications that drive growth and success.
            <br />
            <br />
            Our mission is to empower businesses with cutting-edge technology,
            ensuring each client’s unique vision is brought to life through
            tailored, high-impact solutions. With a focus on creativity,
            efficiency, and innovation, we strive to deliver exceptional digital
            experiences that set businesses apart in the competitive landscape.
          </p>
          <Link
            to="/Consultation"
            className="inline-block bg-[#0B80DA] text-white font-medium px-6 py-3 rounded-md hover:bg-blue-500 transition"
          >
            GET FREE CONSULTATION
          </Link>
        </div>

        {/* 🔹 Right Side (Image) */}
        <div className="flex-1">
          <img
            src={sideImg[0].img}
            alt="Zarq Solution"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default OurIntro;
