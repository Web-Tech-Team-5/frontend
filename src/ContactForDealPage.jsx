// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ContactForDealPage = () => {
//   // Form state
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   // Message submission state
//   const [messageSent, setMessageSent] = useState(false);

//   // Form validation state
//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   // Navigation hook
//   const navigate = useNavigate();

//   // Handle form input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Simple form validation
//     const newErrors = { name: '', email: '', message: '' };

//     if (!formData.name) newErrors.name = 'Name is required.';
//     if (!formData.email) newErrors.email = 'Email is required.';
//     if (!formData.message) newErrors.message = 'Message cannot be empty.';

//     setErrors(newErrors);

//     // If no errors, simulate form submission
//     if (!newErrors.name && !newErrors.email && !newErrors.message) {
//       setMessageSent(true);
//       setFormData({ name: '', email: '', message: '' });
//       setErrors({});
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto py-12 px-6 md:px-12">
//       <div className="bg-white shadow-xl rounded-lg p-8">
//         {messageSent ? (
//           <div className="text-center">
//             <h1 className="text-3xl font-semibold text-gray-800 mb-4">Thank You!</h1>
//             <p className="text-xl text-gray-500 mb-4">
//               Your message has been sent successfully. The car owner will contact you soon.
//             </p>

//             {/* Option buttons */}
//             <div className="mt-6 flex justify-center gap-4">
//               {/* Go to Payment */}
//               <button
//                 onClick={() => navigate('/payment')}
//                 className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//               >
//                 Go to Payment
//               </button>

//               {/* Fill Another Form */}
//               <button
//                 onClick={() => setFormData({ name: '', email: '', message: '' })}
//                 className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
//               >
//                 Fill Another Form
//               </button>
//             </div>
//           </div>
//         ) : (
//           <>
//             <h1 className="text-3xl font-semibold text-gray-800 mb-4">Contact the Car Owner</h1>
//             <p className="text-xl text-gray-500 mb-8">Please fill in your details to inquire about this car.</p>

//             {/* Contact Form */}
//             <form onSubmit={handleSubmit}>
//               {/* Name */}
//               <div className="mb-4">
//                 <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   placeholder="Enter your name"
//                 />
//                 {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//               </div>

//               {/* Email */}
//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   placeholder="Enter your email"
//                 />
//                 {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//               </div>

//               {/* Message */}
//               <div className="mb-6">
//                 <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   rows={4}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   placeholder="Write your message"
//                 />
//                 {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
//               >
//                 Send Message
//               </button>

//               {/* Option to Proceed to Payment */}
//               <div className="mt-4 text-center">
//                 <button
//                   type="button"
//                   onClick={() => navigate('/payment')}
//                   className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
//                 >
//                   Go to Payment (Skip Form)
//                 </button>
//               </div>

//               {/* Go Back Button */}
//               <button
//                 type="button"
//                 onClick={() => navigate(-1)} // Go back to previous page
//                 className="mt-4 w-full bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 transition-colors"
//               >
//                 Go Back
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ContactForDealPage;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ContactForDealPage = () => {
//   // Form state, including contactInfo and category
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//     contactInfo: '', // optional contact info
//     category: '', // category for the query (e.g., 'availability', 'price', etc.)
//   });

//   // Message submission state
//   const [messageSent, setMessageSent] = useState(false);

//   // Form validation state
//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     message: '',
//     category: '',
//   });

//   // Navigation hook
//   const navigate = useNavigate();

//   // Handle form input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Simple form validation
//     const newErrors = { name: '', email: '', message: '', category: '' };

//     if (!formData.name) newErrors.name = 'Name is required.';
//     if (!formData.email) newErrors.email = 'Email is required.';
//     if (!formData.message) newErrors.message = 'Message cannot be empty.';
//     if (!formData.category) newErrors.category = 'Please select a category.';

//     setErrors(newErrors);

//     // If no errors, simulate form submission
//     if (!newErrors.name && !newErrors.email && !newErrors.message && !newErrors.category) {
//       setMessageSent(true);
//       setFormData({ name: '', email: '', message: '', contactInfo: '', category: '' });
//       setErrors({});
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto py-12 px-6 md:px-12">
//       <div className="bg-white shadow-xl rounded-lg p-8">
//         {messageSent ? (
//           <div className="text-center">
//             <h1 className="text-3xl font-semibold text-gray-800 mb-4">Thank You!</h1>
//             <p className="text-xl text-gray-500 mb-4">
//               Your message has been sent successfully. The car owner will contact you soon.
//             </p>

//             {/* Option buttons */}
//             <div className="mt-6 flex justify-center gap-4">
//               {/* Go to Payment */}
//               <button
//                 onClick={() => navigate('/payment')}
//                 className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//               >
//                 Go to Payment
//               </button>

//               {/* Fill Another Form */}
//               <button
//                 onClick={() => setFormData({ name: '', email: '', message: '', contactInfo: '', category: '' })}
//                 className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
//               >
//                 Fill Another Form
//               </button>
//             </div>
//           </div>
//         ) : (
//           <>
//             <h1 className="text-3xl font-semibold text-gray-800 mb-4">Contact the Car Owner</h1>
//             <p className="text-xl text-gray-500 mb-8">Please fill in your details to inquire about this car.</p>

//             {/* Contact Form */}
//             <form onSubmit={handleSubmit}>
//               {/* Name */}
//               <div className="mb-4">
//                 <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   placeholder="Enter your name"
//                 />
//                 {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//               </div>

//               {/* Email */}
//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   placeholder="Enter your email"
//                 />
//                 {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//               </div>

//               {/* Message */}
//               <div className="mb-6">
//                 <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   rows={4}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   placeholder="Write your message"
//                 />
//                 {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
//               </div>

//               {/* Contact Info (Optional) */}
//               <div className="mb-4">
//                 <label htmlFor="contactInfo" className="block text-lg font-semibold text-gray-700 mb-2">Contact Info (Optional)</label>
//                 <input
//                   type="text"
//                   id="contactInfo"
//                   name="contactInfo"
//                   value={formData.contactInfo}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   placeholder="Phone number, WhatsApp, or any contact info"
//                 />
//               </div>

//               {/* Category Dropdown */}
//               <div className="mb-4">
//                 <label htmlFor="category" className="block text-lg font-semibold text-gray-700 mb-2">Query Category</label>
//                 <select
//                   id="category"
//                   name="category"
//                   value={formData.category}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 >
//                   <option value="">Select a category</option>
//                   <option value="availability">Availability</option>
//                   <option value="price">Price</option>
//                   <option value="condition">Condition</option>
//                   <option value="features">Features</option>
//                   <option value="others">Others</option>
//                 </select>
//                 {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
//               >
//                 Send Message
//               </button>

//               {/* Option to Proceed to Payment */}
//               <div className="mt-4 text-center">
//                 <button
//                   type="button"
//                   onClick={() => navigate('/payment')}
//                   className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
//                 >
//                   Go to Payment (Skip Form)
//                 </button>
//               </div>

//               {/* Go Back Button */}
//               <button
//                 type="button"
//                 onClick={() => navigate(-1)} // Go back to previous page
//                 className="mt-4 w-full bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 transition-colors"
//               >
//                 Go Back
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ContactForDealPage;



import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ContactForDealPage = () => {
  // Form state, including contactInfo and category
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    contactInfo: '', // optional contact info
    category: '', // category for the query (e.g., 'availability', 'price', etc.)
  });

  // Message submission state
  const [messageSent, setMessageSent] = useState(false);

  // Form validation state
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
    category: '',
  });

  // Navigation hook
  const navigate = useNavigate();
  const { carId } = useParams(); // Get carId from URL params
  const userId = 'dummyUserId'; // Replace with the actual userId (e.g., from context or auth state)

  // Ensure carId is present, redirect to home if not
  useEffect(() => {
    if (!carId) {
      navigate('/'); // Redirect to home if carId is not available in the URL
    }
  }, [carId, navigate]);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    const newErrors = { name: '', email: '', message: '', category: '' };

    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.message) newErrors.message = 'Message cannot be empty.';
    if (!formData.category) newErrors.category = 'Please select a category.';

    setErrors(newErrors);

    // If no errors, simulate form submission
    if (!newErrors.name && !newErrors.email && !newErrors.message && !newErrors.category) {
      setMessageSent(true);
      setFormData({ name: '', email: '', message: '', contactInfo: '', category: '' });
      setErrors({});
      
      // Here you would call the API endpoint to post the query with carId and userId
      fetch('/api/query/post-query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          carId, // carId from URL params
          userId, // userId from the context or auth state
        }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Query submitted successfully') {
          setMessageSent(true);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
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
                onClick={() => setFormData({ name: '', email: '', message: '', contactInfo: '', category: '' })}
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

              {/* Contact Info (Optional) */}
              <div className="mb-4">
                <label htmlFor="contactInfo" className="block text-lg font-semibold text-gray-700 mb-2">Contact Info (Optional)</label>
                <input
                  type="text"
                  id="contactInfo"
                  name="contactInfo"
                  value={formData.contactInfo}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Phone number, WhatsApp, or any contact info"
                />
              </div>

              {/* Category Dropdown */}
              <div className="mb-4">
                <label htmlFor="category" className="block text-lg font-semibold text-gray-700 mb-2">Query Category</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select a category</option>
                  <option value="availability">Availability</option>
                  <option value="price">Price</option>
                  <option value="condition">Condition</option>
                  <option value="features">Features</option>
                  <option value="others">Others</option>
                </select>
                {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
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
