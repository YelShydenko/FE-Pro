async function fetchContacts() {
  const url = `https://jsonplaceholder.typicode.com/users/`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    console.log(data);

    createContact(data);
  } catch (e) {
    console.error("Here is problem:", e);
  }
}
fetchContacts();
{
  /* <div class="contact__card">
            <div class="container">
               <img class="contact__img" src="" alt="">
               <p>Name <span></span></p>
               <p>Username <span></span></p>
               <p>Email <span></span></p>
               <p>Adress<span></span></p>
            </div>
         </div>. */
}

function createContact(data) {
  const contactContainer = document.querySelector(".contact__container");
  contactContainer.innerHTML = "";

  data.forEach((elem) => {
    const contactCard = document.createElement("div");
    contactCard.classList.add("contact__card");

    const container = document.createElement("div");
    container.classList.add("container");

    const contactImg = document.createElement("img");
    contactImg.setAttribute("src", "./img/contactImg.png");
    contactImg.setAttribute("alt", "contact image");

    const contactName = document.createElement("p");
    contactName.textContent = `Name: ${elem.name}`;

    const contactUsername = document.createElement("p");
    contactUsername.textContent = `Username: ${elem.username}`;

    const contactEmail = document.createElement("p");
    contactEmail.textContent = `Email: ${elem.email}`;

    const contactAddress = document.createElement("p");
    contactAddress.textContent = `Address: ${elem.address.street}, ${elem.address.suite}, ${elem.address.city}, ${elem.address.zipcode}`;

    container.append(
      contactImg,
      contactName,
      contactUsername,
      contactEmail,
      contactAddress
    );
    contactCard.append(container);
    contactContainer.append(contactCard);
  });
}
