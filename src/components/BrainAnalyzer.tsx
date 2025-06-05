import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Brain } from 'lucide-react';
import NumberInput from './NumberInput';
import ResultDisplay from './ResultDisplay';
import { generateAnalyzerMessages } from '../utils/analyzerUtils';
import useSound from '../hooks/useSound';

function BrainAnalyzer() {
  const [number, setNumber] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const { playSound } = useSound('/brainrot.mp3');

  const triggerFireworks = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        setShowResult(true);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    setShowResult(false);
    
    const messages = generateAnalyzerMessages();
    
    for (const message of messages) {
      setCurrentMessage(message);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    playSound();
    triggerFireworks();
    setIsAnalyzing(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <p className="text-center mb-8 text-gray-300">
        Pick a number and I will guess it using advanced brain pattern analysis technology
      </p>
      
      <NumberInput
        value={number}
        onChange={setNumber}
        onAnalyze={handleAnalyze}
        isAnalyzing={isAnalyzing}
      />

      {isAnalyzing && (
        <div className="mt-8 text-center relative min-h-[400px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
  
            <img 
              src="https://media.giphy.com/media/d3mlE7uhX8KFgEmY/giphy.gif"
              alt="Think About It"
              className="floating-gif"
            />
            <img 
              src="https://media.giphy.com/media/WRQBXSCnEFJIuxktnw/giphy.gif"
              alt="Mind Blown"
              className="floating-gif"
            />
          </div>
          <div className="brain-scan-container p-8 mb-6 relative z-20">
            <div className="brain-scan-line"></div>
            <div className="flex justify-center mb-4">
              <div className="brain-icon-container">
                <Brain className="w-16 h-16 text-purple-400" />
              </div>
            </div>
            <p className="text-lg text-purple-400 font-semibold">{currentMessage}</p>
          </div>
        </div>
      )}

      {showResult && (
        <ResultDisplay number={number} />
      )}
    </div>
  );
}

export default BrainAnalyzer;