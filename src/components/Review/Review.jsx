import React, { useState } from "react";

//bg images
import techlogestic from "../../assets/techlogesticsbanner.jpg";
// import marsTranslate from "../../assets/marstranslation.jpg";
import translations from "../../assets/translations.webp";
import collageBound from "../../assets/collagebound.jpg";
import CCTV from "../../assets/cctv.jpg";

//images
import tech from "../../assets/tech.jpg";
import CollageBound from "../../assets/collage.jpg";
import marsTranslate from "../../assets/mars.jpg";
import spaCam from "../../assets/spy.jpg";
//animation
// import { ScrollEffect } from "../../hooks/ScrollEffect";

const cards = [
  {
    id: 1,
    img: techlogestic,
    quote:
      "At Tech Logistics, we believe efficiency drives success — delivering smarter, faster, and more reliable supply chain solutions every day.",
    name: "Samantha William",
    role: "Regional Manager at Philips",
    companyLogo: tech,
    disc: "Delivering trusted logistics since 1983.",
  },
  {
    id: 2,
    img: translations, //marsTranslate,
    quote:
      "Breaking language barriers through technology — empowering global communication with accuracy and speed.",
    name: "Jessica Brown",
    role: "Product Designer at Huawei",
    companyLogo: marsTranslate,
    disc: "Translate your documents and digital content hassle-free.",
  },
  {
    id: 3,
    img: collageBound,
    quote:
      "Every move tells a story — we make yours smooth, safe, and stress-free with expert care and reliability.",
    name: "Robert James",
    role: "Software Engineer at Hershey",
    companyLogo: CollageBound,
    disc: "Full service local and long distance movers.",
  },
  {
    id: 4,
    img: CCTV,
    quote:
      "Your safety is our mission — delivering cutting-edge CCTV solutions for smarter and more secure spaces.",
    name: "Emily Clark",
    role: "Marketing Lead at Lactalis",
    companyLogo: spaCam,
    disc: "Browse our range of world-class CCTV equipment.",
  },
];

function Review() {
  // const sectionRef = useRef(null);
  // ScrollEffect(sectionRef);

  const [active, setActive] = useState(1);

  return (
    <section className="bg-white py-10 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 transition-all">
        {/* responsive layout for cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row gap-4 lg:h-[400px]">
          {cards.map((card) => (
            <div
              key={card.id}
              onMouseEnter={() => setActive(card.id)}
              onClick={() => setActive(card.id)} // mobile tap
              className={`relative cursor-pointer rounded-2xl transition-all duration-500 ease-in-out overflow-visible ${
                active === card.id
                  ? "lg:flex-[3] flex-[unset]"
                  : "lg:flex-[1] flex-[unset]"
              }`}
            >
              {/* image container */}
              <div className="relative rounded-2xl overflow-hidden h-[300px] lg:h-full">
                <img
                  src={card.img}
                  alt={card.name}
                  className={`w-full h-full object-cover transition-all duration-500 ease-in-out ${
                    active === card.id
                      ? "lg:blur-0 scale-100"
                      : "lg:blur-sm lg:scale-105 scale-100"
                  }`}
                />

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* text content */}
                <div
                  className={`absolute bottom-6 left-6 right-6 text-white transition-all duration-500 
                  ${active === card.id ? "lg:opacity-100" : "lg:opacity-0"} 
                  opacity-100`} // Always visible on mobile & tablet
                >
                  <p className="text-base md:text-lg leading-snug mb-3">
                    “{card.quote}”
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://i.pravatar.cc/40?img=${card.id + 10}`}
                      alt="avatar"
                      className="w-9 h-9 rounded-full border-2 border-white"
                    />
                    <div>
                      <h4 className="text-sm font-semibold">{card.name}</h4>
                      <p className="text-xs opacity-80">{card.role}</p>
                    </div>
                  </div>
                </div>

                {/* + icon only desktop */}
                {active !== card.id && (
                  <div className="absolute inset-0 lg:flex hidden items-center justify-center transition-all">
                    <div className="w-10 h-10 flex items-center justify-center bg-white/60 backdrop-blur-md rounded-full text-xl font-bold text-gray-700">
                      +
                    </div>
                  </div>
                )}
              </div>

              {/* company logo + disc — hidden on mobile & tablet */}
              <div className="relative flex items-center  text-black pointer-events-auto hidden lg:block">
                <div className="flex ">
                  <img
                    src={card.companyLogo}
                    alt="company logo"
                    className="w-auto h-16 "
                  />
                  <div
                    className={`relative text-black transition-all duration-500 ease-in-out ${
                      active === card.id
                        ? "opacity-100 translate-x-10"
                        : "opacity-0 -translate-y-0"
                    }`}
                  >
                    <p className="text-base md:text-md leading-snug mt-7 -ml-8 ">
                      {card.disc}
                    </p>
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

export default Review;
