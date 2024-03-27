async function fetchNasaImage() {
    // но там ограниченое количество запросов( выдало спустя время ошибку 429 (Too Many Requests)
    const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      
      createElement(data['0'])
      console.log(data);
    } catch (error) {
      console.error('Error fetching api:', error);
    }
  }
fetchNasaImage()

{/* <div class="image__card">
                <img class="nasa__img" src="" alt="">
                <h2>title</h2>
                <p>description</p>
                <p>date</p>
            </div> */}

function createElement(data) {
    const nasaContainer = document.querySelector('.nasa__container')
    nasaContainer.innerHTML = ''

    const imageCard = document.createElement('div')
    imageCard.classList.add('image__card')

    const nasaImage = document.createElement('img')
    nasaImage.setAttribute('src', data.url)
    nasaImage.setAttribute('alt', 'Image from NASA')
    nasaImage.classList.add('nasa__img')

    const title = document.createElement('h2')
    title.textContent = `${data.title}`

    const description = document.createElement('p')
    description.textContent = `${data.explanation}`

    const imgDate = document.createElement('p')
    imgDate.textContent = `${data.date}`

    imageCard.append(nasaImage, title, description, imgDate)
    nasaContainer.append(imageCard)
}

