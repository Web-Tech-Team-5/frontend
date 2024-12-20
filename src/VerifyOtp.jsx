// import React, { useEffect, useRef, useState } from "react";
// import { FaFingerprint } from "react-icons/fa";
// import Timer from "./Timer"; // Ensure the Timer component is correctly imported
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast"; // You can show a toast message on error or success

// const VerifyOtp = () => {
//   // Refs for each OTP input field
//   const ref1 = useRef(null);
//   const ref2 = useRef(null);
//   const ref3 = useRef(null);
//   const ref4 = useRef(null);
//   const ref5 = useRef(null);
//   const ref6 = useRef(null);
  
//   const navigate = useNavigate();
//   const inputRef = [ref1, ref2, ref3, ref4, ref5, ref6];

//   const [loading, setLoading] = useState(false);
//   const [isExpire, setIsExpire] = useState(false);
//   const [otpTime, setOtpTime] = useState(null); // Store time in seconds
//   const [otp1, setOtp1] = useState("");
//   const [otp2, setOtp2] = useState("");
//   const [otp3, setOtp3] = useState("");
//   const [otp4, setOtp4] = useState("");
//   const [otp5, setOtp5] = useState("");
//   const [otp6, setOtp6] = useState("");

//   const otpArray = [otp1, otp2, otp3, otp4, otp5, otp6];

//   // Function to set OTP expiration time
//   const getTime = () => {
//     const expirationTime = 300; // 5 minutes in seconds
//     setOtpTime(expirationTime);
//   };

//   useEffect(() => {
//     if (ref1.current) {
//       ref1.current.focus();
//     }
//     getTime();
//   }, []);

//   const inputChange = (event, location) => {
//     if (location < 5 && event.target.value) {
//       inputRef[location + 1].current.focus();
//     }
//     // Update the OTP state for the correct position
//     if (location === 0) setOtp1(event.target.value);
//     if (location === 1) setOtp2(event.target.value);
//     if (location === 2) setOtp3(event.target.value);
//     if (location === 3) setOtp4(event.target.value);
//     if (location === 4) setOtp5(event.target.value);
//     if (location === 5) setOtp6(event.target.value);
//   };

//   const handleKeyDown = (event, location) => {
//     if (event.key === "Backspace" && location > 0 && otpArray[location] === "") {
//       // Move focus to the previous input if backspace is pressed and the current input is empty
//       inputRef[location - 1].current.focus();
//     }
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();

//     const finalOtp = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
//     console.log("Submitted OTP:", finalOtp);

//     //test
//     if (finalOtp !== "123456") {
//       setIsExpire(true);
//       return;
//     }

//     // Logic for OTP verification goes here (e.g., API call)
//     setLoading(true);
//     // Simulate success
//     setTimeout(() => {
//       setLoading(false);
//       toast.success("OTP verified successfully!");
//       navigate("/update-password"); // Navigate to the dashboard or another page after successful verification
//     }, 2000);
//   };

//   const resendHandler = () => {
//     setIsExpire(false);
//     setOtpTime(300); // Reset timer
//     toast.success("OTP resent successfully!");
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 py-8">
//       <form onSubmit={submitHandler} className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
//         <div className="text-center mb-4">
//           <FaFingerprint className="text-blue-500 text-4xl mb-2" />
//           <h2 className="text-2xl font-semibold text-gray-800">Verify your OTP</h2>
//           <p className="text-gray-600 mt-2">Enter the 6-digit OTP sent to your email</p>
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 font-medium mb-2">OTP *</label>
//           <div className="flex space-x-2 justify-center">
//             {inputRef.map((item, index) => (
//               <input
//                 required
//                 key={index}
//                 onChange={(event) => inputChange(event, index)}
//                 ref={item}
//                 onInput={(event) => {
//                   if (event.target.value.length > 1) {
//                     event.target.value = event.target.value.slice(0, 1); // Ensure single digit input
//                   }
//                 }}
//                 onKeyDown={(event) => handleKeyDown(event, index)} // Handle the backspace logic
//                 type="number"
//                 className="w-12 h-12 text-center text-2xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={otpArray[index] || ""} // Ensure that the value comes from state
//               />
//             ))}
//           </div>
//         </div>
//         <div className="mb-6">
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-500 text-white py-2 rounded-lg disabled:bg-blue-300"
//           >
//             {loading ? "Verifying..." : "Verify OTP"}
//           </button>
//         </div>
//         <div className="text-center">
//           {otpTime !== null && !isExpire ? (
//             <Timer setIsExpire={setIsExpire} time={otpTime} />
//           ) : (
//             <span
//               onClick={resendHandler}
//               className="text-blue-600 hover:underline cursor-pointer"
//             >
//               Resend OTP
//             </span>
//           )}
//         </div>
//         <div className="mt-4 text-center">
//           <a href="/login" className="text-blue-600 hover:underline">Back to Login</a>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default VerifyOtp;

// import React, { useState, useEffect, useRef } from "react";
// import { FaFingerprint } from "react-icons/fa";
// import { useNavigate, useLocation } from "react-router-dom"; // useLocation hook to access the state
// import { toast, ToastContainer } from "react-toastify";
// import axios from "axios";

// const VerifyOtp = () => {
//   const navigate = useNavigate();
//   const location = useLocation(); // Get location state
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]); // OTP state array
//   const [email, setEmail] = useState(""); // Store email from the location state
//   const [loading, setLoading] = useState(false);
//   const [isExpire, setIsExpire] = useState(false);
//   const [otpTime, setOtpTime] = useState(300); // 5 minutes in seconds
//   const inputRefs = useRef([]); // Refs for OTP input fields

//   // Get email from location state (passed from the forgot password page)
//   useEffect(() => {
//     const storedEmail = location.state?.email; // Access the passed email via state
//     if (storedEmail) {
//       setEmail(storedEmail);
//     } else {
//       // Redirect if email is not found in the state
//       navigate("/forget-password");
//     }

//     if (inputRefs.current[0]) inputRefs.current[0].focus();
//   }, [location.state, navigate]);

//   // Countdown for OTP expiry
//   useEffect(() => {
//     if (otpTime > 0 && !isExpire) {
//       const timer = setInterval(() => {
//         setOtpTime((prevTime) => {
//           if (prevTime <= 1) {
//             clearInterval(timer);
//             setIsExpire(true); // Set isExpire to true when time runs out
//             return 0;
//           }
//           return prevTime - 1;
//         });
//       }, 1000); // Decrease every second
//       return () => clearInterval(timer); // Cleanup interval on component unmount
//     }
//   }, [otpTime, isExpire]);

//   const handleChange = (event, index) => {
//     const value = event.target.value.slice(0, 1); // Ensure only one digit
//     if (value !== "") {
//       setOtp((prevOtp) => {
//         const updatedOtp = [...prevOtp];
//         updatedOtp[index] = value;
//         return updatedOtp;
//       });

//       // Move focus to the next input
//       if (index < 5) {
//         inputRefs.current[index + 1].focus();
//       }
//     }
//   };

//   const handleBackspace = (event, index) => {
//     if (event.key === "Backspace" && otp[index] === "") {
//       // Move focus to the previous input if backspace is pressed and current input is empty
//       if (index > 0) inputRefs.current[index - 1].focus();
//     }
//   };

//   const submitHandler = async (event) => {
//     event.preventDefault();

//     const finalOtp = otp.join(""); // Join OTP digits into a single string
//     console.log("Submitted OTP:", finalOtp);

//     setLoading(true);
//     try {
//       const response = await axios.post("http://localhost:8080/api/auth/verify-otp-sent", {
//         email,
//         otp: finalOtp,
//       });

//       console.log(response.data);
//       if (response.data.success) {
//         toast.success("OTP verified successfully!");
//         navigate("/update-password"); // Redirect after successful OTP verification
//       } else {
//         toast.error(response.data.message || "Invalid OTP. Please try again.");
//       }
//     } catch (error) {
//       toast.error("Failed to verify OTP. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resendHandler = async () => {
//     if (isExpire) {
//       setIsExpire(false);
//       setOtpTime(300); // Reset timer
//       setOtp(["", "", "", "", "", ""]); // Reset OTP fields

//       try {
//         // Request to resend the OTP
//         const response = await axios.post("http://localhost:8080/api/auth/verify-otp", { email });

//         if (response.data.success) {
//           toast.success("OTP resent successfully!");
//         } else {
//           toast.error("Failed to resend OTP.");
//         }
//       } catch (error) {
//         toast.error("Failed to resend OTP. Please try again.");
//       }
//     }
//   };

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 py-8">
//       <form onSubmit={submitHandler} className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
//         <div className="text-center mb-4">
//           <FaFingerprint className="text-blue-500 text-4xl mb-2" />
//           <h2 className="text-2xl font-semibold text-gray-800">Verify your OTP</h2>
//           <p className="text-sm text-gray-600">We sent a 6-digit OTP to your email.</p>
//         </div>

//         {/* OTP Input Fields */}
//         <div className="flex justify-between mb-6">
//           {otp.map((digit, index) => (
//             <input
//               key={index}
//               type="text"
//               maxLength={1}
//               value={digit}
//               onChange={(e) => handleChange(e, index)}
//               onKeyDown={(e) => handleBackspace(e, index)}
//               className="w-12 h-12 text-center border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//               ref={(el) => (inputRefs.current[index] = el)}
//             />
//           ))}
//         </div>

//         {/* Error and Expiry handling */}
//         <div className="flex justify-between items-center mb-6">
//           <button
//             type="button"
//             onClick={resendHandler}
//             className="text-blue-500 text-sm"
//             disabled={otpTime > 0}
//           >
//             {otpTime > 0 ? `Resend OTP in ${formatTime(otpTime)}` : "Resend OTP"}
//           </button>
//         </div>

//         {/* Submit Button */}
//         <div className="mb-6">
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-3 rounded-lg disabled:bg-gray-400"
//             disabled={loading || otp.includes("") || otpTime === 0}
//           >
//             {loading ? "Verifying..." : "Verify OTP"}
//           </button>
//         </div>

//         <ToastContainer />
//       </form>
//     </div>
//   );
// };

// export default VerifyOtp;

import React, { useState, useEffect, useRef } from "react";
import { FaFingerprint } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";  // Make sure toast is correctly imported
import axios from "axios";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isExpire, setIsExpire] = useState(false);
  const [otpTime, setOtpTime] = useState(300); // 5 minutes in seconds
  const inputRefs = useRef([]);

  // Get email from location state (passed from the forgot password page)
  useEffect(() => {
    const storedEmail = location.state?.email;
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      navigate("/forget-password");
    }

    // Retrieve remaining time from localStorage if it exists
    const storedTime = localStorage.getItem("otpTime");
    if (storedTime) {
      setOtpTime(parseInt(storedTime, 10));
    }

    if (inputRefs.current[0]) inputRefs.current[0].focus();
  }, [location.state, navigate]);

  // Countdown for OTP expiry
  useEffect(() => {
    if (otpTime > 0 && !isExpire) {
      const timer = setInterval(() => {
        setOtpTime((prevTime) => {
          const newTime = prevTime - 1;
          if (newTime <= 0) {
            clearInterval(timer);
            setIsExpire(true); // Set isExpire to true when time runs out
            return 0;
          }
          // Update localStorage with the remaining time
          localStorage.setItem("otpTime", newTime);
          return newTime;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [otpTime, isExpire]);

  const handleChange = (event, index) => {
    const value = event.target.value.slice(0, 1); // Ensure only one digit
    if (value !== "") {
      setOtp((prevOtp) => {
        const updatedOtp = [...prevOtp];
        updatedOtp[index] = value;
        return updatedOtp;
      });

      // Move focus to the next input
      if (index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleBackspace = (event, index) => {
    if (event.key === "Backspace" && otp[index] === "") {
      if (index > 0) inputRefs.current[index - 1].focus();
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const finalOtp = otp.join(""); // Join OTP digits into a single string
    console.log("Submitted OTP:", finalOtp);

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/api/auth/verify-otp-sent", {
        email,
        otp: finalOtp,
      });

      console.log(response.data);
      if (response.data.success) {
        toast.success("OTP verified successfully!");  // Success toast
        navigate("/update-password"); // Redirect after successful OTP verification
      } else {
        toast.error(response.data.message || "Invalid OTP. Please try again."); // Error toast
      }
    } catch (error) {
      toast.error("Failed to verify OTP. Please try again."); // Error toast for failure
    } finally {
      setLoading(false);
    }
  };

  const resendHandler = async () => {
    if (isExpire) {
      setIsExpire(false);
      setOtpTime(300); // Reset timer
      setOtp(["", "", "", "", "", ""]);

      try {
        const response = await axios.post("http://localhost:8080/api/auth/verify-otp", { email });

        if (response.data.success) {
          toast.success("OTP resent successfully!");  // Success toast for resend
          // Reset OTP time in localStorage
          localStorage.setItem("otpTime", 300);
        } else {
          toast.error("Failed to resend OTP.");  // Error toast for failure to resend OTP
        }
      } catch (error) {
        toast.error("Failed to resend OTP. Please try again.");  // Error toast for resend failure
      }
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-8">
      <form onSubmit={submitHandler} className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
        <div className="text-center mb-4">
          <FaFingerprint className="text-blue-500 text-4xl mb-2" />
          <h2 className="text-2xl font-semibold text-gray-800">Verify your OTP</h2>
          <p className="text-sm text-gray-600">We sent a 6-digit OTP to your email.</p>
        </div>

        {/* OTP Input Fields */}
        <div className="flex justify-between mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              className="w-12 h-12 text-center border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>

        {/* Error and Expiry handling */}
        <div className="flex justify-between items-center mb-6">
          <button
            type="button"
            onClick={resendHandler}
            className="text-blue-500 text-sm"
            disabled={otpTime > 0}
          >
            {otpTime > 0 ? `Resend OTP in ${formatTime(otpTime)}` : "Resend OTP"}
          </button>
        </div>

        {/* Submit Button */}
        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg disabled:bg-gray-400"
            disabled={loading || otp.includes("") || otpTime === 0}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </div>

        <ToastContainer />  {/* ToastContainer should be placed here to display notifications */}
      </form>
    </div>
  );
};

export default VerifyOtp;
