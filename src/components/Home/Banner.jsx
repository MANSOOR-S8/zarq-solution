import "../../App.css";

function Banner() {
  return (
    <>
      <div className="banner-sec ">
        <div className="container">
          <h1 className=" text-[50px] text-center font-bold  ">
            Zarq Solution: Transforming Ideas into Reality with Innovative Web,
            Mobile & UI/UX Solutions.
          </h1>
          <p className="text-[22px] text-center pt-6  ">
            Zarq Solution is a global leader in software development, web
            design, and mobile app development, delivering innovative solutions
            that transform ideas into reality. With cutting-edge technology and
            a commitment to excellence, we help businesses thrive in the digital
            world.
          </p>
          <div className="flex justify-center mt-12">
            <button className="bg-[#0B80DA] px-6 py-3 rounded text-white cursor-pointer">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner;
