"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";
<<<<<<< Updated upstream:bellavista/src/components/ui/NavBar.tsx
=======
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Hotel,
  Phone,
  LogIn,
  Menu,
  X,
  Coffee,
  UserRoundPlus,
} from "lucide-react";
>>>>>>> Stashed changes:bellavista/src/components/home/NavBar.tsx

export function Navbar() {
  const { setTheme, theme } = useTheme();

  return (
<<<<<<< Updated upstream:bellavista/src/components/ui/NavBar.tsx
    <header className="fixed top-0 left-0 right-0 z-20 bg-gradient-to-b from-black to-transparent">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center right-0">
          <Link href="/">
            <Image
              src="/bellavistaIcon.png"
              alt="Bellavista Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </Link>
=======
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
            <NavLink href="/auth/signup" icon={<UserRoundPlus size={18} />}>
              Sign up
            </NavLink>
            <NavLink href="/auth/login" icon={<LogIn size={18} />}>
              Sign in
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
                  href="/auth/signup"
                  onClick={toggleMenu}
                  icon={<LogIn size={20} />}
                >
                  <span className="flex items-center gap-3">
                    <UserRoundPlus size={20} /> Sign up
                  </span>
                </NavLink>
                <NavLink
                  href="/auth/login"
                  onClick={toggleMenu}
                  icon={<LogIn size={20} />}
                >
                  <span className="flex items-center gap-3">
                    <LogIn size={20} /> login
                  </span>
                </NavLink>
              </motion.nav>
            )}
          </AnimatePresence>
>>>>>>> Stashed changes:bellavista/src/components/home/NavBar.tsx
        </div>

        <nav className="flex items-center gap-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/facilities">Facilities</NavLink>
          <NavLink href="/rooms">Rooms</NavLink>
          <NavLink href="/contact-us">Contact-us</NavLink>

          {/* Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-white/20 bg-transparent hover:bg-white/10"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-white dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all text-white dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}

// Custom NavLink component with hover effect matching the image
function NavLink({ href, children }) {
  return (
    <Link href={href} className="relative group">
      <span className="px-4 py-2 text-white transition-colors duration-300 group-hover:text-white">
        {children}
      </span>
      <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
    </Link>
  );
}
