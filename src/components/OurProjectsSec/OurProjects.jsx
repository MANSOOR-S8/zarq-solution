import "./Style.css";
function OurProjects() {
  const projectCard = [
    {
      id: 1,
      title: "Spy Camera CCTV",
      desc: "Ensuring security with high-quality, discreet surveillance solutions for homes and businesses. Stay protected with advanced monitoring technology.",
      img: "https://zarqsolution.com/wp-content/uploads/2025/09/screencapture-spycameracctv-2025-03-09-11_21_19-scaled.webp",
    },
    {
      id: 2,
      title: "Tech Logistics",
      desc: "Streamlining supply chains with smart, technology-driven logistics solutions for faster, more efficient, and secure deliveries.",
      img: "https://zarqsolution.com/wp-content/uploads/2025/03/screencapture-techlogistics-2025-03-09-11_28_13.webp",
    },
    {
      id: 3,
      title: "College Bound Movers",
      desc: "Reliable and stress-free moving services tailored for students, families, and businesses. We make your move smooth, efficient, and hassle-free!",
      img: "https://zarqsolution.com/wp-content/uploads/2025/03/screencapture-collegeboundmovers-2025-03-09-11_18_15.webp",
    },
    {
      id: 4,
      title: "Triple J Furniture",
      desc: "A feature-rich eCommerce platform offering a seamless online shopping experience with intuitive UI/UX, secure payments, and advanced product browsing for premium furniture.",
      img: "https://zarqsolution.com/wp-content/uploads/2025/09/sd-scaled.webp",
    },
    {
      id: 5,
      title: "Mars Translation",
      desc: "A professional translation platform offering fast, accurate, and industry-specific language solutions to help businesses expand globally with ease",
      img: "https://zarqsolution.com/wp-content/uploads/2025/09/screencapture_marstranslation_2025_03_09_11_20_24_1_1-scaled.webp",
    },
    {
      id: 6,
      title: "SHIPCL LOGISTICS",
      desc: "A logistics software for efficient carrier management, warehouse optimization, and seamless goods transportation.",
      img: "https://zarqsolution.com/wp-content/uploads/2025/03/Group-47312.png",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectCard.map((pCard) => (
            <div
              key={pCard.id}
              className="card bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <div className="img-wrapper">
                <img
                  src={pCard.img}
                  alt={pCard.title}
                  className="w-full h-48 object-cover img"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[22px] font-semibold text-[#0B80DA] mb-2">
                  {pCard.title}
                </h3>
                <p className="text-[16px] font-normal text-gray-600">
                  {pCard.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurProjects;
