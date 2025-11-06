import "../App.css";
import ContactUs from "../components/Consultation/Consultation";
import Footer from "../components/Footer/Footer";

//images
import contactUSImg from "../assets/contactus.webp";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { useRef } from "react";

function ContactUS() {
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
    <>
      <section className="relative flex items-center justify-center min-h-[80vh] w-full overflow-hidden px-3 sm:px-6 lg:px-12">
        {/* Background Gradient with Image */}
        <div
          className="absolute inset-0 py-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,40,0.7), rgba(0,0,50,0.7)), url(${contactUSImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Floating Decorative Circles */}
        {/* <div className="absolute inset-0 ">
                <div className="absolute top-10 left-5 sm:top-16 sm:left-16 md:top-24 md:left-24 w-36 h-36 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-cyan-300/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-10 right-5 sm:bottom-16 sm:right-16 md:bottom-24 md:right-24 w-44 h-44 sm:w-72 sm:h-72 md:w-[500px] md:h-[500px] bg-blue-300/20 rounded-full blur-3xl animate-float-delayed"></div>
              </div> */}

        {/* Content */}
        <div className="relative z-10 text-center flex flex-col items-center justify-center space-y-6 max-w-5xl w-full pt-12">
          <h1
            className="font-extrabold text-white leading-tight text-4xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl px-2"
            data-aos="fade-up"
          >
            Get in Touch for Premium Business Services
          </h1>

          <p
            className="text-white max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Have a project in mind? Let’s discuss how we can bring your ideas to
            life with our expert solutions. Reach out to us today!
          </p>

          {/* Button */}
        </div>
      </section>
      <div className="contact-form -mt-10">
        <ContactUs />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default ContactUS;
