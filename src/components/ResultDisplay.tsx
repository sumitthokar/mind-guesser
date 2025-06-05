import React from 'react';
import { Zap } from 'lucide-react';

interface ResultDisplayProps {
  number: string;
}

function ResultDisplay({ number }: ResultDisplayProps) {
  return (
    <div className="mt-12 text-center animate-fadeIn">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Zap className="w-6 h-6 text-[#00ff00] animate-pulse" />
        <h2 className="text-2xl font-bold text-[#00ff00]">Analysis Complete!</h2>
        <Zap className="w-6 h-6 text-[#00ff00] animate-pulse" />
      </div>
      
      <div className="p-6 bg-[#2a2a2a] rounded-lg shadow-xl border-2 border-[#00ff00] animate-borderGlow">
        <p className="text-lg mb-4 text-[#00ff00]">After analyzing your brain patterns, I can say with 100% certainty that your number is:</p>
        <p className="text-6xl font-bold text-[#00ff00] glitch-text animate-numberReveal">
          {number}
        </p>
      </div>
      
      <p className="mt-6 text-sm text-[#00ff00]/70 italic">
        * This result was achieved using quantum neural networks and advanced brainwave analysis
      </p>
    </div>
  );
}

export default ResultDisplay;