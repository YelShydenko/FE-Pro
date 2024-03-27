async function fetchBitcoinPrice() {
    const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      
      createElement(data)
      console.log(data);
    } catch (error) {
      console.error('Error fetching bitcoin price:', error);
    }
  }
fetchBitcoinPrice()

/* <div class="bitcoin__prices">
<p>Usd</p>
<p>Eur</p>
<p>Update</p>
</div> */

function createElement(data) {
    const bitcoin = document.querySelector(".bitcoin__update");
    bitcoin.innerHTML = "";

    const bitcoinPrices = document.createElement('div')
    bitcoinPrices.classList.add('bitcoin__prices')

    const priceUSD = data.bpi.USD.rate;
    const priceEUR = data.bpi.EUR.rate;
    const priceUpdate = data.time.updateduk

    const bitcoinUsd = document.createElement('p')
    bitcoinUsd.textContent = `USD: ${priceUSD}`

    const bitcoinEur = document.createElement('p')
    bitcoinEur.textContent = `EUR: ${priceEUR}`

    const bitcoinUpdate = document.createElement('p')
    bitcoinUpdate.textContent = `Update: ${priceUpdate}`

    bitcoinPrices.append(bitcoinUsd, bitcoinEur, bitcoinUpdate)
    bitcoin.append(bitcoinPrices)
}