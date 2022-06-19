
class Jellyfish extends MovableObject {

    height = 45;
    width = 45;
    img;
    direction = true;
    directionX = true;
    middleX;
    movement= Math.random() *50;
    damage =10;
    offset=2;
    energy=15;

    Jellyfish_Swim = ['Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png'
    ];

    constructor(offset) {
        super().loadImage('Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png')
        this.x = (Math.floor(Math.random() * 530)) + offset;
        this.y = (Math.floor(Math.random() * 450));
        this.middleX = this.x; //Konstante um die ich herumschwimme
        this.moveUpDown();
        this.moveLeftRight();
        this.loadImages(this.Jellyfish_Swim);
        this.animate(this.Jellyfish_Swim);
        this.i = this.borderMovement;


    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.Jellyfish_Swim)

        }, 1000 / 4);

    }

    moveUpDown() {
        setInterval(() => {
            if (this.direction) {
                this.y -= 1;
                if (this.y < 30) {
                    this.direction = false;
                }
            }
            if (!this.direction) {
                this.y += 1;

                if (this.y > 430) {
                    this.direction = true;
                }

            }
        }

            , 1000 / 50);
    }



    moveLeftRight() {

        setInterval(() => {
            if (this.directionX) {
                this.x -= 1;
                if (this.x <this.middleX - this.movement) {
                    this.directionX = false;
                }
            }
            if (!this.directionX) {
                this.x += 1;

                if (this.x >this.middleX + this.movement) {
                    this.directionX = true;
                }

            }
        }

            , 1000 / 50);
    }


    


}


