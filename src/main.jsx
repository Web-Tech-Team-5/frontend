import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import Rental from "./Rental";
import Login from "./Login";
import Feedback from "./Feedback";
import Signup from "./Signup";
import ContactForDealPage from "./ContactForDealPage";
import ForgetPassword from "./ForgetPassword";
import VerifyOtp from "./VerifyOtp";
import UpdatePassword from "./UpdatePassword";
import CarDetailsPage from "./CarDetailsPage"; // Fixed import path
import Payment from "./Payment";
import { loadStripe } from '@stripe/stripe-js'; // Import loadStripe function
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your-publishable-key-here'); // Use your own Stripe publishable key

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Elements stripe={stripePromise}>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="rental" element={<Rental />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route path="verify-otp" element={<VerifyOtp />} />
            <Route path="update-password" element={<UpdatePassword />} />
            <Route path="car/:carId" element={<CarDetailsPage />} /> {/* Dynamic route */}
            <Route path="/contact-for-deal/:carId" element={<ContactForDealPage />} /> 
            <Route path="payment" element={<Payment />} /></Route>
        </Routes>
      </Elements>
    </Router>
  </StrictMode>
);
