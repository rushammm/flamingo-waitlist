import React, { useState } from "react";

function PhoneForm() {
  const [showPopup, setShowPopup] = useState(false);

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
      setShowPopup(true);
      form.reset();
    } else {
      alert("Error submitting email");
    }
  };

  return (
    <div className="relative w-full">
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm transition-all"></div>
          <div className="relative z-10 flex flex-col items-center justify-center px-8 py-10 rounded-2xl shadow-xl bg-white/90 border border-white max-w-sm mx-auto" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontWeight: 900 }}>Thank You!</h2>
            <p className="text-base text-gray-700 mb-6 text-center" style={{ fontWeight: 400 }}>
              You&apos;re on the waitlist for FASAANA.<br />We&apos;ll keep you updated!
            </p>
            <button
              className="px-6 py-2 rounded-lg bg-white text-gray-900 font-bold text-xs border border-gray-300 shadow hover:bg-gray-100 transition"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 900 }}
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
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
    </div>
  );
}

export default PhoneForm;
