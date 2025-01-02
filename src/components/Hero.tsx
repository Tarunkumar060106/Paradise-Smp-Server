import React from 'react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Welcome to Paradise Earth SMP
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join our thriving Minecraft community where adventure, creativity, and friendship await. 
          Experience a unique survival multiplayer server like no other.
        </p>
        <a
          href="#join"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
        >
          Start Your Journey
        </a>
      </div>
    </section>
  );
}