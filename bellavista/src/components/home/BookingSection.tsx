"use client";

import { useState } from "react";
import { ChevronRight, Check } from "lucide-react";

export default function BookingSection() {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [promoCodeVisible, setPromoCodeVisible] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  // Function to increment count
  const increment = (setter, value) => {
    setter(value + 1);
  };

  // Function to decrement count, but not below 0
  const decrement = (setter, value) => {
    if (value > 0) {
      setter(value - 1);
    }
  };

  return (
    <section className="relative bg-black/70 backdrop-blur-sm py-6">
      <div className="container mx-auto px-4">
        {/* Booking form wrapper */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          {/* BOOKING header */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-serif text-white">BOOKING</h3>
          </div>

          {/* Date selection */}
          <div className="flex flex-col sm:flex-row gap-6 mb-4 md:mb-0">
            <div className="text-center">
              <p className="text-white font-serif mb-1">ARRIVAL</p>
              <p className="text-amber-300 text-xl font-medium">12 MAI</p>
            </div>

            <div className="text-center">
              <p className="text-white font-serif mb-1">DEPARTURE</p>
              <p className="text-amber-300 text-xl font-medium">10 OCT</p>
            </div>
          </div>

          {/* Book button */}
          <div className="mb-4 md:mb-0">
            <button className="bg-transparent border border-white/50 rounded-full px-8 py-2 text-white hover:bg-white/10 transition-colors duration-300 flex items-center gap-2">
              BOOK <Check size={18} />
            </button>
          </div>

          {/* Guest count selector */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="text-center">
              <p className="text-white font-serif mb-1">ADULT(S)</p>
              <div className="flex items-center justify-center gap-3">
                <button
                  className="text-white text-xl"
                  onClick={() => decrement(setAdults, adults)}
                >
                  -
                </button>
                <span className="text-amber-300 text-xl font-medium">
                  {adults}
                </span>
                <button
                  className="text-white text-xl"
                  onClick={() => increment(setAdults, adults)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-white font-serif mb-1">CHILD(S)</p>
              <div className="flex items-center justify-center gap-3">
                <button
                  className="text-white text-xl"
                  onClick={() => decrement(setChildren, children)}
                >
                  -
                </button>
                <span className="text-amber-300 text-xl font-medium">
                  {children}
                </span>
                <button
                  className="text-white text-xl"
                  onClick={() => increment(setChildren, children)}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Palm tree icon */}
          <div className="text-white text-3xl hidden lg:block">🌴</div>
        </div>

        {/* Promotion code section */}
        <div className="flex justify-center mt-4">
          <button
            className="text-white/80 flex items-center gap-1 hover:text-white transition-colors"
            onClick={() => setPromoCodeVisible(!promoCodeVisible)}
          >
            <ChevronRight
              size={16}
              className={`transition-transform duration-300 ${
                promoCodeVisible ? "rotate-90" : ""
              }`}
            />
            ADD PROMOTION CODE
          </button>
        </div>

        {/* Promo code input - shows when toggled */}
        {promoCodeVisible && (
          <div className="flex justify-center mt-4">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter promotion code"
              className="bg-black/40 border border-white/30 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-300"
            />
          </div>
        )}
      </div>
    </section>
  );
}
