// Создать массив из 6 объектов. Состоящих из полей title, description, image.
// Необходимо распечатать этот массив таким образом чтобы получилось как на desktop - 1

const productsArr = [
   { 
      title: "Stanley Cooper",
      description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
   },
   { 
      title: "Stanley Cooper",
      description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
   },
   { 
      title: "Stanley Cooper",
      description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
   },
   { 
      title: "Stanley Cooper",
      description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
   },
   { 
      title: "Stanley Cooper",
      description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
   },
   { 
      title: "Stanley Cooper",
      description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
   }
]
const productsBox = document.querySelector(".box");

productsArr.forEach((item) => {
   const boxItem = document.createElement('div');
   boxItem.classList.add("item");

   const productImg = document.createElement("img");
   productImg.setAttribute("src", "./img/modalImg.png");
   productImg.setAttribute("alt", "Stanley Cooper");

   const productHeader = document.createElement('h2');
   productHeader.innerText = item.title;

   const productDescription = document.createElement('p');
   productDescription.innerText = item.description;

   boxItem.append(productImg, productHeader, productDescription);
   productsBox.append(boxItem);
});


const productsBtn = document.querySelectorAll(".btn");

productsBtn.forEach((btn) => {
   btn.addEventListener("click", function() {
      const modal = document.createElement("div");
      modal.classList.add("modal");
      const modalContainer = document.createElement("div");
      modalContainer.classList.add("modal__container");
      modal.append(modalContainer);
      document.body.append(modal);
   });
});
