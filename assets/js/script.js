var apiKey = "49ddb4aef6c533f01011bdd6c2e49ea1"
var searchCityBtn = document.querySelector("#search-button");
var historyCityBtn = document.querySelector("#stored-city1");

historyCityBtn.style.display = "none";

searchCityBtn.addEventListener("click", searchCity);

function searchCity() {
    var cityName = document.querySelector("#city-input").value;

        if (!cityName) {
            alert("Please insert a city name");
            return;
        }
        var requestURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=" + apiKey
        historyCityBtn.style.display = "block";
        
        var displayCurrentCity = document.querySelector(".city-container")
        var displayDayCards = document.querySelector(".day-cards");

        displayCurrentCity.style.display = "block";
        displayDayCards.style.display = "block";


        fetch(requestURL)
            .then(function (response) {
             return response.json();
        })
            .then(function (data) {
            console.log('Fetch Response \n-------------');
            console.log(data);
            var lat = data[0].lat
            var lon = data[0].lon

        getWeather(lat, lon);
    });
}

function getWeather(lat, lon) {
    var requestURL = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=" + lat + "&lon=" + lon + "&appid=" + apiKey

    fetch(requestURL)
    .then(function (response) {
    return response.json();
 })
    .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);

    document.querySelector("#city0").textContent = data.city.name
    document.querySelector("#date0").textContent = data.list[0].dt_txt.substring(0, 10);
    document.querySelector("#icon0").innerHTML='';
    var imageElement = document.createElement("img")
    imageElement.setAttribute("src", "https://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png")
    document.querySelector("#icon0").append(imageElement);
    document.querySelector("#temp0").textContent = data.list[0].main.temp
    document.querySelector("#wind0").textContent = data.list[0].wind.speed
    document.querySelector("#humidity0").textContent = data.list[0].main.humidity

    ////This displays info for day 1 as captures from the API path, and so on for the rest of days with the corresponding index from the API
    document.querySelector("#date1").textContent = data.list[7].dt_txt.substring(0, 10); //This will remove the time from the date using substring to capture the first 9 staring letters which is for the date
    document.querySelector("#icon1").innerHTML='';
    var imageElement1 = document.createElement("img") //This is to create an image link for the icon
    imageElement1.setAttribute("src", "https://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png") //This is to taret the icon from the API path and the same for the rest of the days
    document.querySelector("#icon1").append(imageElement1);
    document.querySelector("#temp1").textContent = data.list[7].main.temp
    document.querySelector("#wind1").textContent = data.list[7].wind.speed
    document.querySelector("#humidity1").textContent = data.list[7].main.humidity

    //document.querySelector("#city1").textContent = data.city.name
    document.querySelector("#date2").textContent = data.list[15].dt_txt.substring(0, 10);
    document.querySelector("#icon2").innerHTML='';
    var imageElement2 = document.createElement("img")
    imageElement2.setAttribute("src", "https://openweathermap.org/img/w/" + data.list[7].weather[0].icon + ".png")
    document.querySelector("#icon2").append(imageElement2);
    document.querySelector("#temp2").textContent = data.list[15].main.temp
    document.querySelector("#wind2").textContent = data.list[15].wind.speed
    document.querySelector("#humidity2").textContent = data.list[15].main.humidity

    document.querySelector("#date3").textContent = data.list[23].dt_txt.substring(0, 10);
    document.querySelector("#icon3").innerHTML='';
    var imageElement3 = document.createElement("img")
    imageElement3.setAttribute("src", "https://openweathermap.org/img/w/" + data.list[23].weather[0].icon + ".png")
    document.querySelector("#icon3").append(imageElement3);
    document.querySelector("#temp3").textContent = data.list[23].main.temp
    document.querySelector("#wind3").textContent = data.list[23].wind.speed
    document.querySelector("#humidity3").textContent = data.list[23].main.humidity

    document.querySelector("#date4").textContent = data.list[31].dt_txt.substring(0, 10);
    document.querySelector("#icon4").innerHTML='';
    var imageElement4 = document.createElement("img")
    imageElement4.setAttribute("src", "https://openweathermap.org/img/w/" + data.list[31].weather[0].icon + ".png")
    document.querySelector("#icon4").append(imageElement4);
    document.querySelector("#temp4").textContent = data.list[31].main.temp
    document.querySelector("#wind4").textContent = data.list[31].wind.speed
    document.querySelector("#humidity4").textContent = data.list[31].main.humidity

    document.querySelector("#date5").textContent = data.list[39].dt_txt.substring(0, 10);
    document.querySelector("#icon5").innerHTML='';
    var imageElement5 = document.createElement("img")
    imageElement5.setAttribute("src", "https://openweathermap.org/img/w/" + data.list[39].weather[0].icon + ".png")
    document.querySelector("#icon5").append(imageElement5);
    document.querySelector("#temp5").textContent = data.list[39].main.temp
    document.querySelector("#wind5").textContent = data.list[39].wind.speed
    document.querySelector("#humidity5").textContent = data.list[39].main.humidity

});
}

renderPreviousSearch();

function renderPreviousSearch() {
  var city = localStorage.getItem("city");
  if (!city) {
    return;
  }

  historyCityBtn.textContent = city;
}

searchCityBtn.addEventListener("click", function() {
  var city = document.querySelector("#city-input").value;

    localStorage.setItem("city", city);
    renderPreviousSearch();
});

historyCityBtn.addEventListener("click", historyCity);

function historyCity() {
    searchCity();
}