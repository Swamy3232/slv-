// src/pages/ContactUs.jsx
import { useEffect, useRef, useState } from "react";
import Navbar from "./nav";

// Custom SLV Logo Component (same as other pages)
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

      {/* Gradient Box */}
      <rect x="0" y="10" width="50" height="40" rx="6" fill="url(#logoGradient)" />

      {/* Diamond Shape */}
      <polygon points="25,15 40,30 25,45 10,30" fill="white" opacity="0.85" />

      {/* Company Name */}
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


const ContactUs = () => {
  const sectionRefs = useRef([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            // Remove observer after animation
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
      el.classList.add("opacity-0");
    }
  };

  const address = "SLV Packaging, 10/11 Chandana Layout, Kebbehalla Main RD, Sunkadakatte, Bangalore, Karnataka, India - 560091";
//   const phone = "9008503517";
  const phone = "9008503517"; // your Indian mobile number
  const whatsappLink = `https://wa.me/91${phone}`;

  const mapsLink = "https://maps.google.com/maps?q=12.9836571%2C77.5075547&z=17&hl=en";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const subject = "Quotation Request";
  const body = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;

  // Open default email client with prefilled details
  window.location.href = `mailto:Venkys1969@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

  // Reset form
  setFormData({ name: "", email: "", message: "" });
  setIsSubmitted(true);

  setTimeout(() => {
    setIsSubmitted(false);
  }, 3000);
};

  return (
    <div className="min-h-screen bg-gray-50 font-sans overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative text-center py-20 px-6 bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-200 rounded-full opacity-20 animate-pulse-slow"></div>
          <div className="absolute top-1/3 -right-4 w-16 h-16 bg-amber-300 rounded-full opacity-30 animate-bounce-slow"></div>
          <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-orange-200 rounded-full opacity-25 animate-ping"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex justify-center mb-8">
            <SLVLogo className="h-16 md:h-20 w-auto" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">
            Contact <span className="text-amber-600">Us</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            We would love to hear from you! Reach out to us via phone, email, WhatsApp, or visit our office.
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section 
        ref={addToRefs}
        className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      >
        {/* Address */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Address</h3>
          <p className="text-gray-600 mb-4">{address}</p>
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors duration-300"
          >
            View on Maps
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Phone / WhatsApp */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Phone / WhatsApp</h3>
          <p className="text-gray-600 mb-4">{phone}</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors duration-300"
          >
            Chat on WhatsApp
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Email */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Email</h3>
          <p className="text-gray-600 mb-4">{email}</p>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors duration-300"
          >
            Send Email
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section 
        ref={addToRefs}
        className="max-w-3xl mx-auto px-6 pb-16 md:pb-24"
      >
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Send Us a Message
          </h2>
          
          {isSubmitted ? (
            <div className="bg-green-100 text-green-700 p-4 rounded-lg text-center animate-fade-in">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-medium">Thank you for your message! We'll get back to you soon.</p>
            </div>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can we help you?"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-amber-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section 
        ref={addToRefs}
        className="max-w-6xl mx-auto px-6 pb-16 md:pb-24"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          Find Us Here
        </h2>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 h-64 md:h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.986315999999!2d77.5075547!3d12.9836571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzAxLjIiTiA3N8KwMzAnMjcuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="SLV Packaging Location"
              className="rounded-lg"
            ></iframe>
          </div>
          <div className="p-6 text-center">
            <p className="text-gray-600">{address}</p>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium mt-2 transition-colors duration-300"
            >
              Get Directions
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <SLVLogo className="h-10 w-auto mb-4" />
            <p className="text-gray-400">
              High-quality corrugated boxes customized to your requirements.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: {email}</p>
            <p className="text-gray-400">Phone: {phone}</p>
          </div>
          
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>© {new Date().getFullYear()} SLV Packaging. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;