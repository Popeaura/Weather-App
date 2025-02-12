const apiKey = "d3e27ab0870547137c7a08aa4a1f0dc8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

 

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // Fixing weather condition matching
    let weatherCondition = data.weather[0].main;

    if (weatherCondition === "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if (weatherCondition === "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if (weatherCondition === "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if (weatherCondition === "Mist") {
        weatherIcon.src = "images/mist.png";
    } else if (weatherCondition === "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if (weatherCondition === "Snow") {
        weatherIcon.src = "images/snow.png";
    } else {
        weatherIcon.src = "images/default.png"; // Default image if no match
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
