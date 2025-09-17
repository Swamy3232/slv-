// src/components/Navbar.jsx
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    {name: "Clients", href: "/clients"},
    { name: "Contact & Location", href: "/contact" },
    

  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    setActiveLink(window.location.pathname);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center group">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
            <span className="text-white font-bold text-xl tracking-tight">SLV</span>
          </div>
          <div className="ml-3">
            <div className="text-xl font-bold text-gray-800 tracking-tight group-hover:text-indigo-700 transition-colors">
              Packaging
            </div>
            <div className="text-xs text-gray-500 mt-0.5 tracking-wider">SINCE 2013</div>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-1 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name} className="relative">
              <a
                href={link.href}
                className={`px-4 py-2.5 rounded-xl transition-all duration-200 relative group ${
                  activeLink === link.href
                    ? "text-indigo-700 font-semibold bg-indigo-50"
                    : "hover:text-indigo-600"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-4 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-2/3 ${
                    activeLink === link.href ? "w-2/3" : ""
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Call to Action */}
        <a
          href="/quote"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium text-sm shadow-md hover:shadow-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          Get Quote
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center rounded-xl bg-gray-50 hover:bg-indigo-50 focus:outline-none transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 mb-1.5 transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 mb-1.5 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl">
          <ul className="flex flex-col p-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center py-3 px-5 rounded-xl transition-all duration-200 ${
                    activeLink === link.href
                      ? "bg-indigo-50 text-indigo-700 font-semibold"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  {link.name}
                  {activeLink === link.href && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-auto text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </a>
              </li>
            ))}
            <li className="pt-3 mt-2 border-t border-gray-200">
              <a
                href="/quote"
                onClick={() => setIsOpen(false)}
                className="flex justify-center items-center py-3 px-5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium hover:from-indigo-700 hover:to-blue-700 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                Get Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;