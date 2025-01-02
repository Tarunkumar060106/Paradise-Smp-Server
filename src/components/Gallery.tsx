import React from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';
import australia1 from '../images/australia1.png';
import australia2 from '../images/australia2.png';
import antarctica from '../images/antarctica.png';

export function Gallery() {
  const images = [
    {
      url: { australia1 },
      alt: "Server Screenshot 1"
    },
    {
      url: { australia2 },
      alt: "Server Screenshot 2"
    },
    {
      url: { antarctica },
      alt: "Server Screenshot 3"
    }
  ];
  
  return (
    <section id="gallery" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center mb-12">
            Server Gallery
          </h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <AnimateOnScroll key={index} className="delay-[${index * 200}ms]">
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-64 object-cover transform transition-transform group-hover:scale-110 rounded-sm"
                />
                <div className="absolute inset-0 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity  group-hover:border-purple-400 group-hover:border-4" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}