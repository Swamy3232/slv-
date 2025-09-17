// src/pages/GetQuote.jsx
import { useState } from "react";
import Navbar from "./nav";

// Reusable SLV Logo Component
const SLVLogo = ({ className = "h-16 w-auto", textColor = "#1f2937" }) => (
  <svg
    className={className}
    viewBox="0 0 350 60"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMid meet"
  >
    {/* Replace with your actual SVG content */}
    <text x="0" y="40" fill={textColor} fontSize="36" fontWeight="bold">
      SLV
    </text>
  </svg>
);

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirements: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const industries = [
    "Electronics Industry",
    "Pharma",
    "Biotechnology",
    "Life Sciences",
    "Network Systems",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const subject = "Quotation Request";
    const body = `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Requirements: ${formData.requirements}
    `;

    setTimeout(() => {
      // Open user's email client
      window.location.href = `mailto:Venkys1969@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      setIsLoading(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          requirements: "",
        });
      }, 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50">
      <Navbar />

      <section className="flex flex-col items-center justify-center px-6 py-12 md:py-16 lg:py-20">
        <div className="max-w-2xl w-full bg-white p-8 rounded-3xl shadow-xl border border-amber-100">
          <header className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              Request a Quote
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Fill out the form below and we'll get back to you with a customized quote for your project needs.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition duration-200"
                />
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition duration-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition duration-200"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9008503517"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition duration-200"
                />
              </div>
            </div>

            {/* Project Requirements */}
            <div className="space-y-2">
              <label htmlFor="requirements" className="text-sm font-medium text-gray-700">
                Project Requirements *
              </label>
              <textarea
                id="requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                placeholder="Please describe your project requirements in detail..."
                rows="5"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition duration-200"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 w-full flex items-center justify-center ${
                isLoading
                  ? "opacity-80 cursor-not-allowed"
                  : "hover:from-amber-700 hover:to-amber-800 hover:shadow-lg"
              }`}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Request Quote"
              )}
            </button>
          </form>

          {/* Success Message */}
          {isSubmitted && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-center animate-fade-in">
              <svg
                className="w-6 h-6 text-green-600 inline-block mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-green-700 font-medium">Opening your email client...</span>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <SLVLogo className="h-10 w-auto mb-4" textColor="#ffffff" />
            <p className="text-gray-400">
              High-quality corrugated boxes, EPE foam solutions, and packaging services.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Industries Served</h3>
            <ul className="text-gray-400 space-y-2">
              {industries.map((industry, idx) => (
                <li key={idx}>{industry}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: Venkys1969@gmail.com</p>
            <p className="text-gray-400">Phone: +91 9008503517</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>© {new Date().getFullYear()} SLV Packaging. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GetQuote;
