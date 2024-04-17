const btnPrev = document.querySelector('.prev');
btnPrev.textContent = '<<<'
const btnNext = document.querySelector('.next');
btnNext.textContent = '>>>'

let userID = localStorage.getItem('currentUserID') || 1;

function saveUserIdInLocal(userId) {
    localStorage.setItem('currentUserID', userId);
}

async function getUser(userId) {
    const userInfoUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const userPostsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

    try {
        const userResponse = await fetch(userInfoUrl);
        if (!userResponse.ok) {
            throw new Error('Такого пользователя нет');
        }
        const userData = await userResponse.json();

        const postsResponse = await fetch(userPostsUrl);
        if (!postsResponse.ok) {
            throw new Error('Таких постов нет');
        }
        const postsData = await postsResponse.json();

        const result = {
            user: {
                name: userData.name,
                email: userData.email
            },
            posts: postsData
        };

        createUserCard(result);
        saveUserIdInLocal(userId);
        return result;
    } catch (error) {
        console.error('Ошибка получения данных пользователя:', error);
    }
}

function createUserCard(data) {
    const placeFetch = document.querySelector('.place__for-fetch');
    placeFetch.innerHTML = '';

    const userCard = document.createElement('div');
    userCard.classList.add('user__card');

    const userInfo = document.createElement('div');
    userInfo.classList.add('user__info');

    const userName = document.createElement('p');
    userName.textContent = data.user.name;

    const userEmail = document.createElement('p');
    userEmail.textContent = data.user.email;

    const userPosts = document.createElement('div');
    userPosts.classList.add('user__posts');

    data.posts.forEach(elem => {
        const postContainer = document.createElement('div');
        postContainer.classList.add('post');

        const postTitle = document.createElement('p');
        postTitle.textContent = elem.title;

        const postBody = document.createElement('p');
        postBody.textContent = elem.body;

        postContainer.append(postTitle, postBody);
        userPosts.append(postContainer);
    });

    userInfo.append(userName, userEmail);
    userCard.append(userInfo, userPosts);

    placeFetch.append(userCard);
}

window.addEventListener('DOMContentLoaded', async () => {
    try {
        await getUser(userID);
    } catch (error) {
        alert(error.message);
    }
});

btnPrev.addEventListener('click', async () => {
    if (userID > 1) {
        userID--;
        try {
            await getUser(userID);
        } catch (error) {
            alert(error.message);
            userID++;
        }
    } else {
        alert('Такого пользователя нет');
    }
});

btnNext.addEventListener('click', async () => {
    userID++;
    try {
        await getUser(userID);
    } catch (error) {
        alert(error.message);
        userID--;
    }
});
