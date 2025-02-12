const apiKey = "d3e27ab0870547137c7a08aa4a1f0dc8";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=Nairobi";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;

    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


}

checkWeather();
