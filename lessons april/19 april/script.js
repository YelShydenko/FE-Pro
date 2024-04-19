const leftTrigger = document.querySelector(".triggers .left");
const rightTrigger = document.querySelector(".triggers .right");
const root = document.querySelector(".root");

let initialState = 1;

fetchPostsApi(initialState);

function Post(title, body) {
  this.title = title;
  this.body = body;
}

function FormattedPost(title, body, addInfo) {
  Post.call(this, title, body);
  this.postId = addInfo;
}

rightTrigger.addEventListener("click", function () {
  initialState++;
  fetchPostsApi(initialState);
});

leftTrigger.addEventListener("click", function () {
  if (initialState > 0) {
    initialState--;
    fetchPostsApi(initialState);
  } else {
    window.alert("Нет пользователя с 0 id");
  }
});

async function fetchPostsApi(postId) {
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error();
    }
    const data = await res.json();
    //   console.log(data);
    createPost(data.title, data.body, data.id);
  } catch (error) {
    console.error("Request was not sent:", error);
  }
}

function createPost(title, body, id) {
  root.innerHTML = "";

  const container = document.createElement("div");
  container.classList.add("container");

  const newTitle = document.createElement("h3");
  newTitle.textContent = title;

  const newDesc = document.createElement("p");
  newDesc.textContent = body;

  container.append(newTitle, newDesc);
  root.append(container);

  return new FormattedPost(title, body, id);
}
