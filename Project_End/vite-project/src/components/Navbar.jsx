import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for client-side routing

// Navbar component for site navigation
const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Stellar Snapshot</div>
      <div className="space-x-4">
        {/*Each Link routes to a different page without reloading the browser */}
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/star-alignment" className="hover:text-yellow-300">Star Alignment</Link>
        <Link to="/about" className="hover:text-yellow-300">About Universe</Link>
        <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
