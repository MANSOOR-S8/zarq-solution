import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

function ContactUs() {
  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-md p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-3">
          <h2 className="text-3xl font-bold text-[#0b80da] mb-6 text-center">
            Request Free Consultation
          </h2>
        </div>

        <div className="space-y-6 col-span-1 ">
          {/* Address */}
          <div className="border border-gray-200 rounded-lg p-6 text-center   bg-white">
            <div className="flex justify-center mb-2">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg
                  className="w-8 h-8  text-[#0b80da]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
            </div>
            <h3 className="font-bold text-[22px] text-[#0b80da]">Address</h3>
            <p>Main Grand Trunk Rd, Pabbi, Pakistan</p>
          </div>

          {/* Phone */}
          <div className="border border-gray-200 rounded-lg p-6 text-center  bg-white">
            <div className="flex justify-center mb-2">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg
                  className="w-8 h-8 text-[#0b80da]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.2 3.59a1 1 0 01-.23 1.03L8.21 9.79a16.001 16.001 0 007 7l1.49-1.49a1 1 0 011.03-.23l3.59 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.82 21 3 14.18 3 6V5z" />
                </svg>
              </div>
            </div>
            <h3 className="font-bold text-[22px] text-[#0b80da]">Call Us</h3>
            <p>+92 315 9714276</p>
          </div>

          {/* Email */}
          <div className="border border-gray-200 rounded-lg p-6 text-center  bg-white">
            <div className="flex justify-center mb-2">
              <div className="bg-blue-100 p-3 rounded-full">
                <a href="info@zarqsolution.com">
                  <svg
                    className="w-8 h-8 text-[#0b80da]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h16v16H4V4zm0 0l8 8 8-8" />
                  </svg>
                </a>
              </div>
            </div>
            <h3 className="font-bold text-[22px] text-[#0b80da]">Email Us</h3>
            <a href="info@zarqsolution.com ">info@zarqsolution.com</a>
          </div>
        </div>

        {/* Right - Form Section */}
        <div className="md:col-span-2">
          <form className="space-y-4">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            {/* Phone & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Company</label>
                <input
                  type="text"
                  placeholder="Enter Company Name"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Type Your Message..."
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              ></textarea>
            </div>

            {/* reCAPTCHA (placeholder) */}
            <div className="flex items-center gap-2 mt-2">
              {import.meta.env.VITE_SITE_KEY ? (
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_SITE_KEY}
                  onChange={handleCaptchaChange}
                />
              ) : (
                <p style={{ color: "red" }}>⚠️ reCAPTCHA site key missing</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-[#0b80da] hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded mt-4"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
