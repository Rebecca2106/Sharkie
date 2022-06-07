

class World {

    character = new Character();
    level = level1;
    bubbles = level1.bubbles;
    coins = level1.coins;
    // pufferfishes = level1.pufferfishes;
    enemies = level1.enemies;
    endboss = level1.endboss;
    backgroundObjects = level1.backgroundObjects;
    CoinBar= new Statusbar('coin',0);
    PoisonBar= new Statusbar('poison',0);
    LifeBar= new Statusbar('life',1);
    // LifeBar= new Statusbar(-100,60,'Lifebar',150);
    // PoisonBar = new Statusbar(-100,35,'poison',50);
    


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
        this.checkdistance();
        this.checkCollisions();
    }

    setWorld() {
        this.character.world = this;     //damit wir auf die Varaiblen der Welt auch zugreifen
    }

    checkdistance(){
        setInterval(() => {
            this.level.enemies.forEach((enemie) =>{
                if (this.character.isNextto(enemie)){
                    console.log('Next to', enemie)
                    
                    
                }
            })

        },1000);
    }

    checkCollisions(){
        setInterval(() => {
            this.level.enemies.forEach((enemie) =>{
                if (this.character.isColliding(enemie)){
                    // console.log('Collision with Caracter', enemie)
                    this.character.loseEnergy(enemie);
                    console.log(this.character.energy)
                    if (this.character.isDead()){
                        this.character.playAnimation(this.character.Sharkie_isDead)
                    }
                }
            })

        },1000);
        // setInterval(() => {
        //     this.level.pufferfishes.forEach((pufferfish) =>{
        //         if (this.character.isColliding(pufferfish)){
        //             console.log('Collision with Caracter', pufferfish)
        //             this.character.loseEnergy(pufferfish);
        //             console.log(this.character.energy)
        //             if (this.character.isDead()){
        //                 this.character.playAnimation(this.character.Sharkie_isDead)

        //             }
        //         }

        //     })

        // },1000)
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) //sonst würde der Hai mehrmals auftauchen, wenn er an einer anderen Stelle nochmal aufgerufen wird oder sich bewegen soll
        this.ctx.translate(this.camera_x, 0) // verschiebung von der x und y-achse
        this.addObjectsToMap(this.level.backgroundObjects)
        this.addObjectsToMap(this.level.bubbles);
        this.addObjectsToMap(this.level.coins);
        // this.addObjectsToMap(this.level.pufferfishes);
        this.addObjectsToMap(this.level.endboss);
        this.addTomap(this.character);
        // this.addTomap(this.CoinBar);
        // this.addTomap(this.LifeBar);
        // this.addTomap(this.PoisonBar);
        // this.addTomap(this.FullBar);
        this.addObjectsToMap(this.level.enemies);
        this.ctx.translate(-this.camera_x, 0);
        this.drawAllBars();



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
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);


        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    drawAllBars(){
        this.drawStatusbar(this.LifeBar, 0, 0, '');
        this.drawStatusbar(this.CoinBar, 400, 0, '');
        this.drawStatusbar(this.PoisonBar, 200, 0, '');




    }

    drawStatusbar(object, x_position, y_position, txt ){ //txt wofür?
        this.ctx.drawImage(object.emptybar, x_position, 8, object.bar_size, object.bar_size * object.emptybar.height / object.emptybar.width);
        this.ctx.drawImage(object.fullbar, 120 + ((object.fullbar.width - 120) * (1 - object.startvalue)), 0, object.fullbar.width, object.fullbar.height, 120 * (object.bar_size / object.fullbar.width) + x_position, 8, object.bar_size, object.bar_size * object.fullbar.height / object.fullbar.width);
        // this.ctx.drawImage(object, x_position, y_position, object.icon_size,1);
    
    }

    flipImage(mo){
        this.ctx.save();
        this.ctx.translate(mo.width, 0); //sonst springt er um die breite vor/zurück im canvas
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo){
        mo.x = mo.x * -1;
        this.ctx.restore();
    }



}


