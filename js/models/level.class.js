class Level {
    bubbles;
    coins;
    poisions;
    // pufferfishes;
    enemies;
    endboss;
    backgroundObjects;
  
    level_end_x =1600;

    constructor(bubbles, poisions, coins, enemies,backgroundObjects){ //pufferfish entfernt
        this.bubbles = bubbles;
        this.coins = coins;
        this.poisions= poisions;
        // this.pufferfishes = pufferfishes;
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
   
    }
}