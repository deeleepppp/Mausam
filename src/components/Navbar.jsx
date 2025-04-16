import React, { useState } from "react";

const Navbar = ({ setCity }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(input);
  };

  return (
    <nav className="bg-gray-700 shadow px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-2xl font-bold text-white">Forecast</div>
        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-auto flex items-center relative"
        >
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Search..."
            className="w-full sm:w-64 px-3 py-1 border placeholder:text-white text-white border-white bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
          >
            🔍
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
