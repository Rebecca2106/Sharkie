class Statusbar extends DrawableObject {
    width =50;
    height =50;
    bar_size=150;
    x = 0;
    y = 0;
    icon_size=50;
    startvalue;
    type;
    img;
    fullbar;
    emptybar;
    


    constructor(type, startvalue) {
        super();
        this.loadEmptyBar();
        this.loadFullBar();
        this.loadImage(type);
        this.startvalue = startvalue;
        this.type = type;
  


    }



    loadEmptyBar() {
        this.emptybar = new Image();
        this.emptybar.src = 'Alternative Grafiken - Sharkie/4. Marcadores/3. Bar/clean_bar_empty.png';
    }
    loadFullBar() {
        this.fullbar = new Image();
        this.fullbar.src = 'Alternative Grafiken - Sharkie/4. Marcadores/3. Bar/clean_bar_full.png';
    }

    loadImage(type){
        this.img = new Image();
        this.img.src = `Alternative Grafiken - Sharkie/4. Marcadores/3. Bar/icon_${type}.png`
    }

    




    percentage = 100;



}