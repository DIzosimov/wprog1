const windowResize = () => {
    let width = document.body.clientWidth;
    let nav = document.getElementById('navContainer')
    let dropdown = document.getElementById('dropdownMenu')
    console.log(width)
    console.log(document.body.clientWidth)
    if (width < 768) {
        nav.style.display = "none"
        dropdown.style.display = "block"
    }
    else {
        document.getElementById('navContainer').style.display = "flex"
        dropdown.style.display = "none"
    }
}

window.onresize = windowResize
window.onload = windowResize