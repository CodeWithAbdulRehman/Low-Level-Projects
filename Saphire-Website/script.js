let cardArea = document.getElementsByTagName("main")[0];

const createCard = (src, title, info) => {
  let div = document.createElement("div");
  div.innerHTML = `<img src="${src}" class="card-Image"/> <p class="card-Title">${title}</p> <p class="card-Info">${info}</p> <button class="card-Btn">Visit</button>`;
  div.setAttribute("class", "myCards");
  cardArea.appendChild(div);
}

createCard("Images-Products/product1.jpg", "New Heels", "This is the newest Saphire collection of Heels. These are Amazing and Fantastic products. You will love these! These are extremely comfortable and imported from US!");

createCard("Images-Products/product2.webp", "New Heels", "This is the newest Saphire collection of Heels. These are Amazing and Fantastic products. You will love these! These are extremely comfortable and imported from US!")

createCard("Images-Products/product3.webp", "New Heels/Shoes", "This is the newest Saphire collection of Heels/Shoes. These are Amazing and Fantastic products. You will love these! These are extremely comfortable and imported from US!")

createCard("Images-Products/product4.webp", "New Jogers", "This is the newest Saphire collection of Jogers. These are Amazing and Fantastic products. You will love these! These are extremely comfortable and imported from US!")

createCard("Images-Products/product5.jpeg", "Hotel Booking", "This is the latest booking avaible for different hotels at very beautiful locations. There are Amazing beauty of nature. You will love these locations! These are extremely comfortable Hotels.")

createCard("Images-Products/product6.jpeg", "Hotel Booking", "This is the latest booking avaible for different hotels at very beautiful locations. There are Amazing beauty of nature. You will love these locations! These are extremely comfortable Hotels.")