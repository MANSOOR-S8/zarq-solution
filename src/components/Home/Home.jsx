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
import Review from "../Review/Review";
//test
import Test from "./Test";

function Home() {
  return (
    <>
      <div className="">
        <Banner />
      </div>
      <Slider />
      <OurIntro />
      {/* <OurServices /> */}
      <Test />
      <OurProjects />
      <Review />
      <Achievements />
      <Stages />
      <TechnologyCard />
      <ContactUS />
      <Footer />
    </>
  );
}
export default Home;
