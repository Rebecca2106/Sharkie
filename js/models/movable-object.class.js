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

    automoveRight(){
        setInterval(() => {
            this.x += this.speed;  
        }, 1000 / 45);
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

    autoapplyGravity(){
        setInterval(() => {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }, 1000 / 45);
    }

    applyGravity() {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; //let i= 5 % 6 = 0 Rest 5; ganzzahliger Rest einer Division 
        //let i = 7 % 6; =>1, Rest 1!   i= 0, 1, 2, 3, 4, 5, 0
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;

    }

    playAnimationOnce(images) {
        this.currentImage = 0;
        let playOnce = setInterval(() => {
            if (this.currentImage < images.length) {
                let path = images[this.currentImage];
                this.img = this.imageCache[path];
                this.currentImage++;
            }

        }, 100)

        setTimeout(() => {
            clearInterval(playOnce)
        }, (100 * images.length))

    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Jellyfish || this instanceof Pufferfish || this instanceof Endboss) {   // damit der Frame nicht um den Münzen und backgrounsObjects liegt
            ctx.beginPath();
            ctx.lineWidth = "4";
            ctx.strokeStyle = "green";
            ctx.rect(this.x + (this.offset / 3), this.y - (this.offset / 4) + this.offset, this.width - (this.offset/(1.5)), this.height - this.offset);
            ctx.stroke();
        }
    }



    isColliding(mo) {
        return this.x + this.width - (this.offset/(1.5)) > (mo.x + mo.offset) &&
            this.y - (this.offset / 4) + this.height > (mo.y + mo.offset) &&
            this.x + (this.offset / 3) < (mo.x + mo.width - mo.offset) &&
            this.y + this.offset < (mo.y + mo.height-mo.offset)
    }

    isHit(enemie) {
        let centerX = this.x + (this.width/2);
        let centerY = this.y + (this.height/2);
        return  centerX > (enemie.x-enemie.offset) &&
                centerY > (enemie.y-enemie.offset) &&
                centerX < enemie.x + (enemie.width-enemie.offset)  &&
                centerY < enemie.y + (enemie.height-enemie.offset)
    }



    isNextto(mo) {
        if (mo instanceof Pufferfish && mo.otherDirection == false) {
            if (((this.x + this.width) - mo.x < 100) && ((this.x + this.width) - mo.x > 0)) {
                mo.puffered = true;
                console.log('next to pufferfish')
            }
        }
        // if (mo instanceof Pufferfish && mo.otherDirection==true) {
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