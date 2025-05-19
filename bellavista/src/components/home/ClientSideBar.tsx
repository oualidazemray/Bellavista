"use client";

import { useState } from "react";
import {
  Bell,
  Clock,
  UserRound,
  CalendarRange,
  Building2,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import NotificationComponent from "./ClientComps/NotificationComponent/page";
import HistoricComponent from "./ClientComps/HistoricComponent/page";
{
  /*


import ProfileComponent from "./ClientComps/ProfileComponent/page"; // Create this component as needed
import BookingComponent from "./ClientComps/BookingComponent/page"; // Create this component as needed
import FacilitiesComponent from "./ClientComps/FacilitiesComponent/page"; // Create this component as needed
*/
}

export default function ResponsiveSidebar() {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Notifications");

  // Check if device is mobile on mount and window resize
  useState(() => {
    if (typeof window !== "undefined") {
      // Check for window to avoid SSR issues
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Initial check
      checkIfMobile();

      // Add resize listener
      window.addEventListener("resize", checkIfMobile);

      // Clean up
      return () => window.removeEventListener("resize", checkIfMobile);
    }
  });

  const menuItems = [
    {
      icon: <Bell className="w-6 h-6" />,
      label: "Notifications",
      badge: 1,
      routerFun: () => {
        setActiveComponent("Notifications");
        if (isMobile) setMobileMenuOpen(false);
      },
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Historic",
      routerFun: () => {
        setActiveComponent("Historic");
        if (isMobile) setMobileMenuOpen(false);
      },
    },
    {
      icon: <UserRound className="w-6 h-6" />,
      label: "Edit profile",
      routerFun: () => {
        setActiveComponent("Edit profile");
        if (isMobile) setMobileMenuOpen(false);
      },
    },
    {
      icon: <CalendarRange className="w-6 h-6" />,
      label: "booking",
      routerFun: () => {
        setActiveComponent("booking");
        if (isMobile) setMobileMenuOpen(false);
      },
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      label: "Facilities",
      routerFun: () => {
        setActiveComponent("Facilities");
        if (isMobile) setMobileMenuOpen(false);
      },
    },
  ];

  const sidebarVariants = {
    expanded: { width: "280px" },
    collapsed: { width: "80px" },
  };

  const textVariants = {
    expanded: { opacity: 1, x: 0, display: "block" },
    collapsed: { opacity: 0, x: 20, display: "none" },
  };

  const mobileMenuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Render the active component based on sidebar selection
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "Notifications":
        return <NotificationComponent />;
      case "Historic":
        return <HistoricComponent />;
      case "Edit profile":
        return <div className="p-8 text-amber-100">Profile Content Here</div>;
      case "booking":
        return <div className="p-8 text-amber-100">Booking Content Here</div>;
      case "Facilities":
        return (
          <div className="p-8 text-amber-100">Facilities Content Here</div>
        );
      default:
        return <NotificationComponent />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Main Content */}
      <div className="flex-1 bg-amber-950 relative overflow-hidden">
        {/* Render the active component chosen from sidebar */}
        {renderActiveComponent()}
        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={toggleMobileMenu}
            className="absolute top-6 right-6 z-10 p-2 rounded-md bg-amber-900 bg-opacity-60 text-amber-100"
          >
            <Menu className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <motion.div
          className="fixed top-0 right-0 h-full w-full max-w-xs bg-black bg-opacity-80 z-50 flex flex-col text-amber-100 p-6"
          initial="closed"
          animate={mobileMenuOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
        >
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button onClick={toggleMobileMenu}>
              <X className="w-6 h-6 text-amber-100" />
            </button>
          </div>

          {/* User Avatar */}
          <div className="flex items-center mb-12">
            <div className="w-12 h-12 rounded-full bg-amber-900 flex items-center justify-center">
              <UserRound className="w-6 h-6 text-amber-100" />
            </div>
            <div className="ml-4 font-serif">User Profile</div>
          </div>

          {/* Menu Items for Mobile */}
          <div className="flex-1 flex flex-col space-y-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center cursor-pointer ${
                  activeComponent === item.label ? "text-amber-300" : ""
                }`}
                onClick={item.routerFun}
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="ml-4 font-serif">{item.label}</div>
                {item.badge && (
                  <div className="ml-auto">
                    <span className="bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {item.badge}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Logout for Mobile */}
          <div className="mt-auto pt-8 border-t border-amber-800">
            <div className="flex items-center cursor-pointer">
              <div className="w-10 h-10 flex items-center justify-center text-amber-100">
                <LogOut className="w-6 h-6" />
              </div>
              <div className="ml-4 font-serif">Log Out</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <motion.div
          className="bg-black opacity-80 border-l border-amber-800 h-full flex flex-col justify-between relative"
          initial="collapsed"
          animate={isExpanded ? "expanded" : "collapsed"}
          variants={sidebarVariants}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          {/* User Avatar */}
          <div className="mt-12 mb-12 flex justify-center">
            <div className="w-12 h-12 rounded-full bg-amber-900 flex items-center justify-center">
              <UserRound className="w-6 h-6 text-amber-100" />
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex-1 flex flex-col px-4 space-y-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center cursor-pointer ${
                  activeComponent === item.label
                    ? "text-amber-300"
                    : "text-amber-100"
                }`}
                onClick={item.routerFun}
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  {item.icon}
                </div>

                <motion.div
                  className="ml-4 font-serif"
                  variants={textVariants}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.div>

                {item.badge && (
                  <motion.div
                    className="ml-auto"
                    variants={textVariants}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {item.badge}
                    </span>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Logout */}
          <div className="mb-20 px-4">
            <div className="flex items-center cursor-pointer text-amber-100">
              <div className="w-10 h-10 flex items-center justify-center">
                <LogOut className="w-6 h-6" />
              </div>
              <motion.div
                className="ml-4 font-serif"
                variants={textVariants}
                transition={{ duration: 0.2 }}
                onClick={() => router.push("/login")}
              >
                Log Out
              </motion.div>
            </div>
          </div>

          {/* Expand/Collapse button */}
          <div className="absolute bottom-6 -left-5">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-amber-900 rounded-full p-2 text-amber-100"
            >
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.div>
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
