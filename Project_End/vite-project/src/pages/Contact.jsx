import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h2 className="text-4xl font-bold text-center mb-6">📬 About This App</h2>

      <div className="max-w-2xl mx-auto text-lg space-y-4">
        <p>
          <span className="text-yellow-400 font-semibold">StellarSnapshot</span> is a React-powered app that lets you view the stars, planets, and celestial information for any date you choose.
        </p>

        <p>
          It uses the NASA APOD API to bring stunning space visuals and facts right to your screen.
        </p>

        <p>
          Built using modern web tools: <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>React Router</strong>, and <strong>Context API</strong>.
        </p>

        <hr className="border-gray-600 my-4" />

        <p>👩‍💻 Developed by: <span className="text-yellow-300 font-medium">Sneha Chandra</span></p>
        <p>
          🔗 GitHub:{" "}
          <a
            href="https://github.com/snehachandra1108"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-300"
          >
            GitHub
          </a>
        </p>
        <p>
          🔗 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-300"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
