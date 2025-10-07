// Banner.jsx
import React, { useEffect, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router";

import Aos from "aos";

function Banner() {
  // counter for projects and client

  // Inside Banner component
  const [projects, setProjects] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [team, setTeam] = useState(0);

  useEffect(() => {
    const animateCounter = (target, setValue, duration) => {
      let start = 0;
      const step = target / (duration / 16); // 60fps approx.
      const timer = setInterval(() => {
        start += step;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setValue(Math.floor(start));
      }, 16);
    };

    animateCounter(150, setProjects, 2000); // 2s
    animateCounter(100, setSatisfaction, 2000);
    animateCounter(50, setTeam, 2000);
  }, []);

  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right top, #92fdfd, #cfdee1, #bde1f2, #ffffffde, #fff, #ebeff9, #fff, #fff, #fafafa, #d0eaff, #a3d6f0, #fff)",
        }}
      ></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8 animate-fade-in-up" data-aos="fade-right">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Build Amazing
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
              We create cutting-edge mobile and web applications that drive
              growth and innovation. From concept to launch, we bring your
              vision to life with stunning design and powerful technology.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/get-started">
                <button className="flex items-center w-auto gap-2 px-6 py-3 border rounded-2xl bg-gradient-to-r  from-cyan-600 to-blue-600 text-white text-base font-semibold shadow-xl hover:shadow-2xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 group">
                  Get Started
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
              <Link to="/">
                <button className="flex items-center w-auto border rounded-2xl gap-2 px-6 py-3  border-gray-900 text-gray-900 text-base font-semibold bg-transparent hover:bg-gray-900 hover:text-white shadow-lg transition-all duration-300">
                  <Play className="h-5 w-5" />
                  Watch Demo
                </button>
              </Link>
            </div>

            {/* Stats */}
            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-4xl font-bold text-gray-900">
                  {projects}+
                </div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900">
                  {satisfaction}%
                </div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900">{team}+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
            </div>
          </div>

          {/* Right - Mobile Mockup */}
          <div
            className="relative flex justify-center lg:justify-end animate-fade-in-right"
            data-aos="fade-left"
          >
            <div className="relative">
              <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl ring-8 ring-gray-800/50">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-10"></div>

                <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Screens */}
                  <div className="relative w-full h-full">
                    {/* Screen 1 */}
                    <div
                      className={`absolute inset-0 transition-all duration-500 ${
                        activeScreen === 0
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-full"
                      }`}
                    >
                      {/* Content for Screen 1 */}
                      <div className="h-full bg-gradient-to-br from-cyan-50 to-blue-50 p-6">
                        <div className="h-4 bg-gray-900 w-1/2 mb-4 rounded"></div>
                        <div className="h-32 bg-white rounded-xl shadow-md mb-4"></div>
                        <div className="h-32 bg-white rounded-xl shadow-md"></div>
                      </div>
                    </div>

                    {/* Screen 2 */}
                    <div
                      className={`absolute inset-0 transition-all duration-500 ${
                        activeScreen === 1
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-full"
                      }`}
                    >
                      <div className="h-full bg-gradient-to-br from-blue-50 to-purple-50 p-6">
                        <div className="h-6 bg-gray-900 rounded w-1/2 mb-4"></div>
                        <div className="h-48 bg-white rounded-xl shadow-md mb-4"></div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="h-16 bg-white rounded-xl shadow"></div>
                          <div className="h-16 bg-white rounded-xl shadow"></div>
                        </div>
                      </div>
                    </div>

                    {/* Screen 3 */}
                    <div
                      className={`absolute inset-0 transition-all duration-500 ${
                        activeScreen === 2
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-full"
                      }`}
                    >
                      <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50 p-6">
                        <div className="flex justify-center items-center flex-col pt-10">
                          <div className="w-24 h-24 bg-blue-500 rounded-full mb-4"></div>
                          <div className="h-6 bg-gray-900 rounded w-32 mb-2"></div>
                          <div className="h-4 bg-gray-300 rounded w-24"></div>
                        </div>
                        <div className="h-12 bg-white rounded-xl shadow-md mt-6"></div>
                        <div className="h-12 bg-white rounded-xl shadow-md mt-4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-cyan-400 rounded-2xl shadow-xl animate-float opacity-80"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-400 rounded-full shadow-xl animate-float-delayed opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
