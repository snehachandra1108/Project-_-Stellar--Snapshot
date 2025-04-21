import React, { useContext, useEffect, useState } from 'react';
import { DateContext } from '../context/DateContext.jsx';

const StarAlignment = () => {
  const { selectedDate } = useContext(DateContext);// Get selected date from context
  const [data, setData] = useState(null);// Store NASA API data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const API_KEY = import.meta.env.VITE_NASA_API_KEY;// NASA API key from environment

  const today = new Date().toISOString().split('T')[0];
  const dateToFetch = selectedDate || today;// If no date selected, default to today

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');

      try {
         // Call NASA APOD API
        const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${dateToFetch}`
        );

        if (!res.ok) throw new Error('Failed to fetch data');

        const result = await res.json();
        setData(result);// Store the result in state
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);// Stop loading in both success and failure cases
      }
    };

    fetchData();// Fetch data when dateToFetch changes
  }, [dateToFetch]);

  return (
    <div className="min-h-screen w-screen bg-black text-white px-6 py-10 overflow-x-hidden flex flex-col items-center justify-center">
       {/* Loading, Error, or Data Display */}
      {loading ? (
        <p className="text-white text-center text-xl">Loading...</p>
      ) : error ? (
        <p className="text-red-400 text-center text-xl">Error: {error}</p>
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-6 text-center">
            {`Celestial Snapshot for ${selectedDate || today}`}
          </h2>

          {/* If no date selected, show a note */}
          {selectedDate === '' && (
            <p className="text-yellow-300 mb-6 text-center">
              Showing today's celestial snapshot!!
            </p>
          )}

          <h2 className="text-3xl font-bold mb-6 text-center">{data.title}</h2>

          <div className="flex justify-center items-center mb-6 w-full">
            {data.media_type === 'image' ? (
              <img
                src={data.url}
                alt={data.title}
                className="rounded-md max-w-screen-xl max-h-[500px] shadow-lg"
              />
            ) : (
              <iframe
                title={data.title}
                src={data.url}
                className="w-full max-w-screen-xl h-[500px] rounded-md"
                allow="fullscreen"
              ></iframe>
            )}
          </div>

          <p className="text-lg max-w-4xl mx-auto leading-relaxed">{data.explanation}</p>
        </>
      )}
    </div>
  );
};

export default StarAlignment;
