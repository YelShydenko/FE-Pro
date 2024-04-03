async function getPosts() {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    console.log(data);
    createPost(data);
  } catch (error) {
    console.error(`Failed to get posts:`, error);
  }
}
// getPosts()

//  <!-- <div class="modal__background">
//    <div class="modal">
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

  modal.append(modalTitle, modalContent);

  const modalBackground = document.createElement("div");
  modalBackground.classList.add("modal__background");

  modalBackground.append(modal);
  document.body.append(modalBackground);
}

const buttonFetch = document.querySelector("#btn");

buttonFetch.addEventListener("click", function () {
  getPosts();
});
