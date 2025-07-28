import React, { useState, useRef, useEffect } from "react";
import { Link} from "react-router-dom";
import pauls from "./assets/pauls.png";

const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-between items-center px-5 py-4 w-full bg-cover bg-center bg-no-repeat relative z-[500]">
      
      {/* Logo */}
      <div className="w-28 sm:w-36 md:w-48">
        <img src={pauls} alt="Paul's Biryani" className="w-full object-contain" />
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 text-sm font-semibold text-white">
        <li><Link to="/home" className="hover:text-[#f1533a]  text-black">HOME</Link></li>
        <li><Link to="/menu" className="hover:text-[#f1533a] text-black">MENU</Link></li>
        <li><a href="#" className="hover:text-[#f1533a] text-black">STORY</a></li>
        <li><a href="#" className="hover:text-[#f1533a] text-black">GALLERY</a></li>
        <li><Link to="/contact" className="hover:text-[#f1533a] text-black">CONTACT US</Link></li>
      </ul>

      {/* Desktop ORDER NOW Button */}
      <div className="hidden md:inline-block relative" ref={dropdownRef}>
        <button
          onClick={() => setShowOptions((prev) => !prev)}
          className="bg-[#f1533a] cursor-pointer text-white px-4 py-2 rounded-full font-bold"
        >
          ORDER NOW
        </button>

        {showOptions && (
          <div className="absolute right-20 mt-2 w-40 bg-white rounded-sm shadow-lg border border-gray-200 z-50">
            <a
              href="https://www.zomato.com/sonipat/the-pauls-biryani-sonipat-locality"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-semibold px-4 py-2 text-sm text-gray-700 hover:bg-red-100 hover:text-red-900"
            >
              Order on Zomato
            </a>
            <a
              href="https://www.swiggy.com/city/sonipat/the-pauls-biryani-piau-maniyari-nangal-road-rest709055"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-semibold px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-900"
            >
              Order on Swiggy
            </a>
          </div>
        )}
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/80 text-white py-4 z-40">
          <ul className="flex flex-col items-center gap-4 font-semibold">
            <li><Link to="/home" onClick={() => setMobileMenuOpen(false)}>HOME</Link></li>
            <li><Link to="/menu" onClick={() => setMobileMenuOpen(false)}>MENU</Link></li>
            <li><a href="#" onClick={() => setMobileMenuOpen(false)}>STORY</a></li>
            <li><a href="#" onClick={() => setMobileMenuOpen(false)}>GALLERY</a></li>
            <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>CONTACT US</Link></li>
            <li>
              <a
                href="https://www.zomato.com/sonipat/the-pauls-biryani-sonipat-locality"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f1533a] text-white px-4 py-2 rounded-full"
              >
                Order on Zomato
              </a>
            </li>
            <li>
              <a
                href="https://www.swiggy.com/city/sonipat/the-pauls-biryani-piau-maniyari-nangal-road-rest709055"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f1533a] text-white px-4 py-2 rounded-full"
              >
                Order on Swiggy
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
