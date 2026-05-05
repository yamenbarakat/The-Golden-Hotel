"use client";

// Metadata is handled in layout since this is a client component

import { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function Page() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    // Simulate sending delay — wire up to an email provider (e.g. Resend / Nodemailer) here
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl sm:text-4xl mb-3 text-accent-400 font-medium">
        Get in Touch
      </h1>
      <p className="text-primary-300 text-base sm:text-lg mb-12">
        We&apos;d love to hear from you. Whether you have a question about our
        rooms, a special request, or simply want to say hello &mdash; our team
        is ready to help.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="text-xl font-semibold text-primary-100 mb-6 uppercase tracking-widest text-sm">
              Contact Information
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPinIcon className="h-6 w-6 text-accent-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-primary-100">Address</p>
                  <p className="text-primary-300">
                    12 Golden Avenue, Downtown<br />
                    City Centre, GH 10001
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <PhoneIcon className="h-6 w-6 text-accent-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-primary-100">Phone</p>
                  <p className="text-primary-300">+1 (555) 012-3456</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <EnvelopeIcon className="h-6 w-6 text-accent-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-primary-100">Email</p>
                  <p className="text-primary-300">hello@thegoldenhotel.com</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="border-t border-primary-800 pt-8">
            <h2 className="text-sm font-semibold text-primary-100 mb-4 uppercase tracking-widest">
              Hours
            </h2>
            <ul className="space-y-2 text-primary-300">
              <li className="flex justify-between">
                <span>Reception</span>
                <span>24 / 7</span>
              </li>
              <li className="flex justify-between">
                <span>Concierge</span>
                <span>24 / 7</span>
              </li>
              <li className="flex justify-between">
                <span>Restaurant</span>
                <span>6:30 am &ndash; 11 pm</span>
              </li>
              <li className="flex justify-between">
                <span>Spa &amp; Pool</span>
                <span>7 am &ndash; 10 pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center text-center py-20 gap-6 border border-primary-800 bg-primary-900">
              <CheckCircleIcon className="h-16 w-16 text-accent-500" />
              <h2 className="text-2xl font-semibold text-primary-100">
                Message Sent!
              </h2>
              <p className="text-primary-300 max-w-sm">
                Thank you for reaching out. A member of our team will be in
                touch with you shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 bg-accent-500 px-6 py-3 text-primary-950 font-semibold uppercase tracking-widest hover:bg-accent-400 transition-all text-sm"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-primary-200 uppercase tracking-widest"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 bg-primary-900 border border-primary-700 text-primary-100 placeholder-primary-600 focus:outline-none focus:border-accent-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-primary-200 uppercase tracking-widest"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-primary-900 border border-primary-700 text-primary-100 placeholder-primary-600 focus:outline-none focus:border-accent-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-primary-200 uppercase tracking-widest"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Room enquiry, Special request..."
                  className="w-full px-4 py-3 bg-primary-900 border border-primary-700 text-primary-100 placeholder-primary-600 focus:outline-none focus:border-accent-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-primary-200 uppercase tracking-widest"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 bg-primary-900 border border-primary-700 text-primary-100 placeholder-primary-600 focus:outline-none focus:border-accent-500 transition-colors resize-none"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="bg-accent-500 px-8 py-4 text-primary-950 font-semibold uppercase tracking-widest hover:bg-accent-400 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-3"
                >
                  {status === "sending" ? (
                    <>
                      <span className="spinner-mini" />
                      Sending&hellip;
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
