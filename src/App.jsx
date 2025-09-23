import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NotFound from "./components/NotFound";
import Projects from "./components/Projects/Projects";
import Service from "./Service/Service";
import Consultation from "./Consultation/Consultation";

function App() {
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
          <Route path="/Consultation" element={<Consultation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
