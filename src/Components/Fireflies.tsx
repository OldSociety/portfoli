import React, { useEffect, useRef } from 'react';

interface FireflyProps {
  x: number;
  y: number;
  s: number;
  ang: number;
  v: number;
}

const Fireflies: React.FC = () => {
  const firefliesRef = useRef<FireflyProps[]>([]);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const generateFireflies = () => {
      const maxFireflies = 100;
      const maxFirefliesPerBatch = 10;

      if (firefliesRef.current.length < maxFireflies) {
        for (let i = 0; i < maxFirefliesPerBatch; i++) {
          const firefly: FireflyProps = {
            x: Math.random() * canvas.width,
            y: Math.random() * (canvas!.height / 2) + canvas!.height / 2, // Adjust the y-coordinate range
            s: Math.random() * 1,
            ang: Math.random() * (2 * Math.PI),
            v: Math.random() * (2 * Math.PI) / 4,
          };
          firefliesRef.current.push(firefly);
        }
      }
    };

    const moveFireflies = () => {
      firefliesRef.current.forEach((firefly) => {
        firefly.x += firefly.v * Math.cos(firefly.ang);
        firefly.y += firefly.v * Math.sin(firefly.ang);
        firefly.ang += Math.random() * (20 * Math.PI / 180) - (10 * Math.PI / 180);
      });
    };

    const removeOutOfBoundsFireflies = () => {
      firefliesRef.current = firefliesRef.current.filter((firefly) => {
        return (
          firefly.x >= 0 &&
          firefly.x <= canvas.width &&
          firefly.y >= 0 &&
          firefly.y <= canvas.height
        );
      });
    };

    const drawFireflies = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      firefliesRef.current.forEach((firefly) => {
        ctx.beginPath();
        ctx.fillStyle = '#fddba3';
        ctx.arc(firefly.x, firefly.y, firefly.s, 0, 2 * Math.PI);
        ctx.fill();
      });
    };

    const animate = () => {
      moveFireflies();
      removeOutOfBoundsFireflies();

      if (firefliesRef.current.length < 100) {
        generateFireflies();
      }

      drawFireflies();
      requestAnimationFrame(animate);
    };

    document.body.appendChild(canvas);
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      document.body.removeChild(canvas);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return null;
};

export default Fireflies;
