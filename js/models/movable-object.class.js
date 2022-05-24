class MovableObject {
    x = 0;
    y = 0;
    img;
    height = 150;
    width = 150;
    imageCache={};
    currentImage=0;
    speed= 2;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(array){
        array.forEach((path) => {
            let img= new Image();
            img.src=path;
            this.imageCache[path]=img;
        });
    }

    moveRight() {                        //function ist nicht nötig, OOP ist recht neu in JS, funktioniert ohne das Wort
        console.log('Moving right');            //Schablone welche Felder zu einen objekt gehören sollen
    }

    moveLeft(){
        setInterval(() => {
            this.x -= this.speed;
        }, 1000/45);
    }

    moveUpandDown() {

    }

    playAnimation(images){
          let i = this.currentImage % images.length; //let i= 5 % 6 = 0 Rest 5; ganzzahliger Rest einer Division 
                //let i = 7 % 6; =>1, Rest 1!   i= 0, 1, 2, 3, 4, 5, 0
                let path = images[i];
                this.img = this.imageCache[path];
                this.currentImage++;
    }
}