// import React, { useState } from "react";
// import { MdOutlineAttachEmail } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

// const ForgetPassword = () => {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const emailChanger = (event) => {
//     setEmail(event.target.value);
//   };

//   const submitHandler = async (event) => {
//     event.preventDefault();
//     setError(""); // Clear any previous error messages
//     if (!email) {
//       setError("Please enter a valid email.");
//       return;
//     }

//     // Simulate API call to send OTP (replace with real API logic)
//     console.log("Sending OTP to", email);

//     setLoading(true);

//     // Simulate a timeout for the API request (e.g., 2 seconds)
//     setTimeout(() => {
//       setLoading(false);

//       // If email is not in valid format or other conditions, show error
//       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailPattern.test(email)) {
//         setError("Please enter a valid email address.");
//         return;
//       }

//       // On success, navigate to the OTP verification page
//       navigate("/verify-otp"); // Redirect to OTP verification page
//     }, 2000);
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <form onSubmit={submitHandler} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <div className="text-center mb-6">
//           <MdOutlineAttachEmail className="text-4xl text-blue-600 mx-auto" />
//           <p className="text-2xl font-semibold text-gray-800 mt-4">Forgot your password?</p>
//           <p className="text-gray-600 mt-2">Enter your registered email, and we will send a 6-digit OTP.</p>
//         </div>

//         {/* Error message display */}
//         {error && <div className="text-red-500 text-center mb-4">{error}</div>}

//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email *</label>
//           <input
//             id="email"
//             type="email"
//             placeholder="Enter your email"
//             onChange={emailChanger}
//             value={email}
//             required
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all"
//             disabled={loading}
//           >
//             {loading ? "Sending OTP..." : "Send OTP"}
//           </button>
//         </div>

//         <div className="text-center mt-4">
//           <a href="/login" className="text-blue-600 hover:underline text-sm">Back to Login?</a>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ForgetPassword;

import React, { useState } from "react";
import { MdOutlineAttachEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";  // Install axios for API calls
import { toast, ToastContainer } from "react-toastify";  // Import toast notifications
import "react-toastify/dist/ReactToastify.css";
import { FaSpinner } from "react-icons/fa";  // Using spinner from react-icons



const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const emailChanger = (event) => {
    setEmail(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setError(""); // Clear any previous error messages

    // Basic email validation
    if (!email) {
      setError("Please enter a valid email.");
      toast.error("Please enter a valid email.");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      // Sending OTP to the backend API
      console.log("before");
      const response = await axios.post(`http://localhost:8080/api/auth/send-otp`, { email });
      console.log(response.data);

      if (response.data.success) {
        // Success: Navigate to the OTP verification page
        toast.success("OTP sent successfully!");
        setEmail(""); // Clear the email input after success
        navigate("/verify-otp-page", { state: { email } }); // Assuming the backend provides a success response
      } else {
        setError(response.data.message || "Failed to send OTP.");
        toast.error(response.data.message || "Failed to send OTP.");
      }
    } catch (error) {
      setError(error?.response?.data?.message || "Something went wrong. Please try again.");
      toast.error(error?.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={submitHandler} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <MdOutlineAttachEmail className="text-4xl text-blue-600 mx-auto" />
          <p className="text-2xl font-semibold text-gray-800 mt-4">Forgot your password?</p>
          <p className="text-gray-600 mt-2">Enter your registered email, and we will send a 6-digit OTP.</p>
        </div>

        {/* Error message display */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email *</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            onChange={emailChanger}
            value={email}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
  <button
    type="submit"
    className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all flex items-center justify-center"
    disabled={loading}
  >
    {loading ? (
      <FaSpinner className="animate-spin text-2xl" />
    ) : (
      "Send OTP"
    )}
  </button>
</div>


        <div className="text-center mt-4">
          <a href="/login" className="text-blue-600 hover:underline text-sm">Back to Login?</a>
        </div>
      </form>

      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
};

export default ForgetPassword;
