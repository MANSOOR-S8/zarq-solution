import React from "react";
import "./Style.css";

const technologies = [
  {
    id: 1,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1683.webp",
  },
  {
    id: 2,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1650.webp",
  },
  {
    id: 3,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1651.png",
  },
  {
    id: 4,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1646-1.webp",
  },
  {
    id: 5,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1647.webp",
  },
  {
    id: 6,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1645.webp",
  },
  {
    id: 7,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1656.png",
  },
  {
    id: 8,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1657.webp",
  },
  {
    id: 9,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1658.webp",
  },
  {
    id: 10,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1659.webp",
  },
  {
    id: 11,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1653.webp",
  },
  {
    id: 12,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1648-1.webp",
  },
  {
    id: 13,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1652.webp",
  },
  {
    id: 14,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1644.png",
  },
  {
    id: 15,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1643.png",
  },
  {
    id: 16,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1641.png",
  },
  {
    id: 17,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1655.webp",
  },
  {
    id: 18,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1654-1.webp",
  },
  {
    id: 19,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1682.png",
  },
  {
    id: 20,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1680.png",
  },
  {
    id: 21,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1677.png",
  },
  {
    id: 22,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1676-1.webp",
  },
  {
    id: 23,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1678.webp",
  },
  {
    id: 24,
    img: "https://zarqsolution.com/wp-content/uploads/2025/03/image-1681.webp",
  },
];

function TechnologyCard() {
  const firstRow = technologies.slice(0, 12);
  const secondRow = technologies.slice(12, 24);
  return (
    <section className="bg-[#fff] py-16">
      <div className="max-w-[1400px]  mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
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

        <div className="techCard-container">
          <div className=" techCard-track scroll-left">
            {[...firstRow, ...firstRow].map((item, index) => {
              return (
                <img
                  key={`row1-${item.id}-${index}`}
                  src={item.img}
                  alt=""
                  className="techCard-img filter grayscale hover:grayscale-0"
                />
              );
            })}
          </div>
        </div>
        <div className="techCard-container">
          <div className="techCard-track scroll-right">
            {[...secondRow, ...secondRow].map((item, index) => {
              return (
                <img
                  key={`row2-${item.id}-${index}`}
                  src={item.img}
                  alt=""
                  className="techCard-img filter grayscale hover:grayscale-0"
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
