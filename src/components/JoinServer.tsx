import React from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';

export function JoinServer() {
  return (
    <section id="join" className="py-20 px-4 bg-gray-900/80">
      <div className="max-w-7xl mx-auto text-center">
        <AnimateOnScroll>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
            Ready to Join?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect to our server using the following address:
          </p>
          <div className='flex justify-center'>
            <div className="bg-gray-800 rounded-lg p-6 inline-block shadow-lg shadow-purple-500/20 w-96 h-40">
              <code className="text-purple-400 text-xl">210.89.44.196:22454</code>
              <p className="text-gray-400 mt-4">
                Minecraft Java All Versions Supported.
                Recommended Versions : 1.19.x
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 inline-block shadow-lg shadow-purple-500/20 ml-5 w-96 h-40">
              <code className="text-purple-400 text-xl">Ip: 210.89.44.196</code>
              <p className="text-purple-400 text-xl">Port: 22454</p>
              <p className="text-gray-400 mt-4">
                Minecraft Bedrock All Version Supported
                Recommended Versions : 1.19.x
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}