var deltaTime = 0;
var previousTimeStamp = 0;
var body;

var Player;
var bullet;

document.addEventListener('DOMContentLoaded', () => {
    body = document.querySelector('body');
    console.log(window);
    
    Player = new PlayerClass();
    Player.start();
    bullet = new Bullet();
    bullet.start(1, 1);

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