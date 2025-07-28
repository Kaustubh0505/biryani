import React from "react";
import "./ourStory.css";
import pauls from "./assets/pauls.png";
import whatsappIcon from './assets/whatsapp.svg'
import { FaXTwitter } from 'react-icons/fa6';
import plate from './assets/plate.png';
import phone from './assets/phone.png';
import location from './assets/location.png';
import home from './assets/home.png';
import chef from './assets/chef.png';
import shop from './assets/shop.jpg';
import { Facebook, Instagram } from 'lucide-react';


export default function OurStory() {
    return (
        <div className="bg-[#f24b1d] text-white font-poppins">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <h2 id="oswald" className="text-center text-4xl font-bold uppercase">Our Story</h2>
                <p id="openSans" className="text-center text-xl font-semibold mt-2">
                    Our Journey from Zero to One
                </p>

                <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-start gap-4">
                            <div className="text-5xl">
                                <img src={chef}></img>
                            </div>
                            <div>
                                <h2 id="oswald" className="text-4xl font-bold text-black uppercase">The Beginning</h2>
                                <p id="openSans" className="mt-4 text-l text-white font-poppins">
                                    Growing up in a family that treasured food traditions, I learned that
                                    cooking isn’t just about ingredients—it’s about love, patience, and
                                    respect for the craft. My grandmother’s recipes became my foundation,
                                    but my journey was just beginning.
                                </p>
                                <button id="oswald" className="mt-6 px-4 py-2 bg-black text-white font-semibold rounded font-poppins">
                                    Watch Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="w-full h-64 rounded-lg flex items-center justify-center overflow-hidden">
                            <img src={shop} className="max-h-full rounded-2xl max-w-full object-contain" alt="shop" />
                        </div>

                    </div>
                </div>
            </div>

            <div className="bg-[#f6ebd3] text-black py-10 font-poppins">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">

                    <div className="flex flex-col items-center text-center">
                        <img src={plate} className="w-auto h-30 mb-3" alt="Plate" />
                        <h4 id="oswald" className="text-2xl font-bold uppercase font-bebas">About Restaurant</h4>
                        <p id="openSans" className="text-l">Enjoy a wonderful dining experience</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <img src={phone} className="w-auto h-30 mb-3" alt="Phone" />
                        <h4 id="oswald" className="text-2xl font-bold uppercase font-bebas">Let’s Talk</h4>
                        <p id="openSans" className="text-l">Phone: 1-800-222-000</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <img src={home} className="w-auto h-30 mb-3" alt="Home" />
                        <h4 id="oswald" className="text-2xl font-bold uppercase font-bebas">Book a Table</h4>
                        <p id="openSans" className="text-l">Enjoy a wonderful dining experience</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <a href="https://maps.app.goo.gl/dvd19Cb2tmqzCiCD9"><img src={location} className="w-auto h-30 mb-3" alt="Location" /></a>
                        <h4 id="oswald" className="text-2xl font-bold uppercase font-bebas">Contact Us</h4>
                        <p id="openSans" className="text-l">Enjoy a wonderful dining experience</p>
                    </div>

                </div>
            </div>


            <div className="bg-[#f6ebd3] flex justify-evenly items-center py-4 border-t border-gray-200 font-poppins">
                <div>
                    <span className="text-[#f24b1d]">© Copyright {new Date().getFullYear()}</span>

                </div>
                <div>
                    <img src={pauls} className="h-12  w-auto" alt="logo" />
                </div>
                <div className="flex gap-4 text-xl">
                    <a href="https://www.facebook.com/people/The-Pauls-Biryani/100090422541042/"><button> <Facebook className="text-[#000000] cursor-pointer" /></button></a>
                    <a href="https://www.instagram.com/thepaulsbiryani/?hl=en"><button><Instagram className="text-[#000000] cursor-pointer" /></button></a>
                    <a href="https://chat.whatsapp.com/E0f5krbPWhn9sCtYDAUrS4"><button><img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 cursor-pointer" /></button></a>
                    <a href="https://x.com/thepaulsbiryani"><button><FaXTwitter className="text-[#000000] cursor-pointer" /></button></a>
                </div>

            </div>
        </div>
    );
}