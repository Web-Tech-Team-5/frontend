import React, { useEffect, useRef, useState } from "react";
import { FaFingerprint } from "react-icons/fa";
import Timer from "./Timer"; // Ensure the Timer component is correctly imported
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"; // You can show a toast message on error or success

const VerifyOtp = () => {
  // Refs for each OTP input field
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  
  const navigate = useNavigate();
  const inputRef = [ref1, ref2, ref3, ref4, ref5, ref6];

  const [loading, setLoading] = useState(false);
  const [isExpire, setIsExpire] = useState(false);
  const [otpTime, setOtpTime] = useState(null); // Store time in seconds
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");

  const otpArray = [otp1, otp2, otp3, otp4, otp5, otp6];

  // Function to set OTP expiration time
  const getTime = () => {
    const expirationTime = 300; // 5 minutes in seconds
    setOtpTime(expirationTime);
  };

  useEffect(() => {
    if (ref1.current) {
      ref1.current.focus();
    }
    getTime();
  }, []);

  const inputChange = (event, location) => {
    if (location < 5 && event.target.value) {
      inputRef[location + 1].current.focus();
    }
    // Update the OTP state for the correct position
    if (location === 0) setOtp1(event.target.value);
    if (location === 1) setOtp2(event.target.value);
    if (location === 2) setOtp3(event.target.value);
    if (location === 3) setOtp4(event.target.value);
    if (location === 4) setOtp5(event.target.value);
    if (location === 5) setOtp6(event.target.value);
  };

  const handleKeyDown = (event, location) => {
    if (event.key === "Backspace" && location > 0 && otpArray[location] === "") {
      // Move focus to the previous input if backspace is pressed and the current input is empty
      inputRef[location - 1].current.focus();
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const finalOtp = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
    console.log("Submitted OTP:", finalOtp);

    //test
    if (finalOtp !== "123456") {
      setIsExpire(true);
      return;
    }

    // Logic for OTP verification goes here (e.g., API call)
    setLoading(true);
    // Simulate success
    setTimeout(() => {
      setLoading(false);
      toast.success("OTP verified successfully!");
      navigate("/update-password"); // Navigate to the dashboard or another page after successful verification
    }, 2000);
  };

  const resendHandler = () => {
    setIsExpire(false);
    setOtpTime(300); // Reset timer
    toast.success("OTP resent successfully!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-8">
      <form onSubmit={submitHandler} className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
        <div className="text-center mb-4">
          <FaFingerprint className="text-blue-500 text-4xl mb-2" />
          <h2 className="text-2xl font-semibold text-gray-800">Verify your OTP</h2>
          <p className="text-gray-600 mt-2">Enter the 6-digit OTP sent to your email</p>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">OTP *</label>
          <div className="flex space-x-2 justify-center">
            {inputRef.map((item, index) => (
              <input
                required
                key={index}
                onChange={(event) => inputChange(event, index)}
                ref={item}
                onInput={(event) => {
                  if (event.target.value.length > 1) {
                    event.target.value = event.target.value.slice(0, 1); // Ensure single digit input
                  }
                }}
                onKeyDown={(event) => handleKeyDown(event, index)} // Handle the backspace logic
                type="number"
                className="w-12 h-12 text-center text-2xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={otpArray[index] || ""} // Ensure that the value comes from state
              />
            ))}
          </div>
        </div>
        <div className="mb-6">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded-lg disabled:bg-blue-300"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </div>
        <div className="text-center">
          {otpTime !== null && !isExpire ? (
            <Timer setIsExpire={setIsExpire} time={otpTime} />
          ) : (
            <span
              onClick={resendHandler}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Resend OTP
            </span>
          )}
        </div>
        <div className="mt-4 text-center">
          <a href="/login" className="text-blue-600 hover:underline">Back to Login</a>
        </div>
      </form>
    </div>
  );
};

export default VerifyOtp;
