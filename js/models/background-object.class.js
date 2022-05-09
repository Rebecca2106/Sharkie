class BackroundObjects extends MovableObject {

        width =720;


    constructor(imagePath,x) {
        super().loadImage(imagePath);
        this.height = 500;
        this.x=x;                                           //damir jeder bgo eine individuelle position bekommen kann
        this.y=520 -this.height;

    }
}