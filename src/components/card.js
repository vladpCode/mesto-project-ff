
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

// Функционал клонирования шаблона карточки
const getCardTemplate=(targetTemplate, targetClass)=>{
  return targetTemplate.querySelector(targetClass).cloneNode(true)
};

//Экспорт функций и переменных
export {createCard, deleteCard, toggleLike};

