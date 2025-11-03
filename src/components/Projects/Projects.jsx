import SuccessfulProjects from "./SuccessfulProjects";
import Footer from "../Footer/Footer";
//images
import proBanner from "../../assets/projects.webp";

function Projects() {
  return (
    <section>
      <div
        className=" overflow-x-hidden bg-white"
        style={{
          backgroundImage: `linear-gradient(rgba(1, 1, 40, 0.87), rgba(0, 0, 0, 0.6)), url(${proBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container text-center mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[50px] text-center pt-24  font-bold break-words leading-tight max-w-3xl mx-auto ">
            Our Work & Success
          </h1>
          <p className="text-center text-white text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px]  pt-4 sm:pt-6 break-words leading-relaxed max-w-2xl mx-auto ">
            Zarq Solution transforms visionary ideas into powerful digital
            realities. From web and mobile apps to enterprise software, we craft
            solutions that inspire innovation, drive growth, and deliver
            excellence.
          </p>
        </div>
      </div>
      <div className="our-projects">
        <SuccessfulProjects />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </section>
  );
}

export default Projects;
