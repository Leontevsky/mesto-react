export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

export const userAvatarSelector = '.profile__avatar';
export const showEditFormButton = document.querySelector('#show-popup');
export const editFormPopup = document.querySelector('.popup_type_edit');
export const popupNew = document.querySelector('.popup_type_new');
export const showCreateFormButton = document.querySelector('#show-popup-new');
export const showUserPicPopup = document.querySelector('.profile__container');
export const newAvatarPopup = document.querySelector('.popup_type_update');
export const nameInput = document.querySelector('#username');
export const jobInput = document.querySelector('#userjob');
export const templateElement = document.querySelector('.template');
export const popupUserPicSelector = '.popup_update';
export const popupDeleteCardSelector = '.popup_type_delete';
export const popupFormAvatar = document.querySelector('#popupFormAvatar');

export const enableValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};
