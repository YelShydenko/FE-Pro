// const liza = "liza"
// localStorage.setItem("myName", liza)

// const products = [
//    { name: 'Headphones', price: 125.99 },
//    { name: 'Laptop', price: 1599.99}
// ]


// localStorage.setItem("products", JSON.stringify(products))
// const getProducts = localStorage.getItem("products")
// console.log(JSON.parse(getProducts));
// stringify = преобразовывает в строку (масив -> стоку)
// parse = преобразовывает из строки (стока -> масив)
// localStorage принимает только строку

// Задание. Имеется строка со структурой массива.
// Используя объект JSON преобразуйте данную строку в массив, добавьте в нее еще пару чисел и преобразуйте обратно в строку.
// const words = '["hello", "privet", "hallo", "konichiva" ]'
// const formattedWords = JSON.parse(words)
// formattedWords.push(1, 3, 45, 98)
// console.log(formattedWords);
// const againFormattedWords = JSON.stringify(formattedWords)
// console.log(againFormattedWords);
// localStorage.setItem("formatedProducts", againFormattedWords)

// Создать форму, которая позволяет добавить пункт товара в массив.
// Данные из массива должны отображаться в интерфейсе при добавлении нового товара.
// Реализовывать через массив с продуктами и функцией rerender.

// Задача. Доработать процесс таким образом, чтобы массив с продуктами добавлялся в localStorage.

const productForm = document.querySelector('#productForm');
const productName = document.querySelector('#productName');
const productPrice = document.querySelector('#productPrice');
let productList = []

function rerender() {
   const listElement = document.querySelector('#productList');
   listElement.innerHTML = ''
   productList.forEach((item) => {
      const productItem = document.createElement('li');
      productItem.textContent = `${item.name} : ${item.price} $`
      listElement.append(productItem)
   })

   const newProductList = JSON.stringify(productList);
   localStorage.setItem("productsList", newProductList);
}

function addProduct(event) {
   event.preventDefault()
   const name = productName.value
   const price = productPrice.value
   if (name && !isNaN(price)) {
      productList.push({ name, price })
      rerender()

      productName.value = '';
      productPrice.value = '';
   }
}
productForm.addEventListener('submit', addProduct)


