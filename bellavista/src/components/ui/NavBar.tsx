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

export function Navbar() {
  const { setTheme, theme } = useTheme();

  return (
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
