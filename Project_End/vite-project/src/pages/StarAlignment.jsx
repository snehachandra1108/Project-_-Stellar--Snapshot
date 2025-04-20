import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { DateContext } from '../context/DateContext.jsx';

const StarAlignment = () => {
  const { selectedDate } = useContext(DateContext);
  const [starData, setStarData] = useState(null);
  const [error, setError] = useState(null);

  // Fetch star data on component mount or when selectedDate changes
  useEffect(() => {
    if (!selectedDate) return;

    const fetchStarData = async () => {
      try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${selectedDate}`);
        if (!response.ok) {
          throw new Error('Failed to fetch star data');
        }
        const data = await response.json();
        setStarData(data);
      } catch (err) {
        setError('Error fetching data');
        console.error(err);
      }
    };

    fetchStarData();
  }, [selectedDate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1 className="text-3xl font-bold mb-6">Star Alignment on {selectedDate}</h1>
      {error && <p className="text-red-400">{error}</p>}
      {starData ? (
        <div className="space-y-4 text-center max-w-lg">
          <h2 className="text-xl font-semibold">{starData.title}</h2>
          <img src={starData.url} alt={starData.title} className="w-full h-auto rounded-md shadow-md" />
          <p>{starData.explanation}</p>
        </div>
      ) : (
        <p>Loading star alignment data...</p>
      )}
    </div>
  );
};

export default StarAlignment;
