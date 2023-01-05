$("#toggleFadeButton").click(() => {
    $("#block").fadeToggle("slow")
})

$("#fadeInButton").click(() => {
    $("#block").fadeIn("slow")
})

$("#fadeOutButton").click(() => {
    $("#block").fadeOut("slow")
})

$("#fadeToButton").click(() => {
    $("#block").fadeTo("slow", 0.5)
})

$("#showButton").click(() => {
    $("#block").show()
})

$("#hideButton").click(() => {
    $("#block").hide()
})

$("#toggleButton").click(() => {
    $("#block").toggle()
})

$("#animateButton").click(() => {
    $("#block").animate({
        width: "250px",
        height: "200px",
    }, 3000, "linear", () => {
        const h2 = document.createElement("h2")
        h2.textContent = "Animated!"
        $("#block").append(h2);
    })
})