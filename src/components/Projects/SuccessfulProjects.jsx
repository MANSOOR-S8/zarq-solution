import Aos from "aos";
import styles from "./projects.module.css";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import TripleJFurniture from "../../assets/JFurniture.png";
import MarsTranslation from "../../assets/MarsTranslation.webp";
import SpyCameraCCTV from "../../assets/SpyCameraCCTV.webp";
import TechLogistics from "../../assets/TechLogistics.png";
import CollegeBoundMovers from "../../assets/CollegeBound.png";
import SHIPCLLogistics from "../../assets/SHIPCLLOGISTICS.webp";
import HawkSports from "../../assets/Hawk.webp";
import PAlogestics from "../../assets/PALogistic.webp";

function SuccessfulProjects() {
  const projectCard = [
    // ---- Web Apps ----
    {
      id: 1,
      title: "Spy Camera CCTV",
      desc: "Ensuring security with high-quality, discreet surveillance solutions for homes and businesses. Stay protected with advanced monitoring technology.",
      img: SpyCameraCCTV,
      link: "https://www.spycameracctv.com/",
      type: "web",
      animation: "fade-left",
    },
    {
      id: 2,
      title: "Tech Logistics",
      desc: "Streamlining supply chains with smart, technology-driven logistics solutions for faster, more efficient, and secure deliveries.",
      img: TechLogistics,
      link: "https://www.techlogistics.com/",
      type: "web",
      animation: "fade-up",
    },
    {
      id: 3,
      title: "College Bound Movers",
      desc: "Reliable and stress-free moving services tailored for students, families, and businesses. We make your move smooth, efficient, and hassle-free!",
      img: CollegeBoundMovers,
      link: "https://collegeboundmovers.com/",
      type: "web",
      animation: "fade-right",
    },

    // ---- Mobile Apps ----
    {
      id: 4,
      title: "Triple J Furniture",
      desc: "A feature-rich eCommerce platform offering a seamless online shopping experience with intuitive UI/UX, secure payments, and advanced product browsing for premium furniture.",
      img: TripleJFurniture,
      link: "https://triplejfurniture.com.au/",
      type: "mobile",
      animation: "fade-right",
    },
    {
      id: 5,
      title: "Mars Translation",
      desc: "A professional translation platform offering fast, accurate, and industry-specific language solutions to help businesses expand globally with ease",
      img: MarsTranslation,
      link: "https://www.marstranslation.com/",
      type: "mobile",
      animation: "fade-up",
    },
    {
      id: 6,
      title: "SHIPCL LOGISTICS",
      desc: "A logistics software for efficient carrier management, warehouse optimization, and seamless goods transportation.",
      img: SHIPCLLogistics,
      link: "https://zarqsolution.com/shipcl/",
      type: "mobile",
      animation: "fade-left",
    },
    {
      id: 7,
      title: "Hawk Sports",
      desc: "A dynamic eCommerce store specializing in high-quality sports balls and gloves, offering a seamless shopping experience with secure payments and fast delivery.",
      img: HawkSports,
      link: "https://zarqsolution.com/shipcl/",
      type: "web",
    },
    {
      id: 8,
      title: "Pa Dispatch",
      desc: "PA Dispatch is a smart logistics platform that simplifies dispatching, fleet management, and financial workflows for transportation companies.",
      img: PAlogestics,
      link: "https://zarqsolution.com/shipcl/",
      type: "web",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  // === Filter State ===
  const [filter, setFilter] = useState("all");

  const filterCards =
    filter === "all"
      ? projectCard
      : projectCard.filter((card) => card.type === filter);

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-balance text-3xl font-[500] tracking-tight md:text-4xl lg:text-[48px] mb-10 text-center ">
          <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Our Recent Works
          </span>
        </h2>

        {/* ==== Filter Buttons ==== */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md  overflow-hidden" role="group">
            {["all", "web", "mobile"].map((type, index) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 text-[18px] font-semibold transition duration-300 
          ${
            filter === type
              ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold hover:from-cyan-700 hover:to-blue-700"
              : "bg-white text-gray-600 border border-gray-300 hover:bg-blue-100"
          }
          ${index === 0 ? "rounded-l-md" : ""}
          ${index === 2 ? "rounded-r-md" : ""}
        `}
              >
                {type === "all"
                  ? "All"
                  : type === "web"
                  ? "Web Apps"
                  : "Mobile Apps"}
              </button>
            ))}
          </div>
        </div>

        {/* ==== Project Cards ==== */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="fade-up"
        >
          {filterCards.map((pCard) => (
            <div
              data-aos={pCard.animation}
              key={pCard.id}
              className={`${styles.card} bg-white rounded-[4px] shadow-sm hover:shadow-xl transition duration-300 overflow-hidden`}
            >
              <Link to={pCard.link} target="_blank">
                <div className={styles["long-img"]}>
                  <img
                    src={pCard.img}
                    alt={pCard.title}
                    className={`${styles.img} w-full h-48 object-cover`}
                  />
                </div>
              </Link>
              <div className="pl-5 mt-5 ">
                <h3 className="text-[22px] font-semibold text-[#0B80DA] mb-2">
                  {pCard.title}
                </h3>
              </div>
              <div className={`${styles["card-content"]} pl-5 pb-5`}>
                <div>
                  <p className="text-[16px] font-normal text-gray-600">
                    {pCard.desc}
                  </p>
                  <div className="mt-6">
                    <Link
                      to={pCard.link}
                      target="_blank"
                      className="inline-flex items-center text-[#0B80DA] font-medium hover:underline transition-all"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SuccessfulProjects;
