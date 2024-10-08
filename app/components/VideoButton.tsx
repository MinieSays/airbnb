'use client'; // This makes the component client-side

import React from 'react';

const VideoButton = () => {
  const handleButtonClick = () => {
    const videoSection = document.getElementById('demoVideo');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={handleButtonClick}
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        Click Me To View A Demo Video
      </button>
    </div>
  );
};

export default VideoButton;