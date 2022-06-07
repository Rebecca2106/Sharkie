class Statusbar extends DrawableObject {

    bar_size=150;
    x = 0;
    y = 0;
    icon_size=50;
    startvalue;
    type;
    fullbar;
    emptybar;


    constructor(type, startvalue) {
        super().loadImage(`Alternative Grafiken - Sharkie/4. Marcadores/3. Bar/clean_bar_empty.png`);
        this.loadEmptyBar();
        this.loadFullBar();
        this.startvalue = startvalue;
        this.type = type;
        this.icon = (`Alternative Grafiken - Sharkie/4. Marcadores/3. Bar/icon_${type}.png`);

    }

    loadEmptyBar() {
        this.emptybar = new Image();
        this.emptybar.src = 'Alternative Grafiken - Sharkie/4. Marcadores/3. Bar/clean_bar_empty.png';
    }
    loadFullBar() {
        this.fullbar = new Image();
        this.fullbar.src = 'Alternative Grafiken - Sharkie/4. Marcadores/3. Bar/clean_bar_full.png';
    }




    percentage = 100;



}