// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content
// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
// @todo: Функция создания карточки
const createCard =(cardContent, deleteCard)=>{
  const cardElement=cardTemplate.querySelector('.places__item').cloneNode(true);
  cardElement.querySelector('.card__image').src = cardContent.link;
  cardElement.querySelector('.card__image').alt = cardContent.name;
  cardElement.querySelector('.card__title').textContent = cardContent.name;
  const deleteCardButton = cardElement.querySelector('.card__delete-button');
  deleteCardButton.addEventListener('click', () => deleteCard(cardElement));
  return cardElement;
}
// @todo: Функция удаления карточки
const deleteCard = cardElement =>{
  cardElement.remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach(cardContent => {
  const readyCard = createCard(cardContent, deleteCard);
  placesList.append(readyCard);
});
