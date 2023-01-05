const timerChange = (img) => {
    img.src = "DALLE_streamer.png"
}

const hover = (img) => {
    img.src = "Dalle_basketball.png"
    setTimeout(() => {
        timerChange(img)
    }, 2000)
}

