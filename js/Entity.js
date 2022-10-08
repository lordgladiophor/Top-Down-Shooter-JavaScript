class Entity {
    #docElement;
    posX = 0;
    posY = 0;
    speed = 1;

    constructor(docElementID) {
        this.#docElement = document.getElementById(docElementID);
        window.requestAnimationFrame(this.#staticLoop);
    }

    #staticLoop = () => {
        this.loop();
        window.requestAnimationFrame(this.#staticLoop);
    }
    
    // Sobreescribir
    loop = () => {
    }
    
    move = (x, y) => {
        this.posX += x * this.speed * deltaTime;
        this.posY += y * this.speed * deltaTime;
        this.posX = Math.round(this.posX);
        this.posY = Math.round(this.posY);

        this.#docElement.style.transform = `translate(${this.posX}px, ${this.posY}px)`;
    }
}