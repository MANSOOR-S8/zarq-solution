import React from "react";
import Achievements from "../OurProjectsSec/Achievements";
import Stages from "../OurProjectsSec/Stages";
import Footer from "../Footer/Footer";
import ChooseUs from "./ChooseUs";
import "./About.css";
//images
import aboutBanner from "../../assets/Aboutpic.webp";
function About() {
  const cards = [
    {
      id: 1,
      title: "Who Are We",
      content:
        "At Zarq Solution, our mission is to innovate and deliver top tier software solutions that empower businesses with cutting edge technology and seamless user experiences.",
    },
    {
      id: 2,
      title: "Our Mission",
      content:
        "We are a team of passionate developers, designers, and tech experts dedicated to building smart, scalable, and high performance digital solutions for businesses worldwide.",
    },
    {
      id: 3,
      title: "What We Do",
      content: [
        "UI UX Design",
        "Website Development",
        "Marketing",
        "Social Media",
        "eCommerce Store",
        "Tech Support",
      ], // array bhi pass kar sakte ho
    },
  ];

  return (
    <div className="">
      <section
        className=""
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 50, 0.80), rgba(0, 0, 15, 0.6)), url(${aboutBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="py-18">
          <div className="max-w-[1400px] mx-auto px-6 text-center p-20">
            {/* Heading */}
            <h2 className="text-balance text-white text-4xl lg:text-7xl font-bold tracking-tight md:text-4xl">
              Welcome to Zarq Solution
            </h2>
            <p className="mt-4 text-[#f1f1f1] max-w-2xl mx-auto">
              Zarq Solution is a tech driven software house specializing in web
              and mobile solutions, delivering innovative and high quality
              digital experiences.
            </p>
          </div>
        </div>
      </section>
      <div
        className="relative z-10  container mx-auto px-6 "
        data-aos="fade-up"
      >
        {/* Cards */}
        <div className=" -mt-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-left flex flex-col "
            >
              <hr className=" border-4 w-[60px] border-[#2c8ae9] " />
              <h3 className="text-[22px] font-bold text-[#0B80DA]  inline-block mb-4 text-left pt-7">
                {card.title}
              </h3>

              {Array.isArray(card.content) ? (
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-left">
                  {card.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 text-[18px] ">{card.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <ChooseUs />
      </div>
      <div className="mt-1">
        <Achievements />
      </div>
      <div>
        <Stages />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default About;
