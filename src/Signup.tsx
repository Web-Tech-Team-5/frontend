// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaGoogle } from "react-icons/fa";

// const Signup = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

/*************  ✨ Codeium Command ⭐  *************/
  /**
   * Handles the change event for the email input field by updating the email
   * state variable with the new value.
   * @param {React.ChangeEvent<HTMLInputElement>} event The change event.
   */
/******  e2a5a7d9-eafb-48e5-9db7-6c5993dd6d77  *******/
//   const emailOnChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const passwordOnChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const confirmPasswordOnChange = (event) => {
//     setConfirmPassword(event.target.value);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();

//     // Password match validation
//     // if (password !== confirmPassword) {
//     //   alert("Passwords do not match.");
//     //   return;
//     // }

//     console.log(email, password, confirmPassword);
//   };

//   const togglePasswordVisibility = () => setShowPassword(!showPassword);
//   const toggleConfirmPasswordVisibility = () =>
//     setShowConfirmPassword(!showConfirmPassword);

//   const handleGoogleSignup = () => {
//     // Here you would typically handle the Google authentication logic, 
//     // like using Firebase, OAuth, or your own backend.
//     console.log("Google signup initiated");
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-between bg-gray-100 font-sans">
//       {/* Main Signup Section */}
//       <main className="flex-grow flex items-center justify-center py-8">
//         <div className="bg-white shadow-md rounded-lg w-full max-w-md p-8">
//           <h2 className="text-2xl font-bold text-center mb-6">
//             Sign up for an account
//           </h2>

//           {/* Google SignUp Button */}
//           <button
//             onClick={handleGoogleSignup}
//             className="w-full flex items-center justify-center bg-red-600 text-white py-2 rounded-lg mb-4 hover:bg-red-700 transition-all"
//           >
//             <FaGoogle className="mr-2 text-white text-lg" />
//             Continue with Google
//           </button>

//           <h3 className="text-center text-gray-600 mb-4 ">or</h3>

//           <form onSubmit={submitHandler}>
//             <label className="block mb-2 text-gray-600 font-semibold">
//               Email
//               <input
//                 onChange={emailOnChange}
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full mt-1 p-2 border rounded-md"
//                 value={email}
//                 required
//               />
//             </label>

//             <label className="block mb-4 text-gray-600 font-semibold relative">
//               Password
//               <input
//                 onChange={passwordOnChange}
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 className="w-full mt-1 p-2 border rounded-md"
//                 value={password}
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute inset-y-0 right-3 flex items-center text-gray-500"
//                 aria-label={showPassword ? "Hide password" : "Show password"}
//               >
//                 {showPassword ? "👁️" : "👁️‍🗨️"}
//               </button>
//             </label>

//             <label className="block mb-4 text-gray-600 font-semibold relative">
//               Confirm Password
//               <input
//                 onChange={confirmPasswordOnChange}
//                 type={showConfirmPassword ? "text" : "password"}
//                 placeholder="Re-enter your password"
//                 className="w-full mt-1 p-2 border rounded-md"
//                 value={confirmPassword}
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={toggleConfirmPasswordVisibility}
//                 className="absolute inset-y-0 right-3 flex items-center text-gray-500"
//                 aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
//               >
//                 {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
//               </button>
//             </label>

//             <div className="flex justify-between items-center mb-4">
//               <label className="flex items-center text-gray-600">
//                 <input type="checkbox" className="mr-2" />
//                 Remember me
//               </label>
//               <a href="/forget-password" className="text-blue-600 hover:underline text-sm">
//                 Forgot password?
//               </a>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 rounded-lg mb-4"
//             >
//               Signup
//             </button>
//           </form>

//           <div className="text-center mt-4 text-sm">
//             Already have an account?{" "}
//             <Link to="/login" className="text-blue-600 hover:underline">
//               Login
//             </Link>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify"; // Import toast for notifications
import "react-toastify/dist/ReactToastify.css"; // Import the styles for Toast

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState('');  // State for Name
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('buyer');  // Default role is 'buyer'

  const navigate = useNavigate(); // Hook for navigation

  const nameOnChange = (event) => {
    setName(event.target.value);  // Handle name change
  };

  const emailOnChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordOnChange = (event) => {
    setPassword(event.target.value);
  };

  const confirmPasswordOnChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const roleOnChange = (event) => {
    setRole(event.target.value);  // Handle role change
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    // Password match validation
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {  // Update to your backend endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, confirmPassword, role }),  // Send name along with other details
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Signup successful!");
        // Optionally, redirect to the login page
        navigate("/login");
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("An error occurred while signing up.");
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 font-sans">
      <main className="flex-grow flex items-center justify-center py-8">
        <div className="bg-white shadow-md rounded-lg w-full max-w-md p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            Sign up for an account
          </h2>


          <h3 className="text-center text-gray-600 mb-4">or</h3>

          <form onSubmit={submitHandler}>
            {/* Name field */}
            <label className="block mb-2 text-gray-600 font-semibold">
              Name
              <input
                onChange={nameOnChange}
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 p-2 border rounded-md"
                value={name}
                required
              />
            </label>

            <label className="block mb-2 text-gray-600 font-semibold">
              Email
              <input
                onChange={emailOnChange}
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-2 border rounded-md"
                value={email}
                required
              />
            </label>

<label className="block mb-4 text-gray-600 font-semibold relative">
  Password
  <input
    onChange={passwordOnChange}
    type={showPassword ? "text" : "password"}
    placeholder="Enter your password"
    className="w-full mt-1 p-2 pr-12 border rounded-md"  // Ensure there's enough padding for the button
    value={password}
    required
  />
  <button
    type="button"
    onClick={togglePasswordVisibility}
    className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center text-gray-500"  // Adjust vertical centering
    aria-label={showPassword ? "Hide password" : "Show password"}
  >
    {showPassword ? "👁️" : "👁️‍🗨️"}
  </button>
</label>

<label className="block mb-4 text-gray-600 font-semibold relative">
  Confirm Password
  <input
    onChange={confirmPasswordOnChange}
    type={showConfirmPassword ? "text" : "password"}
    placeholder="Re-enter your password"
    className="w-full mt-1 p-2 pr-12 border rounded-md"  // Ensure there's enough padding for the button
    value={confirmPassword}
    required
  />
  <button
    type="button"
    onClick={toggleConfirmPasswordVisibility}
    className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center text-gray-500"  // Adjust vertical centering
    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
  >
    {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
  </button>
</label>



            {/* Role Selection */}
            <label className="block mb-4 text-gray-600 font-semibold">
              Role
              <select
                onChange={roleOnChange}
                value={role}
                className="w-full mt-1 p-2 border rounded-md"
                required
              >
                <option value="admin">Admin</option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </label>

            <div className="flex justify-between items-center mb-4">
              <label className="flex items-center text-gray-600">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="/forget-password" className="text-blue-600 hover:underline text-sm">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg mb-4"
            >
              Signup
            </button>
          </form>

          <div className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </div>
        </div>
      </main>

      {/* ToastContainer component to display toasts */}
      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
};

export default Signup;
