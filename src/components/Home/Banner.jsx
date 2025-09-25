import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import "../../App.css";

// side images
import figma from "../../assets/Figma.png";
import flutter from "../../assets/Flutter.png";
import java from "../../assets/Java.png";
import photoshop from "../../assets/Photoshop.png";
import react from "../../assets/React.png";
import node from "../../assets/Node.png";
import php from "../../assets/Php.png";

gsap.registerPlugin(SplitText);

function Banner() {
  const textRef = useRef();

  // 🔹 GSAP text animation
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

  // 🔹 Particles Background
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
        {/* 🔹 Particles background */}
        <div className="particles" id="particles"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-left">
            <h2
              ref={textRef}
              className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[47px] font-[900] leading-tight max-w-3xl"
            >
              Zarq Solution:
            </h2>
            <p className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] mt-4 leading-relaxed max-w-2xl">
              Innovative Web, Mobile & UI/UX — From Idea to Impact.
            </p>
            <p className="text-gray-700 mt-3 text-sm sm:text-base md:text-lg max-w-xl">
              Zarq Solution is a global name in software, web, and mobile
              development — delivering smart, scalable solutions that drive
              digital growth.
            </p>
            <div className="mt-6 sm:mt-10">
              <button className="bg-[#0B80DA] px-6 py-3 rounded text-white text-sm sm:text-base hover:bg-blue-600 transition-all">
                Get Free Consultation
              </button>
            </div>
          </div>

          {/* 🔹 Right Side: Animated Tech Icons */}
          <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px]">
            <img
              src={flutter}
              alt="Flutter"
              className="absolute top-4 left-[15%] sm:left-[20%] w-14 sm:w-20 md:w-24 animate-bounce"
            />
            <img
              src={figma}
              alt="Figma"
              className="absolute top-16 right-[10%] w-14 sm:w-20 md:w-24 animate-pulse"
            />
            <img
              src={photoshop}
              alt="Photoshop"
              className="absolute bottom-4 left-[5%] w-16 sm:w-20 md:w-24 animate-bounce"
            />
            <img
              src={php}
              alt="PHP"
              className="absolute bottom-10 right-[15%] w-14 sm:w-20 md:w-24 animate-pulse"
            />
            <img
              src={react}
              alt="React"
              className="absolute top-[45%] left-[50%] transform -translate-x-1/2 w-14 sm:w-20 md:w-24 animate-spin-slow"
            />
            <img
              src={node}
              alt="Node.js"
              className="absolute bottom-[20%] left-[35%] w-14 sm:w-20 md:w-24 slowbounce "
            />
            <img
              src={java}
              alt="Java"
              className="absolute top-6 left-[30%] w-14 sm:w-20 md:w-24 animate-pulse"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
