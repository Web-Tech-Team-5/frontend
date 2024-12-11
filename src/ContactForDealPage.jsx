import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForDealPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Message submission state
  const [messageSent, setMessageSent] = useState(false);

  // Form validation state
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Navigation hook
  const navigate = useNavigate();

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.message) newErrors.message = 'Message cannot be empty.';

    setErrors(newErrors);

    // If no errors, simulate form submission
    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      setMessageSent(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-6 md:px-12">
      <div className="bg-white shadow-xl rounded-lg p-8">
        {messageSent ? (
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Thank You!</h1>
            <p className="text-xl text-gray-500 mb-4">
              Your message has been sent successfully. The car owner will contact you soon.
            </p>

            {/* Option buttons */}
            <div className="mt-6 flex justify-center gap-4">
              {/* Go to Payment */}
              <button
                onClick={() => navigate('/payment')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Go to Payment
              </button>

              {/* Fill Another Form */}
              <button
                onClick={() => setFormData({ name: '', email: '', message: '' })}
                className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Fill Another Form
              </button>
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Contact the Car Owner</h1>
            <p className="text-xl text-gray-500 mb-8">Please fill in your details to inquire about this car.</p>

            {/* Contact Form */}
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Write your message"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>

              {/* Option to Proceed to Payment */}
              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => navigate('/payment')}
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Go to Payment (Skip Form)
                </button>
              </div>

              {/* Go Back Button */}
              <button
                type="button"
                onClick={() => navigate(-1)} // Go back to previous page
                className="mt-4 w-full bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Go Back
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactForDealPage;
