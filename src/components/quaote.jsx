// src/pages/GetQuote.jsx
import { useState } from "react";
import Navbar from "./nav";

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirements: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = "Quotation Request";
    const body = `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Requirements: ${formData.requirements}
    `;

    // Open user's email client with pre-filled subject + body
    window.location.href = `mailto:Venkys1969@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

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
  };

  return (
    <div>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Request a Quote
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            />
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              placeholder="Your Requirements"
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-amber-700 transition transform hover:scale-105 w-full"
            >
              Request Quote
            </button>
          </form>

          {isSubmitted && (
            <p className="text-green-600 text-center mt-4">
              Opening your email client...
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default GetQuote;
