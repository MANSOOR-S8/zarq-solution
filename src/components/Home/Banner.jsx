import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import "../../App.css";
import { Link } from "react-router";
import Service from "../../Service/Service";
import Consultation from "../../Consultation/Consultation";

gsap.registerPlugin(SplitText);

function Banner() {
  const textRef = useRef();

  // GSAP text animation
  useEffect(() => {
    const split = new SplitText(textRef.current, { type: "chars" });
    gsap.from(split.chars, {
      duration: 0.6,
      opacity: 0,
      y: 20,
      stagger: 0.05,
      ease: "power2.out",
    });

    return () => {
      split.revert();
    };
  }, []);

  // Particles Background
  useEffect(() => {
    const particlesContainer = document.getElementById("particles");
    if (particlesContainer && particlesContainer.childElementCount === 0) {
      const particleCount = 20;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        const size = Math.random() * 40 + 10;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = Math.random() * 15 + 10;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;

        particlesContainer.appendChild(particle);
      }
    }
  }, []);

  return (
    <section className="overflow-hidden">
      <div className="banner-sec relative">
        {/* Particles background */}
        <div className="particles" id="particles"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12 items-center relative z-10">
          <div className="text-center justify-center pt-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4  leading-tight max-w-3xl mx-auto">
              <span className="text-[#0B80DA]" ref={textRef}>
                Zarq Solution:
              </span>
              Transforming Ideas into Reality
            </h2>
            <p className="text-gray-700 mt-3 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
              Zarq Solution is a global name in software, web, and mobile
              development — delivering smart, scalable solutions that drive
              digital growth.
            </p>
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              {/* Existing Button */}
              <Link to="/Consultation">
                <button className="w-[200px] sm:w-auto bg-[#0B80DA] px-6 py-3 rounded text-white text-sm sm:text-base cursor-pointer hover:bg-blue-600 transition-all">
                  Get Free Consultation
                </button>
              </Link>

              {/* New Button */}
              <Link to="/Service">
                <button className="w-[200px] sm:w-[200px] bg-[#f5f5f5] border border-gray-100 px-6 py-3 rounded text-black text-sm sm:text-base cursor-pointer hover:bg-[#73717100] transition-all">
                  Explore Solution
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
