const level1 = new Level(

    
    [
        new Bubble(),
        new Bubble(),
        new Bubble(),
        new Bubble(),

    ],
    
    [

        new Coins(),
        new Coins(),
        new special_coin(),
        new special_coin(),
        new special_coin(),
        new special_coin(),
    ],

    [
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
        new Jellyfish(),
        new Jellyfish(),
        new Jellyfish(),
    ],

    // [
    //     new Jellyfish(),
    //     new Jellyfish(),
    //     new Jellyfish(),
    // ],

    [
        new Endboss(this.world),
    ],


    [
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/5. Water/L.png', -720, 0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/3.Fondo 1/L1.png', -720, 0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/4.Fondo 2/L.png', -720, 0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/2. Floor/L1.png', -720, 0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/5. Water/L.png', 0, 0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/3.Fondo 1/L2.png', 0, 0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/4.Fondo 2/L1.png', 0, 0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/2. Floor/L2.png', 0, 0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/5. Water/L.png', 720, 0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/3.Fondo 1/L2.png', 720, 0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/4.Fondo 2/L2.png', 720, 0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/2. Floor/L.png', 720, 0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Barrier/3.png', 720, -350),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Barrier/4.png', 20, -350),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/5. Water/L.png', 1440, 0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/3.Fondo 1/L.png', 1440, 0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/4.Fondo 2/L1.png', 1440, 0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/2. Floor/L1.png', 1440, 0),
        new BackroundObjects('Alternative Grafiken - Sharkie/3. Background/Layers/1. Light/1.png', 1440, 0),
    ],
);