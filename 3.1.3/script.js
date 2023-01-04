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

const windowResize = () => {
  let h2Element = document.getElementById("h2Id")
  if (h2Element === null) {
    let h2 = document.createElement("h2")
    h2.textContent = "You have resized the window"
    h2.setAttribute("id", "h2Id")
    document.getElementById("h2Resize").appendChild(h2)
  } else {
    h2Element.textContent = "You have resized the window"
  }
}

window.onresize = windowResize;

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

const interval = setInterval(() => { setIntervalValue() }, 3500)

const stopInterval = () => {
  clearInterval()
  heading.innerHTML = "Restart Initiated"
  num = 10
}

const nameInput = document.getElementById('nameInput')
const setInputAttribute = () => {
  nameInput.setAttribute("placeholder", "")
}
nameInput.addEventListener("click", setInputAttribute)

const removeListener = (e) => {
  if (nameInput.attributes.placeholder.value !== "Name") {
    nameInput.setAttribute("placeholder", "Name")
  }
  nameInput.removeEventListener("click", setInputAttribute)
  e.preventDefault()
}
const removeListenerButton = document.getElementById('removeButton')
removeListenerButton.addEventListener('click', removeListener)



document.addEventListener("mouseover", e => {
  if (e.target.id === "h2Id") {
    e.target.textContent = "You are mousing over me!"
  }
})

document.addEventListener("mouseout", e => {
  let h2Content = document.getElementById("h2Id")
  if (e.target.id !== "h2Id" && h2Content !== null && 
  h2Content.textContent === "You are mousing over me!") {
    h2Content.textContent = "You stopped mousing over me!"
  }
})

let passwordInput = document.getElementById("passwordInput")
passwordInput.addEventListener('focus', e => {
  e.target.style.background = 'pink'
})
passwordInput.addEventListener('blur', e => {
  e.target.style.background = ''
})

document.addEventListener('keypress', e => {
  if (e.key === "Enter") {
    document.getElementById('enterH2').innerText = "You pressed enter!"
  }
})













