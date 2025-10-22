// import React, { useEffect, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom"; // corrected import
import Aos from "aos";
import "aos/dist/aos.css";
import banner from "../../assets/banner1.png";

function Banner() {
  // Counter states
  // const [projects, setProjects] = useState(0);
  // const [satisfaction, setSatisfaction] = useState(0);
  // const [team, setTeam] = useState(0);

  // useEffect(() => {
  //   Aos.init({ duration: 1000 });

  //   const animateCounter = (target, setValue, duration) => {
  //     let start = 0;
  //     const step = target / (duration / 16);
  //     const timer = setInterval(() => {
  //       start += step;
  //       if (start >= target) {
  //         start = target;
  //         clearInterval(timer);
  //       }
  //       setValue(Math.floor(start));
  //     }, 16);
  //   };

  //   animateCounter(150, setProjects, 2000);
  //   animateCounter(100, setSatisfaction, 2000);
  //   animateCounter(50, setTeam, 2000);
  // }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6">
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
        }}
      ></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto flex flex-col items-center space-y-4 px-4">
        <h1
          className="font-bold text-3xl sm:text-5xl lg:text-7xl text-white text-center"
          data-aos="fade-up"
        >
          We Build What Your Business Deserves
        </h1>

        <p
          className="text-base sm:text-lg text-white leading-relaxed text-center max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Empowering startups and enterprises with stunning designs, smooth
          performance, and result-driven digital experiences.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-wrap justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link to="/About">
            <button className="flex items-center gap-2 px-8 py-3 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold shadow-xl hover:shadow-2xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 group">
              To Get Free Consultant
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
          {/* <Link to="/">
            <button className="flex items-center gap-2 px-8 py-3 rounded-2xl border border-gray-900 text-gray-900 font-semibold bg-transparent hover:bg-gray-900 hover:text-white shadow-lg transition-all duration-300">
              <Play className="h-5 w-5" />
              Watch Demo
            </button>
          </Link> */}
        </div>

        {/* Stats */}
        {/* <div
          className="flex flex-wrap justify-center gap-12 pt-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div>
            <div className="text-5xl font-bold text-gray-900">{projects}+</div>
            <div className="text-sm text-gray-600">Projects Delivered</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-gray-900">
              {satisfaction}%
            </div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-gray-900">{team}+</div>
            <div className="text-sm text-gray-600">Team Members</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Banner;
