"use client";

import Navbar from "@/components/Navbar";
import Social_links from "@/components/Social_links";
import Parallax from "@/components/Parallax";
import Footer from "@/components/Footer";

import React, { useState } from "react";

// Icons
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import BusinessIcon from "@mui/icons-material/Business";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [result, setResult] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setResult("Please fill in all fields.");
            return;
        }    

        setResult("Sending...");

        const data = new FormData();
        data.append("access_key", "030e09bd-ee16-4a6c-b86a-1b7dc7cc4d05");
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("subject", formData.subject);
        data.append("message", formData.message);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: data,
        });

        const resData = await response.json();

        if (resData.success) {
            setResult("✅ Form Submitted Successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
            setResult("❌ Submission Failed. Try again.");
        }
    };

    return (
        <div className="w-full">
            <Social_links />
            <Navbar />

            {/* Contact Heading */}
            <div className="flex flex-col items-center pt-20 text-center">
                <h1 className="font-kanit text-2xl md:text-4xl lg:text-5xl mt-10">Contact Us</h1>
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
                        </div>

                        {/* WhatsApp */}
                        <div className="flex flex-col items-center">
                            <h1 className="font-bree-serif text-gray-800">WhatsApp:</h1>
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

                    <form onSubmit={onSubmit} className="w-full max-w-md mt-6">
                        {/* Name */}
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bree-serif text-gray-800">Name:</h1>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className="border-2 border-gray-200 rounded-lg p-2 w-full"
                                aria-label="Name"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bree-serif text-gray-800">Email:</h1>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="border-2 border-gray-200 rounded-lg p-2 w-full"
                                aria-label="Email"
                            />
                        </div>

                        {/* Subject */}
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bree-serif text-gray-800">Subject:</h1>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                className="border-2 border-gray-200 rounded-lg p-2 w-full"
                                aria-label="Subject"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bree-serif text-gray-800">Message:</h1>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                                className="border-2 border-gray-200 rounded-lg p-2 w-full h-40"
                                aria-label="Message"
                            />
                        </div>

                        {/* Submit Button */}
                        <button className="bg-blue-500 text-white rounded-lg p-3 w-full hover:bg-blue-600 transition">
                            Send
                        </button>
                    </form>

                    {/* Submission Status Message */}
                    {result && (
                        <p className={`mt-4 text-lg ${result.includes("✅") ? "text-green-500" : "text-red-500"}`}>
                            {result}
                        </p>
                    )}
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
