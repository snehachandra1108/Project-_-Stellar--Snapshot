import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DateContext } from '../context/DateContext.jsx';

// Array of funny footer texts to show randomly
const funnyFooters = [
  "The stars are free, but your internet bill is not.",
  "Stars are free to look at. Unlike coffee during exams week.",
  "Stargazing: cheaper than sleep, quieter than overthinking.",
  "Looking at the stars because sometimes Netflix isn't enough.",
  "When life gets complicated, just look up. The stars won't judge you.",
  "No tuition fees for stargazing, just your time!",
  "Stargazing: The only thing that makes you feel small in a good way."
];

const Home = () => {
  const { setSelectedDate } = useContext(DateContext);// Access shared context for selected date
  const [date, setDate] = useState('');// Store the user-selected date
  const [error, setError] = useState(''); // Manage validation error message
  const navigate = useNavigate();// Hook for programmatic navigation
  const randomFooter = funnyFooters[Math.floor(Math.random() * funnyFooters.length)];// Pick a random footer text

  const today = new Date().toISOString().split('T')[0];// Get today’s date in YYYY-MM-DD format


   // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check if date is selected
    if (!date) {
      setError('Please select a date!');
      return;
    }

    // Validation: Ensure date is not in the future
    if (date > today) {
      setError('Please select a date in the past!');
      return;
    }
    setSelectedDate(date);
    setError('');
    navigate('/star-alignment');
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url("https://t4.ftcdn.net/jpg/00/59/95/89/360_F_59958917_1SvEPqvKnrGr68THJ35hqQUiHwQ6WhCN.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="min-h-screen text-white flex items-center justify-center px-4 py-10 relative z-10">
        <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left Section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Welcome to <span className="text-yellow-400">Stellar Snapshot!</span>
            </h1>
            <p className="text-lg leading-relaxed mb-6">
              Discover how the stars aligned on any day in history. Just choose a date, and the sky's story that night will be displayed.
            </p>
          </div>

          {/* Right Section - Form */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-6 w-full sm:w-96">
            <form onSubmit={handleSubmit} className="space-y-4">
              <label htmlFor="date-input" className="block">
                <span className="text-lg">Select a Date:</span>
                <input
                  id="date-input"
                  type="date"
                  value={date}
                  max={today}
                  onChange={(e) => {
                    setDate(e.target.value);
                    setError('');
                  }}
                  className="mt-1 block w-full text-black p-2 rounded"
                />
              </label>
              <p className="text-sm text-gray-400 mt-2">
                (For eg: Select your birthday or any historic day like 15-08-1947)
              </p>

               {/* Display error if exists */}
              {error && <p className="text-red-400">{error}</p>}
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded"
              >
                See Star Alignment
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Random Funny Footer */}
      <footer className="absolute bottom-0 w-full text-center text-white py-4 bg-opacity-60 z-10">
        <p className="text-sm">{randomFooter}</p>
      </footer>
    </div>
  );
};

export default Home;
