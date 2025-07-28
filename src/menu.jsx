import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import slider from "./assets/slider.jpg";
import slider2 from "./assets/slider2.jpg";
import slider3 from "./assets/slider3.jpg";
import slider4 from "./assets/slider4.jpg";
import slider5 from "./assets/slider5.jpg";
import Navbar from "./navbar";

const images = [
    slider,
    slider2,
    slider3,
    slider4,
    slider5,
];

const menuData = {

    sections: {
        Starters: [
            { name: "Aloo 65", price: "₹240", desc: "Potato cubes marinated with spices coated with a batter, flavored with red chillies..." },
            { name: "Chicken 65 (15-16 Chunk)", price: "₹279", desc: "Boneless chicken marinated with spices coated with a batter, and then deep fried..." },
            { name: "Chicken Lolipop (dry)", price: "₹260", desc: "Chicken wings marinated with herbs and handpicked spices, crispy, batter-fried" },
            { name: "Chilli Chicken", price: "₹279" },
            { name: "Chilli Paneer", price: "₹279" },
            { name: "Egg 65", price: "₹249", desc: "Boiled eggs marinated with spices coated with a batter, and then deep fried..." },
            { name: "Gobi 65", price: "₹269", desc: "Cauliflower florets marinated with spices coated with a batter, flavored with red chillies..." },
            { name: "Paneer 65", price: "₹269", desc: "Cubes of Paneer marinated with spices coated with a batter, and then deep..." }
        ],
        "Add Ons": [
            { name: "Fried Egg", price: "₹19", desc: "Fresh and Fried Egg" },
            { name: "Onion Salad", price: "₹19" },
            { name: "Raita", price: "₹19" },
            { name: "Salan", price: "₹19" }
        ],
        "Deals On Biryani (500 Ml)": [
            { name: "Aloo 65 Hyderabadi Biryani", price: "₹249", desc: "Potato cubes marinated with spices... layered with biryani rice." },
            { name: "Bengalore Kabab Biryani", price: "₹269" },
            { name: "Boneless Chicken Dum Hyderabadi Biryani", price: "₹269" },
            { name: "Chef Special Boneless Chicken Biryani", price: "₹299" },
            { name: "Chicken 65 Hyderabadi Biryani", price: "₹299" },
            { name: "Chicken Dum Hyderabadi Biryani", price: "₹259" },
            { name: "Chicken Lollipop Biryani", price: "₹269" },
            { name: "Egg 65 Hyderabadi Biryani", price: "₹249" },
            { name: "EGG HYDERABADI BIRYANI", price: "₹239" },
            { name: "PANEER 65 HYDERABADI BIRYANI", price: "₹279" },
            { name: "Paneer Hyderabadi Biryani", price: "₹279" },
            { name: "Veg Dum Hyderabadi Biryani", price: "₹239" }
        ],
        "Deals On Biryani (750 Ml)": [
            { name: "Aloo 65 Hyderabadi Biryani", price: "₹359" },
            { name: "Bengalore Kabab Biryani", price: "₹379" },
            { name: "Boneless Chicken Dum Hyderabadi Biryani", price: "₹389" },
            { name: "Chef Special Boneless Chicken Biryani", price: "₹399" },
            { name: "Chicken 65 Hyderabadi Biryani", price: "₹399" },
            { name: "Chicken Dum Hyderabadi Biryani", price: "₹369" },
            { name: "Chicken Lollipop Biryani", price: "₹379" },
            { name: "Egg 65 Hyderabadi Biryani", price: "₹359" },
            { name: "EGG HYDERABADI BIRYANI", price: "₹349" },
            { name: "PANEER 65 HYDERABADI BIRYANI", price: "₹379" },
            { name: "Paneer Hyderabadi Biryani", price: "₹379" },
            { name: "Veg Dum Hyderabadi Biryani", price: "₹350" }
        ]
    }
};

const Menu = () => {


    const [search, setSearch] = useState("");


    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: "ease-out",
        pauseOnHover: false,
        arrows: false
      };
      

    return (
        <div className="bg-[#FFF8F2] text-[#202F60] px-6 md:px-20 pb-10">
            <Navbar/>
           
            <div className="gap-10  mb-10">
                {/* Image Slider */}
                <div className="w-full mb-10 md:w-full rounded-lg overflow-hidden shadow-lg">
                    <Slider {...sliderSettings}>
                        {images.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-[500px] object-cover"
                            />
                        ))}
                    </Slider>
                </div>

                {/* Search */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-orange-600 mb-4">Explore Our Menu</h1>
                    <input
                        type="text"
                        placeholder="Search within menu..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full border border-orange-400 rounded-md px-4 py-2"
                    />
                </div>
            </div>

            {/* Menu Sections */}
            {Object.entries(menuData.sections).map(([section, items]) => (
                <div key={section} className="mb-10">
                    <h2 className="text-2xl font-bold text-[#202F60] border-b-2 border-orange-300 mb-4 pb-2">{section}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {items
                            .filter((item) =>
                                item.name.toLowerCase().includes(search.toLowerCase())
                            )
                            .map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-xl shadow-md p-5 border border-orange-100 hover:shadow-lg transition"
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-lg font-semibold">{item.name}</h3>
                                        <span className="text-orange-600 font-bold">{item.price}</span>
                                    </div>
                                    {item.desc && <p className="text-sm text-gray-600">{item.desc}</p>}
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Menu;
