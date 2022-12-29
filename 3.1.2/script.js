const nameCheck = (str) => {
  if (str === "") {
    alert("Please input a string")
  } else {
    if (confirm("Are you sure " + str + " is your name?")) {
      if (prompt("Welcome, please type in the secret code") === "wprog") {
        alert("You are the chosen one!")
      } else {
        alert("Sorry you're not the chosen one!")
      }
    }
  }
}

let windowObjectReference = null; // global variable
function openRequestedTab(url, windowName) {
  const timeOut = setTimeout(() => {
    windowObjectReference.close()
  }, 5000)
  if (windowObjectReference === null || windowObjectReference.closed) {
    windowObjectReference = window.open(url, windowName);
    clearTimeout(timeOut)
  } else {
    alert("Chosen window will shut down in 5 seconds")
  }
}

const openButton = document.getElementById('addButton')
openButton.addEventListener("click", (e) => {
  openRequestedTab(document.getElementById('urlInput').value, "chromeWindow")
  e.preventDefault()
}, false)

const heading = document.getElementById('heading')
let num = 10
const setIntervalValue = () => {
  if (num > 0) {
    num--
    heading.innerHTML = "Countdown: " + num
  } else {
    heading.innerHTML = "Explosion!"
  }
}

const interval = setInterval(() => {setIntervalValue()}, 3500)

const stopInterval = () => {
  clearInterval()
  heading.innerHTML = "Restart Initiated"
  num = 10
}




