//Импорт переменных и функций
import { placesList, addPopup} from "../scripts";

const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];
//Получение темплейта из DOM
const cardTemplate = document.querySelector('#card-template').content
//Функция создания карточки
const createCard =(cardContent, deleteCard)=>{
  const cardElement=cardTemplate.querySelector('.places__item').cloneNode(true);
  cardElement.querySelector('.card__image').src = cardContent.link;
  cardElement.querySelector('.card__image').alt = cardContent.name;
  cardElement.querySelector('.card__title').textContent = cardContent.name;
  const deleteCardButton = cardElement.querySelector('.card__delete-button');
  deleteCardButton.addEventListener('click', () => deleteCard(cardElement));
  const cardLikeBtn = cardElement.querySelector('.card__like-button');
  cardLikeBtn.addEventListener('click',(evt)=>{
    evt.preventDefault();
    if (cardLikeBtn.classList.contains('card__like-button_is-active')){
      cardLikeBtn.classList.remove('card__like-button_is-active')
    } else {cardLikeBtn.classList.add('card__like-button_is-active');}
  })
  return cardElement;
}
//Функция удаления карточки
const deleteCard = cardElement =>{
  cardElement.remove();
}

//Добавление карточки через попап
//Получение Инпутов из DOM
const placeNameInput = document.querySelector('.popup__input_type_card-name');
const urlCardInput = document.querySelector('.popup__input_type_url');
//Функция добавления карточки
function addCard(evt) {
  evt.preventDefault();
  const cardElement=cardTemplate.querySelector('.places__item').cloneNode(true)
  cardElement.querySelector('.card__image').src = urlCardInput.value;
  cardElement.querySelector('.card__image').alt = placeNameInput.value;
  cardElement.querySelector('.card__title').textContent = placeNameInput.value;
  const deleteCard = cardElement =>{cardElement.remove();}
  const deleteCardButton = cardElement.querySelector('.card__delete-button');
  deleteCardButton.addEventListener('click', () => deleteCard(cardElement));
  placesList.prepend(cardElement);
  addPopup.classList.remove('popup_is-opened');
  urlCardInput.value='';
  placeNameInput.value='';
  const cardLikeBtn = cardElement.querySelector('.card__like-button');
  cardLikeBtn.addEventListener('click',(evt)=>{
    evt.preventDefault();
    if (cardLikeBtn.classList.contains('card__like-button_is-active')){
      cardLikeBtn.classList.remove('card__like-button_is-active')
    } else {cardLikeBtn.classList.add('card__like-button_is-active');}
  })
}
//Экспорт функций и переменных
export {initialCards, createCard, deleteCard, addCard};