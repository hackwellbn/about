import React, { useRef, useState, useEffect, useCallback } from 'react';
import './Leadership.css';
import { assets } from '../../../../../assets/assets';
const Leadership = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);

  // Mock assets - replace with your actual assets import


const leaders = [
  {
    name: 'Bernard Obura',
    position: 'President and Founder, Softnet',
    image: assets.ben,
    statement:
      'As President and CEO, Bernard provides strategic direction and drives the vision of Softnet, fostering innovation and sustainable growth across all divisions.',
  },
  {
    name: 'Albert Odhiambo',
    position: 'Co-founder and Chief Operations Officer, Softnet',
    image: assets.jush,
    statement:
      'Albert oversees operational excellence and ensures the seamless execution of Softnet’s strategic initiatives, turning vision into measurable results.',
  },
  // Add more as needed...
];


  // Check scroll position and update button states
  const updateScrollButtons = useCallback(() => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  }, []);

  // Optimized scroll handler with debouncing
  const handleMove = useCallback((direction) => {
    if (!scrollRef.current || isScrolling) return;

    const container = scrollRef.current;
    const card = container.querySelector('.card');
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 30;
    const scrollAmount = cardWidth + gap;

    setIsScrolling(true);

    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Perform scroll
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });

    // Reset scrolling state after animation completes
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
      updateScrollButtons();
    }, 500);
  }, [isScrolling, updateScrollButtons]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && canScrollLeft) {
        e.preventDefault();
        handleMove('left');
      } else if (e.key === 'ArrowRight' && canScrollRight) {
        e.preventDefault();
        handleMove('right');
      }
    };

    const node = scrollRef.current;
    if (node) {
      node.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (node) node.removeEventListener('keydown', handleKeyDown);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [canScrollLeft, canScrollRight, handleMove]);

  // Update button states on scroll
  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;

    updateScrollButtons();
    node.addEventListener('scroll', updateScrollButtons, { passive: true });

    return () => {
      node.removeEventListener('scroll', updateScrollButtons);
    };
  }, [updateScrollButtons]);

  // Observe resize events for responsive behavior
  useEffect(() => {
    const resizeObserver = new ResizeObserver(updateScrollButtons);
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [updateScrollButtons]);

  return (
    <div className="leadership">
      <div className="leadership-container">
        <button
          className={`move_left ${!canScrollLeft ? 'disabled' : ''}`}
          onClick={() => handleMove('left')}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
        >
          ‹
        </button>

        <div className="leadership-content">
          <h1 className="leadership-title">Our Leadership and Governance</h1>

          <div
            ref={scrollRef}
            className="cards"
            tabIndex={0}
            aria-label="Leadership carousel"
            role="region"
          >
            {leaders.map((leader, index) => (
              <div className="card" key={index}>
                {leader.image ? (
                  <div className="image_card">
                    <img src={leader.image} alt={leader.name} />
                  </div>
                ) : (
                  <div className="image_card image_placeholder">
                    <span className="initials">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                <h2 className="card-title">{leader.name}</h2>
                <p className="card-position">{leader.position}</p>
                <p className="statement">{leader.statement}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          className={`move_right ${!canScrollRight ? 'disabled' : ''}`}
          onClick={() => handleMove('right')}
          disabled={!canScrollRight}
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Leadership;