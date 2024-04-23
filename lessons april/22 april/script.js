const root = document.querySelector(".root");
let sliderIndex = 0;
const images = [
  "https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg",
  "https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg",
  "https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg",
];

const frame = document.createElement("div");
frame.classList.add("frame");
const cards = document.createElement("div");
cards.classList.add("cards");
const triggers = document.createElement("div");
triggers.classList.add("triggers");
const leftBtn = document.createElement("button");
const rightBtn = document.createElement("button");
leftBtn.innerText = "<";
rightBtn.innerText = ">";

triggers.append(leftBtn, rightBtn);
frame.append(triggers);

async function fetchCatApi() {
  const sendUrl =
    "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1";
  try {
    const res = await fetch(sendUrl);
    if (!res.ok) {
      throw new Error();
    }
    const data = await res.json();
    const { url } = data[0];
    console.log(url);
    images.push(url);
    images.forEach((elem) => {
      const cardItem = document.createElement("div");
      cardItem.classList.add("card");
      cardItem.style.backgroundImage = `url('${elem}')`;
      cards.append(cardItem);
    });

    frame.append(cards);
    root.append(frame);
  } catch (error) {
    console.error(error);
  }
}
fetchCatApi();

leftBtn.addEventListener("click", () => {
  if (sliderIndex !== 0) {
    sliderIndex--;
    cards.style.left = `${-1 * sliderIndex * 500}px`;
  }
});

rightBtn.addEventListener("click", () => {
  if (sliderIndex <= images.length - 2) {
    sliderIndex++;
    cards.style.left = `${-1 * sliderIndex * 500}px`;
  }
});
