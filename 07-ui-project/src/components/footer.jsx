"use client";

import { useState } from "react";

export default function Footer() {
  const [activeTab, setActiveTab] = useState("benefits");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex  flex-col border-t border-gray-200">
      {/* Navigation Tabs */}
      <nav className="">
        <div className="flex gap-8 px-6 py-6">
          <button
            onClick={() => setActiveTab("benefits")}
            className={`text-base font-medium transition-colors ${
              activeTab === "benefits"
                ? "text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Benefits
          </button>
          <button
            onClick={() => setActiveTab("specifications")}
            className={`text-base font-medium transition-colors ${
              activeTab === "specifications"
                ? "text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Specifications
          </button>
          <button
            onClick={() => setActiveTab("how-to")}
            className={`text-base font-medium transition-colors ${
              activeTab === "how-to"
                ? "text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            How-to
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-between  p-6">
        {/* Logo/Icon */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-20 relative">
            <img src="/logo.png" alt="logo" />
          </div>
          <div>© Area. {currentYear}</div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <div>All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
}
