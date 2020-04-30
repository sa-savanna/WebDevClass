const _edit = document.querySelector('._edit img')
const city = document.querySelector('.city')
const searchDiv = document.querySelector('div.search');
const description = document.querySelector('.description');
const dateTime = document.querySelector('.date')
const tempC = document.querySelector('.temp');
const defaultCityIcon = document.querySelector('.icon img')
const [pressure, humidity, windspeed] = document.querySelectorAll('.value');
const [_9am,_12am,_15pm,_18pm,_21pm] = document.querySelectorAll('.hourlyIcon')
class WeatherApp {
    constructor(city) {
        this.city = city;
        this.API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=f6211bc24c258c57f7a7fba887afdd17`
        this.API_HOURS = `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=f6211bc24c258c57f7a7fba887afdd17`
    }

    kelvinToCelcius(value) {

        return value - 273.15
    }

    getWeatherHourly(){
        fetch(this.API_HOURS)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            let icon = data.list
            console.log(data.list[0].weather[0].icon)
            console.log(_9am)
            _9am.src= `http://openweathermap.org/img/wn/${icon[0].weather[0].icon}@2x.png`

            _12am.src= `http://openweathermap.org/img/wn/${icon[1].weather[0].icon}@2x.png`

            _15pm.src= `http://openweathermap.org/img/wn/${icon[2].weather[0].icon}@2x.png`

            _18pm.src= `http://openweathermap.org/img/wn/${icon[3].weather[0].icon}@2x.png`

            _21pm.src= `http://openweathermap.org/img/wn/${icon[4].weather[0].icon}@2x.png`
        })
    }


    getCurrentWeather() {
        fetch(this.API_URL)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data.message)
                if(data.message === "city not found"){
                    alert('City not found! Try Again')
                }
                city.innerHTML = data.name
                // desc
                let weather = data.weather[0]
                console.log(data.main.temp)
                tempC.innerHTML = `<span>${this.kelvinToCelcius(data.main.temp).toFixed()}</span>`
                description.innerHTML = `${weather.main} ${weather.description}`
                console.log(defaultCityIcon)
                defaultCityIcon.src = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`

                // pressure
                pressure.innerHTML = `${data.main.pressure} hPa`

                // humidity
                humidity.innerHTML = `${data.main.humidity}%`

                // wind speed
                windspeed.innerHTML = `${data.wind.speed} meter/sec`
            })
    }

}


document.body.onload = () => {
    let app = new WeatherApp('Brussels');
    app.getCurrentWeather();
    dateTime.innerHTML = ` ${new Date().toJSON().slice(0, 10)}`
}


// 1 click icon and edit location
_edit.addEventListener('click', () => {

    // hide city and icon
    _edit.style.display = "none";
    city.style.display = "none";

    // replace element with new one

    const searchInput = `<input type"text" id="searchCity" placeholder="Location">`

    searchDiv.insertAdjacentHTML('afterbegin', searchInput)

    const searchCityInputField = document.getElementById('searchCity');
    searchCityInputField.addEventListener('change', function (e) {
        console.log(searchCityInputField.value)
        let app = new WeatherApp(searchCityInputField.value)
        app.getCurrentWeather()
        app.getWeatherHourly()
    })

    // focus
    searchCityInputField.focus();

})