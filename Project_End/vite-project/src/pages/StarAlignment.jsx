import React, { useContext, useEffect, useState } from 'react';
import { DateContext } from '../context/DateContext.jsx';

const StarAlignment = () => {
  const { selectedDate } = useContext(DateContext);
  const [starData, setStarData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedDate) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_NASA_API_KEY}&date=${selectedDate}`
        );
        const data = await response.json();

        if (data.code === 400 || data.error) {
          setError('No data found for this date.');
          setStarData(null);
        } else {
          setStarData(data);
          setError('');
        }
      } catch (err) {
        setError('Failed to fetch data. Try again later.');
        setStarData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedDate]);

  if (!selectedDate) {
    return <p className="text-center text-white mt-10">No date selected. Please go back and choose one.</p>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : error ? (
        <p className="text-red-400">{error}</p>
      ) : starData ? (
        <div className="max-w-xl text-center">
          <h2 className="text-2xl font-bold mb-4">{starData.title}</h2>
          {starData.media_type === 'image' ? (
            <img src={starData.url} alt={starData.title} className="rounded shadow-md mb-4 max-h-[400px] mx-auto" />
          ) : (
            <iframe
              title="space video"
              src={starData.url}
              className="w-full h-64 mb-4"
              allowFullScreen
            ></iframe>
          )}
          <p className="text-gray-300">{starData.explanation}</p>
        </div>
      ) : null}
    </div>
  );
};

export default StarAlignment;
