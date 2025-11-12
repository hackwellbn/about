import React, { useState, useEffect } from 'react';
import './purpose.css';
import { Link } from 'react-router-dom';

// Import multiple videos
import video1 from '../../../../assets/grok-video-a7dfbecb-832c-4973-9260-e4a0a6e4c814.mp4';
import video2 from '../../../../assets/community-video.mp4';
import video3 from '../../../../assets/community-video.mp4';

const Purpose = () => {
  const [active, setActive] = useState('main');

  // Define the order of iteration
  const sections = ['main', 'community', 'friends'];

  // Automatically switch section every 3 seconds
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

  // Video and text content mapping
  const content = {
    main: {
      video: video1,
      title: 'Our Purpose',
      text: `To harness the power of technology, intelligence and innovation to solve meaningful problems,
      uplift communities, and shape a future where progress is inclusive, human-centered, and driven
      by a commitment to improving lives globally.`
    },
    community: {
      video: video2,
      title: 'Our Community',
      text: `We’re building a community that values creativity, learning, and growth — a space where innovation
      meets compassion, and everyone contributes to a better tomorrow.`
    },
    friends: {
      video: video3,
      title: 'Our Friends',
      text: `Collaboration drives us. We partner with friends and allies around the world to share knowledge,
      empower change, and build solutions that last.`
    }
  };

  const current = content[active];

  return (
    <div className="purpose">
      <video
        key={current.video}
        className="video-bg"
        src={current.video}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="purpose-content">
        <h1>{current.title}</h1>
        <p>{current.text}</p>

        <div className="three_btns">
          <button
            className={`purposes ${active === 'main' ? 'active' : ''}`}
            onClick={() => setActive('main')}
          >
            Purpose
          </button>
          <button
            className={`purposes ${active === 'community' ? 'active' : ''}`}
            onClick={() => setActive('community')}
          >
            Our Community
          </button>
          <button
            className={`purposes ${active === 'friends' ? 'active' : ''}`}
            onClick={() => setActive('friends')}
          >
            Friends
          </button>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
