let num = 1;
let num1 = 2;

const sendRequest = () => {
    //Create new XMLHttpRequest 
    const XHR = new XMLHttpRequest();
    // Define what happens on successful data submission
    XHR.addEventListener("load", (event) => {
        document.getElementById("answer").innerText = `The answer from the server of:  ${num} + ${num1} = ${event.target.response}`
        num *= 2;
        num1 *= 2;
    });

    // Define what happens in case of error
    XHR.addEventListener("error", () => {
        alert('Oops! Something went wrong.');
    });

    // Set up our request
    XHR.open("GET", `https://people.dsv.su.se/~pierre/i/05_ass/ip3/3/3.4/3.4.3/example.php?number1=${num}&number2=${num1}`);

    // The data is sent
    XHR.send();
}