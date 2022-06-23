class Pufferfish extends MovableObject {
    height = 55;
    width = 80;
    img;
    otherDirection = false;
    damage = 5;
    puffered;
    offset = 5;
    energy = 10;
    dead = false;
    speedY =0.5;
    acceleration =-0.2;



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
        'Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png'
    ];

    Pufferfish_dead = ['Alternative Grafiken - Sharkie/2.Enemy/tot1.png',
        'Alternative Grafiken - Sharkie/2.Enemy/tot2.png',
        'Alternative Grafiken - Sharkie/2.Enemy/tot3.png',
    ];



    constructor(offset) {
        super().loadImage('Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png');
        this.loadImages(this.Pufferfish_Swim);
        this.loadImages(this.Pufferfish_Transition);
        this.loadImages(this.Pufferfish_dead);
        this.animate(this.Pufferfish_Swim);
        this.x = (Math.floor(Math.random() * 530)) + offset;
        this.y = (Math.floor(Math.random() * 450));
        this.speed = 0.3 + Math.random() * 2;

    }

  animateDead(){
    if (this.dead == true) {
        console.log('tot')
        this.playAnimationOnce(this.Pufferfish_dead);
        this.autoapplyGravity();
        this.automoveRight();

    }
  }


    animate() {
        setInterval(() => {
            if (!this.otherDirection && this.dead == false) {
                this.moveLeft();
                if (this.x < 30) {
                    this.otherDirection = true;
                }
            }
            if (this.otherDirection && this.dead == false) {
                this.moveRight();
                if (this.x > 1530) {
                    this.otherDirection = false;
                }

            }
        }, 1000 / 45);

        setInterval(() => {
      
            if (this.puffered == true && this.dead == false) {
                this.playAnimation(this.Pufferfish_Transition)
            }
            if (this.dead == false) {
                this.playAnimation(this.Pufferfish_Swim)
            }




        }, 1000 / 4);

    }

}