// src/components/Navbar.jsx
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Clients", href: "/clients" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    setActiveLink(window.location.pathname);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-3 border-b border-gray-100"
          : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-xl tracking-tighter">SLV</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-semibold text-gray-900 tracking-tight">
                Packaging 
              </span>
              <span className="text-xs text-gray-500 font-medium tracking-wide">
                EST. 2013
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <ul className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                      activeLink === link.href
                        ? "text-indigo-700 bg-indigo-50 font-semibold border border-indigo-200"
                        : "text-gray-600 hover:text-indigo-700 hover:bg-indigo-50"

                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="h-6 w-px bg-gray-200 mx-4"></div>
            <a
              href="/quote"
             className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 
text-white text-sm font-semibold rounded-lg 
hover:from-indigo-700 hover:to-indigo-800 
transition-all duration-200 flex items-center space-x-2 shadow-md"


            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <span>Request Quote</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative">
              <span
                className={`absolute top-0 left-0 w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                  isOpen ? "top-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute top-2 left-0 w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                  isOpen ? "bottom-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between py-3 px-4 rounded-lg transition-all duration-200 ${
                      activeLink === link.href
                        ? "bg-gray-50 text-gray-900 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    {activeLink === link.href && (
                      <svg
                        className="w-4 h-4 text-gray-900"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </a>
                </li>
              ))}
              <li className="pt-3 mt-3 border-t border-gray-100">
                <a
                  href="/quote"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2 py-3 px-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  <span>Request Quote</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;