import React from 'react';
import { Brain } from 'lucide-react';
import Header from './components/Header';
import BrainAnalyzer from './components/BrainAnalyzer';

function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#00ff00]">
      <div className="container mx-auto px-4 py-8">
        <Header icon={<Brain className="w-8 h-8 text-[#00ff00]" />} />
        <main className="mt-12">
          <BrainAnalyzer />
        </main>
      </div>
    </div>
  );
}

export default App;