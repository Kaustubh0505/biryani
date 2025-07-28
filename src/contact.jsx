import React from 'react';

import whatsappIcon from './assets/whatsapp.svg'
import twitter from "./assets/twitter.svg";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
import locationShop from './assets/locationShop.png';
import Navbar from './navbar';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-[#FFF6EC] min-h-screen p-6 md:p-16">
                <div className="max-w-6xl mx-auto">
                    {/* Section Heading */}
                    <h1 className="text-4xl font-bold text-center text-[#E65100] mb-8">
                        Contact The Paul's Biryani
                    </h1>

                    {/* Contact Info */}
                    <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-10">
                        <h2 className="text-2xl font-semibold text-[#E65100] mb-4">Reach Us</h2>
                        <p className="text-gray-700 font-semibold mb-2">📍 Address: Shop 167, Ground Floor, Rodeo Drive Mall, Sonipat Locality, Sonipat</p>
                        <p className="text-gray-700 font-semibold mb-2">📞 Phone: +9179880 39609</p>
                        <p className="text-gray-700 font-semibold mb-2">✉️ Email: contact@thepaulsbiryani.com</p>
                        <p className="text-gray-700 font-semibold">🕒 Timings: 11 AM - 11 PM (All Days)</p>
                    </div>

                    {/* Google Maps Embed */}
                    <div className="w-1/2 h-1/2 mb-3 cursor-pointer rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        <a href="https://www.google.com/maps/@28.899417,77.1142568,17.15z?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D">
                            <img
                                title="Google Map"
                                className="cursor-pointer rounded-xl shadow-lg"
                                src={locationShop}
                            ></img>
                        </a>

                    </div>
                        <div className="text-sm mb-10 mt-2 text-gray-600">Find us on Google Maps</div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-lg flex-wrap  shadow-md p-6 md:p-10 mb-10">
                        <h2 className="text-2xl font-semibold text-[#E65100] mb-6">Send Us a Message</h2>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="p-3 border rounded-md w-full"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="p-3 border rounded-md w-full"
                                required
                            />

                            <textarea
                                placeholder="Your Message"
                                className="p-3 border rounded-md md:col-span-2 w-full"
                                rows="4"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-[#E65100] cursor-pointer text-white font-semibold py-2 rounded-md hover:bg-orange-700 md:col-span-2"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>


                    {/* Social Media Icons */}
                    <div className="text-center">
                        <h2 className="font-bold text-3xl text-[#E65100] mb-4">Follow Us</h2>
                        <div className="flex justify-center gap-6 text-2xl text-[#E65100]">
                            <a href="https://www.instagram.com/thepaulsbiryani/?hl=en" target="_blank" rel="noopener noreferrer">
                                <img className='w-10 h-10' src={instagram}></img>
                            </a>
                            <a href="https://www.facebook.com/people/The-Pauls-Biryani/100090422541042/" target="_blank" rel="noopener noreferrer">
                                <img className='w-10 h-10' src={facebook}></img>
                            </a>
                            <a href="https://x.com/thepaulsbiryani" target="_blank" rel="noopener noreferrer">
                                <img className='w-10 h-10' src={twitter}></img>
                            </a>
                            <a href="https://chat.whatsapp.com/E0f5krbPWhn9sCtYDAUrS4" target="_blank" rel="noopener noreferrer">
                                <img className='w-10 h-10' src={whatsappIcon}></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
