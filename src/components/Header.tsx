import React from 'react';

interface HeaderProps {
  icon: React.ReactNode;
}

function Header({ icon }: HeaderProps) {
  return (
    <header className="text-center">
      <div className="flex items-center justify-center gap-4">
        {icon}
        <h1 className="text-4xl font-bold text-[#00ff00] glitch-text">
          Mind Guesser
        </h1>
      </div>
      <p className="mt-4 text-lg text-[#00ff00] opacity-80">
        The Most Advanced Brain Pattern Analyzer in the Universe
      </p>
    </header>
  );
}

export default Header;