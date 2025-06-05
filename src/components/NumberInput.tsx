import React from 'react';

interface NumberInputProps {
  value: string;
  onChange: (value: string) => void;
  onAnalyze: () => void;
  isAnalyzing: boolean;
}

function NumberInput({ value, onChange, onAnalyze, isAnalyzing }: NumberInputProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your number..."
        className="w-full max-w-xs px-4 py-2 text-lg bg-[#2a2a2a] border-2 border-[#00ff00] rounded-lg 
                 focus:outline-none focus:ring-2 focus:ring-[#00ff00] text-[#00ff00] placeholder-[#00ff00]/50"
        disabled={isAnalyzing}
      />
      <button
        onClick={onAnalyze}
        disabled={isAnalyzing || !value}
        className="px-6 py-3 text-lg font-bold bg-[#2a2a2a] border-2 border-[#00ff00] rounded-lg 
                 text-[#00ff00] hover:bg-[#00ff00] hover:text-[#1a1a1a] transition-all duration-200 
                 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
      >
        {isAnalyzing ? 'Analyzing...' : 'Analyze My Brain'}
      </button>
    </div>
  );
}

export default NumberInput;