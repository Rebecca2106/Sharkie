class Level {
    bubbles;
    pufferfishes;
    enemies;
    backgroundObjects;
    level_end_x =1600;

    constructor(bubbles, pufferfishes,enemies,backgroundObjects){
        this.bubbles = bubbles;
        this.pufferfishes = pufferfishes;
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
    }
}