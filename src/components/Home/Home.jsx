import "../../App.css";
import ContactUS from "../ContactUS/ContactUs";
import Footer from "../Footer/Footer";
import OurServices from "../Our-Service/OurServices";
import OurIntro from "../OurIntro/OutIntro";
import Achievements from "../OurProjectsSec/Achievements";
import OurProjects from "../OurProjectsSec/OurProjects";
import Stages from "../OurProjectsSec/Stages";
import TechnologyCard from "../OurProjectsSec/TechnologyCard";
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
      <OurProjects />
      <Achievements />
      <Stages />
      <TechnologyCard />
      <ContactUS />
      <Footer />
    </>
  );
}
export default Home;
