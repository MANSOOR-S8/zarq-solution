import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarData from "./NavbarData";
import { FaBars } from "react-icons/fa";

function Nav() {
  const logoImg = [
    {
      id: 1,
      img: "https://zarqsolution.com/wp-content/uploads/2025/03/Frame-47337-3.svg",
    },
  ];

  const [toggle, setToggle] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  const toggleNav = () => {
    setToggle((prev) => !prev);
    setOpenSubMenuIndex(null);
  };

  const handleSubmenuToggle = (index) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  // ===== on scroll hide and show =====
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false); // scroll down hide navbar
      } else {
        setShowNavbar(true); // scroll up show navbar
      }

      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  //===============

  return (
    <>
      {/* nav */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-[#eceff4] border-t-4 shadow-sm transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          {/* Logo */}
          <div className="w-[140px]">
            <img
              src={logoImg[0].img}
              alt="Logo"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-10 items-center">
            {NavbarData.map((link, index) => (
              <li key={index} className="relative group">
                <Link
                  to={link.href}
                  className="text-[17px] font-medium text-gray-800 hover:text-blue-800 flex items-center transition"
                >
                  {link.title}
                  {link.submenu && <span className="ml-1">&#9662;</span>}
                </Link>

                {/* Desktop Dropdown */}
                {link.submenu && (
                  <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded mt-1 w-60 z-50">
                    {link.submenu.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subLink.href}
                          className="block px-6 py-2 hover:bg-gray-100 text-sm text-gray-700"
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

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 lg:hidden ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4 h-full">
          {/* Close Button */}
          <button
            className="self-end text-3xl text-gray-700 hover:text-black"
            onClick={toggleNav}
            aria-label="Close Menu"
          >
            &times;
          </button>

          {/* Mobile Links */}
          <ul className="space-y-2">
            {NavbarData.map((link, index) => (
              <li key={index}>
                <div
                  onClick={() =>
                    link.submenu ? handleSubmenuToggle(index) : toggleNav()
                  }
                  className="flex justify-between items-center px-2 py-2 cursor-pointer hover:text-blue-900 text-[16px] font-medium transition"
                >
                  <Link to={link.href}>{link.title}</Link>
                  {link.submenu && <span className="ml-2">&#9662;</span>}
                </div>

                {/* Mobile Dropdown */}
                {link.submenu && openSubMenuIndex === index && (
                  <ul className="ml-4 mt-1 space-y-1 border-l border-gray-200 pl-3">
                    {link.submenu.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subLink.href}
                          className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
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
