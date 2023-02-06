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

//API URL Variables
apiKey = "49ddb4aef6c533f01011bdd6c2e49ea1"
cityName = ""
url = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=" + apiKey
var urlTwo = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`

//Buttons Variables
var searchCityBtn = document.querySelector("#search-button");
var historyCityBtn = document.querySelector("#stored-city1");

historyCityBtn.style.display = "none";

searchCityBtn.addEventListener("click", searchCity);

function searchCity() {
    //alert("test serech button");
    var value = document.querySelector("#city-input").value;
        if (!value) {
            alert("Please insert a city name");
            return;
        }

        historyCityBtn.style.display = "block";
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

fetch(requestUrl)
  .then(function (response) {
    // In order to use the data, it must first be parsed. Use .json() when the
    // API response format is JSON.
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// var requestUrl = 'https://api.github.com/repos/twitter/chill/issues?per_page=5';

// fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log('Github Repo Issues \n----------');
//     for (var i = 0; i < data.length; i++) {
//       console.log(data[i].url);
//       console.log(data[i].user.login);
//     }
//   });