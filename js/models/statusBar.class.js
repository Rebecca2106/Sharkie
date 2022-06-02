class Statusbar extends DrawableObject {

    height = 50;
    width = 150;
    x = 0;
    y = 0;
    img;
    type;


    constructor(x, y, type) {
        super();
        this.x = x;
        this.y = y;
        this.type = type;
        this.loadImage(`Alternative Grafiken - Sharkie/4. Marcadores/orange/0_${type}.png`);
    

    }

    CoinBar = [
        'Alternative Grafiken - Sharkie/4. Marcadores/orange/0_  copia Coinbar.png'
    ];

    LifeBar = [
        'Alternative Grafiken - Sharkie/4. Marcadores/orange/0_  Lifebar.png'

    ]

    PoisonBar = [
        'Alternative Grafiken - Sharkie/4. Marcadores/orange/0_ Poisonbar.png'
    ]

    percentage = 100;



}