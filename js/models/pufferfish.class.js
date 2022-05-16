class Pufferfish extends MovableObject {
    height = 55;
    width = 80;
    img;

    Pufferfish_Swim = ['Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        'Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
        'Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
        'Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        'Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png'
    ];

    constructor() {
        super().loadImage('Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png')
        this.x = (Math.floor(Math.random() * 530)) + 150;
        this.y = (Math.floor(Math.random() * 450));
        this.loadImages(this.Pufferfish_Swim);
        this.animate(this.Pufferfish_Swim);
        this.move();
    }



animate(array) {
    setInterval(() => {
        let i= this.currentImage % array.length; //let i= 5 % 6 = 0 Rest 5; ganzzahliger Rest einer Division 
        //let i = 7 % 6; =>1, Rest 1!   i= 0, 1, 2, 3, 4, 5, 0
        let path = array[i];
        this.img = this.imageCache[path];
        this.currentImage++;

    }, 1000/4);

}



    move() {
        setInterval(() => {
            this.x -= 1;
        }, 1000 / 30);


    }
}