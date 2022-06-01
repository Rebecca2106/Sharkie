class Level {
    bubbles;
    coins;
    // pufferfishes;
    enemies;
    endboss;
    backgroundObjects;
  
    level_end_x =1600;

    constructor(bubbles, coins, enemies, endboss,backgroundObjects){ //pufferfish entfernt
        this.bubbles = bubbles;
        this.coins = coins;
        // this.pufferfishes = pufferfishes;
        this.enemies = enemies;
        this.endboss = endboss;
        this.backgroundObjects = backgroundObjects;
   
    }
}