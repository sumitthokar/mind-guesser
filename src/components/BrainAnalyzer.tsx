import React, { useState, useEffect } from 'react';
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
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const { playSound } = useSound('/brainrot.mp3');

  const brainrotGifs = [
    'https://media.tenor.com/yKCeGRA6_IEAAAAM/critical-thinking-spong-bob.gif',
    'https://media.tenor.com/_LPmVc8rs8MAAAAM/rodin-yoyo.gif'
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAnalyzing) {
      interval = setInterval(() => {
        setCurrentGifIndex((prev) => (prev + 1) % brainrotGifs.length);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isAnalyzing]);

  const triggerExplosion = () => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const colors = ['#FF4444', '#FFA500', '#FFD700'];
  
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
  
      const particleCount = 100;
      
      // Center explosion
      confetti({
        particleCount: particleCount,
        spread: 360,
        startVelocity: 45,
        decay: 0.9,
        gravity: 1,
        drift: 0,
        ticks: 200,
        origin: { x: 0.5, y: 0.5 },
        colors: colors,
        shapes: ['circle'],
      });
      
      // Random smaller explosions
      if (Math.random() < 0.3) {
        confetti({
          particleCount: 50,
          spread: 120,
          startVelocity: 30,
          decay: 0.9,
          gravity: 1,
          drift: randomInRange(-0.5, 0.5),
          origin: { 
            x: randomInRange(0.2, 0.8), 
            y: randomInRange(0.2, 0.8) 
          },
          colors: colors,
          shapes: ['circle'],
        });
      }
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
    triggerExplosion();
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
        <div className="mt-8 text-center">
          <div className="brain-scan-container p-8 mb-6">
            <div className="brain-scan-line"></div>
            <div className="flex justify-center mb-4">
              <div className="brain-icon-container">
                <Brain className="w-16 h-16 text-purple-400" />
              </div>
            </div>
            <p className="text-lg text-purple-400 font-semibold mb-8">{currentMessage}</p>
            
            <div className="flex justify-center">
              <img 
                src={brainrotGifs[currentGifIndex]}
                alt="Brain Processing"
                className="w-64 h-64 object-cover rounded-lg border-2 border-purple-500"
              />
            </div>
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