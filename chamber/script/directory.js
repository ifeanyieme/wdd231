document.addEventListener("DOMContentLoaded", function () {
    const businessList = document.getElementById("business-list");
    const gridViewBtn = document.getElementById("gridView");
    const listViewBtn = document.getElementById("listView");
    const searchBar = document.getElementById("searchBar");
    const sortOptions = document.getElementById("sortOptions");

    let businesses = [];

    async function fetchBusinesses() {
        try {
            const response = await fetch("data/businesses.json");
            businesses = await response.json();
            displayBusinesses(businesses);
        } catch (error) {
            console.error("Error loading businesses:", error);
        }
    }

    function displayBusinesses(filteredBusinesses) {
        businessList.innerHTML = "";
        filteredBusinesses.forEach(business => {
            const card = document.createElement("div");
            card.classList.add("business-card");
            card.innerHTML = `
                <img src="${business.image}" alt="${business.name}">
                <div class="business-info">
                    <h3>${business.name}</h3>
                    <p><strong>Address:</strong> ${business.address}</p>
                    <p><strong>Phone:</strong> <a href="tel:${business.phone}">${business.phone}</a></p>
                    <p><strong>Membership Level:</strong> ${business.membership}</p>
                    <a href="${business.website}" target="_blank" class="visit-btn">Visit Website</a>
                </div>
            `;
            businessList.appendChild(card);
        });
    }

    searchBar.addEventListener("input", () => {
        const query = searchBar.value.toLowerCase();
        const filtered = businesses.filter(b => 
            b.name.toLowerCase().includes(query) || 
            b.address.toLowerCase().includes(query)
        );
        displayBusinesses(filtered);
    });

    sortOptions.addEventListener("change", () => {
        if (sortOptions.value === "membership") {
            businesses.sort((a, b) => b.membership - a.membership); // Sort by membership level (descending)
        } else {
            businesses.sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically by name
        }
        displayBusinesses(businesses);
    });

    gridViewBtn.addEventListener("click", () => {
        businessList.classList.add("grid-view");
        businessList.classList.remove("list-view");
    });

    listViewBtn.addEventListener("click", () => {
        businessList.classList.add("list-view");
        businessList.classList.remove("grid-view");
    });

    fetchBusinesses();
});
