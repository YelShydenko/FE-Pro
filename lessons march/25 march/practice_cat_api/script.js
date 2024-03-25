async function fetchCatApi() {
  const url = `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    console.log(data["0"]);

    createRandomCat(data);
  } catch (e) {
    console.error("Here is problem:", e);
  }
}
fetchCatApi();

function createRandomCat(data) {
  const dataUrl = data["0"].url;
  const dataId = data["0"].id;

  const randomCatSection = document.querySelector(".randomCat");
  const randomCatImgBlock = randomCatSection.querySelector(".randomCat__image");
  const randomCatInfoBlock = randomCatSection.querySelector(".randomCat__info");

  const randomCatImage = document.createElement("img");
  randomCatImage.setAttribute("src", dataUrl);
  randomCatImage.setAttribute("alt", "cat");
  randomCatImage.classList.add("random__img");

  randomCatImgBlock.append(randomCatImage);

  const randomCatIdBlock = document.createElement("p");
  randomCatIdBlock.textContent = `Id котика: ${dataId}`;
  randomCatInfoBlock.append(randomCatIdBlock);

  const randomCatNameBlock = document.createElement("p");
  randomCatNameBlock.textContent = `Имя котика:`;
  randomCatInfoBlock.append(randomCatNameBlock);

  const nameArr = ["Jack", "Tom", "Candy", "Fluffy", "Cloud", "Klaus", "Ivi"];
}
