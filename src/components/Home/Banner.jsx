import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import "../../App.css";

// Register the plugin
gsap.registerPlugin(SplitText);

function Banner() {
  const textRef = useRef();

  useEffect(() => {
    // ye text ko split karta hy (alg) karta hy
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

  return (
    <section>
      <div className="banner-sec overflow-x-hidden bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[47px] text-center   break-words leading-tight max-w-3xl mx-auto hed-text">
            <span ref={textRef} className=" font-[900]  text-bold ">
              Zarq Solution:
            </span>{" "}
            Transforming Ideas into Reality with Innovative Web, Mobile & UI/UX
            Solutions.
          </h2>

          {/* <h1 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[50px] text-center  font-bold break-words leading-tight max-w-3xl mx-auto hed-text"></h1> */}
          <p className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-center pt-4 sm:pt-6 break-words leading-relaxed max-w-2xl mx-auto ">
            Zarq Solution is a global leader in software development, web
            design, and mobile app development, delivering innovative solutions
            that transform ideas into reality. With cutting-edge technology and
            a commitment to excellence, we help businesses thrive in the digital
            world.
          </p>
          <div className="flex justify-center mt-8 sm:mt-10">
            <button className="bg-[#0B80DA] px-5 sm:px-6 py-2.5 sm:py-3 rounded text-white text-sm sm:text-base cursor-pointer hover:bg-blue-600 transition-all duration-300">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
