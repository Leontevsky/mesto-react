import React from 'react';
import '../index.css';

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_image ${card.name ? 'popup_open' : ''}`}>
      <div className="popup__content popup__content_image">
        <button type="button" className="popup__close" id="popup-image-button" onClick={onClose}></button>
        <img className="popup__img" alt={card.name} src={card.link} />
        <p className="popup__caption">{card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
