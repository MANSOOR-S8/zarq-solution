import styles from "./slider.module.css";
import slider1 from "../../assets/slider/slider1.png";
import slider2 from "../../assets/slider/slider2.jpg";
import slider3 from "../../assets/slider/slider3.jpg";
import slider4 from "../../assets/slider/slider4.jpg";
import slider5 from "../../assets/slider/slider5.jpg";
import slider6 from "../../assets/slider/slider6.jpg";
import slider7 from "../../assets/slider/slider7.jpg";
import slider8 from "../../assets/slider/slider8.jpg";
import slider9 from "../../assets/slider/slider9.png";

function Slider() {
  const sliderImg = [
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
  ];

  // Duplicate the array for smooth infinite scroll
  const images = [...sliderImg, ...sliderImg];

  return (
    <div className=" mx-auto ">
      <div className={styles["slider-container"]}>
        <div className={styles["slider-track"]}>
          {images.map((item, index) => (
            <img
              key={`${item.id}-${index}`}
              src={item.img}
              alt={`slide-${item.id}`}
              className={styles["slider-img"]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
