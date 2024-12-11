import React, { useState } from "react";
import { RxUpdate } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UpdatePassword = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  // Password change handlers
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const confirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  // Form submission handler
  const submitHandler = async (event) => {
    event.preventDefault();

    // Basic password validation
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    // Example: Password update logic here (e.g., API call)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Password updated successfully!");
      navigate("/login"); // Redirect to login page after successful update
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-8">
      <form onSubmit={submitHandler} className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="text-center mb-6">
          <RxUpdate className="text-blue-500 text-4xl mb-2" />
          <h2 className="text-2xl font-semibold text-gray-800">New Password</h2>
          <p className="text-gray-600 mt-2">Enter a new password and confirm it below</p>
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password *</label>
          <input
            id="password"
            type="password"
            required
            minLength={6}
            placeholder="New password"
            value={password}
            onChange={passwordChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Confirm Password Input */}
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password *</label>
          <input
            id="confirmPassword"
            type="password"
            required
            minLength={6}
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={confirmPasswordChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="mb-6">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-3 rounded-lg disabled:bg-blue-300"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </div>

        {/* Link to login page */}
        <div className="text-center">
          <a href="/login" className="text-blue-600 hover:underline">Back to Login</a>
        </div>
      </form>
    </div>
  );
};

export default UpdatePassword;
