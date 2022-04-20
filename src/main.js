let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;

//points breakdown
//(5) Add your own (copyright-free) background music to the Play scene (5)
//(5) Allow the player to control the Rocket after it's fired (5)
//(10) Display the time remaining (in seconds) on the screen (10)
//(20) Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)
//(20) Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20) 
//(20)Implement mouse control for player movement and mouse click to fire (20)
//(20) Use Phaser's particle emitter to create a particle explosion when the rocket hits the spaceship (20)
