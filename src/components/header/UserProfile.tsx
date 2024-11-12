import React, { useState } from 'react';

export default function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
          <span className="text-sm font-medium">JD</span>
        </div>
        <span className="font-medium">John Doe</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-10">
          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Profile
          </button>
          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Settings
          </button>
          <hr className="my-1" />
          <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}