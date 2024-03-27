async function fetchNews() {
    const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=API_KEY`   
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
  fetchNews();





/* <div class="news__card">
         <div>
            <img class="news__img" src="" alt="">
         </div>
         <div class="news__info">
            <h2>Title</h2>
            <p>Author</p>
            <p>Description</p>
         </div>
         <button><a href="">Read</a></button>
      </div> */