class Poison extends MovableObject{

    width =50;
    height =50;





    Poision_bottle = [
        'Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/1.png',
        'Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/2.png',
        'Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/3.png',
        'Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/4.png',
        'Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/5.png',
        'Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/6.png',
        'Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/7.png',
        'Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/8.png',

    ]


    constructor(x,y){
    super().loadImage('Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/1.png');
    this.loadImages(this.Poision_bottle);
    this.x =x;
    this.y =y;
    this.animate(this.Poision_bottle)
    }



    
    animate() {

        setInterval(() => {
            this.playAnimation(this.Poision_bottle)

        }, 1000 / 4);

    }

}