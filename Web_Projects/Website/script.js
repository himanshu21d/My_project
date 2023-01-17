let weather = {
    apiKey: "a24aaf5645632c28353fcb5a0faaf038",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
  displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = Math.round(temp * 10) / 10 + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();

      }
    });
  
weather.fetchWeather("Berlin");


//weekly 
function method1() {
$(document).ready(function () {
  $(".search-bar").on("change", function () {
    window.value = $(this).val().toLowerCase();
    $("body").css({
      backgroundImage: "url('https://source.unsplash.com/1920x1080/?" + value + "')"
    });
    console.log(value);
    $(document).trigger('method1_complete');
  })
})
}
method1();

function method2() {
  var trueValue = window.value;
  var APIkey = "a24aaf5645632c28353fcb5a0faaf038";
  var geoPos = "https://api.openweathermap.org/geo/1.0/direct?q=" + trueValue + "&limit=5&appid=" + APIkey;
  $.ajax({
        url: geoPos,
        method: "GET"
      }).then(function (geol) {
        var geoLat = geol[0].lat;
        var geoLon = geol[0].lon;
        window.geoURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + geoLat + "&lon=" + geoLon + "&appid=" + APIkey;
        console.log(geoURL);
        $(document).trigger('method2_complete');
      });
}

function method3() {
      var queryURL = window.geoURL;
      var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
      var d = new Date();
      var oneDay = 86400000
      var ms = new Date().getTime();


      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        console.log(response);
        
        // Day 1
        var cityFiveIconOne = "https://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + ".png";
        var cityFiveTempOne = response.list[0].main.temp;
        var cityFiveHumidOne = response.list[0].main.humidity;
        var cityFiveWindOne = response.list[0].wind.speed;

        $(".weather-img-one").attr("src", cityFiveIconOne);
        $(".max-one").text((cityFiveTempOne-273.15).toFixed(1) + "°C");
        $(".humidity-one").text("Humidity: " + cityFiveHumidOne + "%");
        $(".wind-one").text("Wind speed: " + cityFiveWindOne.toFixed(2) + " km/h");
        $(".day-one").text(weekday[d.getDay()]);
        $(".date-one").text(parseInt(String((new Date(ms))).substring(8,10), 10));
        

        // Day 2
        var cityFiveIconTwo = "https://openweathermap.org/img/wn/" + response.list[7].weather[0].icon + ".png";
        var cityFiveTempTwo = response.list[7].main.temp;
        var cityFiveHumidTwo = response.list[7].main.humidity;
        var cityFiveWindTwo = response.list[7].wind.speed;

        $(".weather-img-two").attr("src", cityFiveIconTwo);
        $(".max-two").text((cityFiveTempTwo-273.15).toFixed(1) + "°C");
        $(".humidity-two").text("Humidity: " + cityFiveHumidTwo + "%");
        $(".wind-two").text("Wind speed: " + cityFiveWindTwo.toFixed(2) + " km/h");
        $(".day-two").text(weekday[d.getDay() + 1]);
        $(".date-two").text(parseInt(String((new Date(ms + oneDay))).substring(8,10), 10));
        
        // Day 3
        var cityFiveIconThree = "https://openweathermap.org/img/wn/" + response.list[15].weather[0].icon + ".png";
        var cityFiveTempThree = response.list[15].main.temp;
        var cityFiveHumidThree = response.list[15].main.humidity;
        var cityFiveWindThree = response.list[15].wind.speed;

        $(".weather-img-three").attr("src", cityFiveIconThree);
        $(".max-three").text((cityFiveTempThree-273.15).toFixed(1) + "°C");
        $(".humidity-three").text("Humidity: " + cityFiveHumidThree + "%");
        $(".wind-three").text("Wind speed: " + cityFiveWindThree.toFixed(2) + " km/h");
        $(".day-three").text(weekday[d.getDay() + 2]); 
        $(".date-three").text(parseInt(String((new Date(ms + oneDay * 2))).substring(8,10), 10));
        
        // Day 4
        var cityFiveIconFour = "https://openweathermap.org/img/wn/" + response.list[23].weather[0].icon + ".png";
        var cityFiveTempFour = response.list[23].main.temp;
        var cityFiveHumidFour = response.list[23].main.humidity;
        var cityFiveWindFour = response.list[23].wind.speed;

        $(".weather-img-four").attr("src", cityFiveIconFour);
        $(".max-four").text((cityFiveTempFour-273.15).toFixed(1) + "°C");
        $(".humidity-four").text("Humidity: " + cityFiveHumidFour + "%");
        $(".wind-four").text("Wind speed: " + cityFiveWindFour.toFixed(2) + " km/h");
        $(".day-four").text(weekday[d.getDay() + 3]);
        $(".date-four").text(parseInt(String((new Date(ms + oneDay * 3))).substring(8,10), 10));

        // Day 5
        var cityFiveIconFive = "https://openweathermap.org/img/wn/" + response.list[31].weather[0].icon + ".png";
        var cityFiveTempFive = response.list[31].main.temp;
        var cityFiveHumidFive = response.list[31].main.humidity;
        var cityFiveWindFive = response.list[31].wind.speed;

        $(".weather-img-five").attr("src", cityFiveIconFive);
        $(".max-five").text((cityFiveTempFive-273.15).toFixed(1) + "°C");
        $(".humidity-five").text("Humidity: " + cityFiveHumidFive + "%");
        $(".wind-five").text("Wind speed: " + cityFiveWindFive.toFixed(2) + " km/h");
        $(".day-five").text(weekday[d.getDay() + 4]);
        $(".date-five").text(parseInt(String((new Date(ms + oneDay * 4))).substring(8,10), 10));
      
        // Day 6
        var cityFiveIconSix = "https://openweathermap.org/img/wn/" + response.list[39].weather[0].icon + ".png";
        var cityFiveTempSix = response.list[39].main.temp;
        var cityFiveHumidSix = response.list[39].main.humidity;
        var cityFiveWindSix = response.list[39].wind.speed;

        $(".weather-img-six").attr("src", cityFiveIconSix);
        $(".max-six").text((cityFiveTempSix-273.15).toFixed(1) + "°C");
        $(".humidity-six").text("Humidity: " + cityFiveHumidSix + "%");
        $(".wind-six").text("Wind speed: " + cityFiveWindSix.toFixed(2) + " km/h");
        $(".day-six").text(weekday[d.getDay() + 5]);
        $(".date-six").text(parseInt(String((new Date(ms + oneDay * 5))).substring(8,10), 10));
      
        // Day 7
        var cityFiveIconSeven = "https://openweathermap.org/img/wn/" + response.list[19].weather[0].icon + ".png";
        var cityFiveTempSeven = response.list[19].main.temp;
        var cityFiveHumidSeven = response.list[19].main.humidity;
        var cityFiveWindSeven = response.list[19].wind.speed;

        $(".weather-img-seven").attr("src", cityFiveIconSeven);
        $(".max-seven").text((cityFiveTempSeven-273.15).toFixed(1) + "°C");
        $(".humidity-seven").text("Humidity: " + cityFiveHumidSeven + "%");
        $(".wind-seven").text("Wind speed: " + cityFiveWindSeven.toFixed(2) + " km/h");
        $(".day-seven").text(weekday[d.getDay() + 6]);
        $(".date-seven").text(parseInt(String((new Date(ms + oneDay * 6))).substring(8,10), 10));

         // Day 8
         var cityFiveIconEight = "https://openweathermap.org/img/wn/" + response.list[32].weather[0].icon + ".png";
         var cityFiveTempEight = response.list[32].main.temp;
         var cityFiveHumidEight = response.list[32].main.humidity;
         var cityFiveWindEight = response.list[32].wind.speed;
 
         $(".weather-img-eight").attr("src", cityFiveIconEight);
         $(".max-eight").text((cityFiveTempEight-273.15).toFixed(1) + "°C");
         $(".humidity-eight").text("Humidity: " + cityFiveHumidEight + "%");
         $(".wind-eight").text("Wind speed: " + cityFiveWindEight.toFixed(2) + " km/h");
         $(".day-eight").text(weekday[d.getDay() + 7]);
         $(".date-eight").text(parseInt(String((new Date(ms + oneDay * 7))).substring(8,10), 10));

         // Day 9
         var cityFiveIconNine = "https://openweathermap.org/img/wn/" + response.list[8].weather[0].icon + ".png";
         var cityFiveTempNine = response.list[8].main.temp;
         var cityFiveHumidNine = response.list[8].main.humidity;
         var cityFiveWindNine = response.list[8].wind.speed;
 
         $(".weather-img-nine").attr("src", cityFiveIconNine);
         $(".max-nine").text((cityFiveTempNine-273.15).toFixed(1) + "°C");
         $(".humidity-nine").text("Humidity: " + cityFiveHumidNine + "%");
         $(".wind-nine").text("Wind speed: " + cityFiveWindNine.toFixed(2) + " km/h");
         $(".day-nine").text(weekday[d.getDay() + 8]);
         $(".date-nine").text(parseInt(String((new Date(ms + oneDay * 8))).substring(8,10), 10));

         // Day 10
         var cityFiveIconTen = "https://openweathermap.org/img/wn/" + response.list[9].weather[0].icon + ".png";
         var cityFiveTempTen = response.list[9].main.temp;
         var cityFiveHumidTen = response.list[9].main.humidity;
         var cityFiveWindTen = response.list[9].wind.speed;
 
         $(".weather-img-ten").attr("src", cityFiveIconTen);
         $(".max-ten").text((cityFiveTempTen-273.15).toFixed(1) + "°C");
         $(".humidity-ten").text("Humidity: " + cityFiveHumidTen + "%");
         $(".wind-ten").text("Wind speed: " + cityFiveWindTen.toFixed(2) + " km/h");
         $(".day-ten").text(weekday[d.getDay() + 9]);
         $(".date-ten").text(parseInt(String((new Date(ms + oneDay * 9))).substring(8,10), 10));

         // Day 11
         var cityFiveIconEleven = "https://openweathermap.org/img/wn/" + response.list[10].weather[0].icon + ".png";
         var cityFiveTempEleven = response.list[10].main.temp;
         var cityFiveHumidEleven = response.list[10].main.humidity;
         var cityFiveWindEleven = response.list[10].wind.speed;
 
         $(".weather-img-eleven").attr("src", cityFiveIconEleven);
         $(".max-eleven").text((cityFiveTempEleven-273.15).toFixed(1) + "°C");
         $(".humidity-eleven").text("Humidity: " + cityFiveHumidEleven + "%");
         $(".wind-eleven").text("Wind speed: " + cityFiveWindEleven.toFixed(2) + " km/h");
         $(".day-eleven").text(weekday[d.getDay() + 10]);
         $(".date-eleven").text(parseInt(String((new Date(ms + oneDay * 10))).substring(8,10), 10));


         // Day 12
         var cityFiveIconTwelve = "https://openweathermap.org/img/wn/" + response.list[11].weather[0].icon + ".png";
         var cityFiveTempTwelve = response.list[11].main.temp;
         var cityFiveHumidTwelve = response.list[11].main.humidity;
         var cityFiveWindTwelve = response.list[11].wind.speed;
 
         $(".weather-img-twelve").attr("src", cityFiveIconTwelve);
         $(".max-twelve").text((cityFiveTempTwelve-273.15).toFixed(1) + "°C");
         $(".humidity-twelve").text("Humidity: " + cityFiveHumidTwelve + "%");
         $(".wind-twelve").text("Wind speed: " + cityFiveWindTwelve.toFixed(2) + " km/h");
         $(".day-twelve").text(weekday[d.getDay() + 11]);
         $(".date-twelve").text(parseInt(String((new Date(ms + oneDay * 11))).substring(8,10), 10));

         // Day 13
         var cityFiveIconThirteen = "https://openweathermap.org/img/wn/" + response.list[12].weather[0].icon + ".png";
         var cityFiveTempThirteen = response.list[12].main.temp;
         var cityFiveHumidThirteen = response.list[12].main.humidity;
         var cityFiveWindThirteen = response.list[12].wind.speed;
 
         $(".weather-img-thirteen").attr("src", cityFiveIconThirteen);
         $(".max-thirteen").text((cityFiveTempThirteen-273.15).toFixed(1) + "°C");
         $(".humidity-thirteen").text("Humidity: " + cityFiveHumidThirteen + "%");
         $(".wind-thirteen").text("Wind speed: " + cityFiveWindThirteen.toFixed(2) + " km/h");
         $(".day-thirteen").text(weekday[d.getDay() + 12]);
         $(".date-thirteen").text(parseInt(String((new Date(ms + oneDay * 12))).substring(8,10), 10));

         // Day 14
         var cityFiveIconFourteen = "https://openweathermap.org/img/wn/" + response.list[13].weather[0].icon + ".png";
         var cityFiveTempFourteen = response.list[13].main.temp;
         var cityFiveHumidFourteen = response.list[13].main.humidity;
         var cityFiveWindFourteen = response.list[13].wind.speed;
 
         $(".weather-img-fourteen").attr("src", cityFiveIconFourteen);
         $(".max-fourteen").text((cityFiveTempFourteen-273.15).toFixed(1) + "°C");
         $(".humidity-fourteen").text("Humidity: " + cityFiveHumidFourteen + "%");
         $(".wind-fourteen").text("Wind speed: " + cityFiveWindFourteen.toFixed(2) + " km/h");
         $(".day-fourteen").text(weekday[d.getDay() + 13]);
         $(".date-fourteen").text(parseInt(String((new Date(ms + oneDay * 13))).substring(8,10), 10));

         // Day 15
         var cityFiveIconFifteen = "https://openweathermap.org/img/wn/" + response.list[14].weather[0].icon + ".png";
         var cityFiveTempFifteen = response.list[14].main.temp;
         var cityFiveHumidFifteen = response.list[14].main.humidity;
         var cityFiveWindFifteen = response.list[14].wind.speed;
 
         $(".weather-img-fifteen").attr("src", cityFiveIconFifteen);
         $(".max-fifteen").text((cityFiveTempFifteen-273.15).toFixed(1) + "°C");
         $(".humidity-fifteen").text("Humidity: " + cityFiveHumidFifteen + "%");
         $(".wind-fifteen").text("Wind speed: " + cityFiveWindFifteen.toFixed(2) + " km/h");
         $(".day-fifteen").text(weekday[d.getDay() + 14]);
         $(".date-fifteen").text(parseInt(String((new Date(ms + oneDay * 14))).substring(8,10), 10));

         // Day 16
         var cityFiveIconSixteen = "https://openweathermap.org/img/wn/" + response.list[33].weather[0].icon + ".png";
         var cityFiveTempSixteen = response.list[33].main.temp;
         var cityFiveHumidSixteen = response.list[33].main.humidity;
         var cityFiveWindSixteen = response.list[33].wind.speed;
 
         $(".weather-img-sixteen").attr("src", cityFiveIconSixteen);
         $(".max-sixteen").text((cityFiveTempSixteen-273.15).toFixed(1) + "°C");
         $(".humidity-sixteen").text("Humidity: " + cityFiveHumidSixteen + "%");
         $(".wind-sixteen").text("Wind speed: " + cityFiveWindSixteen.toFixed(2) + " km/h");
         $(".day-sixteen").text(weekday[d.getDay() + 15]);
         $(".date-sixteen").text(parseInt(String((new Date(ms + oneDay * 15))).substring(8,10), 10));

         // Day 17
         var cityFiveIconSeventeen = "https://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + ".png";
         var cityFiveTempSeventeen = response.list[16].main.temp;
         var cityFiveHumidSeventeen = response.list[16].main.humidity;
         var cityFiveWindSeventeen = response.list[16].wind.speed;
 
         $(".weather-img-seventeen").attr("src", cityFiveIconSeventeen);
         $(".max-seventeen").text((cityFiveTempSeventeen-273.15).toFixed(1) + "°C");
         $(".humidity-seventeen").text("Humidity: " + cityFiveHumidSeventeen + "%");
         $(".wind-seventeen").text("Wind speed: " + cityFiveWindSeventeen.toFixed(2) + " km/h");
         $(".day-seventeen").text(weekday[d.getDay() + 16]);
         $(".date-seventeen").text(parseInt(String((new Date(ms + oneDay * 16))).substring(8,10), 10));

         // Day 18
         var cityFiveIconEighteen = "https://openweathermap.org/img/wn/" + response.list[17].weather[0].icon + ".png";
         var cityFiveTempEighteen = response.list[17].main.temp;
         var cityFiveHumidEighteen = response.list[17].main.humidity;
         var cityFiveWindEighteen = response.list[17].wind.speed;
 
         $(".weather-img-eighteen").attr("src", cityFiveIconEighteen);
         $(".max-eighteen").text((cityFiveTempEighteen-273.15).toFixed(1) + "°C");
         $(".humidity-eighteen").text("Humidity: " + cityFiveHumidEighteen + "%");
         $(".wind-eighteen").text("Wind speed: " + cityFiveWindEighteen.toFixed(2) + " km/h");
         $(".day-eighteen").text(weekday[d.getDay() + 17]);
         $(".date-eighteen").text(parseInt(String((new Date(ms + oneDay * 17))).substring(8,10), 10));

         // Day 19
         var cityFiveIconNineteen = "https://openweathermap.org/img/wn/" + response.list[18].weather[0].icon + ".png";
         var cityFiveTempNineteen = response.list[18].main.temp;
         var cityFiveHumidNineteen = response.list[18].main.humidity;
         var cityFiveWindNineteen = response.list[18].wind.speed;
 
         $(".weather-img-nineteen").attr("src", cityFiveIconNineteen);
         $(".max-nineteen").text((cityFiveTempNineteen-273.15).toFixed(1) + "°C");
         $(".humidity-nineteen").text("Humidity: " + cityFiveHumidNineteen + "%");
         $(".wind-nineteen").text("Wind speed: " + cityFiveWindNineteen.toFixed(2) + " km/h");
         $(".day-nineteen").text(weekday[d.getDay() + 18]);
         $(".date-nineteen").text(parseInt(String((new Date(ms + oneDay * 18))).substring(8,10), 10));

         // Day 20
         var cityFiveIconTwenty = "https://openweathermap.org/img/wn/" + response.list[19].weather[0].icon + ".png";
         var cityFiveTempTwenty = response.list[19].main.temp;
         var cityFiveHumidTwenty = response.list[19].main.humidity;
         var cityFiveWindTwenty = response.list[19].wind.speed;
 
         $(".weather-img-twenty").attr("src", cityFiveIconTwenty);
         $(".max-twenty").text((cityFiveTempTwenty-273.15).toFixed(1) + "°C");
         $(".humidity-twenty").text("Humidity: " + cityFiveHumidTwenty + "%");
         $(".wind-twenty").text("Wind speed: " + cityFiveWindTwenty.toFixed(2) + " km/h");
         $(".day-twenty").text(weekday[d.getDay() + 19]);
         $(".date-twenty").text(parseInt(String((new Date(ms + oneDay * 19))).substring(8,10), 10));

         // Day 21
         var cityFiveIconTwentyOne = "https://openweathermap.org/img/wn/" + response.list[20].weather[0].icon + ".png";
         var cityFiveTempTwentyOne = response.list[20].main.temp;
         var cityFiveHumidTwentyOne = response.list[20].main.humidity;
         var cityFiveWindTwentyOne = response.list[20].wind.speed;
 
         $(".weather-img-twentyone").attr("src", cityFiveIconTwentyOne);
         $(".max-twentyone").text((cityFiveTempTwentyOne-273.15).toFixed(1) + "°C");
         $(".humidity-twentyone").text("Humidity: " + cityFiveHumidTwentyOne + "%");
         $(".wind-twentyone").text("Wind speed: " + cityFiveWindTwentyOne.toFixed(2) + " km/h");
         $(".day-twentyone").text(weekday[d.getDay() + 20]);
         $(".date-twentyone").text(parseInt(String((new Date(ms + oneDay * 20))).substring(8,10), 10));

         // Day 22
         var cityFiveIconTwentyTwo = "https://openweathermap.org/img/wn/" + response.list[21].weather[0].icon + ".png";
         var cityFiveTempTwentyTwo = response.list[21].main.temp;
         var cityFiveHumidTwentyTwo = response.list[21].main.humidity;
         var cityFiveWindTwentyTwo = response.list[21].wind.speed;
 
         $(".weather-img-twentytwo").attr("src", cityFiveIconTwentyTwo);
         $(".max-twentytwo").text((cityFiveTempTwentyTwo-273.15).toFixed(1) + "°C");
         $(".humidity-twentytwo").text("Humidity: " + cityFiveHumidTwentyTwo + "%");
         $(".wind-twentytwo").text("Wind speed: " + cityFiveWindTwentyTwo.toFixed(2) + " km/h");
         $(".day-twentytwo").text(weekday[d.getDay() + 21]);
         $(".date-twentytwo").text(parseInt(String((new Date(ms + oneDay * 21))).substring(8,10), 10));

         // Day 23
         var cityFiveIconTwentyThree = "https://openweathermap.org/img/wn/" + response.list[22].weather[0].icon + ".png";
         var cityFiveTempTwentyThree = response.list[22].main.temp;
         var cityFiveHumidTwentyThree = response.list[22].main.humidity;
         var cityFiveWindTwentyThree = response.list[22].wind.speed;
 
         $(".weather-img-twentythree").attr("src", cityFiveIconTwentyThree);
         $(".max-twentythree").text((cityFiveTempTwentyThree-273.15).toFixed(1) + "°C");
         $(".humidity-twentythree").text("Humidity: " + cityFiveHumidTwentyThree + "%");
         $(".wind-twentythree").text("Wind speed: " + cityFiveWindTwentyThree.toFixed(2) + " km/h");
         $(".day-twentythree").text(weekday[d.getDay() + 22]);
         $(".date-twentythree").text(parseInt(String((new Date(ms + oneDay * 22))).substring(8,10), 10));

         // Day 24
         var cityFiveIconTwentyFour = "https://openweathermap.org/img/wn/" + response.list[34].weather[0].icon + ".png";
         var cityFiveTempTwentyFour = response.list[34].main.temp;
         var cityFiveHumidTwentyFour = response.list[34].main.humidity;
         var cityFiveWindTwentyFour = response.list[34].wind.speed;
 
         $(".weather-img-twentyfour").attr("src", cityFiveIconTwentyFour);
         $(".max-twentyfour").text((cityFiveTempTwentyFour-273.15).toFixed(1) + "°C");
         $(".humidity-twentyfour").text("Humidity: " + cityFiveHumidTwentyFour + "%");
         $(".wind-twentyfour").text("Wind speed: " + cityFiveWindTwentyFour.toFixed(2) + " km/h");
         $(".day-twentyfour").text(weekday[d.getDay() + 23]);
         $(".date-twentyfour").text(parseInt(String((new Date(ms + oneDay * 23))).substring(8,10), 10));

         // Day 25
         var cityFiveIconTwentyFive = "https://openweathermap.org/img/wn/" + response.list[24].weather[0].icon + ".png";
         var cityFiveTempTwentyFive = response.list[24].main.temp;
         var cityFiveHumidTwentyFive = response.list[24].main.humidity;
         var cityFiveWindTwentyFive = response.list[24].wind.speed;
 
         $(".weather-img-twentyfive").attr("src", cityFiveIconTwentyFive);
         $(".max-twentyfive").text((cityFiveTempTwentyFive-273.15).toFixed(1) + "°C");
         $(".humidity-twentyfive").text("Humidity: " + cityFiveHumidTwentyFive + "%");
         $(".wind-twentyfive").text("Wind speed: " + cityFiveWindTwentyFive.toFixed(2) + " km/h");
         $(".day-twentyfive").text(weekday[d.getDay() + 24]);
         $(".date-twentyfive").text(parseInt(String((new Date(ms + oneDay * 24))).substring(8,10), 10));
         // Day 26
         var cityFiveIconTwentySix = "https://openweathermap.org/img/wn/" + response.list[25].weather[0].icon + ".png";
         var cityFiveTempTwentySix = response.list[25].main.temp;
         var cityFiveHumidTwentySix = response.list[25].main.humidity;
         var cityFiveWindTwentySix = response.list[25].wind.speed;
 
         $(".weather-img-twentysix").attr("src", cityFiveIconTwentySix);
         $(".max-twentysix").text((cityFiveTempTwentySix-273.15).toFixed(1) + "°C");
         $(".humidity-twentysix").text("Humidity: " + cityFiveHumidTwentySix + "%");
         $(".wind-twentysix").text("Wind speed: " + cityFiveWindTwentySix.toFixed(2) + " km/h");
         $(".day-twentysix").text(weekday[d.getDay() + 25]);
         $(".date-twentysix").text(parseInt(String((new Date(ms + oneDay * 25))).substring(8,10), 10));
         // Day 27
         var cityFiveIconTwentySeven = "https://openweathermap.org/img/wn/" + response.list[26].weather[0].icon + ".png";
         var cityFiveTempTwentySeven = response.list[26].main.temp;
         var cityFiveHumidTwentySeven = response.list[26].main.humidity;
         var cityFiveWindTwentySeven = response.list[26].wind.speed;
 
         $(".weather-img-twentyseven").attr("src", cityFiveIconTwentySeven);
         $(".max-twentyseven").text((cityFiveTempTwentySeven-273.15).toFixed(1) + "°C");
         $(".humidity-twentyseven").text("Humidity: " + cityFiveHumidTwentySeven + "%");
         $(".wind-twentyseven").text("Wind speed: " + cityFiveWindTwentySeven.toFixed(2) + " km/h");
         $(".day-twentyseven").text(weekday[d.getDay() + 26]);
         $(".date-twentyseven").text(parseInt(String((new Date(ms + oneDay * 26))).substring(8,10), 10));

         // Day 28
         var cityFiveIconTwentyEight = "https://openweathermap.org/img/wn/" + response.list[27].weather[0].icon + ".png";
         var cityFiveTempTwentyEight = response.list[27].main.temp;
         var cityFiveHumidTwentyEight = response.list[27].main.humidity;
         var cityFiveWindTwentyEight = response.list[27].wind.speed;
 
         $(".weather-img-twentyeight").attr("src", cityFiveIconTwentyEight);
         $(".max-twentyeight").text((cityFiveTempTwentyEight-273.15).toFixed(1) + "°C");
         $(".humidity-twentyeight").text("Humidity: " + cityFiveHumidTwentyEight + "%");
         $(".wind-twentyeight").text("Wind speed: " + cityFiveWindTwentyEight.toFixed(2) + " km/h");
         $(".day-twentyeight").text(weekday[d.getDay() + 27]);
         $(".date-twentyeight").text(parseInt(String((new Date(ms + oneDay * 27))).substring(8,10), 10));
      });
    }; 

$(document).bind('method1_complete', method2);
$(document).bind('method2_complete', method3);

//background default
window.onload = function () {
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?" + "landscape" + "')";
};

  let saveFile = () => {

    // Get the data from each element on the form.
    const name = document.getElementById('first_name');
    const lname = document.getElementById('last_name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // This variable stores all the data.
    let data =
      '\r Name: ' + name.value + ' \r\n ' +
      'Last Name: ' + lname.value + ' \r\n ' +
      'Email Address: ' + email.value + ' \r\n ' +
      'Message: ' + message.value;

    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      document.body.appendChild(newLink);
    }
    newLink.click();
  }
