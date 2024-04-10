const key = "5c8f05901d840affef9b8e861df4e15f";

const button = document.querySelector('.btn-search');

async function searchCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());
    showData(data);
}

function showData(data) {
    console.log(data)
    document.querySelector('.city-info').innerHTML = `Tempo em ${data.name}`;
    document.querySelector('.temperature').innerHTML = `${Math.round(data.main.temp)}ºC`;
    document.querySelector('.clime').innerHTML = data.weather[0].description;
    document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    document.querySelector('.humidity').innerHTML = `Umidade: ${data.main.humidity}`;
}

button.addEventListener ('click', () => {
    const city = document.querySelector('.city-name').value;

    searchCity(city);
});