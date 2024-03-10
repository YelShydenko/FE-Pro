// 1. Напишите функцию, которая использует forEach для умножения каждого элемента массива на 2 и вывода результата в консоль.

// const numbers = [2, 4, 6, 1, 3, 6, 24, 61, 36, 46, 13 ]

// function multiplyByTwo(array) {
//     array.forEach(function(elem) {
//         console.log(elem * 2);
//     })
// }

// multiplyByTwo(numbers)

// 2.Напишите функцию, которая использует forEach, чтобы складывать все элементы массива и возвращать сумму.

// const numbers = [2, 4, 6, 1, 3, 6, 24, 61, 36, 46, 13 ]

// function sumOfElements(array){
//     let sum = 0
//     array.forEach(elem => {
//        sum += elem;  
//     });
//     console.log(sum); 
// }
// sumOfElements(numbers)

// 3.Дан массив строк. Используйте forEach, чтобы преобразовать каждую строку в верхний регистр и сохранить изменения в том же массиве.

// const words = ['There', 'was', 'a', 'nine', 'tailed', 'red', 'fox']

// function wordsUpperCase(arrays) {
//     arrays.forEach(function(elem, index, array){
//         array[index] = elem.toUpperCase();
//     });
// }

// wordsUpperCase(words)
// console.log(words);

// На map
// 4.Дан массив чисел. Создайте новый массив, в котором будут лежать квадраты каждого числа из исходного массива.

// const numbers = [2, 4, 6, 1, 3, 6, 24, 61, 36, 46, 13 ]

// const squared = numbers.map(function(elem) {
//     return Math.pow(elem, 2)
// })

// console.log(squared);

// 5.Дан массив объектов с информацией о товарах. Необходимо создать новый массив, содержащий только имена товаров.

// const products = [
//     {category: 'Charger', name: 'Thunderbolt', price: 29.00},
//     {category: 'Laptops', name: 'Asus F15', price: 1499.99},
//     {category: 'Headphones', name: 'Sennheiser Accentum Plus', price: 229.00},
//     {category: 'Console', name: 'PlayStation 5', price: 599.00 }
// ]

// const productNames = products.map(products => products.name);
// console.log(productNames);

// 6.Дан массив чисел. Создайте новый массив, в котором будут только отрицательные числа из исходного массива.

const numbers = [2, 4, -6, 1, -3, 6, -24, 61, -36, 46, -13 ]

const negativeNumbers = numbers
.map(function(elem) {
    if (elem < 0) {
        return elem 
    }
})
.filter(function (elem) {
   return elem !== undefined
})
console.log(negativeNumbers);