import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NotFound from "./components/NotFound";
import Projects from "./components/Projects/Projects";
import Services from "./Service/Services";
import ContactUS from "./contactUs/ContactUS";
import WebDevelopment from "./Service/WebDevelopment";
import MobileAppDevelopment from "./Service/MobileAppDevelopment";

import AOS from "aos";
import "aos/dist/aos.css";
import CustomSoftwareDevelopment from "./Service/CustomSoftwareDevelopment";
import ECommerceSolution from "./Service/ECommerceSolution";
import CloudSolutionDevOps from "./Service/CloudSolutionDevOps";
import DigitalMarketing from "./Service/DigitalMarketing";
import ITConsultancySupport from "./Service/ITConsultancySupport";
import UIUXDesign from "./Service/UIUXDesign";

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
          <Route path="/services" element={<Services />} />
          {/* Services sub menu  */}
          <Route path="/WebDevelopment" element={<WebDevelopment />} />
          <Route
            path="/MobileAppDevelopment"
            element={<MobileAppDevelopment />}
          />
          <Route
            path="/CustomSoftwareDevelopment"
            element={<CustomSoftwareDevelopment />}
          />
          <Route path="/ECommerceSolution" element={<ECommerceSolution />} />
          <Route path="/ContactUS" element={<ContactUS />} />
          <Route
            path="/CloudSolutionDevOps"
            element={<CloudSolutionDevOps />}
          />
          <Route path="/UIUXDesign" element={<UIUXDesign />} />

          <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
          <Route
            path="/ITConsultancySupport"
            element={<ITConsultancySupport />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
