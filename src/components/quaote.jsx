// src/pages/GetQuote.jsx
import { useState } from "react";
import Navbar from "./nav";

// Reuse your SLV Logo
const SLVLogo = ({ className = "h-16 w-auto" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 350 60"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMid meet"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>

      <rect x="0" y="10" width="50" height="40" rx="6" fill="url(#logoGradient)" />
      <polygon points="25,15 40,30 25,45 10,30" fill="white" opacity="0.85" />
      <text
        x="60"
        y="38"
        fontFamily="Arial, sans-serif"
        fontSize="26"
        fontWeight="700"
        fill="#1f2937"
      >
        SLV Packaging
      </text>
    </svg>
  );
};

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirements: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote Request:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        requirements: ""
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="max-w-3xl mx-auto">
          <SLVLogo className="h-16 md:h-20 w-auto mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Request a <span className="text-amber-600">Quote</span>
          </h1>
          <p className="text-gray-700 text-lg">
            Fill in your details and requirements, and we’ll get back with a quote.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Get Your Quote
          </h2>

          {isSubmitted ? (
            <div className="bg-green-100 text-green-700 p-4 rounded-lg text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-auto mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 
                9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-medium">
                Thank you! We’ll prepare your quote and contact you shortly.
              </p>
            </div>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your company name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Requirements</label>
                <textarea
                  name="requirements"
                  rows={5}
                  value={formData.requirements}
                  onChange={handleInputChange}
                  placeholder="Describe your packaging requirements"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <a
  href="mailto:gowdaswami497@@gmail.com?subject=Request%20Quote&body=Hello%20SLV%20Packaging,%0D%0A%0D%0AI%20would%20like%20a%20quote%20for..."
  className="bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-amber-700 transition transform hover:scale-105 inline-block text-center"
>
  Request Quote
</a>

            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <SLVLogo className="h-10 w-auto mx-auto mb-4" />
          <p className="text-gray-400">© {new Date().getFullYear()} SLV Packaging. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GetQuote;
