class Character extends MovableObject {

    height = 150;
    width = 150;
    x = 0;
    y = 200;
    img;
    speed = 5;
    otherDirection = false;



    Sharkie_Swim =
        [
            'Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/1.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/2.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/3.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/4.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/5.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/6.png'
        ];
    Sharkie_Finslap =
        [
            'Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/1.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/2.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/3.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/4.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/5.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/6.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/7.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/8.png',

        ];

    Sharkie_isDead = [
        'Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/1.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/2.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/3.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/4.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/5.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/6.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/7.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/8.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/9.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/10.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/11.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/12.png',
    ];

    Sharkie_hurt_poisened = [
        'Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/1.Poisoned/5.png',
    ];

    Sharkie_hurt_electric = [
        'Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/2.Electric shock/3.png',

    ]

    world;
    currentImage = 0;
    ocean = new Audio('audio/ocean.mp3');


    constructor() {
        super().loadImage('Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.Sharkie_Swim);
        this.loadImages(this.Sharkie_Finslap);
        this.loadImages(this.Sharkie_isDead);
        this.loadImages(this.Sharkie_hurt_poisened);
        this.loadImages(this.Sharkie_hurt_electric);
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.ocean.pause();
            if (this.world.keyboard.Right && this.x < this.world.level.level_end_x) {
                this.otherDirection = false;
                this.moveRight();
                this.ocean.play();
            }

            if (this.world.keyboard.Left && this.x > 0) {
                this.otherDirection = true;
                this.moveLeft();
                this.ocean.play();
            }
            if (this.world.keyboard.Up && this.y > -80) {
                this.y -= this.speed;
                this.ocean.play();
            }


            if (this.world.keyboard.Down && this.y < 380) {
                this.y += this.speed;
                this.ocean.play();

            }
            this.world.camera_x = -this.x + 100;  //soweit wie der Fisch geschwommen ist, soll die Camera nach rechts verschoben werden

        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead()){
                this.playAnimation(this.Sharkie_isDead)
            }

            if (this.world.keyboard.Right || this.world.keyboard.Left) {
                    this.playAnimation(this.Sharkie_Swim);
                }
            if (this.world.keyboard.Space) {
                this.playAnimationOnce(this.Sharkie_Finslap);
            }


        }, 1000 / 10); //wie schnell die Bilder ausgetauscht werden für die Animation => Flossenbewegung beim Schwimmen

    }



    slap() {


    }
}
