import React, { useState, useEffect, useRef } from 'react';
import './purpose.css';

// Import multiple videos
import video1 from '../../../../assets/main.mp4';
import video2 from '../../../../assets/community-video.mp4';
import video3 from '../../../../assets/community-video.mp4';

const Purpose = () => {
  const [active, setActive] = useState('main');
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  const progressIntervalRef = useRef(null);

  const sections = ['main', 'community', 'friends'];

  // Progress bar animation
  useEffect(() => {
    setProgress(0);
    
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / 90); // 9 seconds = 90 intervals of 100ms
      });
    }, 100);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [active]);

  // Auto-switch sections
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => {
        const currentIndex = sections.indexOf(prev);
        const nextIndex = (currentIndex + 1) % sections.length;
        return sections[nextIndex];
      });
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  // Video playback control
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(err => console.log('Video play error:', err));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const content = {
    main: {
      video: video1,
      title: 'Our Purpose',
      text: `To harness the power of technology, intelligence and innovation to solve meaningful problems,
      uplift communities, and shape a future where progress is inclusive, human-centered, and driven
      by a commitment to improving lives globally.`,
    },
    community: {
      video: video2,
      title: 'Our Community',
      text: `We're building a community that values creativity, learning, and growth — a space where innovation
      meets compassion, and everyone contributes to a better tomorrow.`,
    },
    friends: {
      video: video3,
      title: 'Our Friends',
      text: `Collaboration drives us. We partner with friends and allies around the world to share knowledge,
      empower change, and build solutions that last.`,
    }
  };

  const current = content[active];

  const handleSectionChange = (section) => {
    setActive(section);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="purpose">
      {/* Video Background */}
      <video
        ref={videoRef}
        key={current.video}
        className="video-bg"
        src={current.video}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay gradient */}
      <div className="overlay-gradient"></div>

      {/* Main Content */}
      <div className="purpose-content">
        {/* Icon with animation */}
        <div className="icon-container">
          <span className="section-icon">{current.icon}</span>
        </div>

        {/* Title with slide animation */}
        <h1 className="fade-slide-in" key={current.title}>
          {current.title}
        </h1>

        {/* Text with fade animation */}
        <p className="fade-in" key={current.text}>
          {current.text}
        </p>

        {/* Navigation Buttons */}
        <div className="three_btns">
          {sections.map((section) => (
            <button
              key={section}
              className={`purposes ${active === section ? 'active' : ''}`}
              onClick={() => handleSectionChange(section)}
            >
              <span className="btn-text">
                {section === 'main' ? 'Purpose' : section === 'community' ? 'Our Community' : 'Friends'}
              </span>
            </button>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="progress-dots">
          {sections.map((section, index) => (
            <div
              key={section}
              className={`dot ${active === section ? 'active' : ''}`}
              onClick={() => handleSectionChange(section)}
            ></div>
          ))}
        </div>
      </div>

      {/* Play/Pause Control */}
      <button className="play-pause-btn" onClick={togglePlayPause}>
        {isPlaying ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="6" y="4" width="4" height="16" fill="white"/>
            <rect x="14" y="4" width="4" height="16" fill="white"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8 5v14l11-7L8 5z" fill="white"/>
          </svg>
        )}
      </button>
    </div>
  );
};

export default Purpose;