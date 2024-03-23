// DOM = Document object model
//getElementById - устарело
//getElementByClass - устарело
//querySelector - актуально
const header = document.querySelector(".header");
const box = document.querySelector(".box");
const boxItem = document.createElement("div");
//append - помещает элемент, который мы передаем в качестве аргумента в конец элемента, к которому было применено
//classList - объект, содержащий 4 основных метода - add (добавить класс), remove(убрать класс), toggle (переключить класс. Есть есть - убирает, если нет - добавляет), contains(проверяет на наличие)
//innerText - помещает текст в элемент

const newArr = [
  {
    title: "Товар первый",
    description: "Здесь описание товара первого",
  },
  {
    title: "This is 2st title",
    description: "THis is 2st description",
  },
  {
    title: "This is 3st title",
    description: "THis is 3st description",
  },
  {
    title: "This is 4st title",
    description: "THis is 4st description",
  },
  {
    title: "This is 5st title",
    description: "THis is 5st description",
  },
  {
    title: "This is 6st title",
    description: "THis is 6st description",
  },
];

newArr.forEach(item => {
    const newEl = document.createElement('div')
    const newTitle = document.createElement('h3')
    const newDescritpion = document.createElement('p')
    const newImg = document.createElement('div')
    newImg.classList.add('box__image')
    newEl.classList.add('box__item')

    newTitle.innerText = item.title
    newDescritpion.innerText = item.description
    newEl.append(newImg, newTitle, newDescritpion)
    box.append(newEl)
})