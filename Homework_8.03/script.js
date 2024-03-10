// forEach:
// 1. Напишите программу, которая использует метод forEach, чтобы вывести каждый элемент массива на новой строке.

// const words =  ['There', 'was', 'a', 'nine', 'tailed', 'red', 'fox']
// function elemNewString(array) {
//     array.forEach(element => {
//         console.log(element);
//     });
// }
// elemNewString(words)

// 2. Создайте функцию, которая принимает массив чисел в качестве аргумента и использует метод forEach, 
// чтобы увеличить каждый элемент массива на 1.

// const numbers = [2, 4, 6, 1, 3, 6, 24, 61, 36, 46, 13 ]

// function numberPlusOne(array) {
//     array.forEach(function (element, i, arr) {
//         return arr[i] = element + 1;
//       });
//       console.log(numbers);
// }
// numberPlusOne(numbers)

// 3. Напишите программу, которая использует метод forEach, чтобы найти сумму всех элементов в массиве.

// const numbers = [2, 4, 6, 1, 3, 6, 24, 61, 36, 46, 13 ]

// function sumOfElements(array) {
//     let sum = 0
//     array.forEach(element => {
//         sum += element
//         return sum
//     });
//     console.log(sum);
// }
// sumOfElements(numbers)

// 4. Создайте функцию, которая принимает массив строк в качестве аргумента и использует метод forEach, 
// чтобы преобразовать каждую строку в верхний регистр.

// const words =  ['There', 'was', 'a', 'nine', 'tailed', 'red', 'fox']

// function wordsUpperCase(array) {
//     array.forEach(function(element, i, arr ){
//        return arr[i] = element.toUpperCase()
//     });
//     console.log(array);
// }
// wordsUpperCase(words)

// 5. Напишите программу, которая использует метод forEach, чтобы проверить, содержит ли массив заданное значение.

// const numbers = [2, 4, 6, 1, 3, 6, 24, 61, 36, 46, 13];

// function checkValue(array, neededValue) {
//     let found = false;
//     array.forEach(function (element) {
//         if (element === neededValue) {
//             found = true;
//         }
//     });
//     if (found) {
//         console.log(`Есть значение ${neededValue}`);
//     } else {
//         console.log(`Нет значения ${neededValue}`);
//     }
// }
// checkValue(numbers, 6);


// map:
// 6. Напишите программу, которая использует метод map, чтобы умножить каждый элемент массива на 2.

// const numbers = [2, 4, 6, 1, 3, 6, 24, 61, 36, 46, 13];

// function multiplyElemByTwo(array) {
//     const newNumbers = numbers.map(function(element, i, arr) {
//         return arr[i] = element * 2
//     })
//     console.log(newNumbers);
// }
// multiplyElemByTwo(numbers)

// 7. Создайте функцию, которая принимает массив строк в качестве аргумента и использует метод map,
//  чтобы добавить к каждой строке восклицательный знак.

// const words =  ['There', 'was', 'a', 'nine', 'tailed', 'red', 'fox']

// function addSymbol(array){
//     const newArray = array.map(function(elem, i, arr) {
//         return arr[i] = elem + '!'
//     })
//     console.log(newArray);
// }
// addSymbol(words)

// 8. Напишите программу, которая использует метод map, чтобы извлечь имена из массива объектов и создать новый массив только из имен.

// const person = [
//     {name: 'Liza', age: 21},
//     {name: 'Kostia', age: 27},
//     {name: 'Masha', age: 22},
//     {name: 'Danya', age: 28}
// ]

// function namesArray(array) {
//     const onlyNames = array.map(function(elem) {
//         return elem.name
//     })
//     console.log(onlyNames);
// }
// namesArray(person)

// 9. Создайте функцию, которая принимает массив чисел в качестве аргумента и использует метод map, 
// чтобы вернуть новый массив, содержащий квадраты этих чисел.

// const numbers = [2, 4, 6, 1, 3, 6, 24, 61, 36, 46, 13];

// function squaredNumbers(array) {
//     const newArray = array.map(function(elem, i, arr) {
//         return arr[i] = Math.pow(elem, 2)
//     })
//     console.log(newArray);
// }
// squaredNumbers(numbers)

// 10. Напишите программу, которая использует метод map, чтобы преобразовать массив строк в массив чисел 
// (например, массив строк '1', '2', '3' должен быть преобразован в массив чисел 1, 2, 3).

// const stringNumbers = ['11', '22', '33', '17', '88', '99', '111' ]

// function fromStringToNumbers(array) {
//     const newArray = array.map(function(elem) {
//         return Number(elem)
//     })
//     console.log(newArray);
// }
// fromStringToNumbers(stringNumbers)

// filter:
// 11. Напишите программу, которая использует метод filter, чтобы отфильтровать все четные числа из массива.

// const numbers = [2, 4, 6, 1, 8, 3, 6, 24, 61, 36, 46, 13];

// function filteredEven(array) {
//     const filteredEven = array.filter(function (elem) {
//    if (elem % 2 === 0)
//       console.log(elem);
//     })
// }
// filteredEven(numbers)

// 12. Создайте функцию, которая принимает массив строк в качестве аргумента и использует метод filter, 
// чтобы вернуть массив строк, содержащих только букву 'a'.

// const words =  ['There', 'was', 'a', 'nine', 'tailed', 'red', 'fox']

// function filteredWords(array) {
//     const wordsWithA = array.filter(function(str){
//         return str.includes('a')
//     })
//     console.log(wordsWithA);
// }
// filteredWords(words)

// 13. Напишите программу, которая использует метод filter, чтобы отфильтровать только положительные числа из массива.

// const numbers = [2, 4, -6, 1, 8, -3, 6, -24, 61, -36, 46, -13];

// function filteredPositiveNumbers(array) {
//     const positiveNumbers = array.filter(function(elem) {
//         if (elem > 0) {
//             return elem
//         }
//     })
//     console.log(positiveNumbers);
// }
// filteredPositiveNumbers(numbers)

// 14. Создайте функцию, которая принимает массив объектов в качестве аргумента и использует метод filter, 
// чтобы вернуть массив объектов, у которых значение определенного свойства больше заданного порога.

// const person = [
//         {name: 'Liza', age: 21},
//         {name: 'Kostia', age: 27},
//         {name: 'Masha', age: 22},
//         {name: 'Danya', age: 28}
//     ]
    
//     function filteredObject(array) {
//         const newArray = array.filter(function(elem) {
//             return elem.age >= 25
//         })
//         console.log(newArray);
//     }
//     filteredObject(person)

// 15. Напишите программу, которая использует метод filter, чтобы отфильтровать строки, содержащие не менее 5 символов.
// const words =  ['There', 'was', 'a', 'nine', 'tailed', 'red', 'fox'];

// function moreThanFiveSymbols(array){
//     const newArray = array.filter(function(elem){
//         return elem.length >= 5
//     })
//     console.log(newArray);
// }
// moreThanFiveSymbols(words)

// reduce:
// 16. Напишите программу, которая использует метод reduce, чтобы найти сумму всех элементов массива.

// const numbers = [2, 4, 6, 1, 3, 6, 24, 61, 36, 46, 13];
 
// function sumOfElementsReduce(array) {
//     const sumArray = array.reduce(function(prev, current){
//         return prev + current
//     })
//     console.log(sumArray); 
// }
// sumOfElementsReduce(numbers)

// 17. Создайте функцию, которая принимает массив чисел в качестве аргумента и использует метод reduce, 
// чтобы найти наименьшее число в массиве.

// const numbers = [2, 4, 6, 1, 3, 6, 24, 61, 36, 46, 13];

// function findMinimal(array) {
//     const newArray = array.reduce(function(min, current) {
//         return Math.min(min, current)
//     })
//     console.log(newArray);
// }
// findMinimal(numbers)

// 18. Напишите программу, которая использует метод reduce, чтобы объединить все элементы массива строк в одну строку.

// const words =  ['There', 'was', 'a', 'nine', 'tailed', 'red', 'fox'];

// function combinedStrings(array) {
//     const newArray = array.reduce(function(elem, current) {
//         return elem + current
//         // Если с пробелами:
//         // return elem + " " + current 
//     })
//     console.log(newArray);
// }
// combinedStrings(words)

// 19. Создайте функцию, которая принимает массив объектов в качестве аргумента и использует метод reduce, 
// чтобы вычислить средний возраст всех объектов в массиве.

// const person = [
//         {name: 'Liza', age: 21},
//         {name: 'Kostia', age: 27},
//         {name: 'Masha', age: 22},
//         {name: 'Danya', age: 28}
//     ]

// function findMiddleAge(array) {
//     const totalAge = array.reduce(function(sum, human) {
//         return sum + human.age 
        
//     }, 0)
//     const avarageAge = totalAge / array.length
//     console.log(avarageAge);
// }
// findMiddleAge(person)

// 20. Напишите программу, которая использует метод reduce, чтобы найти наиболее часто встречающийся элемент в массиве строк.

const words =  ['There', 'was', 'a', 'nine', 'tailed', 'red', 'fox', 'and', 'a', 'white', 'fox'];

function findRepitedElement(array) {
    const newArray = array.reduce(function(acc, elem) {
        acc[elem] = (acc[elem] || 0) + 1;
        return acc;
    }, {})
    console.log(newArray);
}
findRepitedElement(words)

// Я нашла такое решение в интернете, но не совсем понимаю его, может можно по другому, не уверенна что такое решение должно быть
