class Character extends MovableObject {

    height = 150;
    width = 150;
    x = 0;
    y = 200;
    img;
    speed = 5;
    otherDirection = false;
    offset =75;



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

        Sharkie_Idle = [
            'Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/1.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/2.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/3.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/4.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/5.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/6.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/7.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/8.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/9.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/10.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/11.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/12.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/13.png',
        ];

        Sharkie_Long_Idle =[
            'Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i1.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i2.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i3.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i4.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i5.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i6.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i7.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i8.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i9.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i10.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i11.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i12.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i13.png',
            'Alternative Grafiken - Sharkie/1.Sharkie/2.Long_IDLE/i14.png',
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

    ];

    Sharkie_Bubble_ATtack = [
        'Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png',
        
    ]

    world;
    currentImage = 0;
    ocean = new Audio('audio/ocean.mp3');
    hurt = new Audio('audio/hurt.mp3');
    snooze= new Audio('audio/snooze.mp3');
    hurt_electric = new Audio('audio/hurt_electric.mp3');


    constructor() {
        super().loadImage('Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.Sharkie_Swim);
        this.loadImages(this.Sharkie_Finslap);
        this.loadImages(this.Sharkie_isDead);
        this.loadImages(this.Sharkie_Idle);
        this.loadImages(this.Sharkie_Long_Idle);
        this.loadImages(this.Sharkie_hurt_poisened);
        this.loadImages(this.Sharkie_hurt_electric);
        this.animate();
    }

    isIdle() {
        let timePassed = new Date().getTime() - this.world.keyboard.lastMove;
        return timePassed > 2000;
    }

    isLongIdle() {
        let timePassed = new Date().getTime() - this.world.keyboard.lastMove;
        return timePassed > 5000;
    }

    collect(coin){
        if (coin instanceof Coins){
            this.specialcoin.play();
        }
        else{
            this.coin.play();
        }
        this.world.CoinBar.startvalue +=1/coin.value;
        let index=this.world.level.coins.indexOf(coin);
        this.world.level.coins.splice(index,1);
    
        
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

            if(this.world.keyboard.D){
                this.throw(this.x, this.y);
            }


            this.world.camera_x = -this.x + 120;  //soweit wie der Fisch geschwommen ist, soll die Camera nach rechts verschoben werden

        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.Sharkie_isDead);
            }


            else if (this.isHurt()) {
                if (this.collison_with == "jellyfish") {
                    this.hurt_electric.play();
                    this.playAnimation(this.Sharkie_hurt_electric)
                }
                if (this.collison_with == "pufferfish") {
                    this.hurt.play();
                    this.playAnimation(this.Sharkie_hurt_poisened)
                }
            }

            else if (this.world.keyboard.Right || this.world.keyboard.Left) {
                this.playAnimation(this.Sharkie_Swim);
            }
            else {
                if (this.world.keyboard.Space) {
                    this.playAnimationOnce(this.Sharkie_Finslap);
                }
            }

        }, 1000 / 10); //wie schnell die Bilder ausgetauscht werden für die Animation => Flossenbewegung beim Schwimmen

        setInterval(() => {
            this.snooze.pause();
          

            if (this.isIdle()){
                this.playAnimation(this.Sharkie_Idle);
            }

            if (this.isLongIdle()){
                this.playAnimation(this.Sharkie_Long_Idle)
                this.snooze.play();
            }

            


        }, 1000 / 5); //wie schnell die Bilder ausgetauscht werden für die Animation => Flossenbewegung beim Schwimmen
       
    }

    



    slap() {


    }
}
