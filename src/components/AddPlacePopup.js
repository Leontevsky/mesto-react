import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../context/CurrentUserContext';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const currentUser = React.useContext(CurrentUserContext);
  const nameRef = React.useRef();
  const linkRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value,
    });

    console.log(onAddPlace);
  }

  return (
    <PopupWithForm
      name="new"
      title="Новое место"
      submitButton="Cохранить"
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={handleSubmit}
    >
      <input
        ref={nameRef}
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
      <input
        ref={linkRef}
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        className="popup__input"
        id="link"
        required
      />
      <span id="link-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
