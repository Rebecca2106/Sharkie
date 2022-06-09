class throwable_object extends MovableObject {


    speed = 5;
    speedY;
    acceleration;
    height = 35;
    width = 35;
    i=0;


    constructor() {
        super().loadImage('Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = 100;
        this.y = 400;
        this.throw(100, 400);
        this.speedY=2;
        this.acceleration=-0.00003;
    }

    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 10;
        setInterval(() => {
            this.i++;
            this.moveRight();
            if(this.i>35){
                this.applyGravity();
            }
            
        }, 1000 / 25);
    }

}






