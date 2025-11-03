import SuccessfulProjects from "./SuccessfulProjects";
import Footer from "../Footer/Footer";
//images
import proBanner from "../../assets/projects.webp";

function Projects() {
  return (
    <div className="parent">
      <section className="relative flex items-center justify-center min-h-[90vh] w-full overflow-hidden px-3 sm:px-6 lg:px-12">
        {/* Background Gradient with Image */}
        <div
          className="absolute inset-0 py-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,40,0.80), rgba(0,0,50,0.7)), url(${proBanner})`,
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
        <div className="relative z-10 text-center flex flex-col items-center justify-center space-y-6 max-w-3xl w-full pt-12">
          <h1
            className="font-extrabold text-white leading-tight text-4xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl px-2"
            data-aos="fade-up"
          >
            Our Work & Success
          </h1>

          <p
            className="text-white max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Zarq Solution transforms visionary ideas into powerful digital
            realities. From web and mobile apps to enterprise software, we craft
            solutions that inspire innovation, drive growth, and deliver
            excellence.
          </p>

          {/* Button */}
        </div>
      </section>
      <section>
        <div className="our-projects">
          <SuccessfulProjects />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default Projects;
