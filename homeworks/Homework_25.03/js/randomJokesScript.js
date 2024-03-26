async function fetchJokes() {
    const url = `https://api.chucknorris.io/jokes/random`   
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error();
      }
  
      const data = await response.json();
      console.log(data);

      createCringeJoke(data)
    } catch (error) {
      console.error("The data was not received: ", error);
    }
  }
  fetchJokes();

// //   <section class="random_joke">
// <h2>Chack Norris Joke:</h2>
// <div class="chuck__norris">
//     <!-- <img class="logo" alt=""> -->
//     <!-- <div class="random_joke_card">
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur totam, voluptates minima possimus atque earum.</p>
    
// </div> -->
// </div>


function createCringeJoke(data) {
    const chuckNorris = document.querySelector('.chuck__norris');
    chuckNorris.innerHTML = "";

        const randomJokeCard = document.createElement('div')
        randomJokeCard.classList.add('random_joke_card')

        const randomCringeJoke = document.createElement('p')
        randomCringeJoke.textContent = `${data.value}`

        randomJokeCard.append(randomCringeJoke)
        chuckNorris.append(randomJokeCard)
    
}