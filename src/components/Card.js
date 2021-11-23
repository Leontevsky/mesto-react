import React from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext.js';
import api from '../utils/Api.js';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `element__button_delete ${
    isOwn ? 'element__button_delete' : 'element__button_delete-hidden'
  }`;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `element__button ${isLiked ? 'element__button_theme-dark' : 'element__button'}`;

  // вместо пропса используем конткретные слова
  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="element">
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="element__caption">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__actions">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick} id="like"></button>
          <p className="element__button_count">{card.likes.length}</p>
        </div>
      </div>
      <button type="button" onClick={handleDeleteClick} className={cardDeleteButtonClassName}></button>
    </li>
  );
}

export default Card;
