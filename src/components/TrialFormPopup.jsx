import React, { useState, useEffect } from "react";
import {
  X,
  User,
  Mail,
  Phone,
  GraduationCap,
  MessageSquare,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const TrialFormPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    class: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        class: "",
        message: "",
      });
      onClose();
    }, 3000);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        class: "",
        message: "",
      });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50 p-4"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-slide-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-t-2xl relative">
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors disabled:opacity-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
              <Sparkles className="w-6 h-6 text-black" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Start Your Free Trial</h2>
              <p className="text-purple-100 text-sm">
                Join thousands of happy families
              </p>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Class Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <GraduationCap className="w-4 h-4 inline mr-2" />
                  Child's Class/Grade
                </label>
                <select
                  name="class"
                  value={formData.class}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                >
                  <option value="">Select class/grade</option>
                  <option value="Pre-K (4-5 years)">Pre-K (4-5 years)</option>
                  <option value="Kindergarten (5-6 years)">
                    Kindergarten (5-6 years)
                  </option>
                  <option value="1st Grade (6-7 years)">
                    1st Grade (6-7 years)
                  </option>
                  <option value="2nd Grade (7-8 years)">
                    2nd Grade (7-8 years)
                  </option>
                  <option value="3rd Grade (8-9 years)">
                    3rd Grade (8-9 years)
                  </option>
                  <option value="4th Grade (9-10 years)">
                    4th Grade (9-10 years)
                  </option>
                  <option value="5th Grade (10-11 years)">
                    5th Grade (10-11 years)
                  </option>
                  <option value="6th Grade (11-12 years)">
                    6th Grade (11-12 years)
                  </option>
                  <option value="7th Grade (12-13 years)">
                    7th Grade (12-13 years)
                  </option>
                  <option value="8th Grade (13-14 years)">
                    8th Grade (13-14 years)
                  </option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your child's needs or any questions you have..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Starting Your Trial...
                  </div>
                ) : (
                  "Start Free Trial"
                )}
              </button>

              {/* Terms */}
              <p className="text-xs text-gray-500 text-center">
                By clicking "Start Free Trial", you agree to our Terms of
                Service and Privacy Policy. No credit card required.
              </p>
            </form>
          ) : (
            /* Success Message */
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Welcome to Topmind Care!
              </h3>
              <p className="text-gray-600 mb-4">
                Your free trial has started successfully. Check your email for
                next steps.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm text-purple-700">
                  🎉 You now have 7 days of full access to all our mindfulness
                  activities and programs!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrialFormPopup;
