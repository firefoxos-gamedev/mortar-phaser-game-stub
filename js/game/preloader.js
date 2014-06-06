var BasicGame = {}; // <-- Object to hold all our game states.

/**
 * This is the Preloader game state. It is the first to run. It loads all the assets used by the game.
 */

BasicGame.Preloader = function (game) {
    // placeholder, you can set some game state options in here if needed.
    // Refer to: http://docs.phaser.io/Phaser.State.html
};

BasicGame.Preloader.prototype = {

    /*
    Game states have many functions that will be called at different stages of its lifecycle.

    You can check these methods at:
    - http://docs.phaser.io/Phaser.State.html#toc21

    In this case here:
    - preload(): will be called to load our game assets. Once loaded they are cached and any
    other game state may use them.
    - update(): this is the gameloop function. I will be called using requestAnimationFrame() in a loop
    until we do something to exit. In this case we switch to the Game state.
     */

    preload: function() {
        this.load.image('background', 'assets/background.png');
        this.load.image('player', 'assets/player.png');
    },
    update: function() {
        this.state.start('Game');
    }


};