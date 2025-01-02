import React from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';


export function Gallery() {
  const images = [
    {
      url: "https://cdn.discordapp.com/attachments/1312296442915721217/1324450456377753720/image.png?ex=6778321b&is=6776e09b&hm=40287457f5920aa26f24fc6f8900ca471f9f2b80576c9458ebab59ac9a74e418&",
      alt: "Server Screenshot 1"
    },
    {
      url: "https://cdn.discordapp.com/attachments/1312296442915721217/1324450957815185468/image.png?ex=67783293&is=6776e113&hm=503bd57fe7bbc8a05ee5df4c9d5ad812fb045e77fa83488436bc56638e5f33d1&",
      alt: "Server Screenshot 2"
    },
    {
      url: "https://cdn.discordapp.com/attachments/1312296442915721217/1324450726868553779/image.png?ex=6778325c&is=6776e0dc&hm=8d63dd2b1ad2a21a4d83558f937e5ca3c7d88b704d1bc7488dba7012cc8a37fb&",
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