// Создать функцию, которая получает id пользователя и выводит в консоль данные о пользователе. Если такого пользователя нет,
// необходимо вызвать исключение “Такого пользователя нет”.
// Ссылка: https://jsonplaceholder.typicode.com/users/<id пользователя>
// Доработать ранее созданную функцию таким образом, чтобы помимо данных о пользователе (имя и почта) выводились все посты пользователя.
// Ссылка:
// https://jsonplaceholder.typicode.com/users/<id пользователя>
// https://jsonplaceholder.typicode.com/posts?userId=<id пользователя>

async function fetchUserApi(userId) {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const postUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  try {
    const responce = await fetch(url);
    const responcePost = await fetch(postUrl);
    if (!responce.ok || !responcePost.ok) {
      throw new Error();
    }

    const data = await responce.json();
    const dataPost = await responcePost.json();
    console.log(data);
    console.log(dataPost);

    createContact(data, dataPost);
  } catch (error) {
    console.error("Такого пользователя нет ", error);
  }
}
fetchUserApi(1);

function createContact(data, dataPost) {
  const contactContainer = document.querySelector(".contact__container");
  contactContainer.innerHTML = "";

  const contactCard = document.createElement("div");
  contactCard.classList.add("contact__card");

  const container = document.createElement("div");
  container.classList.add("container");

  const contactImg = document.createElement("img");
  contactImg.setAttribute("src", "../img/contactImg.png");
  contactImg.setAttribute("alt", "contact image");

  const contactName = document.createElement("h3");
  contactName.textContent = `Name: ${data.name}`;

  const contactUsername = document.createElement("p");
  contactUsername.textContent = `Username: ${data.username}`;

  const contactEmail = document.createElement("p");
  contactEmail.textContent = `Email: ${data.email}`;

  const postInfo = dataPost.map((element) => {
    const postTitle = document.createElement("p");
    postTitle.textContent = `Post Title: ${element.title}`;

    const postBody = document.createElement("p");
    postBody.textContent = `Post Content: ${element.body}`;

    return [postTitle, postBody];
  });

  container.append(contactImg, contactName, contactUsername, contactEmail);
  
  postInfo.forEach(([postTitle, postBody]) => {
    container.append(postTitle, postBody);
  });

  contactCard.append(container);
  contactContainer.append(contactCard);
}

// async function userApi(userId) {
//   const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("Ошибка при получении данных");
//     }
//     const data = await response.json();
//     //1 шаг - функция возвращает данные
//     return data;
//   } catch (error) {
//     console.error("Ошибка", error);
//   }
// }
// userApi()

// //2 шаг - присваем результат функции в переменную ( function expression )
// const result = userApi(1);

// //3 шаг - создаем новую АССИНХРОННУЮ функцию для вывода на страницу данных из нашей функции userApi
// async function randomFN(params) {
//   //4 шаг - передаем результат функции в новую переменную params -> result -> userApi -> Данные из запроса
//   const fetchResult = await params;
//   const newElem = document.createElement("div");
//   document.body.append(newElem);
//   newElem.textContent = fetchResult.name + " hello from inner function";
// }

// randomFN(result);
