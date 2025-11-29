import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Sparkles,
  Heart,
  Star,
  Brain,
  Leaf,
} from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqData = [
    {
      question: "What is Topmind Care and how does it help children?",
      answer:
        "Topmind Care is a mindfulness and meditation platform specifically designed for children aged 4-14. We use art-based meditations, guided imagery, and creative activities to help kids build focus, emotional regulation, and confidence through fun, engaging mindfulness practices.",
    },
    {
      question: "Is Topmind Care safe for children?",
      answer:
        "Absolutely! Topmind Care is 100% child-safe with no ads, inappropriate content, or data collection. All our content is created by child development and art therapy experts, ensuring age-appropriate and beneficial experiences for your child.",
    },
    {
      question: "What age groups is Topmind Care designed for?",
      answer:
        "Our platform is specifically designed for children aged 4-14 years. We have age-appropriate content divided into three categories: Little Explorers (4-6), Brave Thinkers (7-10), and Calm & Curious (11-14), each with tailored activities and meditations.",
    },
    {
      question: "How does the free trial work?",
      answer:
        "Our free trial gives you full access to all features for 7 days with no credit card required. You can explore our guided meditations, sleep stories, breathing exercises, and family activities. Cancel anytime during the trial period with no charges.",
    },
    {
      question: "Can the whole family use Topmind Care together?",
      answer:
        "Yes! We offer family plans that allow up to 4 children to use the platform. Our family sessions are designed to bring families together through shared mindfulness practices, creating bonding moments while building emotional intelligence.",
    },
    {
      question: "What types of activities are available?",
      answer:
        "We offer a wide variety of activities including guided meditations, sleep stories, breathing exercises, emotion tools, family sessions, classroom activities, mindful games, and parent resources. Each activity is designed to be engaging and educational.",
    },
    {
      question: "How long are the meditation sessions?",
      answer:
        "Our sessions range from 3-12 minutes, perfect for children's attention spans. We have quick 3-minute breathing exercises for immediate calm, 5-7 minute guided meditations, and longer 10-12 minute family sessions for deeper practice.",
    },
    {
      question: "Is there content for parents and teachers?",
      answer:
        "Yes! We provide parent resources including weekly tips, printable charts, and simple routines you can use at home. Teachers can access classroom activities and mindfulness tools to help students focus and manage emotions in educational settings.",
    },
    {
      question: "Can I track my child's progress?",
      answer:
        "While we focus on privacy and don't collect personal data, parents can observe their child's improved focus, better sleep, and enhanced emotional regulation. Many parents report seeing positive changes within the first week of use.",
    },
    {
      question: "What if my child doesn't like meditation?",
      answer:
        "Our approach is different from traditional meditation. We use storytelling, art, music, and interactive activities to make mindfulness fun and engaging. Most children love our creative approach and ask for their 'mindfulness time' regularly.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel your subscription at any time through your account settings. There are no cancellation fees, and you'll continue to have access until the end of your current billing period.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes! We provide dedicated customer support to help with any questions or concerns. Our team is available to assist with technical issues, account management, and guidance on how to get the most out of Topmind Care for your family.",
    },
  ];

  return (
    <section
      id="faq"
      className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-[#FDFBF5] relative overflow-hidden"
    >
      {/* Background Animated Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-1/4 animate-float">
          <div className="text-2xl sm:text-3xl md:text-4xl opacity-10 text-purple-400">
            ❓
          </div>
        </div>
        <div
          className="absolute bottom-20 right-4 sm:right-1/4 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div className="text-xl sm:text-2xl md:text-3xl opacity-10 text-pink-400">
            💡
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
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 animate-fade-in">
            <span className="mr-2 animate-bounce-slow">❓</span>
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in">
            Everything you need to know about Topmind Care and how it can help
            your child's mindfulness journey.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 sm:space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in border border-gray-100 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center flex-1">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform">
                    <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 pr-4">
                    {item.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {openItems[index] ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 transition-transform" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 transition-transform" />
                  )}
                </div>
              </button>

              {openItems[index] && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 animate-slide-down">
                  <div className="pl-11 sm:pl-14">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 border border-purple-100 animate-fade-in">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              Still have questions?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Our support team is here to help you and your child get the most
              out of Topmind Care. We're committed to making your mindfulness
              journey smooth and enjoyable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <button className="bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base">
                Contact Support
              </button>
              <button className="bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                View Help Center
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          <div
            className="text-center animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
              10,000+
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">Happy Families</p>
          </div>

          <div
            className="text-center animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
              4.9/5
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">Parent Rating</p>
          </div>

          <div
            className="text-center animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
              24/7
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">
              Support Available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
