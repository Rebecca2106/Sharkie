class Bubble extends MovableObject {

    height = 15;
    width = 15;
    



    constructor() {
        super().loadImage('Alternative Grafiken - Sharkie/3. Background/circle-g798a525da_640.png')
        this.x = (Math.floor(Math.random() * 540)) + 1000;
        this.y = (Math.floor(Math.random() * 440));
        this.speed=2;
        this.animate();

    }

    animate() {
        this.moveAutoLeft();
       
    }
}
