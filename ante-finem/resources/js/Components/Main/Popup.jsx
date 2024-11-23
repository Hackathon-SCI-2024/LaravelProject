import React from 'react';
import './Popup.css';

const Popup = ({ title, content, img_popup, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
      {img_popup && <img
                                    src={img_popup}
                                    className="rounded-full h-[5vh] w-[2vw] img_popup"
                                />}
        <h2><b>{title}</b></h2>
        <p>{content}</p>
        
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
