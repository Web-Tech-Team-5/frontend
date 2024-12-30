// import React from "react";
// import { useParams, useNavigate } from "react-router-dom"; // useNavigate for navigation

// // Car data storage with owner details
// const carData = {
//   1: {
//     name: "Ford EcoSport",
//     price: "₹10,00,000",
//     rating: 4.5,
//     description: "Compact and efficient SUV with great features.",
//     owner: "John Doe",
//     location: "Mumbai, Maharashtra",
//     contact: "+91 123 456 7890",
//     features: ["Bluetooth", "Automatic Climate Control", "Sunroof", "Rear Camera"],
//     imageUrl: "https://via.placeholder.com/600x400?text=Ford+EcoSport",
//   },
//   2: {
//     name: "Toyota Fortuner",
//     price: "₹40,00,000",
//     rating: 4.7,
//     description: "Rugged SUV with off-road capabilities.",
//     owner: "Rahul Sharma",
//     location: "Delhi, India",
//     contact: "+91 987 654 3210",
//     features: ["4x4 Drive", "Leather Seats", "Navigation System", "Dual Airbags"],
//     imageUrl: "https://via.placeholder.com/600x400?text=Toyota+Fortuner",
//   },
//   3: {
//     name: "Hyundai Elantra",
//     price: "₹15,00,000",
//     rating: 4.3,
//     description: "Stylish sedan with advanced technology.",
//     owner: "Amit Verma",
//     location: "Bangalore, Karnataka",
//     contact: "+91 987 123 4567",
//     features: ["Touchscreen", "Electric Sunroof", "Apple CarPlay", "Parking Sensors"],
//     imageUrl: "https://via.placeholder.com/600x400?text=Hyundai+Elantra",
//   },
//   4: {
//     name: "Honda Accord",
//     price: "₹25,00,000",
//     rating: 4.6,
//     description: "Premium sedan offering comfort and luxury.",
//     owner: "Priya Singh",
//     location: "Chennai, Tamil Nadu",
//     contact: "+91 999 888 7777",
//     features: ["Leather Upholstery", "Cruise Control", "Heated Seats", "Navigation"],
//     imageUrl: "https://via.placeholder.com/600x400?text=Honda+Accord",
//   },
//   // Add more car entries here
// };

// const CarDetailsPage = () => {
//   const { carId } = useParams();
//   const navigate = useNavigate(); // useNavigate for navigation

//   // Ensure carId is a number and fetch car details
//   const car = carData[Number(carId)];

//   if (!car) {
//     return <div className="text-center text-xl text-red-500">Car not found!</div>;
//   }

//   // Handle the button click (navigate to the Contact page)
//   const handleContactClick = () => {
//     navigate(`/contact-for-deal/${carId}`); // Navigate to the contact page
//   };

//   return (
//     <div className="max-w-7xl mx-auto py-12 px-6 md:px-12">
//       <div className="bg-white shadow-xl rounded-lg p-8">
//         {/* Car Image and Details Section */}
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 mb-6 md:mb-0">
//             <img
//               src={car.imageUrl}
//               alt={car.name}
//               className="w-full h-full object-cover rounded-lg shadow-md"
//             />
//           </div>
//           <div className="md:w-1/2 md:pl-8">
//             <h1 className="text-3xl font-semibold text-gray-800 mb-2">{car.name}</h1>
//             <p className="text-gray-500 text-xl mb-4">
//               Price: <span className="font-bold text-green-600">{car.price}</span>
//             </p>
//             <div className="flex items-center text-yellow-500 mb-4">
//               {'★'.repeat(Math.round(car.rating))}
//               <span className="ml-2 text-gray-500">({car.rating} rating)</span>
//             </div>
//             <div className="text-gray-700 mb-6">
//               <p className="font-semibold">Description:</p>
//               <p>{car.description}</p>
//             </div>

//             {/* Owner Details */}
//             <div className="bg-gray-50 rounded-lg p-4 shadow-md mb-6">
//               <p className="text-lg font-semibold text-gray-800">Owner: {car.owner}</p>
//               <p className="text-gray-600">Location: {car.location}</p>
//               <p className="text-blue-500">Contact: {car.contact}</p>
//             </div>

//             {/* Car Features */}
//             <div className="bg-gray-50 p-4 rounded-lg shadow-md mb-6">
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">Features:</h3>
//               <ul className="list-disc list-inside text-gray-700">
//                 {car.features.map((feature, index) => (
//                   <li key={index}>{feature}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Contact for Deal Button */}
//             <button
//               className="w-full md:w-auto text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mt-6"
//               onClick={handleContactClick} // Trigger onClick to navigate
//             >
//               Contact for Deal
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarDetailsPage;

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const CarDetailsPage = () => {
//   const { carId } = useParams(); // Get carId from URL
//   const navigate = useNavigate(); // useNavigate for navigation
//   const [car, setCar] = useState(null); // State to store the car details
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch car details from the API
//   useEffect(() => {
//     const fetchCarDetails = async () => {
//       try {
//         setLoading(true);
//         // Replace with your actual API endpoint to fetch car by ID
//         const response = await fetch(`http://localhost:8080/api/car/get-car-by-id/${carId}`);
//         console.log(response);
        
//         const data = await response.json();

//         if (response.ok) {
//           setCar(data.car); // Assuming the API response structure is { car: { ...carDetails } }
//         } else {
//           setError("Car not found!");
//         }
//       } catch (err) {
//         setError("Failed to load car details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCarDetails();
//   }, [carId]); // This dependency ensures the effect runs whenever carId changes

//   // If loading
//   if (loading) {
//     return <div className="text-center text-xl">Loading...</div>;
//   }

//   // If there is an error
//   if (error) {
//     return <div className="text-center text-xl text-red-500">{error}</div>;
//   }

//   // If car data is not found
//   if (!car) {
//     return <div className="text-center text-xl text-red-500">Car not found!</div>;
//   }

//   // Handle the button click (navigate to the Contact page)
//   const handleContactClick = () => {
//     navigate(`/contact-for-deal/${carId}`); // Navigate to the contact page
//   };

//   return (
//     <div className="max-w-7xl mx-auto py-12 px-6 md:px-12">
//       <div className="bg-white shadow-xl rounded-lg p-8">
//         {/* Car Image and Details Section */}
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 mb-6 md:mb-0">
//             <img
//               src="https://via.placeholder.com/600x400?text=Car+Image" // Placeholder image for the car (you can update this with actual image URL)
//               alt={`${car.make} ${car.model}`}
//               className="w-full h-full object-cover rounded-lg shadow-md"
//             />
//           </div>
//           <div className="md:w-1/2 md:pl-8">
//             <h1 className="text-3xl font-semibold text-gray-800 mb-2">
//               {car.make} {car.model}
//             </h1>
//             <p className="text-gray-500 text-xl mb-4">
//               Price: <span className="font-bold text-green-600">{car.price.toLocaleString()}</span>
//             </p>
//             <div className="flex items-center text-yellow-500 mb-4">
//               {'★'.repeat(Math.round(car.rating))}
//               <span className="ml-2 text-gray-500">({car.rating} rating)</span>
//             </div>
//             <div className="text-gray-700 mb-6">
//               <p className="font-semibold">Description:</p>
//               <p>{car.description}</p>
//             </div>

//             {/* Owner Details */}
//             <div className="bg-gray-50 rounded-lg p-4 shadow-md mb-6">
//               <p className="text-lg font-semibold text-gray-800">Owner: {car.soldBy?.name}</p>
//               <p className="text-gray-600">Role: {car.soldBy?.role}</p>
//               <p className="text-blue-500">Email: {car.soldBy?.email}</p>
//               <p className="text-gray-600">Location: {car.location}</p>
//               <p className="text-blue-500">Contact: {car.contact}</p>
//             </div>

//             {/* Car Features */}
//             <div className="bg-gray-50 p-4 rounded-lg shadow-md mb-6">
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">Features:</h3>
//               <ul className="list-disc list-inside text-gray-700">
//                 {car.features?.map((feature, index) => (
//                   <li key={index}>{feature}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Contact for Deal Button */}
//             <button
//               className="w-full md:w-auto text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mt-6"
//               onClick={handleContactClick} // Trigger onClick to navigate
//             >
//               Contact for Deal
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarDetailsPage;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CarDetailsPage = () => {
  const { carId } = useParams(); // Get carId from URL
  const navigate = useNavigate(); // useNavigate for navigation
  const [car, setCar] = useState(null); // State to store the car details
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [carImage, setCarImage] = useState(null); // State to store the car image URL

  // Fetch car details from the API
  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:8080/api/car/get-car-by-id/${carId}`);
        const data = await response.json();
        console.log("Car Details Response:", data); // Log the car details response

        if (response.ok) {
          setCar(data.car); // Assuming the API response structure is { car: { ...carDetails } }
          fetchCarImage(data.car.imageId); // Fetch the car image after getting the car details
        } else {
          setError("Car not found!");
        }
      } catch (err) {
        console.error("Error fetching car details:", err); // Log the error
        setError("Failed to load car details.");
      } finally {
        setLoading(false);
      }
    };

    const fetchCarImage = async (imageId) => {
      try {
        const response = await axios.get(`http://localhost:8080/api/image/${imageId}`, { responseType: 'blob' });
        console.log("Image fetched successfully:", response); // Log the image response
        const imageUrl = URL.createObjectURL(response.data); // Convert blob to URL
        setCarImage(imageUrl); // Set the image URL in state
      } catch (error) {
        console.error("Error fetching car image:", error);
        setCarImage("https://via.placeholder.com/600x400?text=Car+Image"); // Fallback image URL
      }
    };

    fetchCarDetails();
  }, [carId]);

  // If loading
  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  // If there is an error
  if (error) {
    return <div className="text-center text-xl text-red-500">{error}</div>;
  }

  // If car data is not found
  if (!car) {
    return <div className="text-center text-xl text-red-500">Car not found!</div>;
  }

  // Handle the button click (navigate to the Contact page)
  const handleContactClick = () => {
    navigate(`/contact-for-deal/${carId}`); // Navigate to the contact page
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-6 md:px-12">
      <div className="bg-white shadow-xl rounded-lg p-8">
        {/* Car Image and Details Section */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={carImage || "https://via.placeholder.com/600x400?text=Car+Image"} // Dynamically fetched car image with fallback
              alt={`${car.make} ${car.model}`}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-2">
              {car.make} {car.model}
            </h1>
            <p className="text-gray-500 text-xl mb-4">
              Price: <span className="font-bold text-green-600">{car.price.toLocaleString()}</span>
            </p>
            <div className="flex items-center text-yellow-500 mb-4">
              {'★'.repeat(Math.round(car.rating))} {/* Display star rating */}
              <span className="ml-2 text-gray-500">({car.rating} rating)</span>
            </div>
            <div className="text-gray-700 mb-6">
              <p className="font-semibold">Description:</p>
              <p>{car.description}</p>
            </div>

            {/* Owner Details */}
            {car.soldBy && (
              <div className="bg-gray-50 rounded-lg p-4 shadow-md mb-6">
                <p className="text-lg font-semibold text-gray-800">Owner: {car.soldBy.name}</p>
                <p className="text-gray-600">Role: {car.soldBy.role}</p>
                <p className="text-blue-500">Email: {car.soldBy.email}</p>
                <p className="text-gray-600">Location: {car.location}</p>
                <p className="text-blue-500">Contact: {car.contact}</p>
              </div>
            )}

            {/* Car Features */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-md mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Features:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {car.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Contact for Deal Button */}
            <button
              className="w-full md:w-auto text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mt-6"
              onClick={handleContactClick} // Trigger onClick to navigate
            >
              Contact for Deal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
