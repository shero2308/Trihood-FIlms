"use client";

import Navbar from "@/components/Navbar";
import Social_links from "@/components/Social_links";
import Parallax from "@/components/Parallax";
import Footer from "@/components/Footer";

// Icons
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import BusinessIcon from '@mui/icons-material/Business';

export default function Contact() {
    return ( 
        <div className="w-full">
            <Social_links />
            <Navbar />

            {/* Contact Heading */}
            <div className="flex items-center flex-col pt-20 text-center">
                <h1 className="font-kanit text-2xl md:text-4xl lg:text-5xl mt-10">
                    Contact Us
                </h1>
            </div>

            {/* Contact Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-10 lg:px-20 pt-10">
                
                {/* Contact Details */}
                <div className="flex flex-col items-center text-center">
                    <h1 className="font-bree-serif text-3xl">Contact Details</h1>
                    
                    <div className="flex flex-col items-center gap-6 mt-6">
                        {/* Email */}
                        <div className="flex flex-col items-center">
                            <h1 className="font-bree-serif text-gray-800">Email:</h1>
                            <p className="font-kanit text-gray-600 flex items-center gap-2">
                                <EmailIcon /> ABC@gmail.com
                            </p>
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col items-center">
                            <h1 className="font-bree-serif text-gray-800">Phone:</h1>
                            <p className="font-kanit text-gray-600 flex items-center gap-2">
                                <LocalPhoneIcon /> +1234567890
                            </p>
                            <p className="font-kanit text-gray-600 flex items-center gap-2">
                                <LocalPhoneIcon /> +1234567890
                            </p>
                        </div>

                        {/* WhatsApp */}
                        <div className="flex flex-col items-center">
                            <h1 className="font-bree-serif text-gray-800">WhatsApp:</h1>
                            <a href="https://wa.me/91123456789" className="font-kanit text-blue-400 flex items-center gap-2">
                                <WhatsAppIcon className="text-green-500" /> +1234567890
                            </a>
                            <a href="https://wa.me/91123456789" className="font-kanit text-blue-400 flex items-center gap-2">
                                <WhatsAppIcon className="text-green-500" /> +1234567890
                            </a>
                        </div>

                        {/* Address */}
                        <div className="flex flex-col items-center">
                            <h1 className="font-bree-serif text-gray-800">Address:</h1>
                            <p className="font-kanit text-gray-600 flex items-center gap-2">
                                <BusinessIcon /> XYZ Street, ABC City, Country
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="flex flex-col items-center text-center">
                    <h1 className="font-bree-serif text-3xl">Get in Touch</h1>
                    
                    <div className="flex flex-col gap-4 w-full max-w-md mt-6">
                        {/* Name */}
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bree-serif text-gray-800">Name:</h1>
                            <input type="text" placeholder="Name" className="border-2 border-gray-200 rounded-lg p-2 w-full"/>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bree-serif text-gray-800">Email:</h1>
                            <input type="email" placeholder="Email" className="border-2 border-gray-200 rounded-lg p-2 w-full"/>
                        </div>

                        {/* Subject */}
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bree-serif text-gray-800">Subject:</h1>
                            <input type="text" placeholder="Subject" className="border-2 border-gray-200 rounded-lg p-2 w-full"/>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bree-serif text-gray-800">Message:</h1>
                            <textarea placeholder="Message" className="border-2 border-gray-200 rounded-lg p-2 w-full h-40"/>
                        </div>

                        {/* Submit Button */}
                        <button className="bg-blue-500 text-white rounded-lg p-3 w-full hover:bg-blue-600 transition">
                            Send
                        </button>
                    </div>
                </div>
            </div>

            {/* Parallax & Footer */}
            <div className="pt-40">
                <Parallax />
                <Footer />
            </div>
        </div>
    );
}
