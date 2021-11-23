import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../context/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  function handleChangeN(e) {
    setName(e.target.value);
  }
  function handleChangeD(e) {
    setDescription(e.target.value);
  }

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      submitButton="Cохранить"
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={handleSubmit}
    >
      <input
        onChange={handleChangeN}
        className="popup__input"
        type="text"
        name="name"
        value={name || ''}
        placeholder="Имя"
        id="username"
        minLength="2"
        maxLength="40"
        required
      />
      <span id="username-error" className="popup__error"></span>
      <input
        onChange={handleChangeD}
        type="text"
        value={description || ''}
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
  );
}

export default EditProfilePopup;
