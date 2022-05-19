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


    constructor() {
        super().loadImage('Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.Sharkie_Swim);

        this.animate(this.Sharkie_Swim);
    }

    animate(array) {

        setInterval(() => {
            if (this.world.keyboard.Right) {
                this.x += this.speed;
                this.otherDirection=false;
            }
            if (this.world.keyboard.Left) {
                this.x -= this.speed;
                this.otherDirection=true;
            }
            if (this.world.keyboard.Up){
                this.y -=this.speed;
            }
            if (this.world.keyboard.Down){
                this.y +=this.speed;
            }
            this.world.camera_x = -this.x;  //soweit wie der Fisch geschwommen ist, soll die Camera nach rechts verschoben werden

        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.Right || this.world.keyboard.Left) {
                let i = this.currentImage % array.length; //let i= 5 % 6 = 0 Rest 5; ganzzahliger Rest einer Division 
                //let i = 7 % 6; =>1, Rest 1!   i= 0, 1, 2, 3, 4, 5, 0
                let path = array[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }

        }, 1000 / 10); //wie schnell die Bilder ausgetauscht werden für die Animation => Flossenbewegung beim Schwimmen

    }



    slap() {


    }
}
