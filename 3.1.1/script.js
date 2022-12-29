// Array
var array, strArr = [];
const addToArray = () => {
  var str = document.getElementById("arrInput").value
  array.push(str)
  showArray()
}

const showArray = () => {
  // Clears arrayResult display on webpage
  document.getElementById("arrayResult").innerHTML = ""

  // Creates new list item elements for each element in the array
  array.forEach(val => {
    var li = document.createElement("li")
    li.textContent = val
    document.getElementById("arrayResult").appendChild(li)
  });
}

//clears array and display
const emptyArray = () => {
  array = []
  showArray()
}

// Boolean check if inputed value is an integer
const checkIfNumber = (n) => {
  let int = Number.parseInt(n)
  document.getElementById("boolAnswer").innerHTML = Boolean(Number.isInteger(int))
}



// Date, displays yesterday's date in localeString format
const displayYesterday = () => {
  let today = new Date()
  let yesterday = new Date(today.getTime())
  yesterday.setDate(yesterday.getDate()-1)
  document.getElementById("date").innerHTML = yesterday.toLocaleString()
}

// Math, generates random integer between 1 and given number
const showRandomNumber = (int) => {
  document.getElementById("randomNumber").innerHTML = "Randomly generated number: " + Math.floor(Math.random() * int)
}

// Number, converts a given string to a number  
const stringToNumber = (str) => {
  document.getElementById("numberResult").innerHTML = "Converted number: " + Number(str)
}

//Add string to string array
const addStringToArr = (str) => {
  strArr = []
  let splitStr = str.split(" ")
  splitStr.forEach(val => {
    strArr.push(val)
  })
  document.getElementById("stringResult").innerHTML = "String has been added"
}

//shuffles words in strArr
const shuffleStrArr = () => {
  strArr.sort(() => {
    return Math.random() - 0.5
  })
  document.getElementById("stringResult").innerHTML = "String has been shuffled"
}

//Displays strArr as string regardless of shuffle
const showNewString = () => {
  document.getElementById("stringResult").innerHTML = "Shuffled sentence: " + strArr.join(' ')
}

// RegExp checks formatting of date string and 
//returns boolean if formatted correctly or not
const checkDateFormat = () => {
  var str = document.getElementById("dateInput").value;
  let regEx = /^\d{4}-\d{2}-\d{2}$/;
  document.getElementById("dateResult").innerHTML = regEx.test(str);
}