// import React, { useState } from "react";

// const Login = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const emailOnChange = (event) => {
//     setEmail(event.target.value);
//   }

//   const passwordOnChange = (event) => {
//     setPassword(event.target.value);
//   }

//   const submitHandler = (event) => {
//     event.preventDefault();
//     console.log(email, password);
//   }

//   return (
//     <div className="min-h-screen flex flex-col justify-between bg-gray-100 font-sans">
//       {/* Main Login Section */}
//       <main className="flex-grow flex items-center justify-center py-8">
//         <div className="bg-white shadow-md rounded-lg w-full max-w-md p-8">
//           <h2 className="text-2xl font-bold text-center mb-6">Log in to your account</h2>

//           <button className="w-full flex items-center justify-center bg-blue-600 text-white py-2 rounded-lg mb-4">
//             <img
//               src="/assets/google-icon.png"
//               alt="Google"
//               className="w-5 h-5 mr-2"
//             />
//             Continue with Google
//           </button>

//           <form onSubmit={submitHandler}>
//             <label className="block mb-2 text-gray-600 font-semibold">
//               Email
//               <input
//                 onChange={emailOnChange}
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 className="w-full mt-1 p-2 border rounded-md"
//               />
//             </label>

//             <label className="block mb-4 text-gray-600 font-semibold relative">
//               Password
//               <input
//                 onChange={passwordOnChange}
//                 type={passwordVisible ? "text" : "password"}
//                 placeholder="Enter your password"
//                 value={password}
//                 className="w-full mt-1 p-2 border rounded-md pr-10"
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
//                 aria-label={passwordVisible ? "Hide password" : "Show password"}
//               >
//                 {passwordVisible ? "👁️" : "👁️‍🗨️"}
//               </button>
//             </label>

//             <div className="flex justify-between items-center mb-4">
//               <label className="flex items-center text-gray-600">
//                 <input type="checkbox" className="mr-2" />
//                 Remember me
//               </label>
//               <a href="./forget-password" className="text-blue-600 hover:underline text-sm">
//                 Forgot password?
//               </a>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 rounded-lg"
//             >
//               Login
//             </button>
//           </form>

//           <div className="text-center mt-4 text-sm">
//             Don't have an account?{" "}
//             <a href="/signup" className="text-blue-600 hover:underline">
//               Sign up
//             </a>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import axios from 'axios'; // Import axios for API requests
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import { toast } from 'react-toastify'; // Import toast for notifications

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const navigate = useNavigate(); // Initialize useNavigate hook for routing

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const emailOnChange = (event) => {
    setEmail(event.target.value);
  }

  const passwordOnChange = (event) => {
    setPassword(event.target.value);
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    // Validate email and password
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    setLoading(true); // Set loading state to true when submitting the form

    try {
      // Send POST request to backend login API
      const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });

      // On success, store the token and user info (you can store token in localStorage or cookies)
      const { token, user } = response.data;

      // Store token in localStorage (or cookies for better security in production)
      localStorage.setItem('token', token);

      // Show success toast
      toast.success("Login successful!");

      // Redirect user to the dashboard page
      navigate('/');

    } catch (error) {
      setLoading(false); // Set loading state to false when request completes
      if (error.response && error.response.data) {
        toast.error(error.response.data.message); // Show error message from backend
      } else {
        toast.error("Something went wrong, please try again.");
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 font-sans">
      {/* Main Login Section */}
      <main className="flex-grow flex items-center justify-center py-8">
        <div className="bg-white shadow-md rounded-lg w-full max-w-md p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Log in to your account</h2>

          {/* Google Login Button
          <button className="w-full flex items-center justify-center bg-blue-600 text-white py-2 rounded-lg mb-4">
            <img
              src="/assets/google-icon.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button> */}

          {/* Login Form */}
          <form onSubmit={submitHandler}>
            {/* Email Input */}
            <label className="block mb-2 text-gray-600 font-semibold">
              Email
              <input
                onChange={emailOnChange}
                type="email"
                placeholder="Enter your email"
                value={email}
                className="w-full mt-1 p-2 border rounded-md"
              />
            </label>

            {/* Password Input */}
            <label className="block mb-4 text-gray-600 font-semibold relative">
              Password
              <input
                onChange={passwordOnChange}
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                className="w-full mt-1 p-2 border rounded-md pr-10"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label={passwordVisible ? "Hide password" : "Show password"}
              >
                {passwordVisible ? "👁️" : "👁️‍🗨️"}
              </button>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg"
              disabled={loading} // Disable button when submitting
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="flex justify-between items-center mb-4">
              <label className="flex items-center text-gray-600">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="/forget-password" className="text-blue-600 hover:underline text-sm">
                Forgot password?
              </a>
            </div>

          {/* Sign Up Link */}
          <div className="text-center mt-4 text-sm">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;

