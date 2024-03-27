async function fetchBooks() {
    const totalBooks = 2000;
    const randomStartIndex = Math.floor(Math.random() * totalBooks); 
    const maxResults = 20; 
    // но этот АПИ не всегда показывает информацию, я не смогла разобратся почему, иногда всё работает иногда нет
    const url = `https://www.googleapis.com/books/v1/volumes?q=1&startIndex=${randomStartIndex}&maxResults=${maxResults}`;
     
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error();
      }
  
      const data = await response.json();
      const results = data.items
      console.log(results);

      createBook(results)
    } catch (error) {
      console.error("The data was not received: ", error);
    }
  }
  fetchBooks();


  /* <div class="book__card">
            <img class="book__img" src="" alt="">
            <h3>Title</h3>
            <p>Author</p>
            description
        </div> */

  function createBook(results) {
    const bookList = document.querySelector('.book__list');
    bookList.innerHTML = '';

    results.forEach(elem => {
        const title = elem.volumeInfo.title;
        const authors = elem.volumeInfo.authors;
        const description = elem.volumeInfo.description;
        const image = elem.volumeInfo.imageLinks.thumbnail;

        const bookCard = document.createElement('div')
        bookCard.classList.add('book__card')

        const bookImg = document.createElement('img')
        bookImg.setAttribute('src', image)
        bookImg.setAttribute('alt', 'Book image')

        const bookTitle = document.createElement('h3')
        bookTitle.textContent = `${title}`

        const bookAuthors = document.createElement('p')
        bookAuthors.textContent = `${authors}`

        const bookDescription = document.createElement('p')
        bookDescription.textContent = `${description}`

        bookCard.append(bookImg, bookTitle, bookAuthors, bookDescription)
        bookList.append(bookCard)
    })
  }






