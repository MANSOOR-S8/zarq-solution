import "./slider.css";

function Slider() {
  const sliderImg = [
    {
      id: 1,
      img: "https://zarqsolution.com/wp-content/uploads/elementor/thumbs/Group-181-1-r3882o1drx9p67kebx8ex94bj7khvgsmvefoynhhms.jpg",
    },
    {
      id: 2,
      img: "https://zarqsolution.com/wp-content/uploads/elementor/thumbs/Group-180-2-r3882oz7yrazhtj16fn1hqvs4lfv35wd7j36fxg3gk.jpg",
    },
    {
      id: 3,
      img: "https://zarqsolution.com/wp-content/uploads/elementor/thumbs/Group-245-1-r3882l7v7f5u7dohse0j7rtxr1ye8dhfv0h8itlo5g.jpg",
    },
    {
      id: 4,
      img: "https://zarqsolution.com/wp-content/uploads/elementor/thumbs/Group-178-1-r3882n3jl38eullrhetscrcuxtp4nrowj9s7hdivt0.jpg",
    },
    {
      id: 5,
      img: "https://zarqsolution.com/wp-content/uploads/elementor/thumbs/Group-243-2-r3882m5pe974izn4mwf5s9lecftrg2l6754q03k9z8.jpg",
    },
    {
      id: 6,
      img: "https://zarqsolution.com/wp-content/uploads/elementor/thumbs/Frame-47310-r34hr1bql1nl8bl90p0ukiaas9s0zpoc190aytbnus.webp",
    },
    {
      id: 7,
      img: "https://zarqsolution.com/wp-content/uploads/elementor/thumbs/Group-179-1-r3882o1drx9p67kebx8ex94bj7khvgsmvefoynhhms.jpg",
    },
    {
      id: 8,
      img: "https://zarqsolution.com/wp-content/uploads/elementor/thumbs/Group-177-1-r3882n3jl38eullrhetscrcuxtp4nrowj9s7hdivt0.jpg",
    },
    {
      id: 9,
      img: "https://zarqsolution.com/wp-content/uploads/elementor/thumbs/Group-47310-r34hyfc2b5rqhyuuve09o55qwbcwi20ddtmps4d8xw.png",
    },
  ];

  // Duplicate the array for smooth infinite scroll
  const images = [...sliderImg, ...sliderImg];

  return (
    <div className="slider-container">
      <div className="slider-track">
        {images.map((item, index) => (
          <img
            key={`${item.id}-${index}`}
            src={item.img}
            alt={`slide-${item.id}`}
            className="slider-img"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
