import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Sparkles, Rocket } from "lucide-react";

function OurIntro() {
  const sectionRef = useRef(null);

  // Scroll-based reveal animation
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) el.classList.add("is-visible");
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const sideImg =
    "https://zarqsolution.com/wp-content/uploads/2025/03/Group-143725923.webp";

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white"
      aria-labelledby="who-we-are-heading"
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-blue-300/10 blur-3xl"></div>
      <div className="pointer-events-none absolute right-0 top-32 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"></div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 py-16 sm:px-8 lg:px-12 md:py-24">
        {/* Left Content */}
        <div className="relative">
          <h2
            id="who-we-are-heading"
            className="text-balance text-3xl font-semibold tracking-tight md:text-4xl"
          >
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Who we are
            </span>
            <span className="text-gray-700"> — building what’s next</span>
          </h2>

          <p className="mt-5 text-gray-700 md:text-lg leading-relaxed">
            At Zarq Solution, we are a team of passionate and innovative
            technology experts committed to transforming ideas into powerful and
            scalable digital solutions. We specialize in designing and
            developing customized software, dynamic websites, and feature-rich
            mobile applications that drive growth and success.
          </p>

          <p className="mt-4 text-gray-700 md:text-lg leading-relaxed">
            Our mission is to empower businesses with cutting-edge technology,
            ensuring each client’s unique vision is brought to life through
            tailored, high-impact solutions.
          </p>

          {/* Highlights */}
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-5 text-cyan-600" />
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
              <Rocket className="mt-0.5 size-5 text-cyan-600" />
              <span className="text-sm text-gray-800">
                Lean delivery, rapid iterations, and quality
              </span>
            </li>
          </ul>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/Consultation"
              className="px-6 py-3 rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-2xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
            <button className="px-6 py-3 rounded-md border border-gray-800 text-gray-800 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300">
              Explore Capabilities
            </button>
          </div>
        </div>

        {/* Right Image (Single Large Image) */}
        <div className="relative w-full flex justify-center">
          <div className="card float-1 max-w-lg w-full sm:w-4/5 md:w-full">
            <img
              src={sideImg}
              alt="Team collaboration"
              className="h-auto w-full rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurIntro;
