import React from 'react';

export default function RecommendedItineraries() {
  const recommendations = [
    {
      id: 1,
      title: 'Weekend in Barcelona',
      description: 'Perfect 3-day cultural experience',
      image: '🏰',
    },
    {
      id: 2,
      title: 'Tokyo Adventure',
      description: 'Explore Japan\'s capital in 5 days',
      image: '🗼',
    },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-gray-800">Recommended Trips</h2>
      <div className="space-y-3">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="text-2xl">{rec.image}</div>
              <div>
                <div className="font-medium text-gray-800">{rec.title}</div>
                <div className="text-sm text-gray-500">{rec.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}