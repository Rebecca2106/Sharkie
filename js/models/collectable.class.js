class Coins extends MovableObject {

    width =30;
    height =30;
    speed =20;




    CoinRotate = [
        'Alternative Grafiken - Sharkie/4. Marcadores/2.coins/star coin rotate 1.png',
        'Alternative Grafiken - Sharkie/4. Marcadores/2.coins/star coin rotate 2.png',
        'Alternative Grafiken - Sharkie/4. Marcadores/2.coins/star coin rotate 3.png',
        'Alternative Grafiken - Sharkie/4. Marcadores/2.coins/star coin rotate 4.png',
        'Alternative Grafiken - Sharkie/4. Marcadores/2.coins/star coin rotate 5.png',
        'Alternative Grafiken - Sharkie/4. Marcadores/2.coins/star coin rotate 6.png',
    ]
    
    constructor(x,y) {
        super().loadImage(this.CoinRotate[0]);
        this.x = x;
        this.y =y;
        this.loadImages(this.CoinRotate);
        this.animate(this.CoinRotate);
  
     
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.CoinRotate)

        }, 1000 / 6);

    }

}