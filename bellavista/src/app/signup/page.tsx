"use client";

import React, { useState } from "react";
import Image from "next/image";

import Link from "next/link";
import { Navbar } from "@/components/ui/NavBar";

import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface SignupForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  verifyPassword: string;
}

const SignupPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<SignupForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    verifyPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.firstName || !formData.lastName) {
      toast.error("Please enter your full name");
      return false;
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    if (!formData.phone || !/^\+?[\d\s-]{8,}$/.test(formData.phone)) {
      toast.error("Please enter a valid phone number");
      return false;
    }

    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return false;
    }

    if (formData.password !== formData.verifyPassword) {
      toast.error("Passwords do not match");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      localStorage.setItem("verificationEmail", formData.email);
      router.push("/verification");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative  bg-black h-screen w-full overflow-hidden">
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

        {/* Left Side Content */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 p-12">
          <h1 className="text-[#E3C08D] text-5xl font-seasons mb-2">
            BELLAVISTA
          </h1>
          <p className="text-[#E3C08D] text-2xl font-seasons mb-6">
            Where Your Vacation Story Begins
          </p>
          <button
            onClick={() => router.push("/login")}
            className="text-[#E3C08D] text-xl font-seasons flex items-center"
          >
            Log in now
            <svg
              className="ml-2 w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Form Container */}
        <div className="absolute right-0  -translate-y-1/2 p-12">
          <div className=" opacity-80 backdrop-blur-sm rounded-3xl px-12 py-8 w-[500px] border border-[#E3C08D]">
            <Link href="/">
              <Image
                src="/bellavistaIcon.png"
                alt="Bellavista Logo"
                width={150}
                height={50}
                className="object-contain  items-center justify-center "
              />
            </Link>
            <h2 className="text-[#E3C08D] text-xl font-seasons text-center mb-8">
              Where Your Vacation Story Begins
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[#E3C08D] text-lg font-seasons mb-2 block">
                    first name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="ex: azemray"
                    className="w-full bg-[#1A1A1A] border border-[#E3C08D] rounded-md p-2 text-[#E3C08D] placeholder-[#E3C08D]/60"
                  />
                </div>
                <div>
                  <label className="text-[#E3C08D] text-lg font-seasons mb-2 block">
                    last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="ex: oualid"
                    className="w-full bg-[#1A1A1A] border border-[#E3C08D] rounded-md p-2 text-[#E3C08D] placeholder-[#E3C08D]/60"
                  />
                </div>
              </div>

              <div>
                <label className="text-[#E3C08D] text-lg font-seasons mb-2 block">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="oualidazemray@email.xyz"
                  className="w-full bg-[#1A1A1A] border border-[#E3C08D] rounded-md p-2 text-[#E3C08D] placeholder-[#E3C08D]/60"
                />
              </div>

              <div>
                <label className="text-[#E3C08D] text-lg font-seasons mb-2 block">
                  phone numbre
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+212505050505"
                  className="w-full bg-[#1A1A1A] border border-[#E3C08D] rounded-md p-2 text-[#E3C08D] placeholder-[#E3C08D]/60"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[#E3C08D] text-lg font-seasons mb-2 block">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••••••••"
                    className="w-full bg-[#1A1A1A] border border-[#E3C08D] rounded-md p-2 text-[#E3C08D]"
                  />
                </div>
                <div>
                  <label className="text-[#E3C08D] text-lg font-seasons mb-2 block">
                    Verifile password
                  </label>
                  <input
                    type="password"
                    name="verifyPassword"
                    value={formData.verifyPassword}
                    onChange={handleInputChange}
                    placeholder="••••••••••••••"
                    className="w-full bg-[#1A1A1A] border border-[#E3C08D] rounded-md p-2 text-[#E3C08D]"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center space-y-6">
                <button
                  type="submit"
                  className="bg-transparent border border-[#E3C08D] text-[#E3C08D] px-8 py-2 rounded-full hover:bg-[#E3C08D]/10 transition-colors"
                >
                  sign-up
                </button>

                <div className="w-full flex items-center">
                  <div className="flex-grow h-px bg-[#E3C08D]"></div>
                  <span className="px-4 text-[#E3C08D]">Or</span>
                  <div className="flex-grow h-px bg-[#E3C08D]"></div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    className="flex items-center space-x-2 bg-[#1A1A1A] px-4 py-2 rounded-md border border-[#E3C08D]"
                  >
                    <Image
                      src="/google-icon.png"
                      alt="Google"
                      width={20}
                      height={20}
                    />
                    <span className="text-[#E3C08D]">oogle</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center space-x-2 bg-[#1A1A1A] px-4 py-2 rounded-md border border-[#E3C08D]"
                  >
                    <Image
                      src="/facebook-icon.png"
                      alt="Facebook"
                      width={20}
                      height={20}
                    />
                    <span className="text-[#E3C08D]">acebook</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
