//Функция открытия попапа
const openModal = (targetModal) => {
  targetModal.classList.add('popup_is-opened');
  document.addEventListener('keydown',(evt)=>{closeByEsc(evt,targetModal)});
  targetModal.addEventListener('click',(evt)=>closeByOverlayClick(evt.target))
}
//Функция закрытия попапа
const closeModal=(targetModal)=>{
  targetModal.classList.remove('popup_is-opened')
  document.removeEventListener('keydown',()=>closeByEsc(targetModal));
  targetModal.removeEventListener('click',(evt)=>closeByOverlayClick(evt.target))
}

//Функция закрытия попапа по клику на оверлей
const closeByOverlayClick= (targetModal)=>{
  if (targetModal.classList.contains('popup_is-opened')){
    targetModal.classList.remove('popup_is-opened')
  }
}
//Функция закрытия попапа по клавише Escape
const closeByEsc = (evt, targetModal) => {
  if (evt.key==='Escape'){
    targetModal.classList.remove('popup_is-opened');
    evt.target.removeEventListener('keydown', closeByEsc)
  }
}

export {openModal, closeModal}