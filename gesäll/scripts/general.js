const windowResize = () => {
    let width = window.innerWidth;
    let nav = document.getElementById('navContainer')
    let dropdown = document.getElementById('dropdownMenu')
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