const level1 = new Level(

    
    [ 
        new Bubble(),
        new Bubble(),
        new Bubble(),
        new Bubble(),

    ],

    [
        new Poison(225,317),
        new Poison(560,280),
        new Poison(740,350),
        new Poison(1050,350)
    ],
    
    [

        new Coins(200,150),
        new Coins(760,50),
        new special_coin(0),
        new special_coin(0),
        new special_coin(0),
        new special_coin(0),
        new special_coin(800),
        new special_coin(800),
        new special_coin(800),
        new special_coin(800),
    ],

    [
        new Pufferfish(150),
        new Pufferfish(150),
        new Pufferfish(150),
        new Pufferfish(150),
        new Pufferfish(1200),
        new Pufferfish(1200),
        new Pufferfish(1400),
        new Jellyfish(150),
        new Jellyfish(150),
        new Jellyfish(150),
        new Jellyfish(650),
        new Jellyfish(650),
        new Jellyfish(850),
        new Jellyfish(1250),
    ],

    // [
    //     new Jellyfish(),
    //     new Jellyfish(),
    //     new Jellyfish(),
    // ],



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