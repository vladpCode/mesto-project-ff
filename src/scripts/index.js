//1. Импорт стилей, переменных и функций.

import '../pages/index.css'
import {createCard, deleteCard, toggleLike, openCardPopup, addCard} from '../components/card.js'
import { openModal, closeModal } from '../components/modal.js';
import { initialCards } from '../components/cards.js';

//2. Получение необходимых элементов DOM.
const placesList = document.querySelector('.places__list');
const btnOpenEditProfileForm = document.querySelector('.profile__edit-button');
const btnOpenAddCardForm = document.querySelector('.profile__add-button');
const formEditProfile= document.querySelector('.popup_type_edit');
const formAddCard= document.querySelector('.popup_type_new-card');
const formImgCard= document.querySelector('.popup_type_image');
const formElement = document.querySelector('.popup__form[name="edit-profile"');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const cardPlaceNameInput = document.querySelector('.popup__input_type_card-name');
const cardUrlInput = document.querySelector('.popup__input_type_url');
const formAddElement = document.querySelector('.popup__form[name="new-place"');

//2.1 Вывод карточек из массива на страницу.
initialCards.forEach(cardContent => {
  const readyCard = createCard(cardContent, deleteCard, toggleLike, openCardPopup);
  placesList.append(readyCard);
});

//3. Открытие попапов.
btnOpenEditProfileForm.addEventListener('click', (evt)=>{
  nameInput.value=profileTitle.textContent;
  jobInput.value=profileDescription.textContent;
  openModal(formEditProfile);
})

btnOpenAddCardForm.addEventListener('click', ()=>openModal(formAddCard))

//4 Закрытие попапов.
formEditProfile.addEventListener('click',(evt)=>{
  if(evt.target.classList.contains('popup__close')){
  closeModal(formEditProfile)
}
});
formAddCard.addEventListener('click',(evt)=>{
  if(evt.target.classList.contains('popup__close')){
  closeModal(formAddCard)
}
});
formImgCard.addEventListener('click',(evt)=>{
  if(evt.target.classList.contains('popup__close')){
  closeModal(formImgCard)
}
});

//5. Функция сохранения введенных данных.
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent=nameInput.value;
  profileDescription.textContent=jobInput.value;
  formEditProfile.classList.remove('popup_is-opened');
}
formElement.addEventListener('submit', handleFormSubmit); 

//6. Добавление карточки через попап
formAddElement.addEventListener('submit',(evt)=> {
  evt.preventDefault();
  let readyAddCard = addCard(cardUrlInput, cardPlaceNameInput)
  placesList.prepend(readyAddCard);
  cardUrlInput.value='';
  cardPlaceNameInput.value='';
  formAddCard.classList.remove('popup_is-opened');
});

//7. Плавное открытие и закрытие попапов.
formAddCard.classList.add('popup_is-animated');
formEditProfile.classList.add('popup_is-animated');
formImgCard.classList.add('popup_is-animated');
