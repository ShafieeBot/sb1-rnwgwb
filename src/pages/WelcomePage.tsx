import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function WelcomePage() {
  const navigate = useNavigate();

  const handleStartPlanning = () => {
    navigate('/chat');
  };

  return (
    <div className="welcome-gradient min-h-screen flex items-center justify-center">
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">TravelAI</h1>
        <p className="text-xl text-white mb-8">Your Personal Travel Planner</p>
        
        <button
          onClick={handleStartPlanning}
          className="bg-indigo-600 text-white font-bold rounded-xl px-6 py-4 w-3/4 mb-8 hover:bg-indigo-700 transition-colors"
        >
          Start Planning
        </button>
        
        <div className="flex flex-col gap-4">
          <button className="bg-white text-black font-semibold rounded-lg p-4 w-64 mx-auto hover:bg-gray-50 transition-colors">
            Sign in with Google
          </button>
          <button className="bg-black text-white font-semibold rounded-lg p-4 w-64 mx-auto hover:bg-gray-900 transition-colors">
            Sign in with Apple
          </button>
          <button className="bg-gray-100 text-black font-semibold rounded-lg p-4 w-64 mx-auto hover:bg-gray-200 transition-colors">
            Sign in with Email
          </button>
        </div>
      </div>
    </div>
  );
}