

class World {

    character = new Character();

    bubbles = [
        new Bubble(),
        new Bubble(),
        new Bubble(),
        new Bubble(),
    ]

    pufferfishes =[
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish()
    ]

    enemies = [
        new Jellyfish(),
        new Jellyfish(),
        new Jellyfish(),
    ];
    backgroundObjects = [
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/5. Water/L.png', 0,0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/3.Fondo 1/L2.png', 0,0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/4.Fondo 2/L1.png', 0,0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/2. Floor/L2.png', 0,0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/5. Water/L.png', 720,0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/3.Fondo 1/L2.png', 720,0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/4.Fondo 2/L2.png', 720,0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/2. Floor/L.png', 720,0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Barrier/3.png', 720,-350),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Barrier/4.png', 20,-350),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/5. Water/L.png', 1440,0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/3.Fondo 1/L.png', 1440,0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/4.Fondo 2/L1.png', 1440,0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/2. Floor/L1.png', 1440,0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/1. Light/1.png', 1440,0),
    ]

    canvas;
    ctx;
    keyboard;
    camera_x=0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard=keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld(){
        this.character.world = this;     //damit wir auf die Varaiblen der Welt auch zugreifen
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) //sonst würde der Hai mehrmals auftauchen, wenn er an einer anderen Stelle nochmal aufgerufen wird oder sich bewegen soll
        this.ctx.translate(this.camera_x,0) // verschiebung von der x und y-achse
        this.addObjectsToMap(this.backgroundObjects)
        this.addObjectsToMap(this.bubbles);
        this.addObjectsToMap(this.pufferfishes);
        this.addTomap(this.character);
        this.addObjectsToMap(this.enemies);
        this.ctx.translate(-this.camera_x,0)
  
        

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
        if (mo.otherDirection){
            this.ctx.save();
            this.ctx.translate(mo.width , 0); //sonst springt er um die breite vor/zurück im canvas
            this.ctx.scale(-1,1);
            mo.x = mo.x*-1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height)

        if (mo.otherDirection){
            mo.x =mo.x *-1;
            this.ctx.restore();
        }
     
    

    }

}


