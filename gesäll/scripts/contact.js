const form = document.getElementById("contactForm")


const windowResize = () => {
    let width = window.innerWidth;
    let nav = document.getElementById('navContainer')
    let dropdown = document.getElementById('dropdownMenu')
    let rect = document.getElementsByTagName("rect");
    let form = document.getElementById("contactForm");
    if (width < 768) {
        nav.style.display = "none"
        dropdown.style.display = "block"
    }
    if (width < 520 && width > 420) {
        rect[0].style.height = "115%";
        form.style.top = "31.5vh";
    } else if (width < 420) {
        rect[0].style.height = "125%";
        form.style.top = "32.5vh";
    } else {
        rect[0].style.height = "90%";
        form.style.top = "22.5vh";
    }
    if (nav.style.display !== "flex" && width >= 768) {
        document.getElementById('navContainer').style.display = "flex"
        dropdown.style.display = "none"
    }
}

window.onresize = windowResize
window.onload = windowResize