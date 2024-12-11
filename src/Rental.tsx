import React from "react";

const cars = [
  {
    id: 1,
    name: "Toyota Corolla",
    price: "$250/month",
    details: "Automatic • Petrol • 15km/l",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Honda Accord",
    price: "$300/month",
    details: "Automatic • Petrol • 12km/l",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "BMW X5",
    price: "$500/month",
    details: "Automatic • Diesel • 10km/l",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Tesla Model 3",
    price: "$700/month",
    details: "Automatic • Electric • 300km/charge",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Ford Mustang",
    price: "$600/month",
    details: "Automatic • Petrol • 8km/l",
    image: "https://via.placeholder.com/150",
  },
];

const Rental = () => {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-gray-100 py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">OnlyCars</h1>
        <nav className="space-x-4">
          <a href="/" className="text-gray-600 hover:text-blue-600">
            Leasing
          </a>
          <a href="/" className="text-gray-600 hover:text-blue-600">
            Buying
          </a>
          <a href="/" className="text-gray-600 hover:text-blue-600">
            Login
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-teal-200 to-blue-200">
        <h2 className="text-4xl font-bold mb-4">CAR LEASING</h2>
        <p className="text-gray-700 mb-6">Find the best car leasing deals today!</p>
        <div className="flex justify-center gap-4">
          <input
            type="text"
            placeholder="Car Make"
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Car Type"
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
          <select className="px-4 py-2 border border-gray-300 rounded-md">
            <option value="">Monthly Budget</option>
            <option value="200">$200</option>
            <option value="400">$400</option>
            <option value="600">$600</option>
          </select>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
            Search Deals
          </button>
        </div>
      </section>

      {/* Leasing Deals Section */}
      <section className="py-10 px-6">
        <h2 className="text-2xl font-bold mb-6">Top Leasing Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="border border-gray-300 rounded-md p-4 bg-white shadow-sm"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
              <p className="text-gray-700">{car.price}</p>
              <p className="text-gray-500 mb-4">{car.details}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Lease Section */}
      <section className="bg-gray-100 py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Why lease your car?</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div>
            <h3 className="font-semibold text-lg">Simple Documentation</h3>
            <p className="text-gray-600">All paperwork handled for you.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Best Car for Your Needs</h3>
            <p className="text-gray-600">Wide variety of cars to choose from.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Warranty Included</h3>
            <p className="text-gray-600">Full support during your lease.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="text-center">
          <p className="text-lg">Ready to get started?</p>
          <button className="bg-teal-500 px-6 py-2 rounded-md text-white mt-4 hover:bg-teal-600">
            Contact Us
          </button>
        </div>
        <p className="text-center mt-6 text-gray-400">
          &copy; 2024 OnlyCars. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Rental;
