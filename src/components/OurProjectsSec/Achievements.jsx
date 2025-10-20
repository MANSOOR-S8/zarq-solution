import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Achievements = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Init AOS animations
    AOS.init({ duration: 1000, once: true });

    // IntersectionObserver -> jab section 50% viewport me ho to counter start ho
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Counter Component
  const Counter = ({ target, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!startCount) return;

      let start = 0;
      const increment = target / (duration / 30);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          clearInterval(timer);
          setCount(target);
        } else {
          setCount(Math.ceil(start));
        }
      }, 30);

      return () => clearInterval(timer);
    }, [target, duration, startCount]);

    return (
      <span className="text-4xl md:text-5xl font-[800] block">{count}+</span>
    );
  };

  return (
    <section className="bg-[#0b80da] text-white py-16">
      {/* Container for consistent layout */}
      <div className="container mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/*  */}
          <div className="md:w-1/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              We exceed expectations and achieve excellence.
            </p>
          </div>

          {/*  */}
          <div
            ref={sectionRef}
            className="grid grid-cols-2 gap-x-10 gap-y-10 md:grid-cols-4 mt-10 md:mt-0"
          >
            <div className="text-center">
              <Counter target={50} duration={2000} />
              <p className="mt-2 text-sm md:text-base">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <Counter target={60} duration={2000} />
              <p className="mt-2 text-sm md:text-base">Projects Completed</p>
            </div>
            <div className="text-center">
              <Counter target={15} duration={2000} />
              <p className="mt-2 text-sm md:text-base">Ongoing Projects</p>
            </div>
            <div className="text-center">
              <Counter target={35} duration={2000} />
              <p className="mt-2 text-sm md:text-base">Our Success Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
