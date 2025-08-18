"use client";
import React from "react";

function PhoneForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const data = { phone };

    const response = await fetch("http://localhost:5678/webhook-test/aa06e00b-c11d-4693-a4b1-0e9d886689af", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Phone number submitted!");
      form.reset();
    } else {
      alert("Error submitting phone number");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2 w-full mt-8">
      <input
        name="phone"
        type="text"
        placeholder="Enter your phone"
        required
        className="w-full max-w-xs px-4 py-2 rounded-lg border border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
        style={{ fontFamily: "Noto Sans, sans-serif", fontWeight: 400 }}
      />
      <button
        type="submit"
        className="px-6 py-2 rounded-lg bg-white/90 text-gray-900 font-bold text-sm shadow hover:bg-white transition"
        style={{ fontFamily: "Noto Sans, sans-serif", fontWeight: 900 }}
      >
        Join Waitlist
      </button>
    </form>
  );
}

export default PhoneForm;
