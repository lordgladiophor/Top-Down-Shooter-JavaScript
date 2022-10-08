var deltaTime = 0;
var previousTimeStamp = 0;

var Player;

document.addEventListener('DOMContentLoaded', () => {

    
    Player = new PlayerClass();

    window.requestAnimationFrame(mainloop);
});


function mainloop(timestamp) {
    calculateDeltaTIme(timestamp);
    window.requestAnimationFrame(mainloop);
}


function calculateDeltaTIme(timestamp) {
    deltaTime = (timestamp - previousTimeStamp) / 1000;
    previousTimeStamp = timestamp;
}