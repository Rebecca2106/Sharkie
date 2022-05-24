class Character extends MovableObject {

    height = 150;
    width = 150;
    x = 0;
    y = 200;
    img;
    speed = 5;
    otherDirection=false;


    Sharkie_Swim = ['Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/1.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/2.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/3.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/4.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/5.png',
        'Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/6.png'
    ];
    world;
    currentImage = 0;
    ocean = new Audio('audio/ocean.mp3');


    constructor() {
        super().loadImage('Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.Sharkie_Swim);
        this.animate(this.Sharkie_Swim);
    }

    animate(array) {

        setInterval(() => {
            this.ocean.pause();
            if (this.world.keyboard.Right && this.x <this.world.level.level_end_x) {
                this.x += this.speed;
                this.ocean.play();
                this.otherDirection=false;
            }
            if (this.world.keyboard.Left && this.x >0) {
                this.x -= this.speed;
                this.ocean.play();
                this.otherDirection=true;
            }
            if (this.world.keyboard.Up && this.y >-80){
                this.y -=this.speed;
                this.ocean.play();

                
            }
            if (this.world.keyboard.Down && this.y <380){
                this.y +=this.speed;
                this.ocean.play();

            }
            this.world.camera_x = -this.x + 100;  //soweit wie der Fisch geschwommen ist, soll die Camera nach rechts verschoben werden

        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.Right || this.world.keyboard.Left) {

                this.playAnimation(this.Sharkie_Swim);}
        

        }, 1000 / 10); //wie schnell die Bilder ausgetauscht werden für die Animation => Flossenbewegung beim Schwimmen

    }



    slap() {


    }
}
