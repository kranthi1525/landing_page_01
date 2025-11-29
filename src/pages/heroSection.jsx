import React, { useState } from "react";
import PlayfulFlair from "./playfulFlair";
import Collections from "./collections";
import WhyChoose from "./whyChoose";
import Testimonials from "./testimonials";
import CTABanners from "./ctaBanners";
import FAQ from "./faq";
import Footer from "../components/footer";
import {
  ArrowRight,
  Flower,
  Flower2,
  X,
  Sparkles,
  Heart,
  Star,
  Zap,
  Brain,
  Leaf,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CircularGallery from "@/components/CircularGallery";
import TrialFormPopup from "@/components/TrialFormPopup";

const HeroSection = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div
      id="home"
      className="bg-[#FDFBF5] min-h-screen relative overflow-hidden mt-15 lg:mt-6 md:mt-12 sm:mt-16"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Sketch Elements */}
        <div
          className="absolute top-15 left-4 sm:left-8 md:left-30 lg:top-25 lg:left-52 md:opacity-30 opacity-70 animate-float"
          style={{ animationDelay: "0s" }}
        >
          <div className="text-3xl sm:text-4xl sm:mt-4 md:text-4xl lg:text-5xl text-[#cd4928]">
            🎨
          </div>
        </div>
        <div
          className="absolute top-45 right-4 sm:right-8 md:right-10 md:top-30 lg:right-40 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div className="text-3xl sm:text-4xl sm:mt-4 md:text-3xl opacity-50 text-[#5F2C6F]">
            ✨
          </div>
        </div>
        <div
          className="absolute bottom-40 left-4 sm:left-8 md:left-10 md:bottom-30 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <div className="text-2xl sm:text-3xl md:text-3xl opacity-10 text-[#F7C548]">
            🌟
          </div>
        </div>

        {/* Animated Dots Pattern */}
        <div className="absolute top-32 right-1/4 animate-pulse-slow hidden md:block">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-[#E76F51] rounded-full animate-bounce-slow"></div>
            <div
              className="w-2 h-2 bg-[#5F2C6F] rounded-full animate-bounce-slow"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-[#F7C548] rounded-full animate-bounce-slow"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>

        {/* Sketch Background Words */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 opacity-5 hidden lg:block ">
          <div className="text-4xl sm:text-6xl md:text-8xl font-bold text-[#E76F51] animate-pulse-slow">
            MINDFULNESS
          </div>
        </div>
        <div className="absolute bottom-1/4 right-1/2 transform translate-x-1/2 opacity-5 hidden lg:block">
          <div
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#5F2C6F] animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          >
            CALM
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28">
        <div className="w-full max-w-7xl mx-auto">
          {/* Social Proof */}
          <div className="flex items-center justify-center mb-4 sm:mb-8 animate-slide-in-left">
            <div className="flex -space-x-2 mr-3">
              <img
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white animate-bounce-slow"
                src="https://media.istockphoto.com/id/1495293786/photo/lets-go-over-there-mommy.jpg?s=612x612&w=0&k=20&c=d8VCx5iUFXpSs1C6l2iD2vyYtRBTak6gZDFrPyLQB1s="
                alt="Customer"
              />
              <img
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white animate-bounce-slow"
                style={{ animationDelay: "0.2s" }}
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face"
                alt="Customer"
              />
              <img
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white animate-bounce-slow"
                style={{ animationDelay: "0.4s" }}
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=32&h=32&fit=crop&crop=face"
                alt="Customer"
              />
            </div>
            <span className="text-gray-700 text-xs sm:text-sm">
              Families Prefer Us!
            </span>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-0 relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-2">
              {/* Animated Crayon Icon */}
              <span className="absolute top-65 sm:top-50 md:top-54 text-red-500 animate-bounce-slow text-2xl sm:text-3xl md:text-4xl lg:top-75 lg:left-60">
                🖍️
              </span>

              {/* Main Text with Enhanced Animations */}
              <span className="text-[rgb(231,111,81)] animate-slide-in-left inline-block md:text-5xl">
                Mindfulness & Meditation
              </span>
              <br />
              <span className="text-black animate-slide-in-right inline-block">
                for
              </span>
              <span className="text-black ml-2 sm:ml-3 md:ml-5 md:text-5xl relative animate-scale-in inline-block">
                Kids (4 - 14)
              </span>
              <br />

              {/* Animated Star */}
              <span className="absolute top-50 sm:top-48 md:top-60 right-6 sm:right-18 md:right-32 text-[#F7C548] rotate-12 animate-sparkle animate-bounce-slow text-3xl sm:text-4xl md:text-3xl lg:text-5xl lg:right-60">
                ⭐
              </span>
            </h1>

            {/* Enhanced Description with Typing Effect */}
            <div className="mt-4 sm:mt-6 md:mt-5 mb-1 px-4">
              <p className="text-gray-600 text-xs sm:text-sm md:text-xs font-bold animate-fade-in leading-relaxed">
                Fun, Art-based meditations that build focus, creativity, and
                confidence through colorful mindfulness
              </p>
            </div>
            <div className="mt-0 mb-7 sm:mb-8 md:mb-7 px-4">
              <p
                className="text-gray-600 text-xs sm:text-sm md:text-xs font-bold animate-fade-in leading-relaxed"
                style={{ animationDelay: "0.5s" }}
              >
                Safe, ad-free, and crafted with child-development and art
                therapy experts.
              </p>
            </div>

            {/* Enhanced CTA Button with Animated Icons */}
            <div className="w-full flex items-center justify-center px-4">
              <button onClick={() => setIsPopupOpen(true)} className="bg-[#f96b4b] flex items-center gap-4 sm:gap-4 w-fit sm:w-fit text-white px-4 sm:px-5 py-3 rounded-full font-semibold hover:bg-[#E76F51] transition-all duration-300 hover:scale-105 hover:shadow-lg group text-sm sm:text-base cursor-pointer">
                <span className="animate-slide-in-left text-white md:text-base">
                  Start Free Trial
                </span>
                <ArrowRight
                  size={20}
                  className="transform rotate-[-50deg] bg-white rounded-full text-black p-1 sm:p-0 sm:w-6 sm:h-6"
                />
              </button>
            </div>

            {/* Additional Animated Elements */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 px-4">
              <div
                className="flex items-center justify-center sm:justify-start space-x-2 animate-fade-in"
                style={{ animationDelay: "1s" }}
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 animate-pulse-slow" />
                <span className="text-xs sm:text-sm text-gray-600">
                  Child-Safe Art
                </span>
              </div>
              <div
                className="flex items-center justify-center sm:justify-start space-x-2 animate-fade-in"
                style={{ animationDelay: "1.2s" }}
              >
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-sparkle" />
                <span className="text-xs sm:text-sm text-gray-600">
                  Art Therapy Experts
                </span>
              </div>
              <div
                className="flex items-center justify-center sm:justify-start space-x-2 animate-fade-in"
                style={{ animationDelay: "1.4s" }}
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 animate-pulse-slow" />
                <span className="text-xs sm:text-sm text-gray-600">
                  Creative & Ad-Free
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Hero Images with Circular Gallery */}
          <div
            className="mt-0 sm:mt-0 md:mt-0 lg:mt-0"
            style={{ height: "400px", width: "100%", position: "relative" }}
          >
            <CircularGallery
              bend={3}
              textColor="#000"
              borderRadius={0.05}
              scrollEase={0.02}
            />
          </div>
        </div>
      </section>

      {/* Include all other sections */}
      <PlayfulFlair />
      <Collections />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <CTABanners />
      <Footer />
      <TrialFormPopup
      isOpen={isPopupOpen}
      onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
};

export default HeroSection;
