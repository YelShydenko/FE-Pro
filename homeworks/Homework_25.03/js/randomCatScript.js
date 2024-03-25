// Создайте элементы DOM для отображения изображений случайных котов, полученных с помощью The Cat API.

async function fetchRandomCat() {
  const url = `#`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("The data was not received: ", error);
  }
}
fetchRandomCat();
