import React from "react";
import { Sparkles, Heart, Star, Brain, Leaf, Moon, Sun } from "lucide-react";

const CTABanners = () => {
  return (
    <section
      id="cta-banners"
      className="px-3 py-16 bg-[#FDFBF5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        {/* First Banner - Start Your Journey */}
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white relative overflow-hidden animate-slide-in-left hover-lift">
          <div className="absolute top-5 right-6 flex space-x-2">
            <span className="text-pink-300 text-2xl animate-float">🦋</span>
          </div>

          <div className="flex items-center mb-7">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
              <Brain className="w-8 h-8 text-black" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 sm:text-lg sm:mb-1">
                Start Your Mindfulness Adventure Today!
              </h3>
              <p className="text-purple-100 sm:text-xs sm:mb-1 text-xs">
                Join thousands of families discovering the magic of mindfulness
              </p>
            </div>
          </div>

          <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 hover:scale-105 group">
            <span className="flex items-center space-x-4 sm:space-x-2">
              <span>Begin Your Journey</span>
              <Sparkles className="w-5 h-5 animate-sparkle" />
            </span>
          </button>
        </div>

        {/* Second Banner - Family Plan */}
        <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-8 text-white relative overflow-hidden animate-slide-in-right hover-lift">
          <div className="absolute top-5 right-6 flex space-x-2">
            <span className="text-yellow-300 text-2xl animate-bounce-slow">
              👨‍👩‍👧‍👦
            </span>
            {/* <div className="flex space-x-1">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse-slow"></div>
              <div
                className="w-2 h-2 bg-white rounded-full animate-pulse-slow"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-2 h-2 bg-white rounded-full animate-pulse-slow"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div> */}
          </div>

          <div className="flex items-center mb-7">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
              <Leaf className="w-8 h-8 text-black" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 sm:text-lg sm:mb-1">
                Practice Mindfulness Together as a Family!
              </h3>
              <p className="text-green-100 sm:text-xs sm:mb-1 text-xs">
                Special family plan for up to 4 children
              </p>
            </div>
          </div>

          <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 hover:scale-105 group">
            <span className="flex items-center space-x-3 sm:space-x-2">
              <span>Get Family Plan</span>
              <Sparkles className="w-5 h-5 animate-sparkle" />
            </span>
          </button>
        </div>

        {/* Third Banner - Free Trial */}
        <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-8 text-white relative overflow-hidden animate-slide-in-bottom hover-lift">
          <div className="absolute top-4 right-4 flex space-x-2">
            {/* <span className="text-yellow-300 text-2xl animate-bounce-slow">
              🎁
            </span> */}
            <span className="text-pink-300 text-2xl animate-float">✨</span>
          </div>

          <div className="flex items-center mb-7">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
              <Star className="w-8 h-8 text-black" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 sm:text-lg sm:mb-1 ">
                Try Mindery Kids Free for 7 Days!
              </h3>
              <p className="text-orange-100 sm:text-xs sm:mb-1 text-xs">
                No credit card required • Cancel anytime
              </p>
            </div>
          </div>

          <button className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 hover:scale-105 group">
            <span className="flex items-center space-x-3 sm:space-x-2">
              <span>Start Free Trial</span>
              <Sparkles className="w-5 h-5 animate-sparkle" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanners;
