import React, { useContext, useEffect, useState } from 'react';
import { DateContext } from '../context/DateContext.jsx';

const StarAlignment = () => {
  const { selectedDate } = useContext(DateContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const API_KEY = import.meta.env.VITE_NASA_API_KEY;

  const today = new Date().toISOString().split('T')[0];
  const dateToFetch = selectedDate || today;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');

      try {
        const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${dateToFetch}`
        );

        if (!res.ok) throw new Error('Failed to fetch data');

        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dateToFetch]);

  if (loading) {
    return <p className="text-white text-center mt-10">Loading space magic... ✨</p>;
  }

  if (error) {
    return <p className="text-red-400 text-center mt-10">Error: {error}</p>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {selectedDate === '' && (
        <p className="text-yellow-300 mb-4 text-center">
          Showing today's celestial snapshot: {today}
        </p>
      )}

      <h2 className="text-3xl font-bold mb-4 text-center">{data.title}</h2>

      <div className="flex justify-center mb-4">
        {data.media_type === 'image' ? (
          <img
            src={data.url}
            alt={data.title}
            className="rounded-md max-w-full max-h-[500px] shadow-lg"
          />
        ) : (
          <iframe
            title={data.title}
            src={data.url}
            className="w-full max-w-2xl h-[500px] rounded-md"
            allow="fullscreen"
          ></iframe>
        )}
      </div>

      <p className="text-lg max-w-3xl mx-auto">{data.explanation}</p>
    </div>
  );
};

export default StarAlignment;
