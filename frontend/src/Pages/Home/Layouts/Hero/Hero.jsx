import React, { useState, useEffect } from 'react';
import './Hero.css';

const assetsHero = [
  {
    title: "Re-imagining Africa and Beyond",
    description:
      "Exploring new horizons, celebrating innovation, and redefining possibilities across Africa and the world. Join us as we envision a future where creativity, technology, and culture converge to inspire transformative growth.",
  },
  {
    title: "Empowering Communities",
    description:
      "Discover how we're fostering growth and development in communities across Africa through innovative solutions and collaborative efforts.",
  },
  {
    title: "Innovating for a Better Tomorrow",
    description:
      "Learn about the cutting-edge technologies and creative ideas that are driving positive change and shaping the future of Africa and beyond.",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % assetsHero.length);
        setFade(true);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleCircleClick = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 500);
  };

  const currentAsset = assetsHero[currentIndex];

  return (
    <div className="hero">
      <div className={`hero-content ${fade ? 'fade-in' : 'fade-out'}`}>
        <h1>{currentAsset.title}</h1>
        <p>{currentAsset.description}</p>
      </div>

      <div className="three_circles_iterations">
        <div className="circles">
          {assetsHero.map((_, index) => (
            <div
              key={index}
              className={`circle ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleCircleClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;