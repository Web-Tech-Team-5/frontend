// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// // Car data storage (this can be replaced with an API call later)
// const carData = {
//   SUVs: [
//     { id: 1, name: "Ford EcoSport", image: "https://via.placeholder.com/300x200", price: "₹10,00,000", rating: 4.5 },
//     { id: 2, name: "Toyota Fortuner", image: "https://via.placeholder.com/300x200", price: "₹40,00,000", rating: 4.7 },
//   ],
//   Sedans: [
//     { id: 3, name: "Hyundai Elantra", image: "https://via.placeholder.com/300x200", price: "₹15,00,000", rating: 4.3 },
//     { id: 4, name: "Honda Accord", image: "https://via.placeholder.com/300x200", price: "₹25,00,000", rating: 4.6 },
//   ],
//   Hatchbacks: [
//     { id: 5, name: "Maruti Swift", image: "https://via.placeholder.com/300x200", price: "₹6,50,000", rating: 4.2 },
//     { id: 6, name: "Volkswagen Polo", image: "https://via.placeholder.com/300x200", price: "₹8,00,000", rating: 4.4 },
//   ],
//   Luxury: [
//     { id: 7, name: "BMW 5 Series", image: "https://via.placeholder.com/300x200", price: "₹60,00,000", rating: 4.8 },
//     { id: 8, name: "Mercedes-Benz C-Class", image: "https://via.placeholder.com/300x200", price: "₹50,00,000", rating: 4.9 },
//   ],
// };

// const HomePage = () => {
//   const [selectedCategory, setSelectedCategory] = useState("SUVs");
//   const navigate = useNavigate();

//   const handleViewDeal = (carId: number) => {
//     navigate(`/car/${carId}`);
//   };

//   return (
//     <div className="bg-gray-100">
//       {/* Header Banner */}
//       <div className="bg-black text-white">
//         <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4">
//           <h2 className="text-xl font-semibold">Deals of the week!</h2>
//           <button className="bg-blue-500 px-4 py-2 rounded-lg font-medium hover:bg-blue-600">
//             Festive Offers!
//           </button>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <div className="max-w-7xl mx-auto py-8 px-4">
//         <div className="bg-gray-50 shadow-lg rounded-xl flex flex-col md:flex-row items-center">
//           <img
//             src="https://via.placeholder.com/400x250"
//             alt="Mahindra Thar"
//             className="w-full md:w-1/2 rounded-t-xl md:rounded-t-none md:rounded-l-xl"
//           />
//           <div className="p-6">
//             <h3 className="text-2xl font-semibold mb-4">Mahindra Thar</h3>
//             <p className="text-gray-600 mb-4">Rugged. Reliable. Resilient.</p>
//             <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Explore Cars */}
//       <div className="max-w-7xl mx-auto py-8 px-4">
//         <h2 className="text-2xl font-bold mb-4">Explore Cars</h2>
//         <div className="flex space-x-6 mb-6">
//           {["SUVs", "Sedans", "Hatchbacks", "Luxury"].map((category) => (
//             <button
//               key={category}
//               className={`px-6 py-2 rounded-full font-medium text-lg transition-colors ${
//                 selectedCategory === category
//                   ? "bg-blue-500 text-white"
//                   : "bg-white text-gray-800 border border-gray-300"
//               } hover:bg-blue-600 hover:text-white`}
//               onClick={() => setSelectedCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {carData[selectedCategory].map((car) => (
//             <div
//               key={car.id}
//               className="relative bg-white shadow-xl rounded-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl"
//             >
//               <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>

//               <div className="p-6 relative z-10">
//                 <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
//                 <p className="text-gray-500 text-sm">Price: {car.price}</p>
//                 <div className="flex items-center space-x-2 mt-2">
//                   <span className="text-yellow-500">{'★'.repeat(Math.round(car.rating))}</span>
//                   <span className="text-gray-500">({car.rating})</span>
//                 </div>
//                 <button
//                   className="mt-4 text-white bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                   onClick={() => handleViewDeal(car.id)}
//                 >
//                   View Deal
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Why Choose Us Section */}
//       <div className="bg-gray-50 py-12">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="p-4 bg-white shadow-lg rounded-lg">
//               <h3 className="text-lg font-semibold">Trusted by Millions</h3>
//               <p className="text-gray-600 mt-2">Top-rated across all platforms.</p>
//             </div>
//             <div className="p-4 bg-white shadow-lg rounded-lg">
//               <h3 className="text-lg font-semibold">Wide Range of Cars</h3>
//               <p className="text-gray-600 mt-2">Choose from SUVs, sedans, and more.</p>
//             </div>
//             <div className="p-4 bg-white shadow-lg rounded-lg">
//               <h3 className="text-lg font-semibold">Affordable Pricing</h3>
//               <p className="text-gray-600 mt-2">Unbeatable offers all year round.</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FAQ Section */}
//       <div className="max-w-7xl mx-auto py-8 px-4">
//         <h2 className="text-2xl font-bold mb-4">FAQ</h2>
//         <div className="bg-white shadow-lg rounded-lg p-4">
//           <h3 className="font-semibold">How can I explore car deals?</h3>
//           <p className="text-gray-600 mt-2">Simply click on "View Deal" for more details!</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("SUVs");
  const [carData, setCarData] = useState({
    SUVs: [],
    Sedans: [],
    Hatchbacks: [],
    Luxury: [],
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch car data from the server
  useEffect(() => {
    const fetchCarData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8080/api/car/get-all-cars");
        const data = response.data.cars; // Cars are inside the "cars" array

        // Organize the car data into categories
        const categorizedData = {
          SUVs: data.filter((car) => car.type === "suv"),
          Sedans: data.filter((car) => car.type === "sedan"),
          Hatchbacks: data.filter((car) => car.type === "hatchback"),
          Luxury: data.filter((car) => car.type === "luxury"),
        };

        setCarData(categorizedData);
      } catch (error) {
        console.error("Error fetching car data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarData();
  }, []);

  const handleViewDeal = (carId) => {
    navigate(`/car/${carId}`);
  };

  return (
    <div className="bg-gray-100">
      {/* Header Banner */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4">
          <h2 className="text-xl font-semibold">Deals of the week!</h2>
          <button className="bg-blue-500 px-4 py-2 rounded-lg font-medium hover:bg-blue-600">
            Festive Offers!
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="bg-gray-50 shadow-lg rounded-xl flex flex-col md:flex-row items-center">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.N0OSnmKDBm-1SFbWfl2bFwHaE7&pid=Api&P=0&h=180"
            alt="Mahindra Thar"
            className="w-full md:w-1/2 rounded-t-xl md:rounded-t-none md:rounded-l-xl"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Mahindra Thar</h3>
            <p className="text-gray-600 mb-4">Rugged. Reliable. Resilient.</p>
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Explore Cars */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Explore Cars</h2>
        <div className="flex space-x-6 mb-6">
          {["SUVs", "Sedans", "Hatchbacks", "Luxury"].map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full font-medium text-lg transition-colors ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-800 border border-gray-300"
              } hover:bg-blue-600 hover:text-white`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center text-gray-500">Loading cars...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {carData[selectedCategory]?.length === 0 ? (
              <div className="col-span-full text-center text-gray-500">
                No cars available in this category.
              </div>
            ) : (
              carData[selectedCategory].map((car) => (
                <div
                  key={car._id}
                  className="relative bg-white shadow-xl rounded-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl"
                >
                  <img
                    src="https://via.placeholder.com/400x250" // Placeholder for image
                    alt={car.make + " " + car.model}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>

                  <div className="p-6 relative z-10">
                    <h3 className="text-xl font-semibold text-gray-800">{car.make} {car.model}</h3>
                    <p className="text-gray-500 text-sm">Price: ₹{car.price}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-yellow-500">
                        {'★'.repeat(Math.round(car.rating))}
                      </span>
                      <span className="text-gray-500">({car.rating})</span>
                    </div>
                    <button
                      className="mt-4 text-white bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      onClick={() => handleViewDeal(car._id)}
                    >
                      View Deal
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-white shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold">Trusted by Millions</h3>
              <p className="text-gray-600 mt-2">Top-rated across all platforms.</p>
            </div>
            <div className="p-4 bg-white shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold">Wide Range of Cars</h3>
              <p className="text-gray-600 mt-2">Choose from SUVs, sedans, and more.</p>
            </div>
            <div className="p-4 bg-white shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold">Affordable Pricing</h3>
              <p className="text-gray-600 mt-2">Unbeatable offers all year round.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="font-semibold">How can I explore car deals?</h3>
          <p className="text-gray-600 mt-2">Simply click on "View Deal" for more details!</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
