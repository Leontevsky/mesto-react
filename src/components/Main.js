import React from 'react';
import api from '../utils/Api';
import Card from './Card.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getAllData()
      .then((arg) => {
        const [dataUserInfo, dataCards] = arg;
        setUserName(dataUserInfo.name);
        setUserDescription(dataUserInfo.about);
        setUserAvatar(dataUserInfo.avatar);
        setCards(dataCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="content">
      <div className="profile">
        <div className="profile__container" onClick={onEditAvatar}>
          <img className="profile__avatar" src={`${userAvatar}`} alt="avatar" />
          <button
            type="button"
            className="profile__change"
            id="show-popup-avatar"
            aria-label="Изменить аватар"
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button type="button" className="profile__select-button" id="show-popup" onClick={onEditProfile}></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button type="button" className="profile__button" id="show-popup-new" onClick={onAddPlace}></button>
      </div>

      <div className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Main;
