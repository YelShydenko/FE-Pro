async function getPosts() {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    // console.log(data);
    createPost(data);
  } catch (error) {
    console.error(`Failed to get posts:`, error);
  }
}
// getPosts()

//  <!-- <div class="modal__background">
//    <div class="modal">
// <!-- <div class="closeModal">
// </div>
//      <h2>Fetch posts</h2>
//      <div class="modal__content">
//        <div class="post__container">
//          <div class="title__container">
//            <h3>Title:</h3>
//            <p>
//              Lorem ipsum dolor sit amet consectetur adipisicing elit.
//              Dolorum, id!
//            </p>
//          </div>
//          <div class="body__container">
//            <h3>Body:</h3>
//            <p>
//              Lorem ipsum dolor sit amet consectetur adipisicing elit.
//              Dolorum, id!
//            </p>
//          </div>
//        </div>
//      </div>
//    </div>
//  </div> -->

function createPost(data) {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const closeModal = document.createElement("div");
  closeModal.classList.add("close__modal");

  const modalTitle = document.createElement("h2");
  modalTitle.textContent = "Fetch posts";

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal__content");

  data.forEach((elem) => {
    const postContainer = document.createElement("div");
    postContainer.classList.add("post__container");

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title__container");

    const titlePost = document.createElement("h3");
    titlePost.innerText = "Title:";

    const titleContent = document.createElement("p");
    titleContent.textContent = `${elem.title}`;

    const bodyContainer = document.createElement("div");
    bodyContainer.classList.add("body__container");

    const bodyPost = document.createElement("h3");
    bodyPost.innerText = "Body:";

    const bodyContent = document.createElement("p");
    bodyContent.textContent = `${elem.body}`;

    titleContainer.append(titlePost, titleContent);
    bodyContainer.append(bodyPost, bodyContent);
    postContainer.append(titleContainer, bodyContainer);
    modalContent.append(postContainer);
  });

  modal.append(closeModal, modalTitle, modalContent);

  const modalBackground = document.createElement("div");
  modalBackground.classList.add("modal__background");

  modalBackground.append(modal);

  const modalPlace = document.querySelector(".place__for__modal");
  modalPlace.append(modalBackground);

  // document.body.append(modalBackground);

  closeModal.addEventListener("click", function () {
    modalBackground.remove();
  });
}

const buttonFetch = document.querySelector("#btn");

buttonFetch.addEventListener("click", function () {
  getPosts();
});

// -------------------- Домашка 17.04 --------------------------------------------------------------------------------------------------------
// Создание класса Employee: Создайте класс Employee с конструктором, который принимает три параметра: name, age, position. Конструктор должен инициализировать соответствующие свойства объекта.
// Добавление метода getInfo(): Добавьте в класс Employee метод getInfo(), который возвращает строку с информацией о сотруднике в формате "Имя: Возраст, Должность".
// Фильтрация сотрудников по должности:
// Напишите функцию filterEmployeesByPosition, которая принимает два параметра: список сотрудников (employees) и должность (position).
// Отфильтруйте список сотрудников по заданной должности.
// Используйте метод map, чтобы преобразовать отфильтрованный список в список имен сотрудников.
// Функция должна возвращать массив имен сотрудников с заданной должностью.
// Создайте несколько объектов сотрудников, используя класс Employee.
// Используйте функцию filterEmployeesByPosition для фильтрации сотрудников по их должности.
// Результат фильтрации в вывести на страницу во втором модальном окне на вашем сайте pallas cat studio. результат выложить на гитхаб в прошлый проект, но разделите новый код комментариями!!

class Employee {
  constructor(name, age, position) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  getinfo() {
    return `Имя сотрудника: ${this.name}, возраст: ${this.age}, должность: ${this.position}`;
  }
}

const employees = [
  new Employee("Yelyzaveta Shydenko", 21, "Front-end Developer"),
  new Employee("Johnny Depp", 35, "Front-end Developer"),
  new Employee("Kostiantyn Karpenko", 27, "Full-stack Developer"),
  new Employee("Noah Muller", 33, "Full-stack Developer"),
  new Employee("Dmitrii Gostevskii", 31, "Back-end Developer"),
  new Employee("Rick Sanches", 55, "Back-end Developer"),
  new Employee("Maria Kukhar", 21, "UI/UX Designer"),
  new Employee("Morty Smith", 15, "UI/UX Designer"),
  new Employee("Daniil Martynov", 28, "Android Developer"),
  new Employee("Sam Winchester", 23, "Android Developer"),
];

function filterEmployeesByPosition(employees, position) {
  const filteredEmployees = employees.filter((employee) => {
    return employee.position === position;
  });
  const names = filteredEmployees.map(function (employee) {
    return employee.name;
  });
  return names;
}

const buttonEmployee = document.querySelector("#employee__btn");

buttonEmployee.addEventListener("click", function () {
  const filteredNames = filterEmployeesByPosition(
    employees,
    "Front-end Developer"
  );
  // console.log(filteredNames);
  createModalEmployee(filteredNames);
});

function createModalEmployee(filteredNames) {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const closeModal = document.createElement("div");
  closeModal.classList.add("close__modal");

  const modalTitle = document.createElement("h2");
  modalTitle.textContent = "Employee info";

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal__content");

  const nameList = document.createElement("ul");

  filteredNames.forEach((name) => {
    const listName = document.createElement("li");
    listName.textContent = name;
    nameList.append(listName);
  });
  modalContent.append(nameList);
  modal.append(closeModal, modalTitle, modalContent);

  const modalBackground = document.createElement("div");
  modalBackground.classList.add("modal__background");

  modalBackground.append(modal);

  const modalPlace = document.querySelector(".place__for__modal");
  modalPlace.append(modalBackground);

  closeModal.addEventListener("click", function () {
    modalBackground.remove();
  });
}
