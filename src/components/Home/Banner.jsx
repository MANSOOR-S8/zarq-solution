import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import banner from "../../assets/herobanner.webp";
import "../../App.css";
import { useEffect } from "react";

function Banner() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-[90vh] w-full overflow-hidden px-3 sm:px-6 lg:px-12">
      {/* Background Gradient with Image */}
      <div
        className="absolute inset-0 py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,40,0.7), rgba(0,0,50,0.7)), url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Floating Decorative Circles */}
      <div className="absolute inset-0 ">
        <div className="absolute top-10 left-5 sm:top-16 sm:left-16 md:top-24 md:left-24 w-36 h-36 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-cyan-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-5 sm:bottom-16 sm:right-16 md:bottom-24 md:right-24 w-44 h-44 sm:w-72 sm:h-72 md:w-[500px] md:h-[500px] bg-blue-300/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center space-y-6 max-w-3xl w-full pt-12">
        <h1
          className="font-extrabold text-white leading-tight text-4xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl px-2"
          data-aos="fade-up"
        >
          We Build What Your Business Deserves
        </h1>

        <p
          className="text-white max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Empowering startups and enterprises with stunning designs, smooth
          performance, and result-driven digital experiences.
        </p>

        {/* Button */}
        <div
          className="flex flex-wrap justify-center gap-4 mt-2 sm:mt-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link to="/Consultation">
            <button className="flex items-center justify-center gap-2 px-5 sm:px-8 py-2.5 sm:py-3 rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-2xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 group">
              Get Free Consultation
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner;
