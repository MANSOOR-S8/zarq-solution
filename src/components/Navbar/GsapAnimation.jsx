// src/components/Navbar/GsapAnimation.jsx
import { useEffect } from "react";
import gsap from "gsap";

function GsapAnimation({ targetRef }) {
  useEffect(() => {
    if (!targetRef?.current) return;

    gsap.fromTo(
      targetRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      }
    );
  }, [targetRef]);

  return null;
}

export default GsapAnimation;
