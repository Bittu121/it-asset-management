import React from "react";
import { Search, Bell, MessageCircle } from "lucide-react";

const Navbar = () => {
  console.log("Navbar Loaded");
  return (
    <>
      <div className="w-full h-16 bg-white border-b px-6 flex items-center justify-between">
        {/* Search */}
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-[400px]">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search coins, markets, or portfolio..."
            className="bg-transparent outline-none ml-2 w-full text-sm"
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <MessageCircle className="text-gray-600 cursor-pointer" />
          <Bell className="text-gray-600 cursor-pointer" />

          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-9 h-9 rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
