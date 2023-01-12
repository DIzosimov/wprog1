// Get the form element
const form = document.getElementById("myForm");
let latitude, longitude, city, countryCode, weather

const clearWeather = () => {
  $('.snowflakes').empty();
  $('.rain').empty();
  $('.clouds').empty();
  document.getElementById('sun').style.display = "none";
  document.getElementsByTagName('main')[0].style.background = "linear-gradient(#202020, #111119 90.1%)";
  document.getElementsByTagName('body')[0].style.background = "#202020";
}

const makeItSnow = () => {
  //clear out everything
  clearWeather();

  let increment = 0
  let flakes = ""

  while (increment < 100) {
    //couple random numbers to use for various randomizations
    //random number between 5 and 2
    let randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
    //random number between 15 and 1
    let randoFifteen = (Math.floor(Math.random() * (15 - 1) + 1) + 1);
    //increment
    increment += 2;
    //add in a new snowflake with various randomizations to certain CSS properties
    flakes += '<div class="snowflake" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: ' + randoFifteen + 's;">❅</div>';
  }
  $('.snowflakes').append(flakes);
}

const makeItRain = () => {
  //clear out everything
  clearWeather();

  let increment = 0;
  let drops = "";
  let backDrops = "";

  while (increment < 100) {
    //couple random numbers to use for various randomizations
    //random number between 98 and 1
    let randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    //random number between 5 and 2
    let randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
    //increment
    increment += randoFiver;
    //add in a new raindrop with various randomizations to certain CSS properties
    drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
  }

  $('.rain.front-row').append(drops);
  $('.rain.back-row').append(backDrops);
}

const makeItShine = () => {
  //clear out everything
  clearWeather();

  document.getElementById('sun').style.display = "block";
  document.getElementsByTagName('main')[0].style.background = "#2EB5E5";
  document.getElementsByTagName('body')[0].style.background = "#2EB5E5";
}

const makeItCloudy = () => {
  //clear out everything
  clearWeather();

  let cloudIncrement = 0
  let clouds = ""
  while (cloudIncrement < 6) {
    ++cloudIncrement
    clouds += `<div class="bigCloud" id="cloud${cloudIncrement}"><div class="largeCircle" id="circ1"><div class="largeCircle" id="circ1shadow"></div></div><div class="middleCircle" id="circ2"><div class="middleCircle" id="circ2shadow"></div></div><div class="middleCircle" id="circ3"><div class="middleCircle" id="circ3shadow"></div></div><div class="smallCircle" id="circ4"></div><div class="smallCircle" id="circ5"><div class="smallCircle" id="circ5shadow"></div></div><div class="smallCircle" id="circ6" <div class="smallCircle" id="circ6shadow"></div></div></div>`
  }
  $('.clouds').append(clouds);
}

const updateDesign = () => {
  debugger
  switch(weather.weather[0].main) {
    case "Clouds":
      makeItCloudy();
      break;
    case "Rain":
      makeItRain();
      break;
    case "Clear":
      makeItShine();
      break;
    case "Snow":
      makeItSnow();
      break;
  }
}

window.addEventListener("load", () => {
  const getCoordinates = () => {

    let formCity = form.getElementsByClassName('city').city.value

    const XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    const FD = new FormData(form);

    return new Promise(function (resolve, reject) {
      // Define what happens on successful data submission
      XHR.addEventListener("load", (event) => {
        let p = JSON.parse(event.target.response)
        console.log(event)
        if (p.length > 0) {
          p.forEach(el => {
            if (el.name === formCity && latitude === undefined && longitude === undefined) {
              latitude = el.lat
              longitude = el.lon
            }
          });
          resolve()
        } else {
          reject()
        }
      });

      // Define what happens in case of error
      XHR.addEventListener("error", () => {
        alert('Oops! Something went wrong.');
      });

      // Set up our request
      XHR.open("GET",
        `http://api.openweathermap.org/geo/1.0/direct?q=${formCity},${countryCode}&limit=5&appid=3b6468dced711a5813acefc6f7f4ec9c`
      );


      // The data sent is what the user provided in the form
      XHR.send(FD);
    })
  }

  const getCountry = () => {
    let country = form.getElementsByClassName('country').country.value
    const XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    const FD = new FormData(form);

    return new Promise(function (resolve, reject) {
      XHR.addEventListener("load", (event) => {
        let p = JSON.parse(event.target.response)
        if (p[0].altSpellings.length > 0) {
          countryCode = p[0].altSpellings[0]
          resolve()
        } else {
          reject()
        }
      });

      // Define what happens in case of error
      XHR.addEventListener("error", (event) => {
        alert('Oops! Something went wrong.');
      });

      // Set up our request
      XHR.open("GET",
        `https://restcountries.com/v3.1/name/${country}`
      );


      // The data sent is what the user provided in the form
      XHR.send(FD);
    })
    // Define what happens on successful data submission
  }

  const getWeather = (lat, lon) => {

    const XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    const FD = new FormData(form);

    return new Promise(function (resolve, reject) {
      // Define what happens on successful data submission
      XHR.addEventListener("load", (event) => {
        weather = JSON.parse(event.target.response)
        resolve()
      });

      // Define what happens in case of error
      XHR.addEventListener("error", (event) => {
        reject()
        alert('Oops! Something went wrong.');
      });

      // Set up our request
      XHR.open("GET",
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=3b6468dced711a5813acefc6f7f4ec9c`
      );

      // The data sent is what the user provided in the form
      XHR.send(FD);
    })
  }


  // Add 'submit' event handler
  form.addEventListener("submit", (event) => {
    latitude = undefined 
    longitude = undefined 
    city = undefined
    countryCode = undefined 
    weather = undefined
    event.preventDefault();
    getCountry()
    .then(() => {
      getCoordinates()
      .then(() => {
        getWeather(latitude, longitude)
        .then(() => {
          updateDesign();
        })
        .catch(() => {
          alert('Oops no weather found!')
        })
      })
      .catch(() => {
        alert('No location found with these values!')
      })
    })
    .catch(() => {
      alert('Invalid Country!')
    })
  });
});


/* 
p.weather[0]
{id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n'}

p.clouds.all
75

p.main
{feels_like: 274.14, humidity: 94, pressure: 997, temp: 277.93, 
  temp_max: 278.34, temp_min: 277.56}

p.sys
{type: 1, id: 1788, country: 'SE', sunrise: 1673422569, sunset: 1673446461}

p.visibility
10000 meters of visibility (max 10km)

p.wind
{speed: 5.14, deg: 180} m/s


add choice for metric vs imperial?

Rain, Clear, Cloudy, Snow
*/