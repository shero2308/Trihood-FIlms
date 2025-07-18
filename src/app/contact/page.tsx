"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Icons
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import BusinessIcon from "@mui/icons-material/Business";

// --- Types ---
type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

// --- Helpers ---
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

// Replace with real contact info
const CONTACT_INFO = {
  email: "hello@trihoodfilms.com",
  phone: "+91 9876543210",
  whatsapp: "+91 9876543210",
  whatsappLink: "https://wa.me/919876543210",
  addressLine: "XYZ Street, ABC City, India",
};

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((s) => ({ ...s, [name]: value }));
    // clear error as user types
    setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!formData.name.trim()) e.name = "Please enter your name.";
    if (!formData.email.trim()) e.email = "Please enter your email.";
    else if (!isEmail(formData.email)) e.email = "Please enter a valid email.";
    if (!formData.subject.trim()) e.subject = "Please enter a subject.";
    if (!formData.message.trim()) e.message = "Please enter a message.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      setResult("Please fix the errors below.");
      return;
    }

    setIsSending(true);
    setResult("Sending...");

    try {
      const data = new FormData();
      data.append("access_key", "030e09bd-ee16-4a6c-b86a-1b7dc7cc4d05"); // consider env var
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
        setResult("✅ Form submitted successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setResult("❌ Submission failed. Try again.");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setResult("❌ Network error. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-full bg-black text-white font-sans">
      <Navbar />

      {/* Contact Heading */}
      <header className="flex flex-col items-center text-center px-4 pt-32">
        <h1
          className="font-kanit text-2xl md:text-4xl lg:text-5xl mt-10 font-bold tracking-tight"
          style={{ color: "#fdb713" }}
        >
          Contact Us
        </h1>
      </header>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 px-4 md:px-10 lg:px-20 pt-16 pb-20">
        {/* Contact Details */}
        <div className="flex flex-col items-center text-center">
          <h2
            className="font-bree-serif text-3xl font-semibold"
            style={{ color: "#fdb713" }}
          >
            Contact Details
          </h2>

          <ul className="flex flex-col items-center gap-8 mt-10 text-lg">
            {/* Email */}
            <li className="flex flex-col items-center gap-1">
              <span className="font-bree-serif text-gray-300 flex items-center gap-2">
                <EmailIcon fontSize="small" /> Email
              </span>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="font-kanit text-gray-100 hover:text-[#fdb713] transition"
              >
                {CONTACT_INFO.email}
              </a>
            </li>

            {/* Phone */}
            <li className="flex flex-col items-center gap-1">
              <span className="font-bree-serif text-gray-300 flex items-center gap-2">
                <LocalPhoneIcon fontSize="small" /> Phone
              </span>
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
                className="font-kanit text-gray-100 hover:text-[#fdb713] transition"
              >
                {CONTACT_INFO.phone}
              </a>
            </li>

            {/* WhatsApp */}
            <li className="flex flex-col items-center gap-1">
              <span className="font-bree-serif text-gray-300 flex items-center gap-2">
                <WhatsAppIcon fontSize="small" className="text-green-500" /> WhatsApp
              </span>
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-kanit text-gray-100 hover:text-[#fdb713] transition"
              >
                {CONTACT_INFO.whatsapp}
              </a>
            </li>

            {/* Address */}
            <li className="flex flex-col items-center gap-1 max-w-xs">
              <span className="font-bree-serif text-gray-300 flex items-center gap-2">
                <BusinessIcon fontSize="small" /> Address
              </span>
              <p className="font-kanit text-gray-100">{CONTACT_INFO.addressLine}</p>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col items-center text-center w-full">
          <h2
            className="font-bree-serif text-3xl font-semibold"
            style={{ color: "#fdb713" }}
          >
            Get in Touch
          </h2>

          <form
            onSubmit={onSubmit}
            className="w-full max-w-md mt-10 space-y-6 text-left"
            noValidate
          >
            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="block font-bree-serif text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`border-2 rounded-lg p-3 w-full bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#fdb713] ${errors.name ? "border-red-500" : "border-gray-600"
                  }`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "error-name" : undefined}
              />
              {errors.name && (
                <p id="error-name" className="mt-1 text-sm text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="block font-bree-serif text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`border-2 rounded-lg p-3 w-full bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#fdb713] ${errors.email ? "border-red-500" : "border-gray-600"
                  }`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "error-email" : undefined}
              />
              {errors.email && (
                <p id="error-email" className="mt-1 text-sm text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="contact-subject"
                className="block font-bree-serif text-gray-300 mb-1"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className={`border-2 rounded-lg p-3 w-full bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#fdb713] ${errors.subject ? "border-red-500" : "border-gray-600"
                  }`}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "error-subject" : undefined}
              />
              {errors.subject && (
                <p id="error-subject" className="mt-1 text-sm text-red-500">
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="block font-bree-serif text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className={`border-2 rounded-lg p-3 w-full h-40 resize-none bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#fdb713] ${errors.message ? "border-red-500" : "border-gray-600"
                  }`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "error-message" : undefined}
              />
              {errors.message && (
                <p id="error-message" className="mt-1 text-sm text-red-500">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSending}
              className={`rounded-lg p-3 w-full font-medium transition ${isSending
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-[#fdb713] text-black hover:scale-105 hover:shadow-lg"
                }`}
            >
              {isSending ? "Sending..." : "Send"}
            </button>
          </form>

          {/* Submission Status Message */}
          {result && (
            <p
              className={`mt-4 text-lg ${result.startsWith("✅")
                  ? "text-green-500"
                  : result.startsWith("❌")
                    ? "text-red-500"
                    : "text-gray-300"
                }`}
            >
              {result}
            </p>
          )}
        </div>
      </div>

      {/* Parallax & Footer */}
      <div className="pt-40">
        <Footer />
      </div>
    </div>
  );
}
