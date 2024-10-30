



//Функция открытия попапа
const openModal=(targetModalButton, targetModal) => {
  targetModalButton.addEventListener('click',(evt) => {
    targetModal.classList.add('popup_is-opened');
  })
}
//Функция открытия попапа
const closeModal=(targetModalButton, targetModal)=>{
  //Закрытие нажатием на иконку крестика
  targetModalButton.addEventListener('click', (evt) => {
    targetModal.classList.remove('popup_is-opened');
  })
  //Закрытие нажатием вне попапа
  targetModal.addEventListener('click',(evt) =>{
    if (evt.target.classList.contains('popup_is-opened')){
      targetModal.classList.remove('popup_is-opened')
    }
  })
  //Закрытие нажатием на кнопку Esc
  const escClosePopup = (evt) =>{
      if (evt.key==='Escape'){
        targetModal.classList.remove('popup_is-opened');
        evt.target.removeEventListener('keydown', escClosePopup)
      }
  }
  document.addEventListener('keydown',escClosePopup)
}

export {openModal, closeModal}