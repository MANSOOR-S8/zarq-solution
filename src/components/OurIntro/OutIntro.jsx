// import React, { useRef } from "react";
// import { ScrollEffect } from "../../hooks/ScrollEffect";

import "../../App.css";
import { Link } from "react-router-dom";
import { CheckCircle2, Sparkles, Rocket } from "lucide-react";

//image
import introimg from "../../assets/ourintro.png";

function OurIntro() {
  // const sectionRef = useRef(null);
  // ScrollEffect(sectionRef);

  return (
    <section
      // ref={sectionRef}
      className=" relative overflow-hidden bg-white py-20"
      aria-labelledby="who-we-are-heading"
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-blue-300/10 blur-3xl"></div>
      <div className="pointer-events-none absolute right-0 top-32 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"></div>

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-14 px-6 sm:px-8 lg:px-12">
        {/* Left Content */}
        <div className="relative">
          <h2 className="our-intro text-balance  font-[500] text-3xl sm:text-3xl tracking-tight md:text-4xl lg:text-[48px]">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Who we are
            </span>
            <span className="text-gray-700"> building what’s next</span>
          </h2>

          <p className=" mt-5 text-gray-700 md:text-lg leading-relaxed">
            At Zarq Solution, we are a team of passionate and innovative
            technology experts committed to transforming ideas into powerful and
            scalable digital solutions. We specialize in designing and
            developing customized software, dynamic websites, and feature rich
            mobile applications that drive growth and success.
          </p>

          <p className="mt-4 text-gray-700 md:text-lg leading-relaxed">
            Our mission is to empower businesses with cutting-edge technology,
            ensuring each client’s unique vision is brought to life through
            tailored, high impact solutions.
          </p>

          {/* Highlights */}
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-5  text-blue-500" />
              <span className="text-sm text-gray-800">
                Tailored solutions for web, mobile, and cloud
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Sparkles className="mt-0.5 size-5 text-blue-500" />
              <span className="text-sm text-gray-800">
                Human-centered UX with measurable ROI
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Rocket className="mt-0.5 size-5 text-blue-500" />
              <span className="text-sm text-gray-800">
                Lean delivery, rapid iterations, and quality
              </span>
            </li>
          </ul>

          {/* Button */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/About"
              className="px-6 py-3 rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-2xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full flex justify-center">
          <div
            className="max-w-lg w-full sm:w-4/5 md:w-full"
            data-aos="fade-left"
          >
            <img
              src={introimg}
              alt="Team collaboration"
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurIntro;
