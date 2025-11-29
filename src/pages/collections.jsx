import React, { useState } from "react";
import {
  Heart,
  Star,
  ShoppingCart,
  Sparkles,
  Flower,
  Flower2,
  Zap,
  Brain,
  BookOpen,
  Target,
  Users,
  Music,
  Shield,
  Gift,
  Moon,
  Sun,
  Play,
} from "lucide-react";

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState("All Programs");
  const [selectedProgram, setSelectedProgram] = useState(null);

  const categories = [
    "All Programs",
    "Guided Meditations",
    "Sleep Stories",
    "Breathing Exercises",
    "Emotion Tools",
    "Family Sessions",
    "Classroom Activities",
    "Mindful Games",
    "Parent Resources",
  ];

  const programs = [
    {
      id: 1,
      name: "Crayon Breathing Magic",
      duration: "3 min",
      category: "Breathing Exercises",
      rating: 4.8,
      ageGroup: "4-6",
      description:
        "Draw colorful breaths with your imagination and feel calm like a rainbow!",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Curve Your Way to Sleep",
      duration: "5 min",
      category: "Sleep Stories",
      rating: 4.9,
      ageGroup: "4-8",
      description:
        "Follow gentle curves and waves to drift into peaceful dreams!",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Mindful Art Adventure",
      duration: "7 min",
      category: "Guided Meditations",
      rating: 4.7,
      ageGroup: "7-10",
      description:
        "Paint your thoughts with peaceful colors and create inner calm!",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Emotion Color Palette",
      duration: "4 min",
      category: "Emotion Tools",
      rating: 4.6,
      ageGroup: "8-12",
      description: "Learn to color your feelings and understand your emotions!",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Family Art Circle",
      duration: "10 min",
      category: "Family Sessions",
      rating: 4.9,
      ageGroup: "All Ages",
      description:
        "Create mindful moments together through shared artistic expression!",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=300&fit=crop",
    },
    {
      id: 6,
      name: "Focus Drawing Power",
      duration: "6 min",
      category: "Guided Meditations",
      rating: 4.5,
      ageGroup: "9-14",
      description: "Sharpen your focus by drawing lines of concentration!",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
    },
    {
      id: 7,
      name: "Dreamy Sketch Journey",
      duration: "8 min",
      category: "Sleep Stories",
      rating: 4.8,
      ageGroup: "4-10",
      description: "Sketch your way to dreamland with gentle, flowing lines!",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=300&fit=crop",
    },
    {
      id: 8,
      name: "Creative Movement Flow",
      duration: "12 min",
      category: "Classroom Activities",
      rating: 4.4,
      ageGroup: "6-12",
      description:
        "Move like flowing paint and express yourself through mindful art!",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
    },
    {
      id: 9,
      name: "Art Therapy Explorer",
      duration: "5 min",
      category: "Emotion Tools",
      rating: 4.7,
      ageGroup: "7-14",
      description:
        "Express your feelings through colors, shapes, and creative curves!",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=300&fit=crop",
    },
  ];

  const handleProgramClick = (program) => {
    setSelectedProgram(program);
    // You can add navigation or modal logic here
    console.log("Selected program:", program);
  };

  const filteredPrograms =
    activeCategory === "All Programs"
      ? programs
      : programs.filter((program) => program.category === activeCategory);

  return (
    <section
      id="collections"
      className="px-1 sm:px-5 md:px-2 lg:px-6 py-12 sm:py-16 bg-[#FDFBF5] relative overflow-hidden"
    >
      {/* Background Animated Elements */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-1/4 animate-float">
          <div className="text-3xl sm:text-4xl md:text-5xl opacity-10 text-purple-400">
            🧘‍♀️
          </div>
        </div>
        <div
          className="absolute bottom-20 right-4 sm:right-1/4 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div className="text-2xl sm:text-3xl md:text-4xl opacity-10 text-pink-400">
            ✨
          </div>
        </div>
        <div
          className="absolute top-1/2 right-4 sm:right-10 animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="text-xl sm:text-2xl md:text-3xl opacity-10 text-blue-400">
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

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 text-center mb-4 sm:mb-6 animate-fade-in">
          <span className="mr-2 animate-bounce-slow">🎮</span>
          Choose Your Adventure!
        </h2>
        <p className="text-xs sm:text-base md:text-lg lg:text-base text-gray-600 text-center mb-9 sm:mb-14 max-w-3xl mx-auto animate-fade-in">
          Pick a track or mix and match. Each program grows with your child.
        </p>

        {/* Category Tabs with Enhanced Animations */}
        <div className="flex overflow-x-auto space-x-2 sm:space-x-4 mb-8 sm:mb-10 pb-3 sm:pb-5 px-2">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-3 sm:px-4 py-2 rounded-full font-medium transition-all animate-fade-in hover:scale-105 text-sm sm:text-xs md:text-base ${
                activeCategory === category
                  ? "bg-purple-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Promotional Banner with Enhanced Animations */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-8 sm:mb-10">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-6 sm:p-8 text-white relative overflow-hidden animate-slide-in-left hover-lift w-full">
            <div className="absolute top-4 right-4 text-yellow-300 text-xl sm:text-2xl animate-bounce-slow">
              🌟
            </div>
            <h3 className="text-base sm:text-xl lg:text-xl lg:mb-2 font-bold mb-3 sm:mb-4">
              Start Your Child's Creative Mindfulness Journey Today!
            </h3>
            <p className="text-purple-100 mb-4 sm:mb-6 text-xs sm:text-sm">
              Join thousands of families who have discovered the power of
              art-based mindfulness and creative calm for their children.
            </p>
            <button className="bg-white text-purple-600 px-4 sm:px-6 py-2 rounded-full font-semibold border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 hover:scale-105 text-sm sm:text-base">
              Start Free Trial
            </button>

            {/* Floating Icons */}
            <div
              className="absolute bottom-2 left-2 animate-float"
              style={{ animationDelay: "0.7s" }}
            >
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white opacity-60" />
            </div>
          </div>
        </div>

        {/* Program Grid with Enhanced Animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {filteredPrograms.map((program, index) => (
            <div
              key={program.id}
              onClick={() => handleProgramClick(program)}
              className="bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300 group animate-fade-in hover:scale-105 border border-gray-100 cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-3 sm:mb-4">
                <img
                  src={program.image}
                  alt={program.name}
                  className="w-full h-32 sm:h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <button
                  className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors animate-pulse-slow z-20"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Added to favorites:", program.name);
                  }}
                >
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <div className="absolute top-2 left-2 bg-purple-100 text-purple-600 px-2 py-1 rounded text-xs font-medium animate-fade-in z-20">
                  {program.category}
                </div>
                <div className="absolute bottom-2 right-2 bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-medium z-20">
                  {program.ageGroup}
                </div>
              </div>

              <div className="flex items-center mb-2">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 animate-pulse-slow" />
                <span className="text-xs sm:text-sm text-gray-600 ml-1">
                  {program.rating}
                </span>
                <span className="text-xs sm:text-sm text-gray-400 ml-2">•</span>
                <span className="text-xs sm:text-sm text-gray-500 ml-2">
                  {program.duration}
                </span>
              </div>

              <h3 className="font-medium text-gray-800 mb-2 line-clamp-2 text-sm sm:text-base">
                {program.name}
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">
                {program.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-xs sm:text-sm text-purple-600 font-medium">
                    {program.category}
                  </span>
                </div>
                <button
                  className="bg-purple-600 text-white p-1.5 sm:p-2 rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-110 animate-pulse-slow z-20"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProgramClick(program);
                  }}
                >
                  <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offer Banner with Enhanced Animations */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-4 sm:p-6 text-center relative overflow-hidden animate-slide-in-bottom hover-lift">
          <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4">
            Family Art Circle: Create Mindful Moments Together!
          </h3>
          <p className="text-green-100 mb-6 sm:mb-4 text-sm">
            Get access for up to 4 children with our special creative family
            package.
          </p>
          <button className="bg-white text-green-600 px-4 sm:px-6 py-2 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base">
            Get Family Plan
          </button>

          {/* Floating Icons */}
          <div
            className="absolute bottom-5 right-5 animate-float"
            style={{ animationDelay: "0.8s" }}
          >
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
