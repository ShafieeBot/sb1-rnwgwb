import React from 'react';

export default function SavedItineraries() {
  const savedTrips = [
    {
      id: 1,
      title: 'Summer in Greece',
      dates: 'Aug 15-22, 2024',
      status: 'Upcoming',
    },
    {
      id: 2,
      title: 'New York City',
      dates: 'Dec 10-15, 2024',
      status: 'Planning',
    },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-gray-800">Saved Itineraries</h2>
      <div className="space-y-2">
        {savedTrips.map((trip) => (
          <div
            key={trip.id}
            className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <div className="font-medium text-gray-800">{trip.title}</div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">{trip.dates}</span>
              <span className="text-indigo-600 font-medium">{trip.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}