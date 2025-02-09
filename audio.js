function toggleAudio() {
    var audio = document.getElementById("AnchoredInGrace");
    var button = document.getElementById("playButton");

    if (audio.paused) {
        audio.play();
        button.innerHTML = 'Stop Anchored in Grace';
    } else {
        audio.pause();
        button.innerHTML = 'Play Anchored in Grace';
    }
}
