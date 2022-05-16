class MovableObject {
    x = 0;
    y = 0;
    img;
    height = 150;
    width = 150;
    imageCache={};
    currentImage=0;

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

    moveUpandDown() {

    }
}