import React, { useState } from "react";

const Feedback = () => {
  const [formData, setFormData] = useState({
    email: "",
    feedback: "",
    rating: 0,
  });

  const [errors, setErrors] = useState({
    email: "",
    feedback: "",
    rating: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (rating: number) => {
    setFormData({ ...formData, rating });
    setErrors({ ...errors, rating: "" }); // Clear rating error when user selects rating
  };

  // Form validation
  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", feedback: "", rating: "" };

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    // Feedback validation
    if (!formData.feedback) {
      newErrors.feedback = "Feedback is required.";
      valid = false;
    } else if (formData.feedback.length < 10) {
      newErrors.feedback = "Feedback must be at least 10 characters long.";
      valid = false;
    }

    // Rating validation
    if (formData.rating === 0) {
      newErrors.rating = "Please select a rating.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Form submitted:", formData);
    // You can submit the form data here (e.g., API call)
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your email"
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Feedback Field */}
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
              Your Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              rows={4}
              placeholder="Write your feedback here"
              required
            ></textarea>
            {errors.feedback && <p className="text-red-500 text-xs mt-1">{errors.feedback}</p>}
          </div>

          {/* Rating Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <div className="flex items-center mt-2 space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingChange(star)}
                  className={`text-xl ${formData.rating >= star ? "text-yellow-400" : "text-gray-300"} focus:outline-none`}
                >
                  ★
                </button>
              ))}
            </div>
            {errors.rating && <p className="text-red-500 text-xs mt-1">{errors.rating}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="w-full mt-8 text-center text-gray-600 text-sm">
        <p>© 2024 OnlyCars. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-blue-500">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-500">
            Terms of Service
          </a>
          <a href="#" className="hover:text-blue-500">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Feedback;
