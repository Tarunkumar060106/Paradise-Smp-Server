import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors">
      <Icon className="h-12 w-12 text-purple-400 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-center">{description}</p>
    </div>
  );
}