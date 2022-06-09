class special_coin extends MovableObject {


    height = 30;
    width = 30;
    speedY = 0;
    acceleration = 0.2;
    randomDirection = Math.random() < 0.5;

    falling_Coin = [
        'Alternative Grafiken - Sharkie/4. Marcadores/2.coins/1.png',
        'Alternative Grafiken - Sharkie/4. Marcadores/2.coins/2.png',
        'Alternative Grafiken - Sharkie/4. Marcadores/2.coins/3.png',
        'Alternative Grafiken - Sharkie/4. Marcadores/2.coins/4.png',
        'Alternative Grafiken - Sharkie/4. Marcadores/2.coins/5.png',
        'Alternative Grafiken - Sharkie/4. Marcadores/2.coins/6.png',
    ]

    constructor(start) {
        super().loadImage(this.falling_Coin[0]);
        this.start=start;
        this.x = start+(Math.floor(Math.random() * 500)) + 150;
        this.loadImages(this.falling_Coin);
        this.animate(this.falling_Coin);
        this.applyGravityCoin(this.randomDirection);
   


    }


    applyGravityCoin() {
        if (this.randomDirection == true) {
            setInterval(() => {
                if (this.y < 400) {
                    this.y -= this.speedY;
                    this.speedY -= this.acceleration;
                }
            }, 1000 / 25)
        }
        else {
            setInterval(() => {
                if (this.direction) {
                    this.y -= 2;
                    if (this.y < 30) {
                        this.direction = false;
                    }
                }
                if (!this.direction) {
                    this.y += 2;
    
                    if (this.y > 430) {
                        this.direction = true;
                    }
    
                }
            }
    
                , 1000 / 50);
        }
    }


    animate() {

        setInterval(() => {
            this.playAnimation(this.falling_Coin)

        }, 1000 / 4);

    }




}