// Get the form element
const form = document.getElementById("myForm");
let p, latitude, longitude, city, countryCode

window.addEventListener("load", () => {
  const getCoordinates = () => {

    let formCity = form.getElementsByClassName('city').city.value
    let formCountryCode = form.getElementsByClassName('country').country.value

    const XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    const FD = new FormData(form);

    return new Promise(function (resolve, reject) {
      // Define what happens on successful data submission
      XHR.addEventListener("load", (event) => {
        p = JSON.parse(event.target.response)
        console.log(event)
        debugger
        if (p.length > 0) {
          p.forEach(el => {
            if (el.name === formCity && latitude === undefined && longitude === undefined) {
              latitude = el.lat
              longitude = el.lon
              city = el.name
              countryCode = el.country
            }
          });
          resolve()
        } else {
          alert('No location found with these values!')
        }
      });

      // Define what happens in case of error
      XHR.addEventListener("error", (event) => {
        alert('Oops! Something went wrong.');
      });

      // Set up our request
      XHR.open("GET",
        `http://api.openweathermap.org/geo/1.0/direct?q=${formCity},${formCountryCode}&limit=5&appid=3b6468dced711a5813acefc6f7f4ec9c`
      );


      // The data sent is what the user provided in the form
      XHR.send(FD);
    })
  }


  // Add 'submit' event handler
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    getCoordinates().then(() => {
      debugger
      getWeather(latitude, longitude)
    })
  });

  const getWeather = (lat, lon) => {
    const XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    const FD = new FormData(form);

    // Define what happens on successful data submission
    XHR.addEventListener("load", (event) => {
      alert(event.target.responseText);
    });

    // Define what happens in case of error
    XHR.addEventListener("error", (event) => {
      alert('Oops! Something went wrong.');
    });

    // Set up our request
    XHR.open("GET",
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3b6468dced711a5813acefc6f7f4ec9c`
    );


    // The data sent is what the user provided in the form
    XHR.send(FD);
  }
});

const windowResize = () => {
  let width = window.innerWidth;
  let nav = document.getElementById('navContainer')
  let dropdown = document.getElementById('drop')
  if (width < 768) {
    nav.style.display = "none"
    dropdown.style.display = "block"
  } 
  if (nav.style.display !== "flex" && width >= 768) {
    document.getElementById('navContainer').style.display = "flex"
    dropdown.style.display = "none"
  }
}

window.onresize = windowResize;
window.onload = windowResize;