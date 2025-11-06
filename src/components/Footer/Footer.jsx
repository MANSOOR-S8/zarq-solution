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
//image
// import footerBG from "../../assets/footerbg2.png";
import footerLogo from "../../assets/footerLogo.svg";

function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/About" },
    { name: "Services", path: "/Services" },
    { name: "Contact", path: "/ContactUS" }, // Contact ko Consultation page se link kiya
  ];

  const services = [
    { name: "Web Development", path: "/WebDevelopment" },
    { name: "E-Commerce Solutions", path: "/ECommerceSolution" },
    { name: "Digital Marketing (SEO)", path: "/DigitalMarketing" },
    { name: "UI/UX Design", path: "/UIUXDesign" },
    { name: "Mobile App Development", path: "/MobileAppDevelopment" },
    { name: "Custom Software Development", path: "/CustomSoftwareDevelopment" },
    { name: "IT Consultancy & Support", path: "/ITConsultancySupport" },
    { name: "Cloud Solutions & DevOps", path: "/CloudSolutionDevOps" },
  ];

  return (
    // old color bg-[#0b80da]  new bg-[#03223b]
    <div
      style={{
        // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.23)), url(${footerBG})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundColor: "#03223b",
      }}
    >
      <footer className=" text-white py-12 ">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-11">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-1">
            {/* Column 1 */}
            <div className="space-y-4">
              <div className="flex pt-2 pb-8 items-center">
                <img src={footerLogo} alt="" />
              </div>
              <p className="text-[15px]">
                Zarq Solution is a leading software house offering data,
                software, and services, supported by an extensive network of
                partners. We assist in all critical functions, from R&D to
                commercialization.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-4 mt-8 text-[22px] cursor-pointer">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1d93ec] transition-colors duration-300"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/zarqsolution911/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ba0267] transition-colors duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/zarq-solution/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1d93ec] transition-colors duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.youtube.com/@Zarqsolution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#df0b2f] transition-colors duration-300"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="hover:text-[#0b80da] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Services */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white ">Our Services</h3>
              <ul className="space-y-2">
                {services.map((service, i) => (
                  <li key={i}>
                    <Link
                      to={service.path}
                      className="hover:text-[#0b80da] transition-colors duration-300"
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
                  <p>+92 315 9714276 </p>
                </div>
                <div className="flex items-start gap-2">
                  <MdEmail />
                  <p>
                    <a
                      href="mailto:info@zarqsolution.com"
                      className="hover:text-[#0b80da]"
                    >
                      info@zarqsolution.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="pb-3 pt-3 text-[12px] text-white text-center bg-[#03223b]  border-t">
        <p>
          Copyright &copy; {new Date().getFullYear()} Zarq Solution | Powered by
          Zarq Solution
        </p>
      </div>
    </div>
  );
}

export default Footer;
