// src/pages/Product.jsx
import { useEffect, useRef, useState } from "react";
import Navbar from "./nav";

// Import your images
import Product1Img from "../assets/conductive.jpeg";
import Product2Img from "../assets/corguted.jpg";
import Product3Img from "../assets/pink-double.jpg";
import Product4Img from "../assets/pink-foam.png";
import Product5Img from "../assets/shieldbag.jpg";
import Product6Img from "../assets/strecthed.jpg";
import Product7Img from "../assets/taps.jpg";
import Product8Img from "../assets/white-buffer.jpg";
import Product9Img from "../assets/zip-lock.jpg";
import product10Img from "../assets/eps.jpeg";
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

const Product = () => {
  const sectionRefs = useRef([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filter, setFilter] = useState("all");

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

  const products = [
    { 
      name: "CONDUCTIVE BIN", 
      image: Product1Img, 
      description: "Anti-static containers for sensitive electronic components",
      category: "anti-static",
      features: ["ESD protection", "Durable construction", "Stackable design"]
    },
    { 
      name: "CORRUGATED BOXES", 
      image: Product2Img, 
      description: "Custom-sized boxes for various packaging needs",
      category: "boxes",
      features: ["Custom sizes", "High strength", "Eco-friendly materials"]
    },
    { 
      name: "PINK DOUBLE ANTI-STATIC", 
      image: Product3Img, 
      description: "Double-layer anti-static packaging for maximum protection",
      category: "anti-static",
      features: ["Double protection", "Pink anti-static", "Reusable"]
    },
    { 
      name: "PINK ANTI-STATIC", 
      image: Product4Img, 
      description: "Premium anti-static foam for sensitive equipment",
      category: "anti-static",
      features: ["Static dissipation", "Shock absorption", "Custom shapes"]
    },
    { 
      name: "SHIELD BAG", 
      image: Product5Img, 
      description: "EMI/RFI shielding bags for electronic components",
      category: "bags",
      features: ["EMI/RFI protection", "Moisture barrier", "Transparent window"]
    },
    { 
      name: "STRETCH FILM", 
      image: Product6Img, 
      description: "High-quality stretch film for pallet wrapping",
      category: "films",
      features: ["High cling", "Puncture resistance", "Clear visibility"]
    },
    { 
      name: "BOP TAPS", 
      image: Product7Img, 
      description: "Biaxially oriented polypropylene tapes for sealing",
      category: "tapes",
      features: ["High tensile strength", "Weather resistant", "Clear printing surface"]
    },
    { 
      name: "WHITE EPE FOAM BUFFER", 
      image: Product8Img, 
      description: "Expanded polyethylene foam for cushioning",
      category: "foam",
      features: ["Shock absorption", "Water resistance", "Lightweight"]
    },
    { 
      name: "ZIP LOCK", 
      image: Product9Img, 
      description: "Reclosable zip lock bags for various applications",
      category: "bags",
      features: ["Reusable", "Clear view", "Multiple sizes"]
    },
    {
        name: "EPS BOX-COLD CHAIN",
        image: product10Img,
        description: "Expanded polystyrene boxes for temperature-sensitive shipments",
        category: "boxes",
        features: ["Thermal insulation", "Lightweight", "Custom sizes"]
    }
  ];

  const categories = [
    { id: "all", name: "All Products" },
    { id: "anti-static", name: "Anti-Static" },
    { id: "boxes", name: "Boxes" },
    { id: "bags", name: "Bags" },
    { id: "films", name: "Films" },
    { id: "tapes", name: "Tapes" },
    { id: "foam", name: "Foam" },
  ];

  const filteredProducts = filter === "all" 
    ? products 
    : products.filter(product => product.category === filter);

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
            Our <span className="text-amber-600">Products</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            Explore our range of innovative packaging solutions designed for excellence and quality.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section 
        ref={addToRefs}
        className="max-w-7xl mx-auto px-6 py-8 md:py-12 sticky top-16 bg-gray-50 z-10 shadow-sm"
      >
        <div className="flex overflow-x-auto pb-2 space-x-2">
          {categories.map(category => (
            <button
              key={category.id}
              className={`whitespace-nowrap px-4 py-2 rounded-full transition-all duration-300 ${
                filter === category.id
                  ? "bg-amber-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-amber-100"
              }`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section 
        ref={addToRefs}
        className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 transform cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                {product.category.toUpperCase()}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button 
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100"
                onClick={() => setSelectedProduct(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{selectedProduct.name}</h2>
              <p className="text-gray-600 mb-6">{selectedProduct.description}</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features:</h3>
              <ul className="mb-6">
                {selectedProduct.features.map((feature, index) => (
                  <li key={index} className="flex items-start mb-2">
                    <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex space-x-4">
                <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                  Request Quote
                </button>
                <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section 
        ref={addToRefs}
        className="bg-gradient-to-r from-amber-600 to-orange-600 py-16 px-6 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Custom Packaging Solutions?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us for tailored packaging solutions that meet your specific requirements.
          </p>
         <button
  onClick={() => window.location.href = "/contact"}
  className="bg-white text-amber-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
>
  Contact Our Team
</button>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <SLVLogo className="h-10 w-auto mb-4" />
            <p className="text-white-400">
              High-quality corrugated boxes customized to your requirements.
            </p>
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

export default Product;