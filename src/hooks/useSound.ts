import { useCallback } from 'react';

export default function useSound(soundPath: string) {
  const playSound = useCallback(() => {
    const audio = new Audio(soundPath);
    audio.play().catch(error => {
      console.error('Error playing sound:', error);
    });
  }, [soundPath]);

  return { playSound };
}