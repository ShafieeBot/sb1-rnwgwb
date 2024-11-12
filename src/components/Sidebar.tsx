import React from 'react';
import PreviousSearches from './sidebar/PreviousSearches';
import RecommendedItineraries from './sidebar/RecommendedItineraries';
import SavedItineraries from './sidebar/SavedItineraries';

export default function Sidebar() {
  return (
    <div className="w-80 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-4 space-y-6">
        <PreviousSearches />
        <RecommendedItineraries />
        <SavedItineraries />
      </div>
    </div>
  );
}