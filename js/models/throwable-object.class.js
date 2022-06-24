class throwable_object extends MovableObject {


    speed = 8;
    speedY;
    acceleration;
    height = 35;
    width = 35;
    i = 0;
    poisoned = false;
    damage = 5;



    constructor(type, x, y, otherDirection) {
        super();
        this.loadImage(`Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/${type}.png`);
        if (!otherDirection) {
            this.x = x;
        }
        if (otherDirection) {
            this.x = x - 120;
        }
        this.y = y;
        if (type == "PoisonedBubble") {
            this.poisoned = true;
            this.damage = 10;
        };
        this.throw();
        this.acceleration = -0.00003;
        this.otherDirection = otherDirection
    }

    throw() {
        this.speedY = 1;
        setInterval(() => {
            if (!this.otherDirection) {
         
                this.moveRight();
                this.applyGravity();
             
            }

            else {
        
                this.moveLeft();
                this.applyGravity();
                
            }


        }, 1000 / 25);
    }
}






