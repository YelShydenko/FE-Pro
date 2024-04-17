// Класс "Студент":Создайте класс "Студент", который имеет свойства имя, возраст и массив с оценками.
// Класс должен иметь метод для вычисления среднего балла.

// class student {
//   constructor(name, age, grade) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//   }
//   getAverageGrade() {
//     const sumGrade = this.grade.reduce((prevValue, currValue) => {
//       return prevValue + currValue;
//     });
//     return sumGrade / this.grade.length;
//   }
// }

// const liza = new student("Liza", 21, [78, 96, 87]);
// console.log(liza.getAverageGrade());

// Создайте класс "Товар", который имеет свойства название, цена и количество на складе.
// Теперь мы хотим иметь возможность фильтровать и изменять массив товаров
// с использованием методов массивов, таких как map и filter.
// Фильтрация товаров по цене:
// Мы хотим иметь возможность отфильтровать массив товаров по их цене.
// Например, мы можем хотеть получить только товары, цена которых меньше или равна определенной сумме.
// Изменение цены товаров: Мы также хотим иметь возможность изменить цену каждого товара в массиве на определенный процент.
// Например, мы можем хотеть увеличить цену каждого товара на 10 %.
// Наша задача состоит в том, чтобы добавить метод calculateTotalValue в класс Product.
// Этот метод должен принимать массив объектов Product и возвращать общую стоимость всех товаров в этом массиве.
// Мы хотим, чтобы этот метод был статическим, что означает, что он будет доступен через сам класс Product,
// а не через его экземпляры.

// Первый Вариант
// class Product {
//   constructor(name, price, quantity) {
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//   }
//   calculateTotalValue(productsArray) {
//     return productsArray.reduce((sum, curr) => {
//       return sum + curr.price *curr.quantity;
//     }, 0);
//   }

//   filterByPrice(maxPrice, productsArr) {
//     return productsArr.filter((product) => product.price <= maxPrice);
//   }

//   increasePrice(percent, productsArray) {
//     return productsArray.map((product) => {
//       const newPrice = product.price * (1 + percent / 100);
//       return { ...product, price: newPrice };
//     });
//   }
// }

// const products = [
//   new Product("Книга", 15, 30),
//   new Product("Компьютер", 1000, 5),
//   new Product("Флешка", 10, 50),
// ];

// const firstProduct = new Product("laptop", 3456, 35);

// const productsArr = firstProduct.filterByPrice(40, products);
// console.log(productsArr);

// const newArr = firstProduct.increasePrice(10, products);
// console.log(newArr);

// const totalPrice = firstProduct.calculateTotalValue(products)
// console.log(totalPrice);

// Второй вариант
// class Product {
//   constructor(name, price, quantity) {
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//   }

//   getTotalValue() {
//     return this.price * this.quantity;
//   }

//   static calculateTotalValue(products) {
//     return products.reduce(
//       (total, product) => total + product.getTotalValue(),
//       0
//     );
//   }

//   static filterByPrice(products, maxPrice) {
//     return products.filter((product) => product.price <= maxPrice);
//   }

//   static increasePriceByPercentage(products, percentage) {
//     return products.map((product) => {
//       const increasedPrice = product.price * (1 + percentage / 100);
//       return { ...product, price: increasedPrice };
//     });
//   }
// }

// const products = [
//   new Product("Книга", 15, 30),
//   new Product("Компьютер", 1000, 5),
//   new Product("Флешка", 10, 50),
// ];

// const cheapProducts = Product.filterByPrice(products, 20);
// console.log(cheapProducts);

// // Увеличение цены на 10%
// const expensiveProducts = Product.increasePriceByPercentage(products, 10);
// console.log(expensiveProducts);

// // Подсчет общей стоимости всех товаров
// const totalValue = Product.calculateTotalValue(products);
// console.log(totalValue);


//   const arr = [1, 2, 3, 4, 5, 'hello', 'my name is', true, false]
//   const arr2 = ['sdvsdv', 'sdvsd', 123]

//   const str = 'Hello, friend, my name is Yury'
//   function reverseStr(string) {

//     return [...string]
//   }


//   console.log(arr.concat(arr2))


const btn = document.querySelector('.open__modal')
const btn2 = document.querySelector('.open__modal2')
const btnClose = document.querySelector('.modal__close')
const modal = document.querySelector('.modal')
const emptyDiv = document.querySelector('.modal__data')

async function fetchApi() {
    const url = 'https://api.kanye.rest'

    try {
        const response = await fetch(url)
        const data = await response.json()
        modal.classList.add('active')
        emptyDiv.textContent = data.quote
        
    } catch(e) {
        console.error('Request was not sent', e)
    }
}

async function fetchApi2() {
    const url = 'https://api.chucknorris.io/jokes/random'

    try {
        const response = await fetch(url)
        const data = await response.json()
        modal.classList.add('active')
        emptyDiv.textContent = data.value
    } catch(e) {
        console.error('Request was not sent', e)
    }
}

btn.addEventListener('click', fetchApi)
btn2.addEventListener('click', fetchApi2)

if(modal) {
    btnClose.addEventListener('click', () => {
        modal.classList.remove('active')
    })
}

//OOP
//
//
//

class User {
    constructor(name, username, email, address) {
        this.name = name
        this.username = username
        this.email = email
        this.address = address
    }

    getUserInfo() {
        return `${this.name} with username: ${this.username} has email: ${this.email} and lives in ${this.address.city}`
    }
}

async function fetchUser(userId) {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`
    try {
        const response = await fetch(url)
        const data = await response.json()
        const user = new User(data.name, data.username, data.email, data.address)
        console.log(user)
        
    } catch(e) {
        console.error('Request was not sent', e)
    }
}




fetchUser(4)