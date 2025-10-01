import "../App.css";
import ContactUs from "../components/ContactUS/ContactUs";
import Footer from "../components/Footer/Footer";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { useRef } from "react";

function Consultation() {
  // const container = useRef();
  // useGSAP(
  //   () => {
  //     gsap.to(
  //       ".hed-text",
  //       { x: -80, opacity: 1 },
  //       { x: 0, opacity: 0, duration: 1, delay: 0.3, ease: "power2.out" }
  //     );
  //   },
  //   { scope: container }
  // );
  return (
    <section>
      <div className="banner-sec overflow-x-hidden bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[60px] text-center  font-bold break-words leading-tight max-w-3xl mx-auto hed-text">
            Get in Touch for Premium Business Services
          </h1>
          <p className="pb-10 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-center pt-4 sm:pt-6 break-words leading-relaxed max-w-2xl mx-auto ">
            Have a project in mind? Let’s discuss how we can bring your ideas to
            life with our expert solutions. Reach out to us today!
          </p>
        </div>
      </div>
      <div className="contact-form -mt-10">
        <ContactUs />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </section>
  );
}

export default Consultation;
