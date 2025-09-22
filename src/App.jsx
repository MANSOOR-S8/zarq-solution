import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* Default Home Route */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
