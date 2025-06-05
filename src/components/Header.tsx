import React from 'react';

interface HeaderProps {
  icon: React.ReactNode;
}

function Header({ icon }: HeaderProps) {
  return (
    <header className="text-center">
      <div className="flex items-center justify-center gap-4">
        {icon}
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Mind Guesser
        </h1>
      </div>
      <p className="mt-4 text-lg text-gray-300">
        The Most Advanced Brain Pattern Analyzer in the Universe
      </p>
    </header>
  );
}

export default Header;