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
        className="w-full max-w-xs px-4 py-2 text-lg bg-gray-800 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
        disabled={isAnalyzing}
      />
      <button
        onClick={onAnalyze}
        disabled={isAnalyzing || !value}
        className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg 
                 hover:from-purple-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50
                 disabled:cursor-not-allowed transform hover:scale-105"
      >
        {isAnalyzing ? 'Analyzing...' : 'Analyze My Brain'}
      </button>
    </div>
  );
}

export default NumberInput;