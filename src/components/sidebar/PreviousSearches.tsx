import React from 'react';

export default function PreviousSearches() {
  const searches = [
    { id: 1, destination: 'Paris', date: '2024-06-15', duration: '7 days' },
    { id: 2, destination: 'Tokyo', date: '2024-07-20', duration: '10 days' },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-gray-800">Previous Searches</h2>
      <div className="space-y-2">
        {searches.map((search) => (
          <button
            key={search.id}
            className="w-full p-3 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="font-medium text-gray-800">{search.destination}</div>
            <div className="text-sm text-gray-500">
              {search.date} · {search.duration}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}