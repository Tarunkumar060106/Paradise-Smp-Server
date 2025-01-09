import React from 'react';
import { Map, MessageCircle } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';

export function ServerLinks() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center mb-12">
            Server Resources
          </h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimateOnScroll className="delay-[100ms]">
            <a
              href="http://play.plutocloud.site:19132/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors group"
            >
              <Map className="h-16 w-16 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold text-white mb-2">Live Map</h3>
              <p className="text-gray-300 text-center">
                Explore our world in real-time with our interactive server map
              </p>
            </a>
          </AnimateOnScroll>

          <AnimateOnScroll className="delay-[200ms]">
            <a
              href="https://discord.gg/tydcHQZHFn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors group"
            >
              <MessageCircle className="h-16 w-16 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold text-white mb-2">Discord Server</h3>
              <p className="text-gray-300 text-center">
                Join our community on Discord to chat, get support, and stay updated
              </p>
            </a>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}