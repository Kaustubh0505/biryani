import React, { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";
import "./popularDishes.css";
import slider from "./assets/slider.jpg";
import slider2 from "./assets/slider2.jpg";
import slider3 from "./assets/slider3.jpg";
import slider4 from "./assets/slider4.jpg";
import slider5 from "./assets/slider5.jpg";
import left from "./assets/leftPlate-removebg.png";
import handi from "./assets/handi.jpg";


export default function App() {
    const cardWidth = 280;
    const scrollRef = useRef(null);

    const popularDishes = [
        { name: slider },
        { name: slider2 },
        { name: slider3 },
        { name: slider4 },
        { name: slider5 },
    ];

    const dishes = [...popularDishes, ...popularDishes];

    useEffect(() => {
        const scrollContainer = scrollRef.current;

        let currentPosition = 0;
        const totalWidth = dishes.length * cardWidth;

        const interval = setInterval(() => {
            if (!scrollContainer) return;

            currentPosition += cardWidth;
            scrollContainer.style.transition = "transform 0.5s ease-in-out";
            scrollContainer.style.transform = `translateX(-${currentPosition}px)`;

            if (currentPosition >= (popularDishes.length * cardWidth)) {
                setTimeout(() => {
                    scrollContainer.style.transition = "none";
                    scrollContainer.style.transform = `translateX(0px)`;
                    currentPosition = 0;
                }, 500);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [cardWidth]);

    return (
        <div>
            <div className="h-150 bg-[#D2B48C] relative">

                <section className="pt-16 pb-15">
                    <div className="text-center mb-16">
                        <h1 id="oswald" className="text-4xl md:text-5xl font-black text-gray-900 tracking-wider">
                            POPULAR DISHES
                        </h1>
                    </div>

                    <div className="overflow-hidden pb-4 px-6">
                        <div
                            ref={scrollRef}
                            className="flex"
                            style={{
                                width: `${dishes.length * cardWidth}px`,
                            }}
                        >
                            {dishes.map((dish, i) => (
                                <div
                                    key={i}
                                    className="w-64 h-48 bg-gray-300 mx-3 rounded-2xl shadow-md flex-shrink-0 overflow-hidden"
                                >
                                    <img
                                        src={dish.name}
                                        alt="food item"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            ))}

                        </div>
                    </div>
                </section>
            </div>
            <section className="bg-[#F5EAD3] pb-12">
                
  <div className="overflow-hidden whitespace-nowrap translate-y-[-4rem]">
  <div class="flex w-max text-9xl  animate-scroll">
      {[...Array(2)].map((_, outerIndex) => (
        [...Array(6)].map((_, innerIndex) => (
          <h2
            key={`${outerIndex}-${innerIndex}`}
            className="text-9xl font-black text-gray-900 flex-shrink-0 mx-8"
            
          >
            AWESOME{" "}
            <span
            
              className="text-transparent "
              style={{
                WebkitTextStroke: "2px #1f2937",
                color: "transparent",
              }}
            >
              CUISINE
            </span>
          </h2>
        ))
      ))}
    </div>
  </div>
</section>



            <section className="py-20 px-8 bg-[#F5EAD3] relative">
                <div className="mx-auto relative">
                    <div className="flex justify-center mb-12">
                        <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center">
                            <Quote className="w-8 h-8 text-white" />
                        </div>
                    </div>

                    <div className="absolute -left-14 top-1/4 hidden lg:block">
                        <img src={left} className="bg-transparent h-50 w-auto rounded-2xl"></img>
                    </div>

                    <div className="absolute right-0 top-1/4 hidden lg:block">
                        <div className=" bg-gray-300 rounded-2xl flex items-center justify-center rotate-6">
                            <img src={handi} className="rounded-2xl bg-transparent w-auto h-50 "></img>
                        </div>
                    </div>


                    <div className="text-center max-w-4xl mx-auto">
                        <p id="openSans" className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed mb-8">
                            FOOD FOR US COMES FROM OUR RELATIVES WHETHER
                            <br />
                            THEY HAVE WINGS OR FINS OR ROOTS THAT IS HOW
                            <br />
                            WE CONSIDER FOOD HAS A CULTURE
                            <br />
                            <span className="block mt-4">
                                IT HAS HISTORY IT HAS A STORY IT HAS RELATIONSHIPS.
                            </span>
                        </p>

                        <p className="text-xl text-yellow-600 font-semibold">
                            Ashutosh Singh
                        </p>
                    </div>
                </div>
            </section>



            <section className="pb-20 bg-[#F5EAD3] px-8">
                <div className="flex justify-center">
                    <div className="bg-white rounded-full px-8 py-4 shadow-lg flex items-center space-x-4">
                        <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                />
                            ))}
                        </div>
                        <span className="text-gray-600 font-medium">
                            25,000+ happy food lovers visited our authentic restaurant.
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
}
