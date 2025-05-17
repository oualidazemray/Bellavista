'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Clock,
  Settings,
  Pencil,
  X,
  ThumbsUp,
  ChevronRight,
  Menu,
  ChevronDown,
} from "lucide-react";

// Type definitions
type HistoryItem = {
  id: string;
  roomName: string;
  dateFrom: string;
  dateTo: string;
  price: number;
  currency: string;
  image: string;
  features: string[];
  level: number;
};

export default function HistoricComponent() {
  const router = useRouter();
  // Sample history data
  const [historyData, setHistoryData] = useState<HistoryItem[]>([
    {
      id: "1",
      roomName: "Chambre Supérieure Hivernage",
      dateFrom: "10-10-2025",
      dateTo: "15-10-2025",
      price: 6400,
      currency: "MAD",
      image: "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg",
      features: ["Très grand lit", "Étage 2"],
      level: 0,
    },
    // ... rest of your history data ...
  ]);

  const [selectedHistory, setSelectedHistory] = useState(historyData[0]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Filter history data
  const filterHistory = (filter: string) => {
    setActiveFilter(filter);
    const currentDate = new Date('2025-05-16'); // Using the provided current date
    let filteredData = [...historyData];

    switch (filter) {
      case "recent":
        filteredData = historyData.filter(item => {
          const itemDate = new Date(item.dateFrom.split('-').reverse().join('-'));
          const diffDays = Math.floor((currentDate.getTime() - itemDate.getTime()) / (1000 * 60 * 60 * 24));
          return diffDays <= 30;
        });
        break;
      case "upcoming":
        filteredData = historyData.filter(item => {
          const itemDate = new Date(item.dateFrom.split('-').reverse().join('-'));
          return itemDate > currentDate;
        });
        break;
      case "past":
        filteredData = historyData.filter(item => {
          const itemDate = new Date(item.dateTo.split('-').reverse().join('-'));
          return itemDate < currentDate;
        });
        break;
      default:
        // "all" - reset to original data
        filteredData = [...historyData];
        break;
    }

    setHistoryData(filteredData);
  };

  // Toggle mobile sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Handle navigation
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  // Handle room details
  const handleRoomDetails = () => {
    router.push(`/room/${selectedHistory.id}`);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-amber-900 to-black text-amber-100">
      {/* Background blur/overlay */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1200/800')] bg-cover bg-center opacity-20"></div>

      <div className="relative px-2 sm:px-4 md:px-6">
        {/* Main container */}
        <div className="mx-auto max-w-6xl p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl md:rounded-3xl bg-black/80 border border-amber-900/50 shadow-2xl">
          {/* Header */}
          <div className="flex justify-between items-center mb-4 border-b border-amber-800/30 pb-2">
            {/* ... header content ... */}
          </div>

          {/* Content layout */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* ... sidebar and main content ... */}
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-3 mt-4 sm:mt-6">
              <button 
                onClick={() => handleNavigation('/feedback')}
                className="w-full border border-amber-600 rounded-md py-2 px-3 sm:px-4 flex items-center justify-center gap-1 sm:gap-2 hover:bg-amber-900/30 transition-colors mb-2 sm:mb-0"
              >
                <ThumbsUp className="h-4 w-4 sm:h-5 sm:w-5 text-amber-300" />
                <span className="text-amber-300 uppercase tracking-wide text-xs sm:text-sm">
                  FEEDBACK
                </span>
              </button>

              <button 
                onClick={() => handleNavigation('/edit')}
                className="w-full border border-amber-600 rounded-md py-2 px-3 sm:px-4 flex items-center justify-center gap-1 sm:gap-2 hover:bg-amber-900/30 transition-colors mb-2 sm:mb-0"
              >
                <Pencil className="h-4 w-4 sm:h-5 sm:w-5 text-amber-300" />
                <span className="text-amber-300 uppercase tracking-wide text-xs sm:text-sm">
                  EDIT
                </span>
              </button>

              <button 
                onClick={() => handleNavigation('/cancel')}
                className="w-full border border-amber-600 rounded-md py-2 px-3 sm:px-4 flex items-center justify-center gap-1 sm:gap-2 hover:bg-amber-900/30 transition-colors"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5 text-amber-300" />
                <span className="text-amber-300 uppercase tracking-wide text-xs sm:text-sm">
                  CANCEL
                </span>
              </button>
            </div>

            {/* ... rest of the component ... */}
          </div>
        </div>
      </div>
    </div>
  );
}