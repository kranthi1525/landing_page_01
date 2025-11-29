import React from "react";
import {
  Sparkles,
  Heart,
  Star,
  Zap,
  Brain,
  Leaf,
  Moon,
  Sun,
  Flower,
  Flower2,
  Target,
  BookOpen,
  Music,
  Shield,
  Gift,
  Users,
} from "lucide-react";

const PlayfulFlair = () => {
  return (
    <section
      id="playful-flair"
      className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-[#FDFBF5] relative overflow-hidden"
    >
      {/* Background Animated Elements */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-4 sm:left-1/4 animate-float">
          <div className="text-2xl sm:text-3xl md:text-4xl opacity-10 text-purple-400">
            🧘‍♀️
          </div>
        </div>
        <div
          className="absolute bottom-20 right-4 sm:right-1/4 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div className="text-xl sm:text-2xl md:text-3xl opacity-10 text-pink-400">
            ✨
          </div>
        </div>
        <div
          className="absolute top-1/2 right-4 sm:right-10 animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="text-lg sm:text-xl md:text-2xl opacity-10 text-blue-400">
            🌟
          </div>
        </div>
        <div
          className="absolute top-1/3 left-4 sm:left-10 animate-float"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="text-xl sm:text-2xl md:text-3xl opacity-10 text-green-400">
            🦋
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center mb-4 sm:mb-6 animate-fade-in px-4">
          Why Mindery Kids?
        </h2>
        <p className="text-xs sm:text-base md:text-lg lg:text-base text-gray-600 text-center mb-8 sm:mb-12 max-w-3xl mx-auto animate-fade-in px-4">
          Children learn best through play and stories. Our Sessions blend
          gentle breathing, Guided Imagery, and music to make mindfulness
          enjoyable and effective.
        </p>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
          {/* Guided Adventures Card */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 md:p-4 relative overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer animate-slide-in-left hover-lift border border-purple-100">
            <div className="absolute top-4 right-4 text-purple-400 opacity-60 group-hover:opacity-100 transition-opacity animate-rotate-slow">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 md:w-5 md:h-5" />
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform">
              <span className="text-purple-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                📚
              </span>
            </div>
            <h3
              className="text-lg sm:text-sm md:text-lg lg:text-lg 
            font-bold text-gray-800 mb-3 sm:mb-4 text-center"
            >
              Guided Adventures
            </h3>
            <p className="text-sm sm:text-base md:text-sm lg:text-base text-gray-600 text-center leading-relaxed">
              Short, age-wise journeys that helps kids calm their bodies and
              name their feelings.
            </p>

            {/* Floating Elements */}
            <div
              className="absolute bottom-2 right-2 animate-float"
              style={{ animationDelay: "0.7s" }}
            >
              <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-3 md:h-3 text-pink-400 opacity-60" />
            </div>

            {/* Interactive Elements */}
            <div className="mt-4 sm:mt-6 flex justify-center space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-1.5 md:h-1.5 bg-purple-400 rounded-full animate-pulse-slow"></div>
              <div
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-1.5 md:h-1.5 bg-pink-400 rounded-full animate-pulse-slow"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-1.5 md:h-1.5 bg-purple-400 rounded-full animate-pulse-slow"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>

          {/* Tools for Big Feelings Card */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 sm:p-8 md:p-4 relative overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer animate-slide-in-top hover-lift border border-green-100">
            <div className="absolute top-4 right-4 text-green-400 opacity-60 group-hover:opacity-100 transition-opacity animate-rotate-slow">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 md:w-5 md:h-5" />
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform">
              <span className="text-green-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                🛠️
              </span>
            </div>
            <h3 className="text-lg sm:text-sm md:text-lg lg:text-lg font-bold text-gray-800 mb-3 sm:mb-4 text-center">
              Tools for Big Feelings
            </h3>
            <p className="text-sm sm:text-base md:text-sm lg:text-base text-gray-600 text-center leading-relaxed">
              Quick "reset" audios for anger, Worry, pre-exam jitters, and
              bedtime battles.
            </p>

            {/* Floating Elements */}
            <div
              className="absolute bottom-2 right-2 animate-float"
              style={{ animationDelay: "0.9s" }}
            >
              <Brain className="w-3 h-3 sm:w-4 sm:h-4 md:w-3 md:h-3 text-blue-400 opacity-60" />
            </div>

            {/* Interactive Elements */}
            <div className="mt-4 sm:mt-6 flex justify-center space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-1.5 md:h-1.5 bg-green-400 rounded-full animate-pulse-slow"></div>
              <div
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-1.5 md:h-1.5 bg-blue-400 rounded-full animate-pulse-slow"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-1.5 md:h-1.5 bg-green-400 rounded-full animate-pulse-slow"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>

          {/* Guides & Routines Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mb-5 sm:p-8 md:p-4 relative overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer animate-slide-in-right hover-lift border border-blue-100">
            <div className="absolute top-4 right-4 text-blue-400 opacity-60 group-hover:opacity-100 transition-opacity animate-rotate-slow">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 md:w-5 md:h-5" />
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform">
              <span className="text-blue-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                📋
              </span>
            </div>
            <h3 className="text-lg sm:text-sm md:text-lg lg:text-lg font-bold text-gray-800 mb-3 sm:mb-4 text-center">
              Guides & Routines
            </h3>
            <p className="text-sm sm:text-base md:text-sm lg:text-base text-gray-600 text-center leading-relaxed">
              Weekly tips, printable charts, and simple routines you can use at
              home or school.
            </p>
            <div
              className="absolute bottom-2 right-2 animate-float"
              style={{ animationDelay: "0.8s" }}
            >
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 md:w-3 md:h-3 text-indigo-400 opacity-60" />
            </div>

            {/* Interactive Elements */}
            <div className="mt-4 sm:mt-6 flex justify-center space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-1.5 md:h-1.5 bg-blue-400 rounded-full animate-pulse-slow"></div>
              <div
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-1.5 md:h-1.5    bg-indigo-400 rounded-full animate-pulse-slow"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-1.5 md:h-1.5 bg-blue-400 rounded-full animate-pulse-slow"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-15 mb-13 sm:mb-16 px-4">
          <div
            className="text-center animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-10 md:h-10 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">
              Safe & Secure
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">
              100% child-safe environment
            </p>
          </div>

          <div
            className="text-center animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-10 md:h-10 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
              <Music className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">
              Calming Music
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">
              Soothing sounds & melodies
            </p>
          </div>

          <div
            className="text-center animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
              <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">
              Fun Rewards
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">
              Stickers, badges & achievements
            </p>
          </div>

          <div
            className="text-center animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-10 md:h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">
              Family Bonding
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">
              Practice together & grow
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center animate-fade-in px-4"
          style={{ animationDelay: "0.5s" }}
        >
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group text-sm sm:text-base">
            <span className="flex items-center justify-center space-x-5">
              <span>Start Your Mindfulness Journey</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-sparkle" />
            </span>
          </button>
          <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
            Free 7-day trial • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlayfulFlair;
