import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card({ card, onCardClick }) {
  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `card__delete-button ${
    isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'
  }`;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `...`;

  // вместо пропса используем конткретные слова
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
