//1.Импорт стилей, переменных и функций.

import '../pages/index.css'
import {initialCards, createCard, deleteCard, addCard} from '../components/cards.js'
import { openModal, closeModal } from '../components/modal.js';

//2. Работа с карточками.
//2.1 Получение места куда вставлять карточки из DOM.
const placesList = document.querySelector('.places__list');
//2.2 Вывод карточек из массива на страницу.
initialCards.forEach(cardContent => {
  const readyCard = createCard(cardContent, deleteCard);
  placesList.append(readyCard);
});
//2.3 Добавление карточки через попап.
const addFormElement = document.querySelector('.popup__form[name="new-place"');
addFormElement.addEventListener('submit', addCard);

//3. Попапы редактирования информации и добавления карточек.
//3.1 Получение необходимых элементов DOM.
const openEditBtn = document.querySelector('.profile__edit-button');
const openAddBtn = document.querySelector('.profile__add-button');
const closeBtnEdit = document.querySelector('.popup__close-edit');
const closeBtnAdd = document.querySelector('.popup__close-add');
const editPopup= document.querySelector('.popup_type_edit');
const addPopup= document.querySelector('.popup_type_new-card');
//3.2 Открытие попапов.
openModal(openEditBtn, editPopup);
openModal(openAddBtn, addPopup);
//3.3 Закрытие попапов.
closeModal(closeBtnEdit, editPopup);
closeModal(closeBtnAdd, addPopup);

//4. Редактирование имени и информации о себе.
//4.1 Получение необходимых элементов DOM.
const formElement = document.querySelector('.popup__form[name="edit-profile"');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
//4.2 В полях инпутов показываются данные отображаемые на странице.
nameInput.placeholder=profileTitle.textContent;
jobInput.placeholder=profileDescription.textContent;
//4.3 Функция сохранения введенных данных.
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent=nameInput.value;
  profileDescription.textContent=jobInput.value;
  editPopup.classList.remove('popup_is-opened');
}
//4.4 Добавление обработчика функции 4.3
formElement.addEventListener('submit', handleFormSubmit); 


//5. Попап карточек
//5.1 Получение необходимых элементов DOM.
const imgPopup= document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupImageCaption= document.querySelector('.popup__caption');
const closeBtnImg = document.querySelector('.popup__close-img');
//5.2 Функция открытия попапа.
const openImgPopup = (evt)=>{
  if (evt.target.classList.contains('card__image')){
    evt.preventDefault();
    imgPopup.classList.add('popup_is-opened');
    popupImage.src=evt.target.src
    popupImage.alt=evt.target.alt
    popupImageCaption.textContent=evt.target.alt
  }
};
//5.3 Добавление обработчика функции 5.2
placesList.addEventListener('click', openImgPopup)
//5.4 Закрытие попапа.
closeModal(closeBtnImg, imgPopup);


//6. Плавное открытие и закрытие попапов.
addPopup.classList.add('popup_is-animated');
editPopup.classList.add('popup_is-animated');
imgPopup.classList.add('popup_is-animated');

//7. Экспорт переменных и функций

export {placesList, addPopup};