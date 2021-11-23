import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../context/CurrentUserContext';

function EditAvatarPopup({ isOpen, isClose, onUpdateAvatar }) {
  const currentUser = React.useContext(CurrentUserContext);
  const avatarRef = React.useRef();
  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="update"
      title="Обновить аватар"
      submitButton="Cохранить"
      isOpen={isOpen}
      onClose={isClose}
      handleSubmit={handleSubmit}
    >
      <input
        ref={avatarRef}
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
  );
}

export default EditAvatarPopup;
