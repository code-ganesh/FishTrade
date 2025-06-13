// client/src/components/common/AnimatedElements.js
import React from 'react';

// You'll need to create these image files in client/src/assets/images
import fishMoving from '../../assets/images/fish-moving.png'; // A single fish image
import waveSVG from '../../assets/images/waves.svg'; // An SVG of waves

const AnimatedElements = () => {
  return (
    <>
      {/* Background Waves (Optional, if you want animated SVG background) */}
      <div className="absolute inset-0 bg-ocean-waves bg-repeat-x animate-wave z-0 opacity-20"></div>

      {/* Floating Fish (can be multiple instances) */}
      <img
        src={fishMoving}
        alt="Animated Fish"
        className="absolute bottom-1/4 left-1/4 w-16 h-auto animate-float z-10"
        style={{ animationDelay: '0s' }}
      />
      <img
        src={fishMoving}
        alt="Animated Fish"
        className="absolute top-1/2 right-1/4 w-20 h-auto animate-float z-10"
        style={{ animationDelay: '1s' }}
      />
      <img
        src={fishMoving}
        alt="Animated Fish"
        className="absolute bottom-1/3 right-1/3 w-12 h-auto animate-float z-10"
        style={{ animationDelay: '0.5s' }}
      />

      {/* Bubbles (can be multiple instances) */}
      <div className="absolute bottom-0 left-1/3 w-4 h-4 bg-foam-white rounded-full opacity-0 animate-bubble-slow z-10" style={{ animationDelay: '0.2s' }}></div>
      <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-foam-white rounded-full opacity-0 animate-bubble-medium z-10" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 right-1/4 w-5 h-5 bg-foam-white rounded-full opacity-0 animate-bubble-fast z-10" style={{ animationDelay: '0.7s' }}></div>
    </>
  );
};

export default AnimatedElements;