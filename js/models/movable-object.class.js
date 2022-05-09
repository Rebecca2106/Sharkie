class MovableObject {
    x = 0;
    y = 0;
    img;
    height = 150;
    width = 150;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {                        //function ist nicht nötig, OOP ist recht neu in JS, funktioniert ohne das Wort
        console.log('Moving right');            //Schablone welche Felder zu einen objekt gehören sollen
    }

    moveUpandDown() {

    }
}