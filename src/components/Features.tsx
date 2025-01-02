import React from 'react';
import { Feature } from './Feature';
import { Users, Shield, Map, Sword, TreePine, Heart } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';

export function Features() {
  const features = [
    {
      icon: Users,
      title: "Active Community",
      description: "Join a friendly and active community of players from around the world"
    },
    {
      icon: Shield,
      title: "Anti-Grief Protection",
      description: "Your builds are safe with our advanced protection systems"
    },
    {
      icon: Map,
      title: "Custom World",
      description: "Explore our carefully crafted world with unique biomes and structures"
    },
    {
      icon: Sword,
      title: "Regular Events",
      description: "Participate in exciting PvP tournaments and building competitions"
    },
    {
      icon: TreePine,
      title: "Economy System",
      description: "Build your wealth through our player-driven economy"
    },
    {
      icon: Heart,
      title: "Community Projects",
      description: "Collaborate with others on massive building projects"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-900/80">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center mb-12">
            Server Features
          </h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimateOnScroll key={index} className="delay-[${index * 100}ms]">
              <Feature {...feature} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}