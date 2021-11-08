import React from 'react';

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <li className="element">
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="element__caption">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__actions">
          <button type="button" className="element__button" id="like"></button>
          <p className="element__button_count">{card.likes.length}</p>
        </div>
      </div>
      <button type="button" className="element__button_delete"></button>
    </li>
  );
}

export default Card;
