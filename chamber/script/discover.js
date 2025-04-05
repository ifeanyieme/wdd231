const container = document.getElementById("discover-cards");

fetch("../data/discover.json")
  .then(response => response.json())
  .then(data => {
    data.forEach((item, index) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.gridArea = `card${index + 1}`;
      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure><img loading="lazy" src="${item.image}" alt="${item.name}"></figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn More</button>
      `;
      container.appendChild(card);
    });
  });
