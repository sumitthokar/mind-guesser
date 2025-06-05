import React, { useState, useEffect } from 'react';
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
  const [showExplosion, setShowExplosion] = useState(false);
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

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    setShowResult(false);
    setShowExplosion(false);
    
    const messages = generateAnalyzerMessages();
    
    for (const message of messages) {
      setCurrentMessage(message);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    playSound();
    setIsAnalyzing(false);
    setShowExplosion(true);
    
    // Show explosion GIF for 2 seconds before showing result
    await new Promise(resolve => setTimeout(resolve, 2000));
    setShowExplosion(false);
    setShowResult(true);
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

      {showExplosion && (
        <div className="flex justify-center mt-8">
          <img 
            src="/giphy.gif"
            alt="Explosion"
            className="w-64 h-64 object-cover"
          />
        </div>
      )}

      {showResult && (
        <ResultDisplay number={number} />
      )}
    </div>
  );
}

export default BrainAnalyzer;