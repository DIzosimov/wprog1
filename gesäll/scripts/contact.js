const createSquare = () => {
    let doc = document.getElementById("svgContainer");
    let svg = document.getElementById("svg");
    svg.data = "assets/square.svg"
    svg.width = "800px";
    svg.height = "750px";
    doc.append(svg);

}

createSquare()

/* document.onload = setTimeout(() => {
    createSquare();
}, 2000); */