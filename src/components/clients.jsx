// src/pages/ClientsPage.jsx
import { useEffect, useRef } from "react";
import Navbar from "./nav";

// SVG Logo Component
const SLVLogo = ({ className = "h-16 w-auto", textColor = "#1f2937" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 350 60"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMid meet"
      role="img"
      aria-label="SLV Packaging Logo"
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
        fill={textColor}
      >
        SLV Packaging
      </text>
    </svg>
  );
};

const ClientsPage = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
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
    }
  };

  // Industries list
  const industries = [
    "Electronics Industry",
    "Pharma",
    "Biotechnology",
    "Life Sciences",
    "Network Systems"
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 text-center py-20 md:py-28 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 animate-fade-in-down">
            Industries We <span className="text-amber-600">Serve</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            SLV Packaging provides high-quality, specialized packaging solutions for leading industries.
          </p>
        </div>
      </section>

      {/* Industries Section */}
      <section
        ref={addToRefs}
        className="max-w-5xl mx-auto px-6 py-16 md:py-24 opacity-0 transition-all duration-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{industry}</h3>
            </div>
          ))}
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
            <p className="text-gray-400">Phone: 9008503517</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>© {new Date().getFullYear()} SLV Packaging. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ClientsPage;
