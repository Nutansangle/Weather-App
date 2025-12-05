const apiKey = "1e6cf530c2bb5d26d6d71bd12b95a201";  // Put your real API key
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("city");
const weatherResult = document.getElementById("weatherResult");

searchBtn.addEventListener("click", () => {
    const cityName = cityInput.value;
    getWeather(cityName);
});

async function getWeather(city) {
    if (!city) {
        weatherResult.innerHTML = "Please enter a city name!";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            weatherResult.innerHTML = "City Not Found!";
            return;
        }

        weatherResult.innerHTML = `
            🌍 City: ${data.name}<br>
            🌡 Temperature: ${data.main.temp} °C<br>
            ☁ Weather: ${data.weather[0].description}
        `;

    } catch (error) {
        weatherResult.innerHTML = "Error fetching data!";
        console.error(error);
    }
}
