import React, { useEffect, useState } from 'react';

const AdjectiveRotator: React.FC = () => {
  const adjectives: string[] = [
    'Passionate.',
    'Creative.',
    'Innovative.',
    'Dedicated.',
    'Driven.',
    'Talented.',
    'Adaptable.',
    'Ambitious.',
    'Resourceful.',
    'Inspiring.',
  ];

  const [currentAdjectiveIndex, setCurrentAdjectiveIndex] = useState<number>(0);
  const [showingAdjective, setShowingAdjective] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowingAdjective(false);
      setCurrentAdjectiveIndex((prevIndex) =>
        prevIndex === adjectives.length - 1 ? 0 : prevIndex + 1
      );

      setTimeout(() => {
        setShowingAdjective(true);
      }, 500);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [adjectives.length]);

  return (
    <div className="adjective-rotator">
      <span className={`adjective ${showingAdjective ? 'show' : ''}`}>
        {adjectives[currentAdjectiveIndex]}
      </span>
    </div>
  );
};

export default AdjectiveRotator;
