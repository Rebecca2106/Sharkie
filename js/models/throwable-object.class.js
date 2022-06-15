class throwable_object extends MovableObject {


    speed = 5;
    speedY;
    acceleration;
    height = 35;
    width = 35;
    i = 0;
    poisoned = false;


    constructor(type, x, y) {
        super();
        this.loadImage(`Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/${type}.png`);
        this.x = x;
        this.y = y;
        if (type == "PoisonedBubble") {
            this.poisoned = true;
        };
        this.throw();
        this.speedY = 2;
        this.acceleration = -0.00003;
    }

    throw() {
        this.speedY = 10;
        setInterval(() => {
            this.i++;
            this.moveRight();
            if (this.i > 35) {
                this.applyGravity();
            }

        }, 1000 / 25);
    }
}






