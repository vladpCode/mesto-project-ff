//1. Импорт стилей, переменных и функций.

import '../pages/index.css'
import {createCard, deleteCard, toggleLike} from '../components/card.js'
import { openModal, closeModal } from '../components/modal.js';
import { initialCards } from '../components/cards.js';

//2. Получение необходимых элементов DOM.
const placesList = document.querySelector('.places__list');
const btnOpenEditProfileForm = document.querySelector('.profile__edit-button');
const btnOpenAddCardForm = document.querySelector('.profile__add-button');
const formEditProfile= document.querySelector('.popup_type_edit');
const formAddCard= document.querySelector('.popup_type_new-card');
const formImgCard= document.querySelector('.popup_type_image');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const cardPlaceNameInput = document.querySelector('.popup__input_type_card-name');
const cardUrlInput = document.querySelector('.popup__input_type_url');
const formAddElement = document.querySelector('.popup__form[name="new-place"');
const imgPopup= document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupImageCaption= document.querySelector('.popup__caption');

const openCardPopup = (evt) => {
  if (evt.target.classList.contains('card__image')){
    openModal(imgPopup);
    popupImage.src=evt.target.src
    popupImage.alt=evt.target.alt
    popupImageCaption.textContent=evt.target.alt
  }
};

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
function submitEditProfileForm(evt) {
  evt.preventDefault();
  profileTitle.textContent=nameInput.value;
  profileDescription.textContent=jobInput.value;
  closeModal(formEditProfile);
}
formEditProfile.addEventListener('submit', submitEditProfileForm); 

//6. Добавление карточки через попап
formAddElement.addEventListener('submit',(evt)=> {
  evt.preventDefault();
  const cardAddContent = {
    name: cardPlaceNameInput.value,
    link: cardUrlInput.value,
  }
  const readyAddCard = createCard(cardAddContent, deleteCard, toggleLike, openCardPopup)
  placesList.prepend(readyAddCard);
  formAddElement.reset();
  closeModal(formAddCard);
});

//7. Плавное открытие и закрытие попапов.
formAddCard.classList.add('popup_is-animated');
formEditProfile.classList.add('popup_is-animated');
formImgCard.classList.add('popup_is-animated');
