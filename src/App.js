import './App.css';
import React, { useState } from 'react';

function ContentSwitcher() {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  const handleButtonClick = () => {
    setCurrentContentIndex(currentContentIndex + 1);
  };

  return (
    <div className='main-count'>
      <h1 className='count-head'>Content Counter React</h1>
      <div>
        <p className='count-count'>Current Count: {currentContentIndex}</p>
        <button className='count-btn' onClick={handleButtonClick}>Count Contents</button>
      </div>
    </div>
  );
}

export default ContentSwitcher;