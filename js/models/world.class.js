

class World {

    character = new Character();
    level = level1;
    bubbles = level1.bubbles;
    pufferfishes = level1.pufferfishes;
    enemies = level1.enemies;
    backgroundObjects= level1.backgroundObjects;

    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;     //damit wir auf die Varaiblen der Welt auch zugreifen
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) //sonst würde der Hai mehrmals auftauchen, wenn er an einer anderen Stelle nochmal aufgerufen wird oder sich bewegen soll
        this.ctx.translate(this.camera_x, 0) // verschiebung von der x und y-achse
        this.addObjectsToMap(this.level.backgroundObjects)
        this.addObjectsToMap(this.level.bubbles);
        this.addObjectsToMap(this.level.pufferfishes);
        this.addTomap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.ctx.translate(-this.camera_x, 0)



        let self = this;                     //this ist bei requestAnimationFrame nicht bekannt deswegen muss es vorher nochmal in die Varbiable geschmisen werden
        requestAnimationFrame(function () {          //ruft draw so oft auf wie die Grafikkarte es hergibt
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addTomap(o);
        })
    }

    addTomap(mo) {
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0); //sonst springt er um die breite vor/zurück im canvas
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height)

        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }



    }

}


