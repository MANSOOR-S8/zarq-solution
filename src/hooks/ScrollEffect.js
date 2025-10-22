// // hooks/ScrollEffect.js
// import { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export function ScrollEffect(sectionRef) {
//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     // Animate the whole section on scroll
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top top",
//         end: "bottom top",
//         scrub: 1.5,
//         pin: true,
//         pinSpacing: true,
//         toggleActions: "restart pause resume reverse",
//       },
//     });
//     console.log("section found", tl);

//     tl.fromTo(
//       section,
//       { scale: 0.8, opacity: 1 },
//       { scale: 1, opacity: 1, ease: "expo.out", duration: 1.5 }
//     );

//     // Cleanup
//     return () => {
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//       gsap.killTweensOf(section);
//     };
//   }, [sectionRef]);
// }

// hooks/ScrollEffect.js
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollEffect(sectionRef) {
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
        pin: true,
        pinSpacing: true,
        // markers: true, // debugging ke liye
        invalidateOnRefresh: true,
      },
    });

    tl.fromTo(
      section,
      { scale: 0.8, opacity: 0.7 },
      { scale: 1, opacity: 1, ease: "expo.out", duration: 1.5 }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf(section);
    };
  }, [sectionRef]);
}
