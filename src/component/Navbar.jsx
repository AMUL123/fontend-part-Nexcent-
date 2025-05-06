import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-5 px-8 mx-8 shadow-md bg-white relative">
      {/* Logo */}
      <img src="/images/Logo.svg" alt="Logo" className="w-32" />

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <ul className="hidden md:flex space-x-6 text-gray-700">
          {["Home", "Features", "Community", "Blog", "Pricing"].map((item) => (
            <li key={item} className="hover:text-green-500 cursor-pointer">{item}</li>
          ))}
        </ul>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Register Now →
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-5 md:hidden">
          <ul className="flex flex-col space-y-4 text-gray-700 text-center">
            {["Home", "Features", "Community", "Blog", "Pricing"].map((item) => (
              <li key={item} className="hover:text-green-500 cursor-pointer">{item}</li>
            ))}
          </ul>
          <button className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Register Now →
          </button>
        </div>
      )}
    </nav>
  );
};





export default Navbar;
