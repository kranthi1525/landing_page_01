import React, { useState } from "react";
import TrialFormPopup from "./TrialFormPopup";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#FDFBF5] text-gray-700 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl md:text-xl font-bold">
                <span className="text-purple-600">Topmind</span>
                <span className="text-purple-600 italic">Care</span>
              </h1>
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 md:ml-0 flex items-baseline space-x-6 md:space-x-3.5 lg:space-x-5.5">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm md:text-xs font-medium transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("collections")}
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium md:text-xs transition-colors cursor-pointer"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection("why-choose")}
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium md:text-xs transition-colors cursor-pointer"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm  md:text-xs font-medium transition-colors cursor-pointer"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm md:text-xs font-medium transition-colors cursor-pointer"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("cta-banners")}
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm md:text-xs font-medium transition-colors cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Start Free Trial Button - Desktop */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => setIsPopupOpen(true)}
              className="bg-[#f96b4b] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#E76F51] transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm cursor-pointer"
            >
              Start Free Trial
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-purple-600 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-purple-600 hover:bg-gray-50 block px-3 py-3 rounded-md text-base font-medium transition-colors w-full text-left cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("collections")}
              className="text-gray-700 hover:text-purple-600 hover:bg-gray-50 block px-3 py-3 rounded-md text-base font-medium transition-colors w-full text-left cursor-pointer"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("why-choose")}
              className="text-gray-700 hover:text-purple-600 hover:bg-gray-50 block px-3 py-3 rounded-md text-base font-medium transition-colors w-full text-left cursor-pointer"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-purple-600 hover:bg-gray-50 block px-3 py-3 rounded-md text-base font-medium transition-colors w-full text-left cursor-pointer"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-700 hover:text-purple-600 hover:bg-gray-50 block px-3 py-3 rounded-md text-base font-medium transition-colors w-full text-left cursor-pointer"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("cta-banners")}
              className="text-gray-700 hover:text-purple-600 hover:bg-gray-50 block px-3 py-3 rounded-md text-base font-medium transition-colors w-full text-left cursor-pointer"
            >
              Get Started
            </button>

            {/* Mobile Start Free Trial Button */}
            <div className="pt-4 border-t border-gray-200 px-3">
              <button
                onClick={() => {
                  setIsPopupOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="bg-[#f96b4b] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#E76F51] transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm w-full"
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Trial Form Popup */}
      <TrialFormPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
