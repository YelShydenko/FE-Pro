const infoAboutPerson = {
  firstName: "Yury",
  lastName: "Arakelove",
  age: 26,
  greeting: function () {
    console.log(this.firstName, this.lastName, this.age);
  },
};

infoAboutPerson.greeting();

// const fn = (a, b) => {
//     this.a = a
//     this.b = b
// }

// const result = new fn(5, 10)
// console.log(result)
//Uncaught TypeError: fn is not a constructor - получаем на выходе ошибку в консоли

// function fn2(a, b) {
//     this.a = a
//     this.b = b
// }

// const newResult = new fn2(5, 10)
// console.log(newResult)

// function someFn() {
//     return this
// }

// const newObj = {
//     firstName: 'Yury'
// }

// const newFn = someFn.bind(newObj)
// // console.log(newFn()) //{firstName: 'Yury'}
// console.log(someFn.call(newObj))
// console.log(someFn.apply(newObj, ['new name', 'new name 2']))

// function fn() {
// 	return this;
// }

// const obj = {name: "Yury Arakelov"}

// const result = fn.call(obj, 'arg1', 'arg2')

// console.log(result)
// console.log(fn.apply(obj, ['arg1', 'arg2']))

// function User(name, age) {
//     this.name = name
//     this.age = age
// }

// function RegisteredUser(name, age) {
//     User.call(this, name, age)
//     this.status = 'registered'
// }

// const ff = RegisteredUser('Yury', 26)

// RegisteredUser.prototype = Object.create(User.prototype)
// console.log(RegisteredUser.prototype)

// const obj = {
//     name: 'Yury',
//     lastName: 'Arakelov'
// }

// const result = Object.values(obj)
// .map(item => [...item])
// console.log(obj, result)

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// function Food(name, price) {
//   Product.call(this, name, price);
//   this.category = "food";
// }

// const checkObj = new Product('milk', 3)
// const result = new Food("cheese", 5);
// console.log(checkObj, result);

// function fn(name) {
//     this.name = name
// }

// const result = new fn('Yury ')
// console.log(result)

// fn()

// const fn2 = () => {
//     console.log(this)
// }

// fn2()
