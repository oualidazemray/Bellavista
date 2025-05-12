"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Bell,
  Clock,
  UserCog,
  Calendar,
  Building2,
  LogOut,
  User2,
} from "lucide-react";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [notificationCount, setNotificationCount] = useState(1);
  const router = useRouter();

  return (
    <aside
      className={`fixed right-0 top-0 h-screen bg-black opacity-80 backdrop-blur-sm border-l border-[#E3C08D] rounded-l-3xl px-6 py-8 transition-all duration-300 ease-in-out ${
        isExpanded ? "w-[280px]" : "w-20"
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col h-full">
        {/* Profile Section */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-12 rounded-full bg-[#E3C08D]/10 flex items-center justify-center">
            <User2 className="w-6 h-6 text-[#E3C08D]" />
          </div>
          <div>
            <h2 className="text-[#E3C08D] font-seasons text-lg">
              oualidazemray
            </h2>
            <p className="text-[#E3C08D]/60 text-sm">
              {new Date().toLocaleString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1">
          <ul className="space-y-6">
            <li>
              <Link
                href="/ClientDashboard/notifications"
                className="flex items-center text-[#E3C08D] hover:text-[#E3C08D]/80 transition-colors"
              >
                <Bell className="w-6 h-6 mr-3" />
                <span className="font-seasons text-lg">Notifications</span>
                {notificationCount > 0 && (
                  <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {notificationCount}
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/historic"
                className="flex items-center text-[#E3C08D] hover:text-[#E3C08D]/80 transition-colors"
              >
                <Clock className="w-6 h-6 mr-3" />
                <span className="font-seasons text-lg">Historic</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/profile"
                className="flex items-center text-[#E3C08D] hover:text-[#E3C08D]/80 transition-colors"
              >
                <UserCog className="w-6 h-6 mr-3" />
                <span className="font-seasons text-lg">Edit profile</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/booking"
                className="flex items-center text-[#E3C08D] hover:text-[#E3C08D]/80 transition-colors"
              >
                <Calendar className="w-6 h-6 mr-3" />
                <span className="font-seasons text-lg">booking</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/facilities"
                className="flex items-center text-[#E3C08D] hover:text-[#E3C08D]/80 transition-colors"
              >
                <Building2 className="w-6 h-6 mr-3" />
                <span className="font-seasons text-lg">Facilities</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Logout Button */}
        <button
          onClick={() => router.push("/login")}
          className="flex items-center text-[#E3C08D] hover:text-[#E3C08D]/80 transition-colors mt-auto"
        >
          <LogOut className="w-6 h-6 mr-3" />
          <span className="font-seasons text-lg">Log Out</span>
        </button>
      </div>
    </aside>
  );
};
export default Sidebar;
