import React from "react";
import styles from "./technology.module.css";

//images
import slider1 from "../../assets/techSlider/React2.png";
import slider2 from "../../assets/techSlider/Laravel.webp";
import slider3 from "../../assets/techSlider/Codigniter.png";
import slider4 from "../../assets/techSlider/Node.png";
import slider5 from "../../assets/techSlider/VueJs.png";
import slider6 from "../../assets/techSlider/Php.png";
import slider7 from "../../assets/techSlider/Docker.png";
import slider8 from "../../assets/techSlider/wordpress-original.png";
import slider9 from "../../assets/techSlider/shopify.webp";
import slider10 from "../../assets/techSlider/wix.webp";
import slider11 from "../../assets/techSlider/Bootstrap.png";
import slider12 from "../../assets/techSlider/Angular.png";
import slider13 from "../../assets/techSlider/googlecloud.webp";
import slider14 from "../../assets/techSlider/Net.png";
import slider15 from "../../assets/techSlider/MySQL.png";
import slider16 from "../../assets/techSlider/AWS.png";
import slider17 from "../../assets/techSlider/symfony.webp";
import slider18 from "../../assets/techSlider/tailwind-css-1.svg";
import slider19 from "../../assets/techSlider/flutter2.png";
import slider20 from "../../assets/techSlider/firebase.png";
import slider21 from "../../assets/techSlider/Java.png";
import slider22 from "../../assets/techSlider/swift12.webp";
import slider23 from "../../assets/techSlider/kotlin2.webp";
import slider24 from "../../assets/techSlider/restapi.webp";

const technologies = [
  {
    id: 1,
    img: slider1,
  },
  {
    id: 2,
    img: slider2,
  },
  {
    id: 3,
    img: slider3,
  },
  {
    id: 4,
    img: slider4,
  },
  {
    id: 5,
    img: slider5,
  },
  {
    id: 6,
    img: slider6,
  },
  {
    id: 7,
    img: slider7,
  },
  {
    id: 8,
    img: slider8,
  },
  {
    id: 9,
    img: slider9,
  },
  {
    id: 10,
    img: slider10,
  },
  {
    id: 11,
    img: slider11,
  },
  {
    id: 12,
    img: slider12,
  },
  {
    id: 13,
    img: slider13,
  },
  {
    id: 14,
    img: slider14,
  },
  {
    id: 15,
    img: slider15,
  },
  {
    id: 16,
    img: slider16,
  },
  {
    id: 17,
    img: slider17,
  },
  {
    id: 18,
    img: slider18,
  },
  {
    id: 19,
    img: slider19,
  },
  {
    id: 20,
    img: slider20,
  },
  {
    id: 21,
    img: slider21,
  },
  {
    id: 22,
    img: slider22,
  },
  {
    id: 23,
    img: slider23,
  },
  {
    id: 24,
    img: slider24,
  },
];

function TechnologyCard() {
  const firstRow = technologies.slice(0, 12);
  const secondRow = technologies.slice(12, 24);
  return (
    <section className="bg-[#fff] py-16">
      <div className=" mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-balance lg:text-[48px] font-[500] tracking-tight md:text-4xl">
            <span className=" bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Technologies We Use
            </span>
          </h2>
          <p className="text-[#000] mt-2 text-lg">
            Powering Your Software with the Latest Tech
          </p>
        </div>

        {/* Grid same as projects */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 flex items-center justify-center p-6"
            >
              <img
                src={tech.img}
                alt="Technology"
                className="h-16 md:h-20 object-contain filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div> */}

        <div className={styles["techCard-container"]}>
          <div
            className={`${styles["techCard-track"]} ${styles["scroll-left"]}`}
          >
            {[...firstRow, ...firstRow].map((item, index) => {
              return (
                <img
                  key={`row1-${item.id}-${index}`}
                  src={item.img}
                  alt=""
                  className={`${styles["techCard-img"]} filter grayscale hover:grayscale-0`}
                />
              );
            })}
          </div>
        </div>
        <div className={styles["techCard-container-two"]}>
          <div
            className={`${styles["techCard-track"]} ${styles["scroll-right"]}`}
          >
            {[...secondRow, ...secondRow].map((item, index) => {
              return (
                <img
                  key={`row2-${item.id}-${index}`}
                  src={item.img}
                  alt=""
                  className={`${styles["techCard-img"]} filter grayscale hover:grayscale-0`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnologyCard;
