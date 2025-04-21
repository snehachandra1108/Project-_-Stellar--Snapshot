import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">About the App & Creator 🌟</h1>
      
      <div className="max-w-2xl space-y-4 text-lg text-gray-300">
        <p>
          <strong>StellarSnapshot</strong> is a React-based web app that lets you explore how the sky looked on any date of your choice. 
          Using NASA’s Astronomy Picture of the Day (APOD) API, it fetches real cosmic visuals and facts.
        </p>

        <p>
          This project was built using <span className="text-yellow-400 font-semibold">React, Tailwind CSS, React Router, and Context API</span>, as part of a learning journey in mastering modern frontend development.
        </p>

        <p>
          Developed by <span className="text-pink-400 font-bold">Sneha Chandra</span>, 1st year CS Student.
        </p>

        <p>
            Connect here:
        </p>

        <ul className="list-disc list-inside">
          <li>
            🌐 <a href="https://github.com/snehachandra1108" className="text-blue-400 hover:underline" target="_blank">GitHub</a>
          </li>
          <li>
            💼 <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" className="text-blue-400 hover:underline" target="_blank">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
