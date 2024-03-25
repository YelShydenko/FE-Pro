const form = document.querySelector("#productForm");

function productLocalStorage(products) {
   localStorage.setItem("products", JSON.stringify(products));
}

function getFromLocal() {
   const localProduct = localStorage.getItem("products")
   if (localProduct) {
      return JSON.parse(localProduct)
   } else {
      return []
   }
}

let products;

if (localStorage.getItem("products")) {
   products = getFromLocal()
} else {
   products = []
}

function addProduct(name, price, count) {
  const productItem = {
    id: Date.now(),
    name: name,
    price: price,
    count: count,
    show: true,
  };
   products.push(productItem);

   productLocalStorage(products);
   rerender();
}

function rerender() {
  const productList = document.querySelector("#productList");
  productList.innerHTML = "";

  products.map((elem) => {
    if (elem.show) {
      const listItem = document.createElement("li");
      listItem.textContent = `${elem.id}, ${elem.name} - ${elem.price} $, Количество: ${elem.count}`;

      productList.append(listItem);
    }
  });
}

function filterProductByPrice(itemPrice) {
   products.map((item) => {
      item.show = item.price <= itemPrice
   })
   rerender()
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const productName = document.querySelector("#productName").value;
  const productPrice = document.querySelector("#productPrice").value;
  const productCount = document.querySelector("#productCount").value;
  if (productName && productPrice && productCount > 0) {
    addProduct(productName, productPrice, productCount);

    document.querySelector("#productName").value = "";
    document.querySelector("#productPrice").value = "";
    document.querySelector("#productCount").value = "";
  } else {
    alert("Oops :( Введите коректные данные");
  }
});

const filterPriceInput = document.querySelector("#filterByPrice");
filterPriceInput.addEventListener('input', function () {
   console.log("it works");
   const filteredPrice = parseFloat(filterPriceInput.value);
   if (!isNaN(filteredPrice)) {
      filterProductByPrice(filteredPrice)
   } else {
      rerender()
   }
})

rerender()

