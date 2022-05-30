class Pufferfish extends MovableObject {
    height = 55;
    width = 80;
    img;
    otherDirection = false;


    Pufferfish_Swim = ['Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        'Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
        'Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
        'Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        'Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png'
    ];

    constructor() {
        super().loadImage('Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png');
        this.loadImages(this.Pufferfish_Swim);
        this.animate(this.Pufferfish_Swim);
        this.x = (Math.floor(Math.random() * 530)) + 150;
        this.y = (Math.floor(Math.random() * 450));
        this.speed =0.3 + Math.random()*2;

    }



animate() {
    setInterval(() => {
        if (!this.otherDirection){
            this.moveLeft();
            if(this.x <30){
                this.otherDirection=true;
            }
        }
        if (this.otherDirection) {
            this.moveRight();
            if (this.x > 1530) {
                this.otherDirection=false;
            }

        }
    }, 1000/45);
  
    setInterval(() => {
      this.playAnimation(this.Pufferfish_Swim)

    }, 1000/4);

}

}