// ToggleButton.js
import React, { useState } from 'react';
import './ToggleButton.css'; // Import CSS file for styling

function ToggleButton() {
  const [isOpen, setIsOpen] = useState(false); // State to manage toggle

  // Function to handle toggle button click
  const handleToggleClick = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  return (
    <>
      <div className="links-box clearfix">
        <div className={`nav-toggler ${isOpen ? 'opened' : ''}`}>
          <button className="hidden-bar-opener" onClick={handleToggleClick}>
            <span className="hamburger">
            <div class="bar fill1"></div>
  <div class="bar fill1"></div>
  <div class="bar fill1"></div>
            </span>
          </button>
        </div>
      </div>
      {isOpen && ( // Render the list only if isOpen is true
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      )}
    </>
  );
}

export default ToggleButton;
