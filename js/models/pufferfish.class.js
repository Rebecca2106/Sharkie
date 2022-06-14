class Pufferfish extends MovableObject {
    height = 55;
    width = 80;
    img;
    otherDirection = false;
    damage = 5;
    puffered;
    offset=0;
    


    Pufferfish_Swim = ['Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        'Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
        'Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
        'Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        'Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png'
    ];

    Pufferfish_Transition = ['Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png',
        'Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png',
        'Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png',
        'Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png',
        'Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png',
    ];

    constructor(offset) {
        super().loadImage('Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png');
        this.loadImages(this.Pufferfish_Swim);
        this.loadImages(this.Pufferfish_Transition);
        this.animate(this.Pufferfish_Swim)
        this.x = (Math.floor(Math.random() * 530)) + offset;
        this.y = (Math.floor(Math.random() * 450));
        this.speed = 0.3 + Math.random() * 2;

    }




    animate() {
        setInterval(() => {
            if (!this.otherDirection) {
                this.moveLeft();
                if (this.x < 30) {
                    this.otherDirection = true;
                }
            }
            if (this.otherDirection) {
                this.moveRight();
                if (this.x > 1530) {
                    this.otherDirection = false;
                }

            }
        }, 1000 / 45);

        setInterval(() => {
            if (this.puffered == true) {
                this.playAnimation(this.Pufferfish_Transition)
            }
            else {
                this.playAnimation(this.Pufferfish_Swim)
            }




        }, 1000 / 4);

    }

}