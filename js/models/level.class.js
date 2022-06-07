class Level {
    bubbles;
    coins;
    // pufferfishes;
    enemies;
    endboss;
    backgroundObjects;
  
    level_end_x =1600;

    constructor(bubbles, coins, enemies,backgroundObjects){ //pufferfish entfernt
        this.bubbles = bubbles;
        this.coins = coins;
        // this.pufferfishes = pufferfishes;
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
   
    }
}