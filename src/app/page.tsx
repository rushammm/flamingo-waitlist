"use client";

import React, { useEffect, useState } from "react";
import PhoneForm from "../components/PhoneForm";


function Countdown() {
  // 19th August 2025, 9:00 PM PKT (UTC+5)
  const launchDate = new Date("2025-08-19T16:00:00Z").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });


  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });

      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <div className="flex justify-center gap-6 mb-8">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <span className="text-6xl font-bold text-white" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 900 }}>{value.toString().padStart(2, "0")}</span>
          <span className="text-base uppercase text-white tracking-wide" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 900 }}>{label}</span>
        </div>
      ))}
    </div>
  );
}

function Page() {
  function throwConfetti() {
    if (typeof window !== 'undefined') {
      // Load confetti if not already loaded
      type ConfettiWindow = Window & { confetti?: () => void };
      const win = window as ConfettiWindow;
      if (!win.confetti) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
        script.async = true;
        script.onload = () => win.confetti && win.confetti();
        document.body.appendChild(script);
      } else {
        if (win.confetti) win.confetti();
      }
    }
  }
  return (
  <main className="min-h-screen flex flex-col justify-between" style={{backgroundImage: 'url(/bg.JPG)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: 1}}>
      {/* Animated Gradient Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 px-4 py-16 relative overflow-hidden">
  {/* Removed gradient and opacity layer for full image visibility */}
  <div className="rounded-xl shadow-lg p-8 w-full max-w-xl text-center relative z-10" style={{background: 'rgba(30, 30, 30, 0.35)'}}>
    {/* Import Noto Sans Black font from Google Fonts */}
  {/* Font import moved to layout.tsx for best practice */}
    <h1
      className="text-5xl mb-2 tracking-tight"
      style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 900, color: 'white' }}
    >
      FASAANA 
    </h1>
             {/* Font import moved to layout.tsx for best practice */}
             <p className="text-base text-white mb-6 italic tracking-wide animate-fade" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 300 }}>a new love-affair is about to unfold.</p>
          <Countdown />
          {/* Excitement Question */}
          <div className="flex flex-col items-center gap-6 w-full mt-8">
            <p className="text-lg text-white font-semibold" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 900 }}>How excited are you?</p>
            <div className="flex flex-row gap-4 justify-center">
              <button className="px-4 py-1 rounded-lg bg-transparent text-white font-bold text-sm border border-white hover:bg-white/10 transition" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 900 }} onClick={throwConfetti}>very much!</button>
              <button className="px-4 py-1 rounded-lg bg-transparent text-white font-bold text-sm border border-white hover:bg-white/10 transition" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 900 }} onClick={throwConfetti}>i can&apos;t wait!</button>
            </div>
          
          </div>
          {/* Phone number input for waitlist */}
          <div className="flex flex-col items-center gap-2 w-full mt-8">
            <PhoneForm />
          </div>
        </div>
      </section>
      {/* Tailwind custom keyframes for animation */}
      <style jsx global>{`
        @keyframes gradient {
          0% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
          100% {background-position: 0% 50%;}
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease-in-out infinite;
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 16px #e0e0e0, 0 0 2px #fff; }
          50% { text-shadow: 0 0 32px #bdbdbd, 0 0 8px #fff; }
        }
        .animate-glow {
          animation: glow 2.5s ease-in-out infinite;
        }
        @keyframes fadein {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein {
          animation: fadein 1.2s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade {
          animation: fade 1.5s ease-in both;
        }
      `}</style>

    </main>
  );
}

export default Page;
