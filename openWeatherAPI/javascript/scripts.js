const apiKey = "341422f59f4449972d04569945816951";
const apiCountryURL = "https://flagsapi.com/png/br/";
const apiUnsplash = "https://source.unsplash.com/1600x900/?";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");
// Funções

const getWeatherData = async (city) => {
    const apiWeatherURL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`);
    const res = await fetch(apiWeatherURL);
    const data = await response.json();

    return data;
};

const showWeatherData = async (city) => {
    const data = await getWeatherData(city);
    
    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", apiCountryURL + data.sys.country);
    umidityElement.innerText = `${data.main.umidity}%`;
    windElement.innerText = `${data.wind.speed} Km/h`;

    weatherContainer.classList.remove("hide");
};



// Eventos


searchBtn.addEventListener("click", (e) => {
    
    e.preventDefault();

    const city = cityInput.value;
    showWeatherData(city)
});

cityInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        const city = e.target.value;
        showWeatherData(city);
    }
});