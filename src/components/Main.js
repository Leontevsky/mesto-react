import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div className="content">
      <div className="profile">
        <div className="profile__container" onClick={onEditAvatar}>
          <img className="profile__avatar" src={`${currentUser.avatar}`} alt="avatar" />
          <button
            type="button"
            className="profile__change"
            id="show-popup-avatar"
            aria-label="Изменить аватар"
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button type="button" className="profile__select-button" id="show-popup" onClick={onEditProfile}></button>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button type="button" className="profile__button" id="show-popup-new" onClick={onAddPlace}></button>
      </div>

      <div className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Main;
