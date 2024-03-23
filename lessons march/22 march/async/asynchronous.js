console.log("sync process 1");
console.log("sync process 2");
console.log("sync process 3");
console.log("sync process 4");

function delay() {
  //promise - это объект
  //promise - принимает коллбек функцию
  //promise - коллбек промиса принимает resolve( успех), reject(провал)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("message from success");
    }, 2000);
  });
}

const result = delay().then((response) => console.log(response));

async function newDelay() {
  const url = `https://jsonplaceholder.typicode.com/comments`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    const dataFromResponse = await response.json();
    console.log(dataFromResponse);
  } catch (e) {
    console.error("Some errors: ", e);
  }
}
newDelay();

// отправка запроса на удаленный сервер 
async function fetchApi() {
  // 1 шаг
  const url = `https://jsonplaceholder.typicode.com/posts`;
  // 2 шаг - отработка исключений
  try {
    // 3 шаг - отправляем запрос на API
    const response = await fetch(url);
    // 4 шаг - отлов ошибки
    if (!response.ok) {
      throw new Error();
    }
    //5 шаг получения ответа
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Your Error:", error); // выводит концепцию ошибку в консоль
  }
}
fetchApi();

async function fetchToDo(id) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error()
        }
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.error('Exsample error:', error)
    }
}
fetchToDo(15)