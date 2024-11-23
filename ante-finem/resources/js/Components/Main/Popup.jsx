import React from 'react';
import './Popup.css';

const Popup = ({ title, content, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2><b>{title}</b></h2>
        <p>{content}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup; // Correctly export the Popup component
