import "../../App.css";
import ContactUS from "../Consultation/Consultation";
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

//icon
import { IoLogoWhatsapp } from "react-icons/io";
//test
// import Test from "./Test";

function Home() {
  // const service = "Web Development";
  const message = `Hi Zarq Solution,`; //I'm interested in ${service}`
  const encodedMessage = encodeURIComponent(message);

  const whatsappLink = `https://wa.me/923159714276?text=${encodedMessage}`;
  return (
    <>
      <div className="fixed bottom-10 right-4 z-50 group">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-icon"
        >
          <IoLogoWhatsapp className="icon" />
        </a>

        {/* Tooltip box */}
        <div className="absolute bottom-[80px] right-0 bg-white text-black text-sm px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <p>Chat on WhatsApp</p>
        </div>
      </div>
      <div className="">
        <Banner />
      </div>
      <Slider />
      <OurIntro />
      <OurServices />
      {/* <Test /> */}
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
