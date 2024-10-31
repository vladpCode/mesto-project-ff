//Функция открытия попапа
const openModal = (targetModal) => {
  targetModal.classList.add('popup_is-opened');
  document.addEventListener('keydown',closeByEsc);
  targetModal.addEventListener('click',closeByOverlayClick)
}
//Функция закрытия попапа
const closeModal=(targetModal)=>{
  targetModal.classList.remove('popup_is-opened')
  document.removeEventListener('keydown',closeByEsc);
  targetModal.removeEventListener('click',closeByOverlayClick)
}

//Функция закрытия попапа по клику на оверлей
const closeByOverlayClick= (evt)=>{
  if (evt.target.classList.contains('popup_is-opened')){
    closeModal(evt.target);
  }
}
//Функция закрытия попапа по клавише Escape
const closeByEsc = (evt) => {
  if (evt.key==='Escape'){
    const targetModal=document.querySelector('.popup_is-opened')
    closeModal(targetModal)
  }
}

export {openModal, closeModal}