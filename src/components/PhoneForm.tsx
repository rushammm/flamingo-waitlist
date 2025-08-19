"use client";
import React from "react";

function PhoneForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const data = { email };

    const response = await fetch("https://n8n-production-79a9.up.railway.app/webhook/eb7cde0a-2271-483a-97b2-e7fc4944cd79", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Email submitted!");
      form.reset();
    } else {
      alert("Error submitting email");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2 w-full mt-8">
      <input
        name="email"
        type="email"
        placeholder="Enter your email"
        required
        className="w-full max-w-xs px-4 py-2 rounded-lg border border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
        style={{ fontFamily: "Noto Sans, sans-serif", fontWeight: 400 }}
      />
      <div className="flex gap-2 w-full max-w-xs">
        <button
          type="submit"
          className="flex-1 px-6 py-2 rounded-lg bg-white/90 text-gray-900 font-bold text-xs shadow hover:bg-white transition"
          style={{ fontFamily: "Noto Sans, sans-serif", fontWeight: 900 }}
        >
          Join Waitlist
        </button>
        <a
          href="https://theflamingostoreofficial.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-6 py-2 rounded-lg bg-transparent border border-white text-white text-xs font-light hover:bg-white/10 transition text-center"
          style={{ fontFamily: "Noto Sans, sans-serif", fontWeight: 300 }}
        >
          Continue Shopping
        </a>
      </div>
    </form>
  );
}

export default PhoneForm;
