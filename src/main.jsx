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
import CarDetailsPage from "./CarDetailsPage";
import Payment from "./Payment";
import AdminDashboard from "./AdminQueryPage";
import { ToastContainer } from "react-toastify"; // Import the ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import UploadCar from "./UploadCar";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="rental" element={<Rental />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route path="verify-otp-page" element={<VerifyOtp />} />
            <Route path="update-password" element={<UpdatePassword />} />
            <Route path="car/:carId" element={<CarDetailsPage />} /> {/* Dynamic route */}
            <Route path="/contact-for-deal/:carId" element={<ContactForDealPage />} />
            <Route path="payment" element={<Payment />} />
            <Route path="uploadCar" element={<UploadCar />} />
            <Route path="AdminQueryPage" element={<AdminDashboard />} />
          </Route>
        </Routes>
      <ToastContainer /> {/* ToastContainer to display toasts */}
    </Router>
  </StrictMode>
);
