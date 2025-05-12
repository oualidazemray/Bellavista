"use client";

import React from "react";
import Image from "next/image";
import { MailCheck } from "lucide-react";

const VerificationPage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute opacity-50 inset-0 w-full h-full">
        <Image
          src="/beachBack.jpg"
          alt="Beach sunset background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Verification Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black opacity-80 backdrop-blur-sm rounded-3xl px-16 py-12 max-w-xl border border-[#E3C08D]">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-[#E3C08D] text-4xl font-seasons mb-2">
              BELLAVISTA
            </h1>
            <p className="text-[#E3C08D] text-xl font-seasons">
              Where Your Vacation Story Begins
            </p>
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-[#E3C08D]/10 flex items-center justify-center">
              <MailCheck className="w-10 h-10 text-[#E3C08D]" />
            </div>
          </div>

          {/* Message */}
          <div className="text-center space-y-4">
            <h2 className="text-[#E3C08D] text-2xl font-seasons">
              Verify your email
            </h2>
            <p className="text-[#E3C08D]/80 text-lg leading-relaxed">
              We've sent a verification link to
              <br />
              <span className="text-[#E3C08D] font-medium">
                oualidazemray@email.xyz
              </span>
            </p>
            <p className="text-[#E3C08D]/70 text-base mt-6">
              Please check your inbox and click the verification link to
              complete your registration.
            </p>
          </div>

          {/* Resend Button */}
          <div className="mt-8 text-center">
            <p className="text-[#E3C08D]/60 text-sm mb-2">
              Didn't receive the email?
            </p>
            <button
              className="bg-transparent border border-[#E3C08D] text-[#E3C08D] px-8 py-2 rounded-full hover:bg-[#E3C08D]/10 transition-colors"
              onClick={() => {
                /* Add resend logic here */
              }}
            >
              Resend verification email
            </button>
          </div>

          {/* Current Time */}
          <div className="mt-8 text-center text-[#E3C08D]/40 text-sm">
            {new Date().toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
