import { openModal } from "./modal";

//Получение темплейта из DOM
const cardTemplate = document.querySelector('#card-template').content
//Функция создания карточки
const createCard =(cardContent, deleteCard, toggleLike, openCardPopup)=>{
  const cardElement=getCardTemplate(cardTemplate, '.places__item');
  const cardElementImageAttributes=cardElement.querySelector('.card__image');
  cardElementImageAttributes.src = cardContent.link;
  cardElementImageAttributes.alt = cardContent.name;
  cardElement.querySelector('.card__title').textContent = cardContent.name;
  const deleteCardButton = cardElement.querySelector('.card__delete-button');
  deleteCardButton.addEventListener('click', () => deleteCard(cardElement));
  const cardLikeBtn = cardElement.querySelector('.card__like-button');
  cardLikeBtn.addEventListener('click',() => toggleLike(cardLikeBtn))
  cardElement.addEventListener('click',(evt) => openCardPopup(evt))
  return cardElement;
}
//Функция удаления карточки
const deleteCard = cardElement =>{
  cardElement.remove();
};
//Функция переключения лайка
const toggleLike = buttonLike => {
    if (buttonLike.classList.contains('card__like-button_is-active')){
      buttonLike.classList.remove('card__like-button_is-active')
    } else {buttonLike.classList.add('card__like-button_is-active');}
};
//Функция открытия попапа с изображением
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
// Функционал клонирования шаблона карточки
const getCardTemplate=(targetTemplate, targetClass)=>{
  return targetTemplate.querySelector(targetClass).cloneNode(true)
};
// Функция добавления карточки через попап

function addCard(cardImgUrl, cardPlaceName,){
const cardAddContent = {
  name: cardPlaceName.value,
  link: cardImgUrl.value,
}
  return createCard(cardAddContent, deleteCard, toggleLike, openCardPopup);
}

//Экспорт функций и переменных
export {createCard, deleteCard, toggleLike, openCardPopup, addCard};

