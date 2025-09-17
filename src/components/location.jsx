// src/pages/Location.jsx
import { useState } from "react";
import Navbar from "./nav";

const Location = () => {
  const mapsLink = "https://maps.google.com/maps?q=12.9836571%2C77.5075547&z=17&hl=en";
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-orange-300/5"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-amber-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Our <span className="text-amber-600">Location</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Visit our office at Kurabarahalli, Bangalore. We're easy to find and always welcome visitors.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors shadow-md hover:shadow-lg"
            >
              Get Directions
            </a>
            <a
              href="tel:+1234567890"
              className="px-6 py-3 bg-white text-gray-800 rounded-lg font-medium border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <div className={`relative ${!isMapLoaded ? 'min-h-[450px] flex items-center justify-center' : ''}`}>
            {!isMapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-pulse text-gray-500">Loading map...</div>
              </div>
            )}
            <iframe
              src={mapsLink}
              title="SLV Packaging Location"
              width="100%"
              height="450"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              onLoad={() => setIsMapLoaded(true)}
            ></iframe>
          </div>
        </div>

        {/* Location Details */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Address
            </h2>
            <p className="text-gray-700 mb-4">
              SLV Packaging<br />
              Kurabarahalli<br />
              Bangalore, Karnataka<br />
              India - 560010
            </p>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors mt-4"
            >
              Open in Google Maps
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Business Hours
            </h2>
            <ul className="space-y-3">
              <li className="flex justify-between text-gray-700">
                <span>Monday - Friday</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>Saturday</span>
                <span className="font-medium">10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>Sunday</span>
                <span className="font-medium text-amber-600">Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Planning to Visit?</h2>
          <p className="text-gray-700 text-lg mb-8">
            Let us know you're coming and we'll make sure someone is available to assist you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+1234567890"
              className="px-6 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors shadow-md hover:shadow-lg flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
            <a
              href="mailto:info@slvpackaging.com"
              className="px-6 py-3 bg-white text-gray-800 rounded-lg font-medium border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;