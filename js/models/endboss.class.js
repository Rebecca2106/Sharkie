class Endboss extends MovableObject {

    height = 300;
    width = 300;
    y = 0;
    x;
    i = 0;



    Endboss_Intro = [
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/10.png',


    ];

    Endboss_Swim = [
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/1.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/2.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/3.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/4.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/5.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/6.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/7.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/8.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/9.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/10.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/11.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/12.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/13.png'
    ];

    Endboss_Attack = [
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Attack/1.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Attack/2.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Attack/3.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Attack/4.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Attack/5.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Attack/6.png',

    ]

    intro = new Audio('audio/Intro.mp3');



    constructor() {
        super().loadImage(this.Endboss_Intro[0]);
        this.loadImages(this.Endboss_Intro);
        this.loadImages(this.Endboss_Swim);
        this.loadImages(this.Endboss_Attack);
        this.x = 1500;


    }

    endboss_angry = false;
    introduced = false;

    animate() {
        setInterval(() => {
            if (this.introduced == true && this.endboss_angry == true) {
                this.playAnimation(this.Endboss_Attack);

            }

            if (this.i < 10) {
                this.playAnimation(this.Endboss_Intro);
                this.intro.play();
            }

            else {
                this.playAnimation(this.Endboss_Swim)
            }
            this.i++;

        }, 1000 / 4);

    }

    applyGravity() {
        setInterval(() => {
            if (this.y < 400) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)

    }

}