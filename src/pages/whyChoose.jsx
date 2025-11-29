import React, { useState } from "react";
import {
  CheckCircle,
  XCircle,
  Star,
  Shield,
  Users,
  BookOpen,
  Music,
  Target,
  Heart,
  Sparkles,
  Brain,
  Leaf,
  Moon,
  Sun,
  Flower,
  Zap,
} from "lucide-react";

const WhyChoose = () => {
  const [selectedAge, setSelectedAge] = useState("4-6");

  const ageGroups = [
    { id: "4-6", name: "Little Explorers", icon: "🦋", color: "purple" },
    { id: "7-10", name: "Brave Thinkers", icon: "🌟", color: "green" },
    { id: "11-14", name: "Calm & Curious", icon: "🧘‍♀️", color: "blue" },
  ];

  const features = [
    {
      title: "Guided Adventures",
      description: "Magical story-based meditations",
      icon: "📚",
      color: "purple",
    },
    {
      title: "Tools for Big Feelings",
      description: "Quick reset techniques for emotions",
      icon: "🛠️",
      color: "green",
    },
    {
      title: "Sleep Stories",
      description: "Peaceful bedtime journeys",
      icon: "🌙",
      color: "blue",
    },
    {
      title: "Family Time",
      description: "Practice mindfulness together",
      icon: "👨‍👩‍👧‍👦",
      color: "pink",
    },
  ];

  return (
    <section
      id="why-choose"
      className="px-1 sm:px-6 lg:px-8 py-12 sm:py-16 bg-[#FDFBF5] relative overflow-hidden"
    >
      {/* Background Animated Elements */}

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl lg:mb-4 font-bold text-gray-800 text-center mb-4 sm:mb-6 animate-fade-in px-4">
          <span className="mr-2 animate-bounce-slow">🌟</span>
          Why Kids Love Mindery?
        </h2>
        <p className="text-xs sm:text-base text-gray-600 text-center mb-8 sm:mb-10 max-w-3xl mx-auto animate-fade-in px-4">
          Fun, safe, and magical mindfulness adventures designed just for you!
        </p>

        {/* Interactive Age Group Selector */}
        <div className="flex justify-center mb-8 sm:mb-10 px-4">
          <div className="bg-white rounded-2xl p-2 shadow-lg flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
            {ageGroups.map((age) => (
              <button
                key={age.id}
                onClick={() => setSelectedAge(age.id)}
                className={`px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 text-sm sm:text-xs ${
                  selectedAge === age.id ? `shadow-lg` : "text-black"
                }`}
              >
                <span className="text-sm mr-2">{age.icon}</span>
                {age.name}
              </button>
            ))}
          </div>
        </div>

        {/* Age-Specific Content */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16 px-4">
          {/* Left: Interactive Features */}
          <div className="space-y-4 sm:space-y-6 animate-slide-in-left">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-${feature.color}-50 to-${feature.color}-100 rounded-2xl p-4 sm:p-6 border border-${feature.color}-200 hover:scale-105 transition-all duration-300 cursor-pointer group`}
              >
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 bg-${feature.color}-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform`}
                  >
                    <span className="text-xl sm:text-2xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-xs text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Floating Elements */}
                <div
                  className="absolute top-5 right-10 animate-float"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 opacity-60" />
                </div>
              </div>
            ))}
          </div>

          {/* Right: Fun Comparison */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 animate-slide-in-right">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4 sm:mb-6 text-center">
              Mindery vs Other Apps
            </h3>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between p-3 sm:p-4 bg-green-50 rounded-lg">
                <span className="font-medium text-gray-800 text-sm sm:text-base">
                  Fun Stories
                </span>
                <div className="flex space-x-2">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 animate-pulse-slow" />
                  <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                </div>
              </div>

              <div className="flex items-center justify-between p-3 sm:p-4 bg-green-50 rounded-lg">
                <span className="font-medium text-gray-800 text-sm sm:text-base">
                  No Ads
                </span>
                <div className="flex space-x-2">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 animate-pulse-slow" />
                  <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                </div>
              </div>

              <div className="flex items-center justify-between p-3 sm:p-4 bg-green-50 rounded-lg">
                <span className="font-medium text-gray-800 text-sm sm:text-base">
                  Family Time
                </span>
                <div className="flex space-x-2">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 animate-pulse-slow" />
                  <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                </div>
              </div>

              <div className="flex items-center justify-between p-3 sm:p-4 bg-green-50 rounded-lg">
                <span className="font-medium text-gray-800 text-sm sm:text-base">
                  Cool Rewards
                </span>
                <div className="flex space-x-2">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 animate-pulse-slow" />
                  <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 sm:gap-15 mb-12 sm:mb-15 px-4">
          <div
            className="text-center animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl sm:text-3xl">🎉</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-1 sm:mb-2 text-lg sm:text-xl">
              1M+
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">Happy Kids</p>
          </div>

          <div
            className="text-center animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl sm:text-3xl">⭐</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-1 sm:mb-2 text-lg sm:text-xl">
              4.9/5
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">Star Rating</p>
          </div>

          <div
            className="text-center animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl sm:text-3xl">📚</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-1 sm:mb-2 text-lg sm:text-xl">
              200+
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">Fun Stories</p>
          </div>

          <div
            className="text-center animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl sm:text-3xl">🏆</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-1 sm:mb-2 text-lg sm:text-xl">
              50+
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">Awards Won</p>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center animate-fade-in px-4"
          style={{ animationDelay: "0.5s" }}
        >
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group text-base sm:text-lg">
            <span className="flex items-center justify-center space-x-5">
              <span>Start Your Adventure!</span>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 animate-sparkle" />
            </span>
          </button>
          <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6">
            Free trial • No credit card • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
