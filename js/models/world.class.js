

class World {

    character = new Character();
    enemies = [
        new Jellyfish(),
        new Jellyfish(),
        new Jellyfish(),
    ];
    bubbles = [
        new Bubble(),
        new Bubble(),

    ]
    backgroundObjects = [
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/3.Fondo 1/D.png', 0)
    ]

    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) //sonst würde der Hai mehrmals auftauchen, wenn er an einer anderen Stelle nochmal aufgerufen wird oder sich bewegen soll
        this.addObjectsToMap(this.backgroundObjects);
        this.addTomap(this.character);

        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.bubbles);
        

        let self = this;                     //this ist bei requestAnimationFrame nicht bekannt deswegen muss es vorher nochmal in die Varbiable geschmisen werden
        requestAnimationFrame(function () {          //ruft draw so oft auf wie die Grafikkarte es hergibt
            self.draw();
        });
    }

    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addTomap(o);
        })
    }

    addTomap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height)
    }

}


