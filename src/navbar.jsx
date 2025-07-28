import React from 'react'
import pauls from './assets/pauls.png';
import { Link } from "react-router-dom";
import { useState,useRef,useEffect } from "react";



const Navbar = () => {

    const [showOptions, setShowOptions] = useState(false);
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
        <div className="flex justify-between relative bg-none w-[100%] z-[500]  items-center px-10 py-5">
            <div className="font-bold w-50 object-contain text-[#f1533a] text-lg">
                <img src={pauls}></img>
            </div>
            <div>

                <ul className="flex gap-8 text-sm font-semibold">
                    <li><Link to="/home" className="text-black">HOME</Link></li>
                    <li><Link to="/menu" className="text-black">MENU</Link></li>
                    <li><a href="#" className="text-black">STORY</a></li>
                    <li><a href="#" className="text-black">GALLERY</a></li>
                    <li><Link to="/contact" className="text-black">CONTACT US</Link></li>
                </ul>
            </div>
            <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setShowOptions((prev) => !prev)}
        className="bg-[#f1533a] text-white cursor-pointer px-4 py-2 rounded-full font-bold"
      >
        ORDER NOW
      </button>



      {showOptions && (
        <div className="absolute left-0 mt-2 w-40 bg-white rounded-sm shadow-lg border border-gray-200 z-50">
          <a
            href="https://www.zomato.com/sonipat/the-pauls-biryani-sonipat-locality"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-semibold px-4 py-2 text-sm text-gray-700 hover:bg-red-100 hover:text-red-900 rounded-sm"
          >
            Order on Zomato
          </a>
          <a
            href="https://www.swiggy.com/city/sonipat/the-pauls-biryani-piau-maniyari-nangal-road-rest709055"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-semibold px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-900 rounded-sm"
          >
            Order on Swiggy
          </a>
        </div>
      )}
    </div>

        </div>
    )
}

export default Navbar;
