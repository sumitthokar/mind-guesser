import React from 'react';
import { Zap } from 'lucide-react';

interface ResultDisplayProps {
  number: string;
}

function ResultDisplay({ number }: ResultDisplayProps) {
  return (
    <div className="mt-12 text-center animate-fadeIn">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
        <h2 className="text-2xl font-bold text-yellow-400">Analysis Complete!</h2>
        <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
      </div>
      
      <div className="p-6 bg-gray-800 rounded-lg shadow-xl border-2 border-purple-500 animate-borderGlow">
        <p className="text-lg mb-4">After analyzing your brain patterns, I can say with 100% certainty that your number is:</p>
        <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-numberReveal">
          {number}
        </p>
      </div>
      
      <p className="mt-6 text-sm text-gray-400 italic">
        * This result was achieved using quantum neural networks and advanced brainwave analysis
      </p>
    </div>
  );
}

export default ResultDisplay;