class MovableObject extends DrawableObject {
    x = 0;
    y = 0;
    img;
    height = 150;
    width = 150;
    imageCache = {};
    currentImage = 0;
    speed = 2;
    energy = 100;
    damage;
    lastHit = 0;
    collison_with;
    puffered;



    moveRight() {                        //function ist nicht nötig, OOP ist recht neu in JS, funktioniert ohne das Wort
        this.x += this.speed;           //Schablone welche Felder zu einen objekt gehören sollen
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveAutoLeft() {
        setInterval(() => {
            if (this.x > -200) {
                this.x -= this.speed;
            }
        }, 1000 / 45);
    }

    moveUpandDown() {

    }

    playAnimation(images) {
        let i = this.currentImage % images.length; //let i= 5 % 6 = 0 Rest 5; ganzzahliger Rest einer Division 
        //let i = 7 % 6; =>1, Rest 1!   i= 0, 1, 2, 3, 4, 5, 0
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    playAnimationOnce(images) {
        if (this.currentImage < images.length) {
            let path = images[this.currentImage];
            this.img = this.imageCache[path];
            this.currentImage++;

        }
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Jellyfish || this instanceof Pufferfish) {   // damit der Frame nicht um den Münzen und backgrounsObjects liegt
            ctx.beginPath();
            ctx.lineWidth = "4";
            ctx.strokeStyle = "green";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x + mo.width &&
            this.y < mo.y + mo.height
    }

    isNextto(mo) {
        if (mo instanceof Pufferfish && mo.otherDirection==false) {
            if (((this.x + this.width) - mo.x < 50) && ((this.x + this.width) - mo.x > 0)) {
                mo.puffered = true;
            }
        }
        // if (mo instanceof Pufferfish && mo.otherDirection==false) {
        //     if (((this.x - this.width) - mo.x < 50) && ((this.x - this.width) - mo.x > 0)) {
        //         mo.puffered = true;
        //     }
        // }
        else {
            mo.puffered = false;
        }
    }






    loseEnergy(enemie) {
        this.energy -= enemie.damage;
        if (enemie instanceof Jellyfish) {
            this.collison_with = "jellyfish";
        }
        else {
            this.collison_with = "pufferfish";
        }
        if (this.energy < 0) {
            this.energy = 0;
        }
        else {
            this.lastHit = new Date().getTime();
        }
    }

    isDead() {
        return this.energy == 0;
    }

    isHurt() {

        let timepassed = new Date().getTime() - this.lastHit  //Differenz in MS
        timepassed = timepassed / 1000;
        return timepassed < 1;

    }


}