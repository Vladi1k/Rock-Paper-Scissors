function startBtn() {
    const startScreen = document.querySelector(".start-screen");
    const playScreen = document.querySelector(".play-screen");

    startScreen.style.display = "none";

    setTimeout(() => {
        playScreen.classList.add('show');
    }, 100);
}
