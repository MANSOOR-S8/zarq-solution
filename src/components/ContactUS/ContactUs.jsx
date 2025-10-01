import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import Notification from "./Notification";

//form submission

import emailjs from "@emailjs/browser";

function ContactUs() {
  // Form state
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

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  };

  // Captcha change
  const handleCaptcha = (value) => {
    setCaptchaValue(value);
    setError((prev) => ({ ...prev, captcha: "" }));
  };

  // Validation function
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

  // Handle form submit
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const validationErrors = validation();

  //   if (Object.keys(validationErrors).length > 0) {
  //     setError(validationErrors);
  //   } else {
  //     console.log("Form submitted", formData);

  //     // Reset form
  //     setFormData({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       company: "",
  //       message: "",
  //     });
  //     setCaptchaValue("");
  //     setError({});
  //   }
  // };

  // for form submition

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validation();

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID, // email id
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // template id

          {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            company: formData.company,
            message: formData.message,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY // public key
        )
        .then(
          (response) => {
            console.log("success", response.status, response.text);
            setNotification({
              message: "message sent successfully!",
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
          (err) => {
            console.error("failed", err);
            setNotification({
              message: "Something went wrong. Please try again.",
              type: "error",
            });
          }
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      {/* Notification Component */}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)} // Close notification
        />
      )}

      <div className="w-full max-w-7xl bg-white rounded-lg shadow-md p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-3">
          <h2 className="text-3xl font-bold text-[#0b80da] mb-6 text-center">
            Get a Free Consultation
          </h2>
        </div>

        {/* Left Info Section */}
        <div className="space-y-6 col-span-1 " data-aos="fade-right">
          {/* Address */}
          <div className="border border-gray-200 rounded-lg p-6 text-center bg-white">
            <div className="flex justify-center mb-2">
              <a
                href="https://www.google.com/maps/place/Zarq+Solution/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition">
                  <svg
                    className="w-8 h-8 text-[#0b80da]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
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
          <div className="border border-gray-200 rounded-lg p-6 text-center bg-white">
            <div className="flex justify-center mb-2">
              <a
                href="mailto:info@zarqsolution.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition">
                  <svg
                    className="w-8 h-8 text-[#0b80da]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h16v16H4V4zm0 0l8 8 8-8" />
                  </svg>
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

        {/* Right - Form Section */}
        <div className="md:col-span-2" data-aos="fade-left">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name & Email */}
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

            {/* Phone & Company */}
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

            {/* Message */}
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

            {/* reCAPTCHA */}
            <div className="flex flex-col gap-2 mt-2">
              {import.meta.env.VITE_SITE_KEY ? (
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_SITE_KEY}
                  onChange={handleCaptcha}
                />
              ) : (
                <p style={{ color: "red" }}>⚠️ reCAPTCHA site key missing</p>
              )}
              {error.captcha && (
                <p className="text-red-500 text-sm">{error.captcha}</p>
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
