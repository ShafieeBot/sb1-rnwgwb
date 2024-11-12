import React from 'react';
import UserProfile from './header/UserProfile';

export default function Header() {
  return (
    <header className="bg-indigo-600 text-white p-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold">Chat with TravelAI</h1>
      <UserProfile />
    </header>
  );
}