async function fetchKanye(){
    const url = `https://api.kanye.rest/`
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error()
        }
        const data = await response.json()
        console.log(data);
        createKanye(data)
    } catch (error) {
        console.error('Error fetching Kanye:', error)
    }
}
fetchKanye()

{/* <div class="quote">
                <p>sdjfhsdhfsjkfs</p>
            </div> */}

function createKanye(data) {
    const container = document.querySelector('.container')
    container.innerHTML = ''

    const quoteBox = document.createElement('div')
    quoteBox.classList.add('quote')

    const quote = document.createElement('p')
    quote.textContent = `${data.quote}`

    quoteBox.append(quote)
    container.append(quoteBox)
}