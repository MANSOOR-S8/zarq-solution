import "../../App.css";
import ContactUS from "../ContactUS/ContactUs";
import Footer from "../Footer/Footer";
import OurServices from "../Our-Service/OurService";
import OurIntro from "../OurIntro/OutIntro";
import Achievements from "../OurProjects/Achievements";
import Projects from "../OurProjects/Projects";
import Stages from "../OurProjects/Stages";
import TechnologyCard from "../OurProjects/TechnologyCard";
import Banner from "./Banner";
import Slider from "./Slider";

function Home() {
  return (
    <>
      <div className="pt-12">
        <Banner />
      </div>
      <Slider />
      <OurServices />
      <OurIntro />
      <Projects />
      <Achievements />
      <Stages />
      <TechnologyCard />
      <ContactUS />
      <Footer />
    </>
  );
}
export default Home;
