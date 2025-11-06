import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Notification from "./Notification";
import emailjs from "@emailjs/browser";

//icons
import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationDot } from "react-icons/fa6";

function Consultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [error, setError] = useState({});
  const [captchaValue, setCaptchaValue] = useState("");
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCaptcha = (value) => {
    setCaptchaValue(value);
    setError((prev) => ({ ...prev, captcha: "" }));
  };

  const validation = () => {
    const newError = {};
    if (!formData.name.trim()) newError.name = "Name is required";
    if (!formData.email.trim()) newError.email = "Email is required";
    if (!formData.phone.trim()) newError.phone = "Phone number is required";
    if (!formData.company.trim()) newError.company = "Company name is required";
    if (!formData.message.trim()) newError.message = "Message is required";
    if (!captchaValue) newError.captcha = "Please verify reCAPTCHA";
    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validation();

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            company: formData.company,
            message: formData.message,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          (response) => {
            setNotification({
              message: "Message sent successfully!",
              type: "success",
            });
            setFormData({
              name: "",
              email: "",
              phone: "",
              company: "",
              message: "",
            });
            setCaptchaValue("");
            setError({});
          },
          () => {
            setNotification({
              message: "Something went wrong. Please try again.",
              type: "error",
            });
          }
        );
    }
  };

  return (
    <div className=" bg-gray-100 flex items-center justify-center px-4 py-10">
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}

      {/*  */}
      <div className="container mx-auto max-w-7xl p-0 m-0">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-3">
            <h2 className="text-balance text-3xl lg:text-[48px] font-semibold text-center tracking-tight md:text-4xl">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Get a Free Consultation
              </span>
            </h2>
          </div>

          {/* Left Info */}
          <div className="space-y-6 col-span-1" data-aos="fade-right">
            {/* Address */}
            <div className="border border-gray-200 rounded-lg p-6 text-center bg-white">
              <div className="flex justify-center mb-2">
                <a
                  href="https://www.google.com/maps/place/Zarq+Solution/@34.0101342,71.7842008,17z/data=!4m14!1m7!3m6!1s0x38d92fded2314691:0xfb10cfd2a2ed7f61!2sZarq+Solution!8m2!3d34.0101298!4d71.7867757!16s%2Fg%2F11wc2w2h3x!3m5!1s0x38d92fded2314691:0xfb10cfd2a2ed7f61!8m2!3d34.0101298!4d71.7867757!16s%2Fg%2F11wc2w2h3x?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition">
                    <FaLocationDot className="text-4xl text-[#0b80da]" />
                  </div>
                </a>
              </div>
              <h3 className="font-bold text-[22px] text-[#0b80da]">Address</h3>
              <p>Main Grand Trunk Rd, Pabbi, Pakistan</p>
            </div>

            {/* Phone */}
            <div className="border border-gray-200 rounded-lg p-6 text-center bg-white">
              <div className="flex justify-center mb-2">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaPhone className="text-4xl text-[#0b80da]" />
                </div>
              </div>
              <h3 className="font-bold text-[22px] text-[#0b80da]">Call Us</h3>
              <p>+92 315 9714276</p>
            </div>

            {/* Email */}
            <div className="border border-gray-200 rounded-lg p-6 text-center bg-white">
              <div className="flex justify-center mb-2">
                <a
                  href="mailto:info@zarqsolution.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition">
                    <MdEmail className="text-4xl text-[#0B80DA]" />
                  </div>
                </a>
              </div>
              <h3 className="font-bold text-[22px] text-[#0b80da]">Email Us</h3>
              <a
                href="mailto:info@zarqsolution.com"
                className="text-blue-600 hover:underline"
              >
                info@zarqsolution.com
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="md:col-span-2" data-aos="fade-left">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                  {error.name && (
                    <p className="text-red-500 text-sm">{error.name}</p>
                  )}
                </div>
                <div>
                  <label className="block mb-1 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                  {error.email && (
                    <p className="text-red-500 text-sm">{error.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Phone Number"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                  {error.phone && (
                    <p className="text-red-500 text-sm">{error.phone}</p>
                  )}
                </div>
                <div>
                  <label className="block mb-1 font-medium">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter Company Name"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                  {error.company && (
                    <p className="text-red-500 text-sm">{error.company}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type Your Message..."
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                ></textarea>
                {error.message && (
                  <p className="text-red-500 text-sm">{error.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2 mt-2">
                {import.meta.env.VITE_SITE_KEY ? (
                  <ReCAPTCHA
                    sitekey={import.meta.env.VITE_SITE_KEY}
                    onChange={handleCaptcha}
                  />
                ) : (
                  <p style={{ color: "red" }}> reCAPTCHA site key missing</p>
                )}
                {error.captcha && (
                  <p className="text-red-500 text-sm">{error.captcha}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-[#0b80da] cursor-pointer hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded mt-4"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
