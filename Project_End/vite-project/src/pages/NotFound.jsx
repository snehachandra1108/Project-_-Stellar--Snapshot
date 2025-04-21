import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-yellow-400 mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="text-black bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500 font-semibold"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
