// Создайте элементы DOM для отображения изображений случайных котов, полученных с помощью The Cat API.

async function fetchRandomCat() {
  const url = `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();
    console.log(data);
    createCat(data);
  } catch (error) {
    console.error("The data was not received: ", error);
  }
}
fetchRandomCat();

/* <div class="cat__card">
  <div>
    <img class="cat__img" src="" alt="" />
  </div>
  <div class="cat__info">
    <p>dhfksdfsdhjfkshf</p>
  </div>
</div>; */

function createCat(data) {
  const catContainer = document.querySelector(".cat__container");
  catContainer.innerHTML = "";

  data.forEach(elem => {
    const catCard = document.createElement('div')
    catCard.classList.add('cat__card')

    const catImageBox = document.createElement('div')
    
    const catImg = document.createElement('img')
    catImg.setAttribute('src', elem.url)
    catImg.setAttribute('alt', 'Cute cat')
    catImg.classList.add("cat__img");


    const catInfo = document.createElement('div')
    catInfo.classList.add('cat__info')

    const catId = document.createElement('p')
    catId.textContent = `Cat ID: ${elem.id}`

    catImageBox.append(catImg);
    catInfo.append(catId)
    catCard.append(catImageBox, catInfo)
    catContainer.append(catCard)
  });
}