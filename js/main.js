// Grabbing Form Data for a Submit Event
const form = document.querySelector('#form');
console.log(form)

// Add Event Listener for submit event(s)
form.addEventListener('submit', ( event ) => {
    event.preventDefault();
    let city = document.querySelector('#city').value;

    console.log(event)
    console.log(city)
    weather_data(city)
})

const weather_data = async (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ff1a7f4738a47c6635c75a89b8889dd9`;
    console.log(url)
    let response = await axios.get(url);
    let main_data = response.data.main;
    let weather_data = response.data.weather[0];

    document.getElementById('main_heading').innerHTML = city
    document.getElementById('row2').children[0].innerHTML = Math.round((main_data.temp_max - 273.15) * 9 / 5 + 32) + '&#176 F';
    document.getElementById('row4').children[0].innerHTML = Math.round((main_data.temp_min - 273.15) * 9 / 5 + 32) + '&#176 F';
    document.getElementById('row6').children[0].innerHTML = weather_data.description;
    document.getElementById('row8').children[0].innerHTML = `${main_data.humidity}%`;
}