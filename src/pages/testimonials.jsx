import React from "react";
import { Star, Heart, Sparkles, Brain, Leaf } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "My 8-year-old daughter now asks for her 'mindfulness time' every evening. It's become our special bonding moment!",
      image:
        "data:image/jpeg;base64,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",
      childAge: "Parent of 8-year-old",
      // icon: "🧘‍♀️",
    },
    {
      name: "Mr. Johnson",
      rating: 5,
      text: "As a teacher, I've seen remarkable improvements in my students' focus and emotional regulation since using Mindery Kids.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      childAge: "Elementary Teacher",
      // icon: "🌟",
    },
    {
      name: "Lisa T.",
      rating: 5,
      text: "The sleep stories have been a game-changer for our bedtime routine. My son falls asleep so much faster now!",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      childAge: "Parent of 6-year-old",
      // icon: "🌙",
    },
    {
      name: "David K.",
      rating: 5,
      text: "My 10-year-old loves the dragon breathing exercises! It's helped him manage his anxiety so much better.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face",
      childAge: "Parent of 10-year-old",
      // icon: "🐉",
    },
  ];

  return (
    <section
      id="testimonials"
      className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-[#FDFBF5] relative overflow-hidden"
    >
      {/* Background Animated Elements */}

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center mb-3 sm:mb-4 animate-fade-in">
          <span className="mr-2 animate-bounce-slow">💝</span>
          What Families Say About Mindery Kids!
        </h2>
        <p className="text-xs sm:text-base text-gray-600 text-center mb-8 sm:mb-10 max-w-2xl mx-auto animate-fade-in">
          Join thousands of happy families who have discovered the magic of
          mindfulness for their children.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-fade-in border border-gray-100 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Floating Icon */}
              <div className="absolute top-4 right-4 text-xl sm:text-2xl animate-float opacity-60 group-hover:opacity-100 transition-opacity">
                {testimonial.icon}
              </div>

              <div className="flex items-center mb-6 sm:mb-7">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 border-2 border-purple-200 object-cover object-center"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-purple-600 font-medium">
                    {testimonial.childAge}
                  </p>
                </div>
              </div>

              <div className="flex text-yellow-400 mb-3 sm:mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 sm:w-4 sm:h-4 fill-current animate-pulse-slow"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>

              <blockquote className="text-gray-600 text-xs sm:text-sm italic leading-relaxed mb-5 sm:mb-7">
                "{testimonial.text}"
              </blockquote>

              {/* Interactive Elements */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 animate-pulse-slow" />
                  <span className="text-xs text-gray-500">
                    Loved by families
                  </span>
                </div>
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 animate-sparkle" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          <div
            className="text-center animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">
              95%
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Kids show improved focus
            </p>
          </div>

          <div
            className="text-center animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">
              87%
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Better sleep quality
            </p>
          </div>

          <div
            className="text-center animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">
              92%
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Reduced stress levels
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-12 sm:mt-16 animate-fade-in px-4"
          style={{ animationDelay: "0.8s" }}
        >
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group text-sm sm:text-base">
            <span className="flex items-center justify-center space-x-5">
              <span>Join Our Happy Families!</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-sparkle" />
            </span>
          </button>
          <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-5">
            Start your mindfulness journey today • Free 7-day trial
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
