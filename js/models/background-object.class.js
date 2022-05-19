class BackroundObjects extends MovableObject {

        width =720;
        height=480;


    constructor(imagePath,x,y) {
        super().loadImage(imagePath);
        this.x=x;                                           //damir jeder bgo eine individuelle position bekommen kann
        this.y=480 -this.height;
        this.y=y

    }
}