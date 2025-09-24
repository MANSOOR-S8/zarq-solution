import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NotFound from "./components/NotFound";
import Projects from "./components/Projects/Projects";
import Service from "./Service/Service";
import Consultation from "./Consultation/Consultation";
import WebDevelopment from "./Service/WebDevelopment";
import MobApp from "./Service/MobApp";

import AOS from "aos";
import "aos/dist/aos.css";
import SoftDev from "./Service/SoftDev";
import ECommerce from "./Service/ECommerce";
import Cloud from "./Service/Cloud";
import DigitalMarket from "./Service/DigitalMarket";
import ITSupport from "./Service/ITSupport";
import OurUI from "./Service/OurUI";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration (ms)
      once: true, // animation only once
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* Default Home Route */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/service" element={<Service />} />
          {/* sub menu of services start */}
          <Route path="/WebDevelopment" element={<WebDevelopment />} />
          <Route path="/MobApp" element={<MobApp />} />
          <Route path="/SoftDev" element={<SoftDev />} />
          <Route path="/ECommerce" element={<ECommerce />} />
          <Route path="/Consultation" element={<Consultation />} />
          <Route path="/Cloud" element={<Cloud />} />
          <Route path="/OurUI" element={<OurUI />} />

          <Route path="/DigitalMarket" element={<DigitalMarket />} />
          <Route path="/ITSupport" element={<ITSupport />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
