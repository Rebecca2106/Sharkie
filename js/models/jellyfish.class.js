let i = 0;
class Jellyfish extends MovableObject {

    height = 45;
    width = 45;
    img;

    Jellyfish_Swim = ['Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
    'Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
    'Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
    'Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png'
];

    constructor() {
        super().loadImage('Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png')
        this.x = (Math.floor(Math.random() * 530)) + 150;
        this.y = (Math.floor(Math.random() * 450));
        this.move();
        this.loadImages(this.Jellyfish_Swim);
        this.animate(this.Jellyfish_Swim);


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
            this.y -= 1.5;
            if (i < 50) { 
                this.x += 0.25; }

        }, 1000 / 50);
    }
}


