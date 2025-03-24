document.addEventListener("DOMContentLoaded", () => {
    fetchWeather();
    fetchEvents();
    fetchCompanySpotlight();
});

// Fetch and display weather information
async function fetchWeather() {
    const apiKey = "c533ba184ac48e09c20921835b9171b0"; // Replace with a valid OpenWeatherMap API key
    const city = "Umuahia,NG"; // Example location (Abia State)
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${Abia}&units=metric&appid=${c533ba184ac48e09c20921835b9171b0}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Weather data not available");
        const data = await response.json();

        // Extract current weather
        const currentTemp = data.list[0].main.temp;
        const description = data.list[0].weather[0].description;
        document.getElementById("weather").innerHTML = `🌡️ ${currentTemp}°C - ${description}`;

        // Extract 3-day forecast
        let forecastHTML = "";
        for (let i = 1; i <= 3; i++) {
            const day = data.list[i * 8]; // Every 24 hours
            const date = new Date(day.dt_txt).toLocaleDateString();
            forecastHTML += `<p>${date}: 🌤️ ${day.main.temp}°C - ${day.weather[0].description}</p>`;
        }
        document.getElementById("forecast").innerHTML = forecastHTML;
    } catch (error) {
        document.getElementById("weather").textContent = "Weather data unavailable";
        document.getElementById("forecast").textContent = "";
    }
}

// Fetch and display upcoming events (Placeholder Example)
function fetchEvents() {
    const events = [
        { title: "Business Networking Summit", date: "April 10, 2025" },
        { title: "Economic Growth Seminar", date: "May 15, 2025" },
    ];

    let eventsHTML = "";
    events.forEach(event => {
        eventsHTML += `<p><strong>${event.title}</strong> - ${event.date}</p>`;
    });
    document.getElementById("events").innerHTML = eventsHTML;
}

// Fetch and display company spotlight from JSON
async function fetchCompanySpotlight() {
    try {
        const response = await fetch("data/companies.json"); // JSON file path
        if (!response.ok) throw new Error("Company data not found");
        const data = await response.json();

        // Filter for Gold/Silver members
        const members = data.members.filter(member => member.membership === "Gold" || member.membership === "Silver");

        // Shuffle and select 2-3 random members
        const selectedMembers = members.sort(() => 0.5 - Math.random()).slice(0, 3);

        let spotlightHTML = "";
        selectedMembers.forEach(member => {
            spotlightHTML += `
                <div class="business">
                    <img src="${member.image}" alt="${member.name}">
                    <p><strong>${member.name}</strong><br>
                    Email: ${member.email}<br>
                    Phone: ${member.phone}<br>
                    Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                </div>`;
        });

        document.querySelector(".business-list").innerHTML = spotlightHTML;
    } catch (error) {
        document.querySelector(".business-list").innerHTML = "<p>Company spotlight unavailable</p>";
    }
}
