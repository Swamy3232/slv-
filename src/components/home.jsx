// src/pages/HomePage.jsx
import { useEffect, useRef } from "react";
import Navbar from "./nav";
import slv1 from "../assets/slv.png";
// Custom SLV Logo Component
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



const HomePage = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Add intersection observer for scroll animations
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

  return (
    <div className="min-h-screen bg-gray-50 font-sans overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 text-center py-20 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 -right-4 w-16 h-16 bg-amber-300 rounded-full opacity-30 animate-bounce delay-700"></div>
          <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-orange-200 rounded-full opacity-25 animate-ping"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex justify-center mb-8">
            <SLVLogo className="h-16 md:h-20 w-auto" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6 animate-fade-in-down">
            Welcome to <span className="text-amber-600">SLV Packaging</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Founded in 2013, SLV Packaging delivers high-quality corrugated boxes
            customized to meet diverse customer requirements.
          </p>
          <button
  onClick={() => window.location.href = "/contact"}
  className="mt-10 bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
>
  Get a Quote
</button>
        </div>
      </section>

      {/* Company Overview */}
      <section 
        ref={addToRefs}
        className="max-w-7xl mx-auto px-6 py-16 md:py-24 opacity-0 transition-all duration-700"
      >
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <div className="bg-amber-100 rounded-2xl p-8 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
                Company <span className="text-amber-600">Overview</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                SLV Packaging, founded by Mr. M. Venkatesh, is a proprietorship company
                with 25 years of industry experience. We specialize in manufacturing
                high-quality corrugated boxes, customized to meet diverse customer
                requirements.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
  <div className="bg-gray-800 rounded-2xl h-64 md:h-80 flex items-center justify-center overflow-hidden">
    <img 
      src={slv} 
      alt="SLV Packaging" 
      className="object-contain h-full w-full"
    />
  </div>
</div>
        </div>
      </section>

      {/* Commitment to Excellence */}
      <section 
        ref={addToRefs}
        className="bg-white py-16 md:py-24 px-6 opacity-0 transition-all duration-700"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
            Our <span className="text-amber-600">Commitment to Excellence</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            At SLV Packaging, we strive to exceed customer expectations through
            best-in-class production processes, premium materials, state-of-the-art
            equipment, and skilled craftsmanship. Our dedication ensures customer
            satisfaction and delight.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { title: "Premium Materials", desc: "Using only the highest quality raw materials", icon: "📦" },
              { title: "Modern Equipment", desc: "State-of-the-art manufacturing technology", icon: "⚙️" },
              { title: "Skilled Craftsmanship", desc: "Experienced team with attention to detail", icon: "👨‍🔧" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-amber-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section 
        ref={addToRefs}
        className="max-w-7xl mx-auto px-6 py-16 md:py-24 opacity-0 transition-all duration-700"
      >
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Vision & <span className="text-white">Values</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-4 opacity-95">
            We aim to be a company of the people, by the people, and for the people,
            earning trust and reliability through integrity, innovation, and quality.
          </p>
          <p className="text-lg md:text-xl leading-relaxed opacity-95">
            As an environmentally conscious and future-oriented organization, we
            continuously develop solutions that add value and drive sustainability.
          </p>
        </div>
      </section>

      {/* Global Reach & Technological Leadership */}
      <section 
        ref={addToRefs}
        className="bg-white py-16 md:py-24 px-6 opacity-0 transition-all duration-700"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
              Global Reach & <span className="text-amber-600">Technological Leadership</span>
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              SLV Packaging proudly serves both domestic and international markets with cutting-edge technology.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="bg-gray-100 rounded-2xl p-6 shadow-inner">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  With a commitment to trust and technological advancement, we have invested
                  in cutting-edge machinery to expand our global presence.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We are dedicated to realizing our vision of becoming "The Best Corrugated
                  Boxes Manufacturing Company" through continuous transition and innovation.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl h-64 md:h-80 flex items-center justify-center text-white text-xl font-bold p-4 text-center">
                Global Distribution Network
              </div>
            </div>
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

export default HomePage;