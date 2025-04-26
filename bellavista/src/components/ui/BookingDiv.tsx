"use client";

import { useState } from "react";
import { ChevronRight, Check } from "lucide-react";
import Image from "next/image";

import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Import CSS for the DatePicker
export default function BookingDiv() {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [promoCodeVisible, setPromoCodeVisible] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [arrivalDate, setArrivalDate] = useState(new Date()); // State for arrival date
  const [departureDate, setDepartureDate] = useState(new Date()); // State for departure date

  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => value > 0 && setter(value - 1);

  const handleBooking = () => {
    alert(
      `Booking for ${adults} adult(s) and ${children} child(ren). Promo code: ${
        promoCode || "None"
      }`
    );
  };

  return (
    <div className="w-full bg-black/60 backdrop-blur-md rounded-xl p-6 border border-white/20  ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Booking Title */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-serif text-white">BOOKING</h3>
        </div>

        {/* Dates */}
        <div className="flex flex-col sm:flex-row gap-6 text-center">
          <div>
            <p className="text-white font-serif mb-1">ARRIVAL</p>
            <DatePicker
              selected={arrivalDate}
              onChange={(date) => setArrivalDate(date)}
              dateFormat="dd MMM"
              className="text-amber-300 text-xl font-medium bg-transparent border-none"
            />
          </div>
          <div>
            <p className="text-white font-serif mb-1">DEPARTURE</p>
            <DatePicker
              selected={departureDate}
              onChange={(date) => setDepartureDate(date)}
              dateFormat="dd MMM"
              className="text-amber-300 text-xl font-medium bg-transparent border-none"
            />
          </div>
        </div>

        {/* Book Button */}
        <button
          onClick={handleBooking}
          className="bg-transparent border border-white/50 rounded-full px-8 py-2 text-white hover:bg-white/10 transition-all flex items-center gap-2"
        >
          BOOK <Check size={18} />
        </button>

        {/* Adults and Children Selector */}
        <div className="flex flex-col sm:flex-row gap-6 text-center">
          <div>
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

          <div>
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

        {/* Palm Tree */}
        <div className="absolute bottom-8 right-8 z-10 text-white dark:text-gray-200 text-3xl">
          <Image
            src="/palme.png"
            alt="Bellavista Logo"
            width={100}
            height={50}
            className="object-contain"
          />
        </div>
      </div>

      {/* Promo Code Button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setPromoCodeVisible(!promoCodeVisible)}
          className="text-white/80 flex items-center gap-1 hover:text-white transition-all"
        >
          <ChevronRight
            size={16}
            className={`transform transition-transform duration-300 ${
              promoCodeVisible ? "rotate-90" : ""
            }`}
          />
          ADD PROMOTION CODE
        </button>
      </div>

      {/* Promo Code Input */}
      {promoCodeVisible && (
        <div className="flex justify-center mt-4 animate-fade-in">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter promotion code"
            className="bg-black/40 border border-white/30 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300 w-full max-w-xs"
          />
        </div>
      )}
    </div>
  );
}
