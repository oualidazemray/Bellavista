"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/ui/NavBar";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Lock,
  ShieldCheck,
  ArrowRight,
  LogIn,
  ChevronRight,
} from "lucide-react";

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <>
      <Navbar />
      <div className="relative  min-h-screen w-full overflow-hidden">
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

        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 md:p-0 relative z-10">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 mb-6 md:mb-0 text-center md:text-left p-4 md:p-12"
          >
            <h1 className="text-[#E3C08D] text-4xl md:text-5xl font-seasons mb-2">
              BELLAVISTA
            </h1>
            <p className="text-[#E3C08D] text-xl md:text-2xl font-seasons mb-6">
              Where Your Vacation Story Begins
            </p>
            <motion.button
              whileHover={{ x: 10 }}
              onClick={() => router.push("/login")}
              className="text-[#E3C08D] text-xl font-seasons flex items-center mx-auto md:mx-0"
            >
              Log in now
              <LogIn className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 max-w-lg mx-auto py-8"
          >
            <div className="bg-black bg-opacity-25 backdrop-blur-sm rounded-3xl px-6 py-8 md:px-12 w-full border border-[#E3C08D]">
              <div className="flex justify-center mb-4">
                <Link href="/">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src="/bellavistaIcon.png"
                      alt="Bellavista Logo"
                      width={150}
                      height={50}
                      className="object-contain"
                    />
                  </motion.div>
                </Link>
              </div>
              <h2 className="text-[#E3C08D] text-lg md:text-xl font-seasons text-center mb-8">
                Where Your Vacation Story Begins
              </h2>

              {/* Form */}
              <motion.form
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <div>
                    <label className="text-[#E3C08D] text-lg font-seasons mb-2 block">
                      first name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={18} className="text-[#E3C08D]" />
                      </div>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="ex: azemray"
                        className="w-full bg-[#1A1A1A] border border-[#E3C08D] rounded-md p-2 pl-10 text-[#E3C08D] placeholder-[#E3C08D]/60"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#E3C08D] text-lg font-seasons mb-2 block">
                      last name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={18} className="text-[#E3C08D]" />
                      </div>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="ex: oualid"
                        className="w-full bg-[#1A1A1A] border border-[#E3C08D] rounded-md p-2 pl-10 text-[#E3C08D] placeholder-[#E3C08D]/60"
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="text-[#E3C08D] text-lg font-seasons mb-2 block">
                    E-mail
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={18} className="text-[#E3C08D]" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="oualidazemray@email.xyz"
                      className="w-full bg-[#1A1A1A] border border-[#E3C08D] rounded-md p-2 pl-10 text-[#E3C08D] placeholder-[#E3C08D]/60"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="text-[#E3C08D] text-lg font-seasons mb-2 block">
                    phone number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone size={18} className="text-[#E3C08D]" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+212505050505"
                      className="w-full bg-[#1A1A1A] border border-[#E3C08D] rounded-md p-2 pl-10 text-[#E3C08D] placeholder-[#E3C08D]/60"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <div>
                    <label className="text-[#E3C08D] text-lg font-seasons mb-2 block">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock size={18} className="text-[#E3C08D]" />
                      </div>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="••••••••••••••"
                        className="w-full bg-[#1A1A1A] border border-[#E3C08D] rounded-md p-2 pl-10 text-[#E3C08D]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#E3C08D] text-lg font-seasons mb-2 block">
                      Verify password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <ShieldCheck size={18} className="text-[#E3C08D]" />
                      </div>
                      <input
                        type="password"
                        name="verifyPassword"
                        value={formData.verifyPassword}
                        onChange={handleInputChange}
                        placeholder="••••••••••••••"
                        className="w-full bg-[#1A1A1A] border border-[#E3C08D] rounded-md p-2 pl-10 text-[#E3C08D]"
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col items-center space-y-6"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="bg-transparent border border-[#E3C08D] text-[#E3C08D] px-8 py-2 rounded-full hover:bg-[#E3C08D]/10 transition-colors flex items-center"
                  >
                    sign-up
                    <ChevronRight className="ml-1 w-5 h-5" />
                  </motion.button>

                  <div className="w-full flex items-center">
                    <div className="flex-grow h-px bg-[#E3C08D]"></div>
                    <span className="px-4 text-[#E3C08D]">Or</span>
                    <div className="flex-grow h-px bg-[#E3C08D]"></div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      className="flex items-center justify-center gap-2 bg-[#1A1A1A] px-4 py-2 rounded-md border border-[#E3C08D]"
                    >
                      <Image
                        src="/google-icon.png"
                        alt="Google"
                        width={20}
                        height={20}
                      />
                      <span className="text-[#E3C08D]">oogle</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      className="flex items-center justify-center gap-2 bg-[#1A1A1A] px-4 py-2 rounded-md border border-[#E3C08D]"
                    >
                      <Image
                        src="/facebook-icon.png"
                        alt="Facebook"
                        width={20}
                        height={20}
                      />
                      <span className="text-[#E3C08D]">acebook</span>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
