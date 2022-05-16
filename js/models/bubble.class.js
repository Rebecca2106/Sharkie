class Bubble extends MovableObject {

    height = 20;
    width = 20;
    speed= 1;


    constructor() {
        super().loadImage('Alternative Grafiken - Sharkie/3. Background/circle-g798a525da_640.png')
        this.x = (Math.floor(Math.random() * 540)) + 150;
        this.y = (Math.floor(Math.random() * 440));
        this.animate();


    }
    animate() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000/50);
    }
}
