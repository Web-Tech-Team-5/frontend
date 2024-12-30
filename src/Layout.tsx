// import React from "react";
// import { Link, Outlet } from "react-router-dom";

// const Layout = () => {
//   return (
//     <div className="min-h-screen flex flex-col justify-between bg-gray-100 font-sans">
//       {/* Header */}
//       <header className="bg-white shadow p-4">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-black">OnlyCars</h1>
//           <nav>
//             <Link to="/" className="px-4 text-gray-700 hover:text-black hover:underline">
//               Home
//             </Link>
//             <Link to="/rental" className="px-4 text-gray-700 hover:text-black hover:underline">
//               Rentals
//             </Link>
//             <Link to="/login" className="px-4 text-gray-700 hover:text-black hover:underline ">
//               Login
//             </Link>
//             <Link to="/signup" className="px-4 text-gray-700 hover:text-black hover:underline">
//               Signup
//             </Link>
//             <Link to="/feedback" className="px-4 text-gray-700 hover:text-black hover:underline">
//               Feedback
//             </Link>
//           </nav>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow">
//         <Outlet />
//       </main>

//       {/* Footer */}
//       <footer className="bg-black text-white py-8">
//         <div className="max-w-7xl mx-auto text-center md:text-left flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-4 md:mb-0">
//             <h3 className="font-semibold mb-2">Help Center</h3>
//             <Link to="/faq" className="block text-gray-400 hover:text-white">
//               FAQ
//             </Link>
//             <Link to="/contact" className="block text-gray-400 hover:text-white">
//               Contact Us
//             </Link>
//           </div>
//           <div className="text-sm text-gray-400">
//             <p>&copy; 2024 OnlyCars Inc. All rights reserved.</p>
//             <p className="mt-1">
//               Terms and Conditions | Privacy Policy | Cookie Policy
//             </p>
//           </div>
//           <div>
//             <p className="text-gray-400">Rated 4.8/5 based on 6,432 reviews</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Layout;

import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import UploadCar from "./UploadCar";

// Helper function to get the token from localStorage
const getTokenFromLocalStorage = () => {
  // Get the token from localStorage
  return localStorage.getItem('token');
};

const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = getTokenFromLocalStorage();
    if (token) {
      setIsLoggedIn(true);  // User is logged in
    } else {
      setIsLoggedIn(false); // User is not logged in
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-white shadow p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black">OnlyCars</h1>
          <nav>
            <Link to="/" className="px-4 text-gray-700 hover:text-black hover:underline">
              Home
            </Link>
            <Link to="/rental" className="px-4 text-gray-700 hover:text-black hover:underline">
              Rentals
            </Link>
            <Link to="/AdminQueryPage" className="px-4 text-gray-700 hover:text-black hover:underline">
              AdminQueryPage
            </Link>

            {/* Conditionally render Login and Signup based on isLoggedIn */}
            {!isLoggedIn && (
              <>
                <Link to="/login" className="px-4 text-gray-700 hover:text-black hover:underline">
                  Login
                </Link>
                <Link to="/signup" className="px-4 text-gray-700 hover:text-black hover:underline">
                  Signup
                </Link>
              </>
            )}

            {/* If logged in, show Profile */}
            {isLoggedIn && (
              <Link to="/profile" className="px-4 text-gray-700 hover:text-black hover:underline">
                Profile
              </Link>
            )}
            {isLoggedIn && (
              <Link to="/uploadCar" className="px-4 text-gray-700 hover:text-black hover:underline" >
                Add Car
              </Link>
            )}

            <Link to="/feedback" className="px-4 text-gray-700 hover:text-black hover:underline">
              Feedback
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-semibold mb-2">Help Center</h3>
            <Link to="/faq" className="block text-gray-400 hover:text-white">
              FAQ
            </Link>
            <Link to="/contact" className="block text-gray-400 hover:text-white">
              Contact Us
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            <p>&copy; 2024 OnlyCars Inc. All rights reserved.</p>
            <p className="mt-1">
              Terms and Conditions | Privacy Policy | Cookie Policy
            </p>
          </div>
          <div>
            <p className="text-gray-400">Rated 4.8/5 based on 6,432 reviews</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
