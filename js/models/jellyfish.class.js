class Jellyfish extends MovableObject{

    height=50;
    width=50;

    constructor(){
        super().loadImage('Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png')
        this.x= (Math.floor(Math.random()*530))+150;
        this.y=(Math.floor(Math.random()*450));


    }
    

}