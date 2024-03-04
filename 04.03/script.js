// const myName = 'lisa'
// const myAge = 21

// console.log(myName, myAge);

// // ----------------------------------------------------------------------------------

// const infoAboutMe = {
//    myName: 'Lisa',
//    myAge: 21,
//    myLastName: 'Shydenko'
// }

// console.log(infoAboutMe.myName, infoAboutMe.myLastName);

// // ----------------------------------------------------------------------------------

// function fn(myName, myAge) {
//    console.log(`Hello, my name is ${myName}, i am ${myAge} years old`);
// }

// fn(myName, myAge)

// // ----------------------------------------------------------------------------------

// const arr = [1, 2, 3, 4, 5, 'fdsfd', 'fsfdsfa', 134]

// function example(exampleArr) {
//   for (let i = 0; i < exampleArr.length; i++) {
//     console.log(exampleArr[i]);
//   }
// }

// example(arr)

// Написать функцию, которая принимает параметром описание кошки ( имя, возраст, цвет и вес)
// В консоли описать вашу кошку.
// Пример: «У меня есть кошка по кличке Вася, ему 10 лет, он рыжий и толстый (11кг)»

// const catInfo = {
//    catName: 'Аврора',
//    catAge: 7,
//    catColor: 'коричнего',
//    catWeight: 6
// }

// function cat(catName, catAge, catColor, catWeight) {
//    console.log(`У меня есть кошка по кличке ${catName}, ей ${catAge} лет, она ${catColor} цвета и она весит ${catWeight} кг`);
// }

// cat(catInfo.catName, catInfo.catAge, catInfo.catColor, catInfo.catWeight)

// // Усложняем функцию: делаем проверку.
// // Если коту больше 5 лет и его цвет не рыжий, то в консоль выводим его описание, в противном случае, в консоль выводим: ему 5 и он рыжий

// function cat(Name, Age, Color, Weight) {
//    if (Age >= 5 && Color != 'рыжий') {
//       console.log(`У меня есть кошка по кличке ${Name}, ей ${Age} лет, она ${Color} цвета и она весит ${Weight} кг`);
//    } else {
//       console.log(`Ей ${Age} и она ${Weight} цвета`);
//    }
// }

// cat('Кеша', 9, 'рыжий', 7)

// Функция принимает параметром массив, с помощью цикла обработать и вывести в консоль все элементы массива.

// const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function printNumbers(n) {
//    for (let i = 0; i < n.length; i++) {
//       console.log(n[i]);
//    }
// }

// printNumbers(n)

// Теперь необходимо вывести все строчные элементы массива . Только строчные

// const arr = [1, 2, 3, 5, 7, 'hekki', 'sdv', 'hello', 'amao', 'olllllp']

// function findString(arr) {
//    for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === String(arr[i])) {
//          console.log(arr[i]);
//       }
//    }
// }
// findString(arr)

// function findString(arr) {
//    for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] === 'string') {
//          console.log(arr[i]);
//       }
//    }
// }
// findString(arr)

// const obj = {
//    a: 5,
//    b: 10,
//    c: 'hello'
// }
// // Можно преобразовать обьект в массив
// const resut = Object.values(obj)
// console.log(resut);

// -------------------------------------------------------------------------------
//forEach

// const newArrFn = (item) => {
//   console.log(item);
// };

// result.forEach(function(item) {
// console.log(item)
// })

// function newFn(item) {
//   console.log(item);
// }

//map

// const newMapResult = result.map(function(item){
//     if(typeof item === 'string') {
//         return item + ' HELLO WORLD'
//     } else {
//         return item * 100
//     }
// })

// console.log(newMapResult)

//Callback function - функция обратного вызова, которая используется в качестве аргумента другой функции.
// console.log(result)

// function randomFn(a, b) {
//   return {
//     a: a,
//     b: b,
//   };
// }

// const newResult = randomFn(5, 'hello')

// console.log(newResult)

// 1. Напишите код, который принимает массив чисел и использует метод forEach, чтобы вывести каждый элемент массива в консоль.

   // const arr = [1, 2, 3, 'link', 'recht']

   // arr.forEach(function(item) {
   //    console.log(item);
   // })

// 2. Напишите код, который принимает массив целых чисел и выводит сообщение о том, является ли каждое число четным или нечетным.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   
//  arr.forEach(function newFn(element) {
//    if (element % 2 == 0) {
//       console.log(element);
//    }
// })

// Метод filter создает массив с прошлого которые прошли условие
   
// const newFilter = arr.filter(function newFn(element) {
//   return element % 2 === 0
// })

// console.log(newFilter);

// Напишите программу, которая принимает массив чисел и возвращает новый массив, в котором каждый элемент удвоен.
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   
//    const newArrMap = arr.map(function(elem) {
//       return elem *2
//    })

//    console.log(newArrMap);

// Напишите программу, которая принимает массив строк и возвращает новый массив, в котором каждая строка преобразована в верхний регистр.

// const stringArr = ['hello', 'world', 'hi', 'cat']
   
// const newStringArr = stringArr.map(function(elem) {
//    return elem.toUpperCase()
// })

// console.log(newStringArr);



// Преобразование даты: Напишите программу, которая принимает массив объектов дат в формате строк (например, ["2023-01-15", "2024-03-04", "2025-12-31"])
// и возвращает новый массив, в котором каждая дата преобразована в формат "День.Месяц.Год". ["15.01.2023", "04.03.2024", "31.12.2025"]

const dates = ["2023-01-15", "2024-03-04", "2025-12-31"];

const formatData = dates.map(function(date) {
   const newData = date.split('-')
   return newData.reverse().join('.')
})

console.log(formatData);