import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarData from "./NavbarData";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/Toplogo.png";
import "./nav.css";

function Nav() {
  const [toggle, setToggle] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  const toggleNav = () => {
    setToggle((prev) => !prev);
    setOpenSubMenuIndex(null);
  };

  const handleSubmenuToggle = (index) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  // Scroll hide / show
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // New: track whether navbar should have background / blur
  const [scrolledPastBanner, setScrolledPastBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide / show logic
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);

      // Transparent -> blur logic ye check karta hy k agar navbar ki height less then 400px tho transparent ho nahi tho blur
      const bannerHeight = 400; // match your banner height
      if (currentScrollY > bannerHeight) {
        setScrolledPastBanner(true);
      } else {
        setScrolledPastBanner(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolledPastBanner
            ? "bg-white/30 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-10 flex-1 justify-center">
            {NavbarData.map((link, index) => (
              <li key={index} className="relative group">
                <Link
                  to={link.href}
                  className="text-[19px] font-[500] text-black nav-item flex items-center transition"
                >
                  {link.title}
                  {link.submenu && <span className="ml-1">&#9662;</span>}
                </Link>
                {link.submenu && (
                  <ul className="absolute top-full left-0 hidden group-hover:block hover:block bg-white shadow-lg rounded w-60 z-50">
                    {link.submenu.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subLink.href}
                          className="block px-6 py-2 text-[16px] font-[600] hover:bg-gray-100 text-gray-700"
                        >
                          {subLink.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="block lg:hidden z-50 relative">
            <button
              className="text-2xl text-gray-800"
              onClick={toggleNav}
              aria-label="Toggle Menu"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 lg:hidden ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4 h-full">
          <button
            className="self-end text-3xl text-gray-700 hover:text-black"
            onClick={toggleNav}
            aria-label="Close Menu"
          >
            &times;
          </button>
          <ul className="space-y-2">
            {NavbarData.map((link, index) => (
              <li key={index}>
                <div
                  onClick={() =>
                    link.submenu ? handleSubmenuToggle(index) : toggleNav()
                  }
                  className="flex justify-between items-center px-2 py-2 cursor-pointer hover:text-blue-900 text-[16px] font-[600] transition"
                >
                  <Link to={link.href}>{link.title}</Link>
                  {link.submenu && <span className="ml-2">&#9662;</span>}
                </div>
                {link.submenu && openSubMenuIndex === index && (
                  <ul className="ml-4 mt-1 space-y-1 border-l border-gray-200 pl-3">
                    {link.submenu.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subLink.href}
                          className="block px-2 py-1 text-[16px] font-[600] text-gray-700 hover:bg-gray-100 rounded"
                          onClick={toggleNav}
                        >
                          {subLink.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-6 border-t text-sm text-gray-500">
            © {new Date().getFullYear()} Zarq Solution
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
