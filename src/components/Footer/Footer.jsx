import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaYoutube,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Contact", path: "/consultation" }, // Contact ko Consultation page se link kiya
  ];

  const services = [
    { name: "Web Development", path: "/WebDevelopment" },
    { name: "E-Commerce Solutions", path: "/ECommerce" },
    { name: "Digital Marketing (SEO)", path: "/DigitalMarket" },
    { name: "UI/UX Design", path: "/OurUI" },
    { name: "Mobile App Development", path: "/MobApp" },
    { name: "Custom Software Development", path: "/SoftDev" },
    { name: "IT Consultancy & Support", path: "/ITSupport" },
    { name: "Cloud Solutions & DevOps", path: "/Cloud" },
  ];

  return (
    <div>
      <footer className="bg-[#0b80da] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-1">
            {/* Column 1 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">About us</h3>
              <p className="text-[15px]">
                Zarq Solution is a leading software house offering data,
                software, and services, supported by an extensive network of
                partners. We assist in all critical functions, from R&D to
                commercialization.
              </p>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Services */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Our Services</h3>
              <ul className="space-y-2">
                {services.map((service, i) => (
                  <li key={i}>
                    <Link
                      to={service.path}
                      className="hover:text-white transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Contact Us</h3>
              <div className="text-[15px] space-y-2">
                <div className="flex items-start gap-2">
                  <FaLocationDot className="mt-1" />
                  <p>Main Grand Trunk Rd, Pabbi, Pakistan</p>
                </div>
                <div className="flex items-start gap-2">
                  <FaPhoneFlip />
                  <p>Phone: +92 315 9714276 </p>
                </div>
                <div className="flex items-start gap-2">
                  <MdEmail />
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:info@zarqsolution.com"
                      className="hover:text-white"
                    >
                      info@zarqsolution.com
                    </a>
                  </p>
                </div>
                {/* Social icons */}
                <div className="flex items-center justify-center gap-4 mt-8 text-[22px] cursor-pointer">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="pb-9 pt-9 text-[17px] text-white text-center bg-[#0067B8]">
        <p>
          Copyright &copy; {new Date().getFullYear()} Zarq Solution | Powered by
          Zarq Solution
        </p>
      </div>
    </div>
  );
}

export default Footer;
