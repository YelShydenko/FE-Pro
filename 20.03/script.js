function fetchData(url) {
  return new Promise(function (resolve, reject) {
    try {
      fetch(url).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            resolve(data);
          });
        }
      });
    } catch (e) {
      // throw new Error();
      console.error("error:", e);
    }
  });
}

fetchData("https://jsonplaceholder.typicode.com/postsffff")
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log("error:", error);
  });

// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((response) => response.json())
// .then((json) => console.log(json));

// Задача. Создать два промиса.
// Первый должен вызвать resolve через 2 секунды, а второй через 5.
// Для задержки используйте setTimeout.
// const firstPromise = new Promise(function (resolve, reject) {
//    setTimeout(function () {
//       resolve('Process 1 ended')
//    }, 2000)
// })

// const secondPromise = new Promise(function (resolve, reject) {
//    setTimeout(function () {
//       resolve('Process 2 ended')
//    }, 5000)
// })
// console.log(firstPromise, secondPromise);

// firstPromise.then(function (response) {
//    console.log(response);
// })
// secondPromise.then(function (response) {
//    console.log(response);
// })

// Promise.all([firstPromise, secondPromise])
//    .then(function (response) {
//    console.log('All process is ended', response);
//    })
//    .catch(function (eror) {
//    console.log('eror 404');
// })
