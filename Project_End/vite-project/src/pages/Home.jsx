import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DateContext } from '../context/DateContext.jsx';

const Home = () => {
  const { setSelectedDate } = useContext(DateContext);
  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date) {
      setError('Please select a date!');
      return;
    }
    setSelectedDate(date);
    setError('');
    navigate('/star-alignment');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to StellarSnapshot ✨</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-800 p-6 rounded-md shadow-md w-full max-w-md">
        <label className="block">
          <span className="text-lg">Select a Date:</span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full text-black p-2 rounded"
          />
        </label>
        {error && <p className="text-red-400">{error}</p>}
        <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded">
          See Star Alignment 🌌
        </button>
      </form>
    </div>
  );
};

export default Home;
