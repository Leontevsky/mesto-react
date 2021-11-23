import React from 'react';
// import '../index.css';

function PopupWithForm({ name, isOpen, onClose, title, children, submitButton, handleSubmit }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_open ' : ''}`}>
      <div className="popup__content">
        <button type="button" className="popup__close" id="popup-close" onClick={onClose}></button>
        <h3 className="popup__title">{title}</h3>
        <form
          className={`popup__form popup__form_${name}`}
          action="URL"
          name="form"
          id="popup-form"
          noValidate
          onSubmit={handleSubmit}
        >
          <fieldset className="popup__fieldset">{children}</fieldset>
          <button type="submit" className="popup__button">
            {submitButton}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
