// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav";
import HomePage from "./components/home";
import AboutUs from "./components/about.jsx";
import Product from "./components/product.jsx";
import ContactUs from "./components/contact.jsx";

const App = () => {
  return (
    <Router>
      <div className="font-sans">
        {/* Navbar always visible */}
        <Navbar />

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
