"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Hotel, Phone, LogIn, Menu, X, Coffee } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-20 bg-gradient-to-b from-black  to-transparent">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
          {/* Logo - Hidden on mobile */}
          <div className="hidden sm:flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/bellavistaIcon.png"
                alt="Bellavista Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-start gap-2 lg:gap-6">
            <NavLink href="/" icon={<Home size={18} />}>
              Home
            </NavLink>
            <NavLink href="/facilities" icon={<Coffee size={18} />}>
              Facilities
            </NavLink>
            <NavLink href="/rooms" icon={<Hotel size={18} />}>
              Rooms
            </NavLink>
            <NavLink href="/contact-us" icon={<Phone size={18} />}>
              Contact
            </NavLink>
            <NavLink href="/signup" icon={<LogIn size={18} />}>
              Sign In
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full left-0 w-full bg-black bg-opacity-50 text-white flex flex-col justify-start items-start py-4 space-y-4 md:hidden"
              >
                <NavLink
                  href="/"
                  onClick={toggleMenu}
                  icon={<Home size={20} />}
                >
                  <span className="flex items-center gap-3">
                    <Home size={20} /> Home
                  </span>
                </NavLink>
                <NavLink
                  href="/facilities"
                  onClick={toggleMenu}
                  icon={<Coffee size={20} />}
                >
                  <span className="flex items-center gap-3">
                    <Coffee size={20} /> Facilities
                  </span>
                </NavLink>
                <NavLink
                  href="/rooms"
                  onClick={toggleMenu}
                  icon={<Hotel size={20} />}
                >
                  <span className="flex items-center gap-3">
                    <Hotel size={20} /> Rooms
                  </span>
                </NavLink>
                <NavLink
                  href="/contact-us"
                  onClick={toggleMenu}
                  icon={<Phone size={20} />}
                >
                  <span className="flex items-center gap-3">
                    <Phone size={20} /> Contact
                  </span>
                </NavLink>
                <NavLink
                  href="/signup"
                  onClick={toggleMenu}
                  icon={<LogIn size={20} />}
                >
                  <span className="flex items-center gap-3">
                    <LogIn size={20} /> Sign In
                  </span>
                </NavLink>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>
      {/* Spacer div to prevent content from being hidden under the navbar */}
      <div className="h-20"></div>
    </>
  );
}

// Custom NavLink component with hover effect, animation, and icon
function NavLink({
  href,
  children,
  onClick,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative group w-full md:w-auto flex items-center justify-center md:justify-start gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-800"
      onClick={onClick}
    >
      {icon && (
        <span className="hidden md:inline text-white/70 group-hover:text-white transition-colors duration-300">
          {icon}
        </span>
      )}
      <span className="text-white/90 transition-colors duration-300 group-hover:text-white">
        {children}
      </span>
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-white rounded-full w-0 group-hover:w-2/3 transition-all duration-300"></span>
    </Link>
  );
}
