// const container = document.querySelector('.container')
// const box = document.createElement('div')
// container.append(box)
// box.classList.add('box')
// const btn = document.querySelector('.btn')


// btn.addEventListener('click', function() {
//     box.classList.toggle('box__active')
// })

// По клику на первую кнопку - меняем у первого элемента бордер на красный и более жирный
const btn = document.querySelector('#btn__active')
const firstElement = document.querySelector('#element')

// btn.addEventListener('click', function () {
//    firstElement.style.borderColor = 'red'
// })

btn.addEventListener('click', function () {
   firstElement.classList.toggle('firstElement__active')
})

// По клику на вторую кнопку внизу появляется 3 шарика ( один родитель, остальные 2 на нем - псевдоэлементы)

const secondBtn = document.querySelector('#second__active')
const secondItem = document.querySelector('.second__item')
secondBtn.addEventListener('click', function () {
   const originElem = document.createElement('div')
   originElem.classList.toggle('newElem')
   secondItem.append(originElem)
})
// ---------------------------------------------------------------------------------------
const modalBtn = document.querySelector('.btn__modal')
const container = document.querySelector('.container')
modalBtn.addEventListener('click', () => {
    const modal = document.createElement('div')
   const modalContainer = document.createElement('div')
    modalContainer.classList.add('modal__container')
    modal.classList.add('modal')
   modal.append(modalContainer)
    container.append(modal)
})