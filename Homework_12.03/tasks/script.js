// Хранение имени пользователя:
// Создайте форму с полем для ввода имени пользователя.
// При отправке формы сохраните введенное имя в localStorage.
// При загрузке страницы проверьте наличие сохраненного имени в localStorage и, если оно есть, отобразите его на странице.

const form = document.querySelector('#authorization')
const userName = document.querySelector('#userName')
const userList = document.querySelector('#userList')
let nameList = [];

function createList() {
    userList.innerHTML = '';
    nameList.forEach((name)=>{
        const elemList = document.createElement('li');
        elemList.textContent = `User Name: ${name}`
        userList.append(elemList)
    })

    const newUserList = JSON.stringify(nameList)
    localStorage.setItem('userNames', newUserList)
}
function addName(event) {
    event.preventDefault();
    const name = userName.value
    if (name) {
        nameList.push(name)
        createList()

        userName.value = ''
    }
}
form.addEventListener('submit', addName)

// Счетчик посещений:
// Создайте переменную в localStorage для хранения количества посещений.
// При загрузке страницы увеличивайте значение этой переменной на 1 и сохраняйте обновленное значение в localStorage.
// Отобразите количество посещений на странице.

let visitCount = localStorage.getItem('visitCount');
        
    visitCount = parseInt(visitCount);
    if (isNaN(visitCount)) {
        visitCount = 0;
    }
    visitCount++;

    document.getElementById('visitCount').textContent = visitCount;
    localStorage.setItem('visitCount', visitCount.toString());

// Список задач:
// Создайте простой список задач с полем для ввода новой задачи и кнопкой для добавления.
// При добавлении новой задачи сохраняйте все задачи в localStorage.
// При загрузке страницы отобразите сохраненный список задач.