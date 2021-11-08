// import headerLogo from '../images/Vector.svg';
import '../index.css';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditPopupOpen, setIsEditPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setIsEditPopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setIsEditPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }
  return (
    <div className="description">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        submitButton="Cохранить"
        isOpen={isEditPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input"
          type="text"
          name="name"
          placeholder="Имя"
          id="username"
          minLength="2"
          maxLength="40"
          required
        />
        <span id="username-error" className="popup__error"></span>
        <input
          type="text"
          name="about"
          placeholder="Исследователь океана"
          className="popup__input"
          id="userjob"
          minLength="2"
          maxLength="200"
          required
        />
        <span id="userjob-error" className="popup__error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="new"
        title="Новое место"
        submitButton="Cохранить"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          name="name"
          placeholder="Название"
          className="popup__input"
          id="placeName"
          required
          minLength="2"
          maxLength="30"
        />
        <span id="placeName-error" className="popup__error"></span>
        <input type="url" name="link" placeholder="Ссылка на картинку" className="popup__input" id="link" required />
        <span id="link-error" className="popup__error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="update"
        title="Обновить аватар"
        submitButton="Cохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input"
          id="newAvatar"
          name="link-avatar"
          type="url"
          defaultValue=""
          placeholder="Ссылка на новый аватар"
          required
        />
        <span className="popup__error" id="newAvatar-error"></span>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm name="delete" title="Вы уверены?" submitButton="Да"></PopupWithForm>
    </div>
  );
}

export default App;
