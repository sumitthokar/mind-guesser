import React from 'react';
import { Brain } from 'lucide-react';
import Header from './components/Header';
import BrainAnalyzer from './components/BrainAnalyzer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <Header icon={<Brain className="w-8 h-8 text-purple-400" />} />
        <main className="mt-12">
          <BrainAnalyzer />
        </main>
      </div>
    </div>
  );
}

export default App;