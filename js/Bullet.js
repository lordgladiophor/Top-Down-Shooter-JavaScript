class Bullet extends Entity {
    directionX;
    directionY;
    constructor() {
        super('pepe');
        this.docElement.classList.add('bullet');
        this.speed = 200;
    }

    start = (startX, startY, directionX, directionY) => {
        this.staticStart();
        this.posX = startX;
        this.posY = startY;
        this.directionX = directionX;
        this.directionY = directionY;
        setTimeout(this.free, 1000);
    }

    loop = () => {
        console.log(this.directionX);
        this.move(this.directionX, this.directionY);
    }
}