import React from 'react';
import { useEffect, useState, useRef } from 'react';
import pauls from './assets/pauls.png';
import biryan from './assets/biryan.png';
import delivery from './assets/delivery.png';
import dining from './assets/dining.png';
import packet from './assets/packet.png';
import mainPage from "./assets/mainPage.jpg"



export default function HomePage() {
    const [rotation, setRotation] = useState(0);
    const [top, setTop] = useState('59.5%');
    const [left, setLeft] = useState('48.5%');
    const [scale, setScale] = useState(1);
    const [scrollOffset, setScrollOffset] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const targetDivRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setRotation(scrollY / 5);

            if (scrollY > 300) {
                if (scrollY < 1263) {
                    setScrollOffset(scrollY - 300);
                    setTop(`calc(59.5% + ${scrollOffset}px)`);
                    setLeft(`calc(48.5% - ${scrollOffset / 1.50}px`);
                    setScale(1 - scrollOffset / 2900);
                }
            }
            else {
                setTop('59.5%');
                setLeft('48.5%');
                setScale(1);
            }





            console.log("🟠 Scroll Y:", scrollY);
            console.log("🌀 Rotation:", scrollY / 5);
            console.log("📏 scrollOffset:", scrollOffset);
            console.log("🎯 offsetY of targetDivRef:", offsetY);

            const newTop = `calc(59.5% + ${scrollOffset}px)`;
            const newLeft = `calc(48.5% - ${scrollOffset}px)`;
            console.log("📐 Calculated top:", newTop);
            console.log("📐 Calculated left:", newLeft);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollOffset, offsetY]);




    return (
        <div className="font-[Montserrat] bg-[#fff4e3] min-h-screen">
            {/* Header */}
            <div className="flex justify-between relative bg-none w-[100%] z-[500]  items-center px-10 py-5">
                <div className="font-bold w-50 object-contain text-[#f1533a] text-lg">
                    <img src={pauls}></img>
                </div>
                <div>

                    <ul className="flex gap-8 text-sm font-semibold">
                        <li><a href="#" className="text-black">HOME</a></li>
                        <li><a href="#" className="text-black">MENU</a></li>
                        <li><a href="#" className="text-black">STORY</a></li>
                        <li><a href="#" className="text-black">GALLERY</a></li>
                        <li><a href="#" className="text-black">CONTACT US</a></li>
                    </ul>
                </div>
                <div>
                    <button className="bg-[#f1533a] text-white px-4 py-2 rounded-full font-bold">ORDER NOW</button>
                </div>
            </div>

            <div className="relative translate-y-[-87px] mx-auto">
                <img
                    src={mainPage}
                    alt="home plate"
                    className="w-full h-full z-[-1] object-contain"
                />

                <img
                    src={biryan}
                    alt="biryani"
                    className="absolute top-[59.5%] left-[48.5%] object-contain transform -translate-x-1/2 -translate-y-1/2"

                />
                <img
                    src={biryan}
                    alt="biryani"
                    style={{
                        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                        top: `${top}`,
                        left: `${left}`,
                        scale: `${scale}`,
                    }}
                    className="absolute left-[48.5%] object-contain"
                />

            </div>


            <section className="text-center py-16 px-4">
                <h1 id="oswald" className="text-[180px] text-[#9e877d] font-extrabold">EXPERIENCE</h1>

                <div className='flex mt-10'>
                    <div
                        className="w-100 h-100 bg-white rounded-full mx-auto mt-6 flex items-center justify-center text-gray-700 font-bold">
                    </div>

                    <div className="mt-25 max-w-xl mx-auto">
                        <h2 id="oswald" className="text-6xl font-bold text-black">WONDERFUL DINE-IN EXPERIENCE & FOOD</h2>
                        <p className="text-gray-600 mt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.
                        </p>
                        <button className="bg-[#2f2f2f] text-white px-4 py-2 mt-4 font-bold">ABOUT RESTAURANT</button>
                        <div className="font-bold mt-2">📞 98765-43210</div>
                    </div>

                </div>

                <div className="flex flex-wrap mt-20 justify-evenly gap-10">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-center w-48">
                        <div className="text-center">
                            <img src={delivery} className="h-20 w-auto rounded-xl p-1 shadow-2xs" alt="delivery" />
                        </div>
                        <h3 className="text-base font-bold mt-2">FAST DELIVERY</h3>
                        <p className="text-sm text-gray-600 text-center">Within 30 minutes</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-center w-48">
                        <div className="text-center">
                            <img src={dining} className="h-20 w-auto rounded-xl p-1 shadow-2xs" alt="dining" />
                        </div>
                        <h3 className="text-base font-bold mt-2">ABSOLUTE DINING</h3>
                        <p className="text-sm text-gray-600 text-center">Best biryani restaurant</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col items-center w-48">
                        <div className="text-center">
                            <img src={packet} className="h-20 w-auto rounded-xl p-1 shadow-2xs" alt="packet" />
                        </div>
                        <h3 className="text-base font-bold mt-2">PICKUP DELIVERY</h3>
                        <p className="text-sm text-gray-600 text-center">Grab your food order</p>
                    </div>
                </div>

            </section>
        </div>
    );
};

