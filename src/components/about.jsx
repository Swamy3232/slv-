// src/pages/AboutUs.jsx
import { useEffect, useRef, useState } from "react";
import Navbar from "./nav";

// Custom SLV Logo Component (same as HomePage)
const SLVLogo = ({ className = "h-16 w-auto", textColor = "#1f2937" }) => {
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
        fill={textColor}
      >
        SLV Packaging
      </text>
    </svg>
  );
};


const industries = [
    "Electronics Industry",
    "Pharma",
    "Biotechnology",
    "Life Sciences",
    "Network Systems"
  ];
const AboutUs = () => {
  const sectionRefs = useRef([]);
  const [activeRole, setActiveRole] = useState(0); // desktop tabs
  const [openAccordion, setOpenAccordion] = useState(null); // mobile accordion

  useEffect(() => {
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
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

  const management = [
    {
      title: "Partner / MD",
      responsibilities: [
        "Overall in-charge of the plant",
        "Provide adequate resources",
        "Financial planning",
        "Launch of new products",
        "Establishing strategies and business development",
        "Review overall performance",
        "Plan for organizational growth",
        "Chair management review meetings and give executive directions",
        "Admin activities and coordination with finance",
        "Facility planning",
      ],
      authority: [
        "Approve quality policy and objectives",
        "Approve budget",
        "Approval of quality system manuals",
        "Approval of resources",
        "Customer-related processes & marketing",
        "Purchasing",
        "HR activity",
      ],
    },
    {
      title: "General Manager - (MFG)/HR",
      responsibilities: [
        "Manage all manufacturing and works related activities",
        "Review and monitor continual improvement activities",
        "Monitor and implement customer schedules",
        "Provide adequate resources for effective manufacturing",
        "Support product development activities",
        "Ensure skill development & training for employees",
        "Prepare production plans & schedules",
        "Initiate corrective and preventive actions to improve processes",
        "Procurement/replacement of materials",
        "Calibration of measuring and monitoring equipment",
        "Admin activities",
      ],
      authority: [
        "Approval of quotations",
        "Chair management meetings in absence of MD",
        "Ensure functional/process objectives align with quality policy",
        "Approve supplier corrective actions",
        "Approve purchase orders and documents",
        "Authorization to stop production for quality issues",
        "Review and authorize sales documents",
        "Approve incoming, in-process, and final materials/products",
        "Approve leave and appointment letters",
      ],
    },
    {
      title: "Supervisor (Production)",
      responsibilities: [
        "Allocate manpower",
        "Follow-up for production schedule completion",
        "Prepare and update production documents and records",
        "Implement changes in process/product as required",
        "Ensure work instructions are available at point of use",
        "Record non-conforming products",
        "Prepare sales/dispatch documents",
        "Control material receipt and issue through proper records",
        "Ensure cleanliness and organization on shop floor",
        "Assist in developmental activities",
      ],
      authority: ["N/A"],
    },
    {
      title: "Employee / Operator (Permanent)",
      responsibilities: [
        "Carry out in-process inspection of manufacturing processes",
        "Work as assigned by Supervisor/GM",
        "Routine machine maintenance and housekeeping",
        "Material loading & unloading",
        "Proper handling of machines and equipment",
        "Maintain stock register and store documents",
        "Control material receipt and issue",
      ],
      authority: ["N/A"],
    },
    {
      title: "Supervisor Trainee / Contract Employees",
      responsibilities: [
        "Work as assigned by Supervisor/GM",
        "Routine machine maintenance and housekeeping",
        "Material handling during processing",
        "Follow work instructions accurately",
      ],
      authority: ["N/A"],
    },
    {
      title: "Quality / Marketing / Purchase In-Charge",
      responsibilities: [
        "Ensure inspection and quality control at all stages",
        "Monitor and manage customer communications",
        "Prepare and approve purchase orders and quotes",
        "Monitor delivery status and supplier performance",
      ],
      authority: [
        "Authorize product release",
        "Approve relevant documents",
        "Approve purchase orders and quotations",
      ],
    },
  ];

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
            About <span className="text-amber-600">SLV Packaging</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            SLV Packaging, founded in 2013, is a proprietorship company with extensive experience in manufacturing high-quality corrugated boxes customized to meet diverse customer requirements.
          </p>
        </div>
      </section>

      {/* Company Commitment */}
      <section ref={addToRefs} className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="bg-white rounded-2xl p-8 shadow-lg transform transition-transform duration-300 hover:scale-[1.01]">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
            Our <span className="text-amber-600">Commitment</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            We strive to exceed customer expectations through best-in-class production processes, premium materials, state-of-the-art equipment, and skilled craftsmanship. Our dedication ensures customer satisfaction and long-term relationships.
          </p>
        </div>
      </section>

      {/* Organizational Hierarchy */}
      <section ref={addToRefs} className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 text-center">
            Organizational <span className="text-amber-600">Structure</span>
          </h2>

          {/* Role Selection Tabs (Mobile Dropdown) */}
          <div className="md:hidden mb-8">
            <select
              className="w-full p-3 rounded-lg border border-amber-300 bg-amber-50 text-gray-800 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              value={activeRole}
              onChange={(e) => setActiveRole(parseInt(e.target.value))}
            >
              {management.map((person, idx) => (
                <option key={idx} value={idx}>
                  {person.title}
                </option>
              ))}
            </select>
          </div>

          {/* Role Selection Tabs (Desktop) */}
          <div className="hidden md:flex justify-center mb-10 overflow-x-auto">
            <div className="flex space-x-1 bg-amber-100 p-2 rounded-xl">
              {management.map((person, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeRole === idx
                      ? "bg-amber-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-amber-200"
                  }`}
                  onClick={() => setActiveRole(idx)}
                >
                  {person.title.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Role Details (Desktop / Dropdown) */}
          <div className="bg-amber-50 rounded-2xl p-6 md:p-8 shadow-md">
            <h3 className="text-2xl md:text-3xl font-semibold text-amber-700 mb-6 pb-3 border-b border-amber-200">
              {management[activeRole].title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-4 flex items-center">
                  <span className="inline-block w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                  Responsibilities:
                </h4>
                <ul className="space-y-3">
                  {management[activeRole].responsibilities.map((res, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-amber-600 mr-2 mt-1">•</span>
                      <span className="text-gray-700">{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-4 flex items-center">
                  <span className="inline-block w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                  Authority:
                </h4>
                <ul className="space-y-3">
                  {management[activeRole].authority.map((auth, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-amber-600 mr-2 mt-1">•</span>
                      <span className="text-gray-700">{auth}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* All Roles Accordion (Mobile) */}
          <div className="mt-12 space-y-6 md:hidden">
            {management.map((person, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  className="w-full p-4 text-left font-semibold text-gray-800 bg-amber-100 flex justify-between items-center"
                  onClick={() =>
                    setOpenAccordion(openAccordion === idx ? null : idx)
                  }
                >
                  {person.title}
                  <span className="transform transition-transform duration-300">
                    {openAccordion === idx ? "▲" : "▼"}
                  </span>
                </button>

                {openAccordion === idx && (
                  <div className="p-4 bg-amber-50 animate-fade-in">
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-800 mb-2">
                        Responsibilities:
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 pl-4">
                        {person.responsibilities.map((res, i) => (
                          <li key={i}>{res}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        Authority:
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 pl-4">
                        {person.authority.map((auth, i) => (
                          <li key={i}>{auth}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
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
export default AboutUs;
