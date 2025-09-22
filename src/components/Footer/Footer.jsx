import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaYoutube,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
function Footer() {
  const quickLinks = ["Home", "About Us", "Services", "Contact"];
  const services = [
    "Web Development",
    "E-Commerce Solutions",
    "Digital Marketing (SEO)",
    "UI/UX Design",
    "Mobile App Development",
    "Custom Software Development",
    "IT Consultancy & Support",
    "Cloud Solutions & DevOps",
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

            {/* Column 2 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Our Services</h3>
              <ul className="space-y-2">
                {services.map((service, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-300"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 */}
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
                    Email:
                    <a
                      href="mailto:info@yourcompany.com"
                      className="hover:text-white"
                    >
                      info@yourcompany.com
                    </a>
                  </p>
                </div>
                <div className="flex items-center justify-center gap-4 mt-8 text-[22px]  cursor-pointer">
                  <FaFacebook />
                  <FaInstagram />
                  <FaLinkedin />
                  <FaYoutube />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* copyright */}
      </footer>
      <div className=" pb-9 pt-9 text-[17px] text-white text-center bg-[#0067B8] ">
        <p className="">
          Copyright &copy; {new Date().getFullYear()} Zarq solution | Powered by
          Zarq solution
        </p>
      </div>
    </div>
  );
}

export default Footer;

// function Footer() {
//   return (
//     <footer className="bg-[#0b80da] text-gray-300 py-12">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-10 ">
//           {/* Column 1: Company Info */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-bold text-white">Hawk</h3>
//             <p className="text-sm">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
//               risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
//               nec, ultricies sed, dolor a.
//             </p>
//           </div>

//           {/* Column 2: Quick Links */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-bold text-white">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-white transition-colors duration-300"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-white transition-colors duration-300"
//                 >
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-white transition-colors duration-300"
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-white transition-colors duration-300"
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Column 3: Resources */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-bold text-white">Our Services</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-white transition-colors duration-300"
//                 >
//                   Web Development
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-white transition-colors duration-300"
//                 >
//                   E-Commerce Solutions
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-white transition-colors duration-300"
//                 >
//                   Digital Marketing (SEO)
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-white transition-colors duration-300"
//                 >
//                   UI/UX Design
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-white transition-colors duration-300"
//                 >
//                   Mobile App Development
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-white transition-colors duration-300"
//                 >
//                   Custom Software
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-white transition-colors duration-300"
//                 >
//                   Development
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-white transition-colors duration-300"
//                 >
//                   IT Consultancy & Support
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-white transition-colors duration-300"
//                 >
//                   Cloud Solutions & DevOps
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Column 4: Contact Info */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-bold text-white">Contact Us</h3>
//             <div className="text-sm space-y-2">
//               <p>📍 Main Grand Trunk Rd, Pabbi, Pakistan </p>
//               <p>
//                 Email:{" "}
//                 <a
//                   href="#"
//                   className="hover:text-white transition-colors duration-300"
//                 >
//                   info@yourcompany.com
//                 </a>
//               </p>
//               <p>Phone: (123) 456-7890</p>
//             </div>
//           </div>
//         </div>

//         {/* payment sec */}

//         {/* Separator and Copyright */}
//         <div className="mt-8 pt-8 border-t border-gray-700 text-center">
//           <p className="text-sm">
//             &copy; {new Date().getFullYear()} Your Company. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
// export default Footer;
