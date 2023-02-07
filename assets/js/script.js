// Instructions:

// Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

// Use the 5 Day Weather Forecast (https://openweathermap.org/forecast5) to retrieve weather data for cities. The base URL should look like the following: https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}. After registering for a new API key, you may need to wait up to 2 hours for that API key to activate.

// Hint: Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?

// You will use localStorage to store any persistent data. For more information on how to work with the OpenWeather API, refer to the Full-Stack Blog on how to use API keys (https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

//----------------------------------------------------------------------------------------------------------

//collect input from user (city)
//when the user click search button the button will have a click event
//after click (input has value), we have to retrieve the value from the input element
//need to check if (statement) is empty or not
    //if empty
        //show modal (from bootstrap)
        //terminate the application (return)
    //else
        //store city name in the local storage
        //get previous city name from the local storage and then add new current city name and store them in local storage
        //using the city name build the url to get lat and long data:
        //http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=1&appid=apiKey
        //var apiKey = "49ddb4aef6c533f01011bdd6c2e49ea1"
        //var cityName = ""
        //var url = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=" + apiKey
        //var urlTwo = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`
        //fetch api using urlTwo in order to get long and lat data
            //fetch second api to get the five days weather
                //need a loop

//----------------------------------------------------------------------------------------------------------


var apiKey = "49ddb4aef6c533f01011bdd6c2e49ea1"
var searchCityBtn = document.querySelector("#search-button");
var historyCityBtn = document.querySelector("#stored-city1");


historyCityBtn.style.display = "none";

searchCityBtn.addEventListener("click", searchCity);

function searchCity() {
    //alert("test serech button");
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
     // In order to use the data, it must first be parsed. Use .json() when the
    // API response format is JSON.
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

// searchCityBtn.addEventListener('click', function() {
//     var value = document.querySelector("#city-input").value;
//     var key = "city";
  
//     localStorage.setItem(key, value);
//     document.querySelector("#stored-city1").innerHTML = localStorage.getItem("city");
// });

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
    alert("test history city button");
}