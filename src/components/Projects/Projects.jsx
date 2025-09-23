import SuccessfulProjects from "./SuccessfulProjects";
import Footer from "../Footer/Footer";

function Projects() {
  return (
    <section>
      <div className="banner-sec overflow-x-hidden bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[50px] text-center pt-24  font-bold break-words leading-tight max-w-3xl mx-auto hed-text">
            Our Work & Success
          </h1>
          <p className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-center pt-4 sm:pt-6 break-words leading-relaxed max-w-2xl mx-auto ">
            Discover how <span className=" font-bold ">Zarq Solution</span>{" "}
            transforms ideas into reality with cutting-edge technology and
            innovative solutions. From web and mobile development to enterprise
            software, our projects showcase excellence, creativity, and
            precision. Explore our success stories and see how we drive digital
            innovation!
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
