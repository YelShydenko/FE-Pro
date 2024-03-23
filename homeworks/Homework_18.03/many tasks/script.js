// 1. Создайте массив объектов, каждый из которых представляет собой информацию о человеке (имя, возраст и т. д.). 
// Используйте метод map, чтобы создать новый массив, содержащий только имена всех людей.

// const people = [
//     {name: 'Daryl', age: 35},
//     {name: 'Rick', age: 42},
//     {name: 'Carl', age: 15},
//     {name: 'Glenn', age: 29},
//     {name: 'Meggie', age: 28},
//     {name: 'Carol', age: 38}
// ]

// function getNames(array) {
//     const names = array.map((elem)=> {
//         return elem.name;
//     })
//     console.log(names);
// }
// getNames(people)

// 2. Создайте массив чисел и используйте метод map, чтобы преобразовать каждое число в строку.

// const numbers = [1, 2, 3, 4, 43, 32, 21, 12, 23, 34 ]

// function numbersToString(array) {
//     const toString = array.map((elem)=>{
//         return String(elem)
//     })
//     console.log(toString);
// }
// numbersToString(numbers)

// 3. Создайте массив строк, представляющих даты, и используйте метод map, чтобы преобразовать каждую строку в объект Date.

// const dates = ['06-19-2002', '10-02-1996', '11-05-2022'];

// function stringToData(array) {
//     const formatDates = array.map((elem) => {
//         return new Date(elem);
//     });
    
//     console.log(formatDates);
// }
// stringToData(dates)

// 4. Создайте массив чисел и используйте метод map, чтобы создать новый массив, содержащий квадраты каждого числа.

// const numbers = [1, 2, 3, 4, 43, 32, 21, 12, 23, 34]

// function squareNumbers(array) {
//     const newNumbers = array.map((elem)=>{
//         return Math.pow(elem, 2)
//     })
//     console.log(newNumbers);
// }
// squareNumbers(numbers)

// 5. Создайте массив слов и используйте метод map, чтобы создать новый массив, содержащий длины каждого слова.

// const words = ['Rick', 'Glenn', 'Maggie', 'Daryl', 'Carol', 'Carl']

// function wordsLength(array) {
//     const newWords = array.map((elem)=>{
//         return elem.length
//     })
//     console.log(newWords);
// }
// wordsLength(words)


// ForEach:
// 6. Создайте массив чисел и используйте метод forEach, чтобы вывести в консоль каждый элемент массива, умноженный на 2.

// const numbers = [1, 2, 3, 4, 43, 32, 21, 12, 23, 34]

// function multiplyByTwo(array) {
//     array.forEach(elem => {
//         console.log(elem*2);
//     });
// }
// multiplyByTwo(numbers)

// 7. Создайте массив строк и используйте метод forEach, чтобы вывести в консоль каждую строку в верхнем регистре.

// const words = ['Rick', 'Glenn', 'Maggie', 'Daryl', 'Carol', 'Carl']

// function wordsToUpperCase(array) {
//     array.forEach((elem, i, arr) => {
//         return arr[i] = elem.toUpperCase()
//     });
//     console.log(array);
// }
// wordsToUpperCase(words)

// 8. Создайте массив объектов и используйте метод forEach, чтобы вывести в консоль значения определенного свойства каждого объекта.

// const people = [
//     {name: 'Daryl', age: 35, title: 'Good person'},
//     {name: 'Rick', age: 42, title: 'Main Character'},
//     {name: 'Carl', age: 15, title: 'Main Character Son'},
//     {name: 'Glenn', age: 29, title: 'My Favorite Character'},
//     {name: 'Meggie', age: 28, title: 'My Seccond Favorite Character'},
//     {name: 'Carol', age: 38, title: 'Have Hard Destiny'}
// ]

// function getFeature(array) {
//     array.forEach((elem, i, arr) => {
//         return arr[i] = elem.title
//     });
//     console.log(array);
// }
// getFeature(people)

// 9. Создайте массив чисел и используйте метод forEach, чтобы вывести в консоль только нечетные числа.

// const numbers = [1, 2, 3, 4, 43, 32, 21, 12, 23, 34]

// function oddNumbers(array) {
//     array.forEach(elem => {
//         if (elem % 2 !== 0) {
//             console.log(elem);
//         }
//     });
    
// }
// oddNumbers(numbers)

// 10. Создайте массив слов и используйте метод forEach, чтобы вывести в консоль каждое слово, у которого длина больше 5 символов.

// const words = ['Rick', 'Glenn', 'Maggie', 'Daryl', 'Carol', 'Carl']

// function lengthMoreThanFive(array) {
//     array.forEach(elem => {
//         if (elem.length > 5) {
//             console.log(elem);
//         }
//     });
// }
// lengthMoreThanFive(words)

// Filter:
// 11. Создайте массив чисел и используйте метод filter, чтобы отфильтровать только положительные числа.

// const numbers = [-1, 2, -3, 4, 43, -32, -21, 12, -23, 34]

// function positiveNumbers(array) {
//     const newNumbers = array.filter((elem) =>{
//         if (elem >= 0) {
//             return elem
//         }
//     })
//     console.log(newNumbers);
// }
// positiveNumbers(numbers)

// 12. Создайте массив строк и используйте метод filter, чтобы отфильтровать только строки, содержащие более одного слова.

// const words = ['Hello', 'my name', 'is Liza', 'and', 'my surname', 'is Shydenko']

// function wordsMoreThanOne(array) {
//     const newWords = array.filter((elem)=>{
//         return elem.split(' ').length > 1
//     })
//     console.log(newWords);
// }
// wordsMoreThanOne(words)

// 13. Создайте массив объектов, представляющих людей, и используйте метод filter, чтобы отфильтровать только совершеннолетних.

// const people = [
//     {name: 'Daryl', age: 35, title: 'Good person'},
//     {name: 'Rick', age: 42, title: 'Main Character'},
//     {name: 'Carl', age: 15, title: 'Main Character Son'},
//     {name: 'Glenn', age: 29, title: 'My Favorite Character'},
//     {name: 'Meggie', age: 28, title: 'My Seccond Favorite Character'},
//     {name: 'Judith', age: 3, title: 'Main Character Daughter'},
//     {name: 'Carol', age: 38, title: 'Have Hard Destiny'}
// ]

// function adulthood(array) {
//     const adult = array.filter((elem)=>{
//         if (elem.age >= 18) {
//             return elem
//         }
//     })
//     console.log(adult);
// }
// adulthood(people)

// 14. Создайте массив чисел и используйте метод filter, чтобы отфильтровать только числа, которые делятся на 3 без остатка.

// const numbers = [1, 2, 3, 4, 43, 32, 21, 12, 23, 34]

// function divideByThree(array) {
//     const newNumbers = array.filter((elem)=>{
//         if (elem % 3 === 0) {
//             return elem
//         }
//     })
//     console.log(newNumbers);
// }
// divideByThree(numbers)

// 15. Создайте массив слов и используйте метод filter, чтобы отфильтровать только слова, начинающиеся с определенной буквы.

// const words = ['Rick', 'Glenn', 'Maggie', 'Daryl', 'Carol', 'Carl']

// function wordsWithLetter(array, letter) {
//     const newWords = array.filter((elem)=>{
//         const newLetter = letter.toUpperCase()
//         return elem.startsWith(newLetter)
//     })
//     console.log(newWords);
// }
// wordsWithLetter(words, 'c')


