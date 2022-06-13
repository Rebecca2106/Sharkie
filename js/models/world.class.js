

class World {

    character = new Character();
    level = level1;
    bubbles = level1.bubbles;
    coins = level1.coins;
    // pufferfishes = level1.pufferfishes;
    enemies = level1.enemies;
    poision = level1.poisions;
    endboss = new Endboss();
    backgroundObjects = level1.backgroundObjects;
    CoinBar = new Statusbar('coin', 0);
    PoisonBar = new Statusbar('poison', 0);
    LifeBar = new Statusbar('heart', 1);
    throw_bubble = [new throwable_object()];
    // LifeBar= new Statusbar(-100,60,'Lifebar',150);
    // PoisonBar = new Statusbar(-100,35,'poison',50);



    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    intro = false;



    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.cycle();
        this.checkdistance();
        this.checkCollisions();
        this.newEnemies();
        this.checkEndbossActions();
        // this.checkAnimationCoins();
    }

    setWorld() {
        this.character.world = this;     //damit wir auf die Varaiblen der Welt auch zugreifen

    };

    cycle() {
        setInterval(() => {
            this.checkEndbossActions();

        }, 200)
    }

    checkEndbossActions() {
        if (this.character.x >= this.endboss.x - 580 && this.endboss.introduced == false) {
            this.endboss.animate();
            this.endboss.introduced = true;

        }
        if (this.character.x >= this.endboss.x - 480 && this.endboss.introduced == true && this.endboss.endboss_angry == false) {
            this.endboss.isAngry();
            this.endboss.animate();


        }

    };

    newEnemies() {
        setInterval(() => {
            world.bubbles.push(new Bubble)

        }, 3000);
    }


    checkdistance() {
        setInterval(() => {
            console.log(this.level.bubbles[1].x);
            this.level.enemies.forEach((enemie) => {
                if (this.character.isNextto(enemie)) {



                }
            })

        }, 1000);
    }

    // checkAnimationCoins(){
    //     setInterval(() => {
    //         this.level.coins.forEach((coin) => {
    //             if (coin instanceof special_coin && this.character.x - coin.x <300){
    //             this.level.coins.applyGravity();}
    //         })
    //     },2000)
    // }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemie) => {
                if (this.character.isColliding(enemie)) {
                    // console.log('Collision with Caracter', enemie)
                    this.character.loseEnergy(enemie);
                    console.log(this.character.energy)
                    if (this.character.isDead()) {
                        this.character.playAnimation(this.character.Sharkie_isDead)
                    }
                }
            })
            this.level.coins.forEach((coin) => {
                if (this.character.isColliding(coin)) {
                    console.log('collision with coin');
                    this.character.collect(coin)
                }
            })

        }, 1000);
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
        this.addObjectsToMap(this.level.poisions);
        this.addObjectsToMap(this.throw_bubble);
        // this.addObjectsToMap(this.level.pufferfishes);
        this.addTomap(this.endboss);
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



    drawAllBars() {
        this.drawStatusbar(this.LifeBar, 0, 0);
        this.drawStatusbar(this.CoinBar, 400, 5);
        this.drawStatusbar(this.PoisonBar, 200, 0);



    }

    drawStatusbar(object, x_position, y_position) { 
        this.ctx.drawImage(object.emptybar, x_position, 8, object.bar_size, object.bar_size * object.emptybar.height / object.emptybar.width);
        this.ctx.drawImage(object.fullbar, 120 + ((object.fullbar.width - 120) * (1 - object.startvalue)), 0, object.fullbar.width, object.fullbar.height, 120 * (object.bar_size / object.fullbar.width) + x_position, 8, object.bar_size, object.bar_size * object.fullbar.height / object.fullbar.width);
        this.drawSingleImage(object, x_position, y_position, 50, 50);
    }

    drawSingleImage(object, size, set_x, set_y, relation) {
        this.ctx.drawImage(object.img, size, set_x, set_y, relation);

    }


    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0); //sonst springt er um die breite vor/zurück im canvas
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }



}


