import React, { useState } from 'react';



const videoLinks = {
    Ayurveda: 'https://www.youtube.com/embed/mMSKx5-Qq5I',
    Yoga: 'https://www.youtube.com/embed/v7AYKMP6rOE',
    Homeopathy: 'https://www.youtube.com/embed/1QiJzvS5lNo',
    Meditation: 'https://www.youtube.com/embed/inpok4MKVLM',
    Unani: 'https://www.youtube.com/embed/N_zlQ78lXQ8',
    Siddha: 'https://www.youtube.com/embed/f1HhKPsz_-A',
  };
  

const VideoSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Ayurveda');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="video-section">
      <h2>Veda Videos</h2>
      <div className="dropdown-container">
        <label htmlFor="video-category">Choose a category:</label>
        <select
          id="video-category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {Object.keys(videoLinks).map((category, index) => (
            <option value={category} key={index}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="video-container">
        <iframe
          title={selectedCategory}
          width="800"
          height="450"
          src={videoLinks[selectedCategory]}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
