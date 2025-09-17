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
          ? "bg-gradient-to-r from-gray-50 via-white to-gray-50 shadow-md py-2 border-b border-gray-200"
          : "bg-gradient-to-r from-white via-gray-50 to-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-xl tracking-tight">SLV</span>
          </div>
          <div className="ml-3">
            <div className="text-xl font-semibold text-gray-800 tracking-tight">Packaging</div>
            <div className="text-xs text-gray-500 mt-0.5">Since 2013</div>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name} className="relative">
              <a
                href={link.href}
                className={`px-3 py-2 rounded-lg transition-colors duration-200 relative ${
                  activeLink === link.href
                    ? "text-gray-900 font-semibold after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gray-900"
                    : "hover:text-gray-900 hover:after:block hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-400"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Call to Action */}
        <a
          href="/quote"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg bg-gray-900 text-white font-medium text-sm shadow hover:bg-gray-800 transition-colors duration-200"
        >
          Get Quote
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center rounded-lg bg-gray-100 focus:outline-none"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 mb-1.5 transition-transform ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 mb-1.5 transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-transform ${
              isOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-5 rounded-lg transition-colors duration-200 ${
                    activeLink === link.href
                      ? "bg-gray-50 text-gray-900 font-semibold"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-2 mt-2 border-t border-gray-200">
              <a
                href="/quote"
                onClick={() => setIsOpen(false)}
                className="block py-3 px-5 rounded-lg bg-gray-900 text-white font-medium text-center hover:bg-gray-800"
              >
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
