/* Создать массив из 6 объектов. Состоящих из полей title, description, image.
Необходимо распечатать этот массив таким образом чтобы получилось как на desktop - 1  */
/* 
<li class="products__item">
<div class="products__img">
    <img src="images/img-1.jpg" alt="Stanley Cooper">
</div>
<h3 class="products__title">
    Stanley Cooper
</h3>
<div class="products__info">
    <p>
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem
    </p>
</div>
</li> */
const productsArr = [
    {
        title: " Stanley Cooper",
        description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
        title: " Stanley Cooper",
        description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
        title: " Stanley Cooper",
        description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
        title: " Stanley Cooper",
        description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
        title: " Stanley Cooper",
        description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
        title: " Stanley Cooper",
        description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
];

/* 
<li class="products__item">
<div class="products__img">
    <img src="images/img-1.jpg" alt="Stanley Cooper">
</div>
<h3 class="products__title">
    Stanley Cooper
</h3>
<div class="products__info">
    <p>
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem
    </p>
</div>
</li> */

const productsContainer = document.querySelector(".products__list");

productsArr.forEach((item) => {
    const productsElem = document.createElement("li");
    productsElem.classList.add("products__item");
    const productsImage = document.createElement("div");
    productsImage.classList.add("products__img");
    const productsImageElem = document.createElement("img");
    productsImageElem.setAttribute("src", "./images/img-1.jpg");
    productsImageElem.setAttribute("alt", item.title);
    productsImage.append(productsImageElem);

    const productsTitle = document.createElement("h3");
    productsTitle.classList.add("products__title");
    productsTitle.innerText = item.title;

    const productsInfo = document.createElement("div");
    productsInfo.classList.add("products__info");

    const productsInfoElem = document.createElement("p");
    productsInfoElem.innerText = item.description;
    productsInfo.append(productsInfoElem);

    productsElem.append(productsImage, productsTitle, productsInfo);
    productsContainer.append(productsElem);

});

const productsBtn = document.querySelector(".products__btn");

productsBtn.addEventListener("click", function () {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("modal__container");
    modal.append(modalContainer);
    document.body.append(modal);
});




