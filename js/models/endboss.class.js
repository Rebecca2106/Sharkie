class Endboss extends MovableObject{



    Endboss_Intro =[
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
        'Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];


        constructor() {
            super().loadImage(this.Endboss_Intro[0]);
            this.loadImages(this.Endboss_Intro);
            this.animate(this.Endboss_Intro);
            this.x = 300;
            this.y = 220;
        }

        animate() {
            setInterval(() => {
                this.playAnimation(this.Endboss_Intro)
    
            }, 1000 / 4);
    
        }

}