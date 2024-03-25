// *Создайте элементы DOM - имеется в виду, что вы должны на страницу отобразить все эти данные полученные с апи.
// Смотреть работу, что делала Ирина в группах. Если нет - попросите у коллег в чате
// В целом, надо сделать все красиво и культурно по стилям.
// Создайте элементы DOM для отображения информации о случайном пользователе, полученного с помощью Random User API.

async function fetchRandomPeople() {
  const url = "https://randomuser.me/api/";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    const person = data.results;
    // console.log(data);
    // console.log(person);
    createElement(person);
  } catch (error) {
    console.error("The data was not received: ", error);
  }
}
fetchRandomPeople();

// <div class="user__card">
//   <div class="user__main__info">
//       <img class="user__img" src="" alt="" />
//       <h2>Name</h2>
//   </div>
//   <div class="user__info">
//       <p>Username</p>
//       <p>Age</p>
//       <p>Email</p>
//       <p>Address</p>
//       <p>Number</p>
//   </div>
// </div> 

function createElement(person) {
  document.querySelector(".random__user").innerHTML = "";

  person.forEach((elem) => {
    const userCard = document.createElement("div");
    userCard.classList.add("user__card");

    const userImgName = document.createElement("div");
    userImgName.classList.add("user__main__info");

    const userImg = document.createElement("img");
    userImg.setAttribute("src", elem.picture.large);
    userImg.setAttribute("alt", "User Foto");
    userImg.classList.add("user__img");

    const userFullName = document.createElement("h2");
    userFullName.textContent = `${elem.name.first}, ${elem.name.last}`;

    const userInfo = document.createElement("div");
    userInfo.classList.add("user__info");

    const username = document.createElement("p");
    username.textContent = `Username: ${elem.login.username}`;

    const userEmail = document.createElement("p");
    userEmail.textContent = `Email: ${elem.email}`;

    const userAge = document.createElement("p");
    userAge.textContent = `Age: ${elem.dob.age}`;

    const userAddress = document.createElement("p");
    userAddress.textContent = `Address: ${elem.location.city}, ${elem.location.country}`;

    const userNumber = document.createElement("p");
    userNumber.textContent = `Phone: ${elem.phone}`;

    userImgName.append(userImg);
    userInfo.append(
      userFullName,
      username,
      userAge,
      userEmail,
      userAddress,
      userNumber
    );
    userCard.append(userImgName, userInfo);

    const randomUser = document.querySelector(".random__user");
    randomUser.append(userCard);
  });
}
