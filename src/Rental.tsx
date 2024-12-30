// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const cars = [
//   {
//     id: 1,
//     name: "Toyota Corolla",
//     price: "$250/month",
//     details: "Automatic • Petrol • 15km/l",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: 2,
//     name: "Honda Accord",
//     price: "$300/month",
//     details: "Automatic • Petrol • 12km/l",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: 3,
//     name: "BMW X5",
//     price: "$500/month",
//     details: "Automatic • Diesel • 10km/l",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: 4,
//     name: "Tesla Model 3",
//     price: "$700/month",
//     details: "Automatic • Electric • 300km/charge",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: 5,
//     name: "Ford Mustang",
//     price: "$600/month",
//     details: "Automatic • Petrol • 8km/l",
//     image: "https://via.placeholder.com/150",
//   },
// ];

// const Rental = () => {
//     const [selectedCategory, setSelectedCategory] = useState("SUVs");
//     const [carData, setCarData] = useState({
//       SUVs: [],
//       Sedans: [],
//       Hatchbacks: [],
//       Luxury: [],
//     });
//       const [loading, setLoading] = useState(false);
//       const navigate = useNavigate();

//       const fetchCarData = async () => {

//       setLoading(true);
//       try {
//         const response = await axios.get("http://localhost:8080/api/car/get-all-cars");
//         const data = response.data.cars; // Cars are inside the "cars" array

//         // Organize the car data into categories
//         const categorizedData = {
//           SUVs: data.filter((car) => car.type === "suv"),
//           Sedans: data.filter((car) => car.type === "sedan"),
//           Hatchbacks: data.filter((car) => car.type === "hatchback"),
//           Luxury: data.filter((car) => car.type === "luxury"),
//         };

//         setCarData(categorizedData);
//       } catch (error) {
//         console.error("Error fetching car data:", error);
//       } finally {
//         setLoading(false);
//       }
//     }


//   return (
    
//     <div className="font-sans">
//       {/* Header */}
//       <header className="bg-gray-100 py-4 px-6 flex justify-between items-center">
//         <h1 className="text-2xl font-bold">OnlyCars</h1>
//         <nav className="space-x-4">
//           <a href="/" className="text-gray-600 hover:text-blue-600">
//             Leasing
//           </a>
//           <a href="/" className="text-gray-600 hover:text-blue-600">
//             Buying
//           </a>
//           <a href="/" className="text-gray-600 hover:text-blue-600">
//             Login
//           </a>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section className="text-center py-16 bg-gradient-to-r from-teal-200 to-blue-200">
//         <h2 className="text-4xl font-bold mb-4">CAR LEASING</h2>
//         <p className="text-gray-700 mb-6">Find the best car leasing deals today!</p>
//         <div className="flex justify-center gap-4">
//           <input
//             type="text"
//             placeholder="Car Make"
//             className="px-4 py-2 border border-gray-300 rounded-md"
//           />
//           <input
//             type="text"
//             placeholder="Car Type"
//             className="px-4 py-2 border border-gray-300 rounded-md"
//           />
//           <select className="px-4 py-2 border border-gray-300 rounded-md">
//             <option value="">Monthly Budget</option>
//             <option value="200">$200</option>
//             <option value="400">$400</option>
//             <option value="600">$600</option>
//           </select>
//           <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
//             Search Deals
//           </button>
//         </div>
//       </section>

//       {/* Leasing Deals Section */}
//       <section className="py-10 px-6">
//         <h2 className="text-2xl font-bold mb-6">Top Leasing Deals</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {cars.map((car) => (
//             <div
//               key={car.id}
//               className="border border-gray-300 rounded-md p-4 bg-white shadow-sm"
//             >
//               <img
//                 src={car.image}
//                 alt={car.name}
//                 className="w-full h-40 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
//               <p className="text-gray-700">{car.price}</p>
//               <p className="text-gray-500 mb-4">{car.details}</p>
//               <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
//                 Details
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Why Lease Section */}
//       <section className="bg-gray-100 py-10 px-6 text-center">
//         <h2 className="text-2xl font-bold mb-6">Why lease your car?</h2>
//         <div className="flex flex-col md:flex-row justify-center gap-6">
//           <div>
//             <h3 className="font-semibold text-lg">Simple Documentation</h3>
//             <p className="text-gray-600">All paperwork handled for you.</p>
//           </div>
//           <div>
//             <h3 className="font-semibold text-lg">Best Car for Your Needs</h3>
//             <p className="text-gray-600">Wide variety of cars to choose from.</p>
//           </div>
//           <div>
//             <h3 className="font-semibold text-lg">Warranty Included</h3>
//             <p className="text-gray-600">Full support during your lease.</p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-6">
//         <div className="text-center">
//           <p className="text-lg">Ready to get started?</p>
//           <button className="bg-teal-500 px-6 py-2 rounded-md text-white mt-4 hover:bg-teal-600">
//             Contact Us
//           </button>
//         </div>
//         <p className="text-center mt-6 text-gray-400">
//           &copy; 2024 OnlyCars. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default Rental;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Rental = () => {
//   const [selectedCategory, setSelectedCategory] = useState("SUVs");
//   const [carData, setCarData] = useState({
//     SUVs: [],
//     Sedans: [],
//     Hatchbacks: [],
//     Luxury: [],
//   });
//   const [filteredCars, setFilteredCars] = useState([]);
//   const [carMake, setCarMake] = useState("");
//   const [carType, setCarType] = useState("");
//   const [monthlyBudget, setMonthlyBudget] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // Fetch car data from API
//   const fetchCarData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("http://localhost:8080/api/car/get-all-cars");
//       const data = response.data.cars; // Cars are inside the "cars" array

//       console.log(data);

//       // Organize the car data into categories
//       const categorizedData = {
//         SUVs: data.filter((car) => car.type === "suv"),
//         Sedans: data.filter((car) => car.type === "sedan"),
//         Hatchbacks: data.filter((car) => car.type === "hatchback"),
//         Luxury: data.filter((car) => car.type === "luxury"),
//       };
//       console.log( categorizedData);


//       setCarData(categorizedData);
//       console.log(carData);
//     } catch (error) {
//       console.error("Error fetching car data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCarData();
//   }, []);

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     setCarType(category.toLowerCase()); // Update carType when category changes
//     filterCars(); // Re-filter the cars based on the current category
//   };

//   const handleFilterChange = () => {
//     filterCars();
//   };

//   const filterCars = () => {
//     let filtered = Object.values(carData).flat().filter((car) => {
//       const matchesMake = carMake ? car.make.toLowerCase().includes(carMake.toLowerCase()) : true;
//       const matchesType = carType ? car.type.toLowerCase() === carType.toLowerCase() : true;
//       const matchesBudget = monthlyBudget ? car.price <= parseInt(monthlyBudget) : true;

//       return matchesMake && matchesType && matchesBudget;
//     });

//     setFilteredCars(filtered);
//   };

//   const handleDetailsClick = (carId) => {
//     navigate(`/car/${carId}`); // Navigate to car details page
//   };

//   const resetFilters = () => {
//     setCarMake("");
//     setCarType("");
//     setMonthlyBudget("");
//     setFilteredCars(Object.values(carData).flat()); // Reset to show all cars
//   };

//   return (
//     <div className="font-sans">

//       {/* Hero Section */}
//       <section className="text-center py-16 bg-gradient-to-r from-teal-200 to-blue-200">
//         <h2 className="text-4xl font-bold mb-4">CAR LEASING</h2>
//         <p className="text-gray-700 mb-6">Find the best car leasing deals today!</p>
//         <div className="flex justify-center gap-4">
//           {/* Car Make Input */}
//           <input
//             type="text"
//             placeholder="Car Make"
//             className="px-4 py-2 border border-gray-300 rounded-md"
//             value={carMake}
//             onChange={(e) => {
//               setCarMake(e.target.value);
//               handleFilterChange();
//             }}
//           />

//           {/* Car Type Dropdown */}
//           <select
//             className="px-4 py-2 border border-gray-300 rounded-md"
//             value={carType}
//             onChange={(e) => {
//               setCarType(e.target.value); // Update carType based on selection
//               handleFilterChange();
//             }}
//           >
//             <option value="">Car Type</option>
//             <option value="suv">SUV</option>
//             <option value="sedan">Sedan</option>
//             <option value="hatchback">Hatchback</option>
//             <option value="luxury">Luxury</option>
//           </select>

//           {/* Monthly Budget Dropdown */}
//           <select
//             className="px-4 py-2 border border-gray-300 rounded-md"
//             value={monthlyBudget}
//             onChange={(e) => {
//               setMonthlyBudget(e.target.value);
//               handleFilterChange();
//             }}
//           >
//             <option value="">Monthly Budget</option>
//             <option value="200">Up to $200</option>
//             <option value="400">Up to $400</option>
//             <option value="600">Up to $600</option>
//             <option value="800">Up to $800</option>
//             <option value="1000">Up to $1000</option>
//           </select>

//           {/* Search and Reset Buttons */}
//           <div className="flex gap-4">
//             <button
//               onClick={handleFilterChange}
//               className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
//             >
//               Search Deals
//             </button>
//             <button
//               onClick={resetFilters}
//               className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600"
//             >
//               Reset Filters
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Leasing Deals Section */}
//       <section className="py-10 px-6">
//         <h2 className="text-2xl font-bold mb-6">Top Leasing Deals</h2>
//         {loading ? (
//           <div className="text-center">Loading...</div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredCars.map((car) => (
//               <div
//                 key={car._id}
//                 className="border border-gray-300 rounded-md p-4 bg-white shadow-sm"
//               >
//                 <img
//                   src={car.image || 'default_image_url'}
//                   alt={`${car.make} ${car.model}`}
//                   className="w-full h-40 object-cover rounded-md mb-4"
//                 />
//                 <h3 className="text-xl font-semibold mb-2">
//                   {car.make} {car.model}
//                 </h3>
//                 <p className="text-gray-700">${car.price}</p>
//                 <p className="text-gray-500 mb-4">{car.description}</p>
//                 <button
//                   onClick={() => handleDetailsClick(car._id)}
//                   className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//                 >
//                   Details
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Why Lease Section */}
//       <section className="bg-gray-100 py-10 px-6 text-center">
//         <h2 className="text-2xl font-bold mb-6">Why lease your car?</h2>
//         <div className="flex flex-col md:flex-row justify-center gap-6">
//           <div>
//             <h3 className="font-semibold text-lg">Simple Documentation</h3>
//             <p className="text-gray-600">All paperwork handled for you.</p>
//           </div>
//           <div>
//             <h3 className="font-semibold text-lg">Best Car for Your Needs</h3>
//             <p className="text-gray-600">Wide variety of cars to choose from.</p>
//           </div>
//           <div>
//             <h3 className="font-semibold text-lg">Warranty Included</h3>
//             <p className="text-gray-600">Full support during your lease.</p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-6">
//         <div className="text-center">
//           <p className="text-lg">Ready to get started?</p>
//           <button className="bg-teal-500 px-6 py-2 rounded-md text-white mt-4 hover:bg-teal-600">
//             Contact Us
//           </button>
//         </div>
//         <p className="text-center mt-6 text-gray-400">
//           &copy; 2024 OnlyCars. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default Rental;

//working
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Rental = () => {
//   const [selectedCategory, setSelectedCategory] = useState("suv"); // Default category set to 'suv' (lowercase)
//   const [carData, setCarData] = useState({
//     suv: [],
//     sedan: [],
//     hatchback: [],
//     luxury: [],
//   });
//   const [filteredCars, setFilteredCars] = useState([]);
//   const [carMake, setCarMake] = useState("");
//   const [monthlyBudget, setMonthlyBudget] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // Fetch car data from API
// const fetchCarData = async () => {
//   setLoading(true);
//   try {
//     const [suvResponse, sedanResponse, hatchbackResponse, luxuryResponse] = await Promise.all([
//       axios.get("http://localhost:8080/api/car/get-car-by-type/suv"),
//       axios.get("http://localhost:8080/api/car/get-car-by-type/sedan"),
//       axios.get("http://localhost:8080/api/car/get-car-by-type/hatchbacks"),
//       axios.get("http://localhost:8080/api/car/get-car-by-type/luxury"),
//     ]);

//     // Log the response to verify structure
//     console.log("SUV Response:", suvResponse.data);
//     console.log("Sedan Response:", sedanResponse.data);
//     console.log("Hatchback Response:", hatchbackResponse.data);
//     console.log("Luxury Response:", luxuryResponse.data);

//     // Correctly assign the 'cars' array from each response
//     setCarData({
//       suv: suvResponse.data.cars || [],
//       sedan: sedanResponse.data.cars || [],
//       hatchback: hatchbackResponse.data.cars || [],
//       luxury: luxuryResponse.data.cars || [],
//     });
//   } catch (error) {
//     console.error("Error fetching car data:", error);
//   } finally {
//     setLoading(false);
//   }
// };



//   useEffect(() => {
//     fetchCarData();
//   }, []);

//   // Re-filter cars whenever any filter or selected category changes
//   useEffect(() => {
//     filterCars();
//   }, [carData, selectedCategory, carMake, monthlyBudget]);

//   // Handle category change (converted to lowercase for consistency)
//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category.toLowerCase()); // Ensure category is in lowercase
//   };

//   // Filter cars based on selected filters
// const filterCars = () => {
//   console.log("Filtering cars...");

//   // Ensure that currentCategoryCars is an array
//   const currentCategoryCars = Array.isArray(carData[selectedCategory]) ? carData[selectedCategory] : [];

//   console.log(`Category: ${selectedCategory}`, currentCategoryCars); // Log current category data

//   // Apply the filters
//   let filtered = currentCategoryCars.filter((car) => {
//     const matchesMake = carMake ? car.make.toLowerCase().includes(carMake.toLowerCase()) : true;
//     const matchesBudget = monthlyBudget ? car.price <= parseInt(monthlyBudget) : true;

//     return matchesMake && matchesBudget;
//   });

//   console.log("Filtered Cars:", filtered); // Log filtered cars

//   setFilteredCars(filtered);
// };




//   // Handle filter change
//   const handleFilterChange = () => {
//     console.log("Handling filter change...");
//     filterCars();
//   };

//   // Reset filters
//   const resetFilters = () => {
//     setCarMake("");
//     setMonthlyBudget("");
//     filterCars(); // Reset the filter with the full category data
//   };

//   return (
//     <div className="font-sans">
//       {/* Hero Section */}
//       <section className="text-center py-16 bg-gradient-to-r from-teal-200 to-blue-200">
//         <h2 className="text-4xl font-bold mb-4">CAR LEASING</h2>
//         <p className="text-gray-700 mb-6">Find the best car leasing deals today!</p>
//         <div className="flex justify-center gap-4">
//           {/* Car Make Input */}
//           <input
//             type="text"
//             placeholder="Car Make"
//             className="px-4 py-2 border border-gray-300 rounded-md"
//             value={carMake}
//             onChange={(e) => {
//               setCarMake(e.target.value);
//             }}
//           />

//           {/* Car Type Dropdown */}
//           <select
//             className="px-4 py-2 border border-gray-300 rounded-md"
//             value={selectedCategory}
//             onChange={(e) => handleCategoryChange(e.target.value)}
//           >
//             <option value="SUV">SUV</option>
//             <option value="Sedan">Sedan</option>
//             <option value="Hatchback">Hatchback</option>
//             <option value="Luxury">Luxury</option>
//           </select>

//           {/* Monthly Budget Dropdown */}
//           <select
//             className="px-4 py-2 border border-gray-300 rounded-md"
//             value={monthlyBudget}
//             onChange={(e) => {
//               setMonthlyBudget(e.target.value);
//             }}
//           >
//             <option value="">Monthly Budget</option>
//             <option value="200">Up to $200</option>
//             <option value="400">Up to $400</option>
//             <option value="600">Up to $600</option>
//             <option value="800">Up to $800</option>
//             <option value="1000">Up to $1000</option>
//           </select>

//           {/* Search and Reset Buttons */}
//           <div className="flex gap-4">
//             <button
//               onClick={handleFilterChange}
//               className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
//             >
//               Search Deals
//             </button>
//             <button
//               onClick={resetFilters}
//               className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600"
//             >
//               Reset Filters
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Leasing Deals Section */}
//       {loading ? (
//         <div className="text-center text-gray-500">Loading cars...</div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {filteredCars.length === 0 ? (
//             <div className="col-span-full text-center text-gray-500">
//               No cars available in this category.
//             </div>
//           ) : (
//             filteredCars.map((car) => (
//               <div
//                 key={car._id}
//                 className="relative bg-white shadow-xl rounded-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl"
//               >
//                 <img
//                   src="https://via.placeholder.com/400x250" // Placeholder for image
//                   alt={car.make + " " + car.model}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>

//                 <div className="p-6 relative z-10">
//                   <h3 className="text-xl font-semibold text-gray-800">{car.make} {car.model}</h3>
//                   <p className="text-gray-500 text-sm">Price: ₹{car.price}</p>
//                   <div className="flex items-center space-x-2 mt-2">
//                     <span className="text-yellow-500">
//                       {'★'.repeat(Math.round(car.rating))}
//                     </span>
//                     <span className="text-gray-500">({car.rating})</span>
//                   </div>
//                   <button
//                     className="mt-4 text-white bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                     onClick={() => navigate(`/car/${car._id}`)}
//                   >
//                     View Deal
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       )}

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-6 text-center">
//         <p>&copy; 2024 Car Leasing. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Rental;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Rental = () => {
  const [selectedCategory, setSelectedCategory] = useState("suv"); // Default category set to 'suv'
  const [carData, setCarData] = useState({
    suv: [],
    sedan: [],
    hatchback: [],
    luxury: [],
  });
  const [filteredCars, setFilteredCars] = useState([]);
  const [carMake, setCarMake] = useState("");
  const [monthlyBudget, setMonthlyBudget] = useState(""); // Changed to string for custom handling
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch car data from API
  const fetchCarData = async () => {
    setLoading(true);
    try {
      const [suvResponse, sedanResponse, hatchbackResponse, luxuryResponse] = await Promise.all([
        axios.get("http://localhost:8080/api/car/get-car-by-type/suv"),
        axios.get("http://localhost:8080/api/car/get-car-by-type/sedan"),
        axios.get("http://localhost:8080/api/car/get-car-by-type/hatchbacks"),
        axios.get("http://localhost:8080/api/car/get-car-by-type/luxury"),
      ]);

      setCarData({
        suv: suvResponse.data.cars || [],
        sedan: sedanResponse.data.cars || [],
        hatchback: hatchbackResponse.data.cars || [],
        luxury: luxuryResponse.data.cars || [],
      });
    } catch (error) {
      console.error("Error fetching car data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCarData();
  }, []);

  // Re-filter cars whenever any filter or selected category changes
  useEffect(() => {
    filterCars();
  }, [carData, selectedCategory, carMake, monthlyBudget]);

  // Handle category change (converted to lowercase for consistency)
  const handleCategoryChange = (category) => {
    setSelectedCategory(category.toLowerCase()); // Ensure category is in lowercase
  };

  // Filter cars based on selected filters
  const filterCars = () => {
    console.log("Filtering cars...");

    // Ensure that currentCategoryCars is an array
    const currentCategoryCars = selectedCategory === "all"
      ? [...carData.suv, ...carData.sedan, ...carData.hatchback, ...carData.luxury]
      : carData[selectedCategory];

    console.log(`Category: ${selectedCategory}`, currentCategoryCars); // Log current category data

    // Apply the filters
    let filtered = currentCategoryCars.filter((car) => {
      // Convert price to number for comparison if it's a string
      const carPrice = parseFloat(car.price);

      const matchesMake = carMake
        ? car.make.toLowerCase().includes(carMake.toLowerCase()) ||
          car.model.toLowerCase().includes(carMake.toLowerCase())
        : true;

      // Apply the budget filtering
      let matchesBudget = true;
      if (monthlyBudget === "custom") {
        // If it's custom, compare the price with the custom value
        const customBudget = parseFloat(monthlyBudget);
        matchesBudget = carPrice > customBudget;
      } else if (monthlyBudget) {
        // Else if a predefined budget is selected, check against that
        const budget = parseFloat(monthlyBudget);
        matchesBudget = carPrice <= budget;
      }

      return matchesMake && matchesBudget;
    });

    console.log("Filtered Cars:", filtered); // Log filtered cars

    setFilteredCars(filtered);
  };

  // Handle filter change
  const handleFilterChange = () => {
    console.log("Handling filter change...");
    filterCars();
  };

  // Reset filters
  const resetFilters = () => {
    setCarMake("");
    setMonthlyBudget(""); // Reset monthly budget
    filterCars(); // Reset the filter with the full category data
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-teal-200 to-blue-200">
        <h2 className="text-4xl font-bold mb-4">CAR LEASING</h2>
        <p className="text-gray-700 mb-6">Find the best car leasing deals today!</p>
        <div className="flex justify-center gap-4">
          {/* Car Make Input */}
          <input
            type="text"
            placeholder="Search by Car Make or Model"
            className="px-4 py-2 border border-gray-300 rounded-md"
            value={carMake}
            onChange={(e) => {
              setCarMake(e.target.value);
            }}
          />

          {/* Car Type Dropdown */}
          <select
            className="px-4 py-2 border border-gray-300 rounded-md"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="all">All</option>
            <option value="suv">SUV</option>
            <option value="sedan">Sedan</option>
            <option value="hatchback">Hatchback</option>
            <option value="luxury">Luxury</option>
          </select>

          {/* Monthly Budget Dropdown */}
          <div className="flex flex-col gap-2">
            <select
              className="px-4 py-2 border border-gray-300 rounded-md"
              value={monthlyBudget}
              onChange={(e) => setMonthlyBudget(e.target.value)}
            >
              <option value="">Select Monthly Budget</option>
              <option value="200">Up to ₹200,000</option>
              <option value="400">Up to ₹400,000</option>
              <option value="600">Up to ₹600,000</option>
              <option value="800">Up to ₹800,000</option>
              <option value="1000">Up to ₹1,000,000</option>
              <option value="custom">Above ₹1,000,000</option>
            </select>

            {/* Custom Budget Input */}
            {monthlyBudget === "custom" && (
              <input
                type="number"
                placeholder="Enter custom budget"
                className="px-4 py-2 border border-gray-300 rounded-md"
                onChange={(e) => setMonthlyBudget(e.target.value)}
              />
            )}
          </div>

          {/* Search and Reset Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleFilterChange}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            >
              Search Deals
            </button>
            <button
              onClick={resetFilters}
              className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </section>

      {/* Leasing Deals Section */}
      {loading ? (
        <div className="text-center text-gray-500">Loading cars...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCars.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">
              No cars available in this category.
            </div>
          ) : (
            filteredCars.map((car) => (
              <div
                key={car._id}
                className="relative bg-white shadow-xl rounded-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Display the car image from the API endpoint */}
                <img
                  src={`http://localhost:8080/api/image/${car.imageId}`} // Assuming car.imageId is the correct field
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
                    onClick={() => navigate(`/car/${car._id}`)}
                  >
                    View Deal
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2024 Car Leasing. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Rental;
