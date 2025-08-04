import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center justify-center h-screen w-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/truck-bg.png')",
      }}
    >
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Portable Cargo Weigher
        </h1>
        <p className="text-lg md:text-2xl text-white mb-8">
          Efficient & Accurate Cargo Load Monitoring System
        </p>
        <div className="flex gap-4 justify-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded"
            onClick={() => navigate('/signup')}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}