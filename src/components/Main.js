import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards }) {
  // const [userName, setUserName] = React.useState(''); // имя жак иф
  // const [userDescription, setUserDescription] = React.useState(''); // о себе привет привет
  // const [userAvatar, setUserAvatar] = React.useState(''); // change avatar
  // const [cards, setCards] = React.useState([]); // to get card

  // api = делаем запрос к бэку. Это наш бэк.

  // React.useEffect(() => {
  //   api
  //     .getAllData()
  //     .then((arg) => {
  //       // отдай наши данные, затем
  //       const [dataUserInfo, dataCards] = arg; // почему скобки квадратные?
  //       setUserName(dataUserInfo.name); // если данные изменились, он из через setstate обновит
  //       setUserDescription(dataUserInfo.about);
  //       setUserAvatar(dataUserInfo.avatar);
  //       setCards(dataCards);
  //     })
  //     // ловлю ошибки и показываю их
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []); // зачем это

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div className="content">
      <div className="profile">
        <div className="profile__container" onClick={onEditAvatar}>
          <img className="profile__avatar" src={`${currentUser.userAvatar}`} alt="avatar" />
          <button
            type="button"
            className="profile__change"
            id="show-popup-avatar"
            aria-label="Изменить аватар"
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.userName}</h1>
          <button type="button" className="profile__select-button" id="show-popup" onClick={onEditProfile}></button>
          <p className="profile__subtitle">{currentUser.userDescription}</p>
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
