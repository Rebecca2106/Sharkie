class Endboss extends MovableObject {

    height = 300;
    width = 300;
    y = 0;
    x;
    i = 0;
    lastAngry = 0;
    speed = 1;
    otherDirection = false;
    energy = 50;
    offset = 100;
    damage = 30;
    isHit = false;
    dead = false;
    speedY = 0.5;
    acceleration = -0.2;




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

    ];

    Endboss_hurt = [
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Hurt/1.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Hurt/2.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Hurt/3.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Hurt/4.png',
    ];

    Endboss_dead = [
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',
    ];

    intro = new Audio('audio/Intro.mp3');
    win = new Audio('audio/gewonnen.mp3');



    constructor() {
        super().loadImage(this.Endboss_Intro[0]);
        this.loadImages(this.Endboss_Intro);
        this.loadImages(this.Endboss_Swim);
        this.loadImages(this.Endboss_Attack);
        this.loadImages(this.Endboss_hurt);
        this.loadImages(this.Endboss_dead);
        this.x = 1500;


    }

    introduced = false;
    angry = false;


    animate() {
        this.speed = 0;
        // console.log(this.speed);
        // console.log(this.angry);
        if (this.i < 10) {
            this.playAnimation(this.Endboss_Intro);
            if (soundOn){
            this.intro.volume = 0.2;
            this.intro.play();
          
            }

        }

        if (this.i >= 10 && this.angry == true && this.isHit == false && this.dead == false) {
            this.playAnimationOnce(this.Endboss_Attack);
            if (Math.random() < 0.4 && this.x > 200) {
                this.speed = 2;
                this.moveAutoLeft();
            }
            if (this.x < 200) {
                this.otherDirection = true;
            }
        }

        if (this.i >= 10 && this.isHit == true && this.dead == false) {
            this.playAnimation(this.Endboss_hurt)
        }



        if (this.i >= 10 && this.angry == false && this.isHit == false && this.dead == false) {
            this.playAnimation(this.Endboss_Swim);

        }

        if (this.i >= 10 && this.angry == false && this.isHit == false && this.dead == true) {
            this.playAnimation(this.Endboss_dead);
            if (soundOn){
                this.win.volume =0.2;
            this.win.play();}
            this.autoapplyGravity();

            setTimeout(() => {
                console.log('stop');
                (function (w) { w = w || window; var i = w.setInterval(function () { }, 100000); while (i >= 0) { w.clearInterval(i--); } })(/*window*/);
                showWinScreen();


            }, 2000)

        }
        this.i++;

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