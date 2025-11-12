import React, { useState, useEffect, useRef } from 'react';
import { Shield, Lightbulb, Star, Users, CheckCircle, Target } from 'lucide-react';
import './CoreValues.css';

const CoreValuesData = [
  {
    title: "Integrity",
    description: "We uphold the highest standards of integrity in all of our actions.",
    icon: Shield
  },
  {
    title: "Innovation",
    description: "We pursue innovation that matters, creating solutions that drive progress and make a difference.",
    icon: Lightbulb
  },
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do, delivering quality and value to our stakeholders.",
    icon: Star
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and foster a culture of collaboration and mutual respect.",
    icon: Users
  },
  {
    title: "Accountability",
    description: "We take ownership of our actions and hold ourselves accountable for delivering results.",
    icon: CheckCircle
  },
  {
    title: "Customer Focus",
    description: "We put our customers at the center of everything we do, ensuring their success is our priority.",
    icon: Target
  }
];

const CoreValues = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const observerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all cards
    cardRefs.current.forEach((card) => {
      if (card) observerRef.current.observe(card);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="corevalues-wrapper">
      <div className="corevalues-container">
        <div className="corevalues-header">
          <h1 className="corevalues-title">Core Values</h1>
          <p className="corevalues-subtitle">
            The principles that guide our actions and define who we are
          </p>
        </div>

        <div className="corevalues-grid">
          {CoreValuesData.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className={`corevalue-item ${visibleCards.has(index) ? 'visible' : ''}`}
              >
                <div className="corevalue-icon">
                  <IconComponent size={48} strokeWidth={1.5} />
                </div>
                <div className="corevalue-content">
                  <h2 className="corevalue-title">{value.title}</h2>
                  <p className="corevalue-description">{value.description}</p>
                </div>
                <div className="corevalue-number">{String(index + 1).padStart(2, '0')}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;