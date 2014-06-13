/**
 * below we declare GameStates which is an empty object that will contain our game states.
 * We're using this to avoid having multiple globals around.
 */

var GameStates = {};

/**
 * This is the Preloader game state. It is the first to run. It loads all the assets used by the game.
 */

GameStates.Preloader = function (game) {
    // placeholder, you can set some game state options in here if needed.
    // Refer to: http://docs.phaser.io/Phaser.State.html
};

GameStates.Preloader.prototype = {

    /*
    Game states have many functions that will be called at different stages of its lifecycle.

    You can check these methods at:
    - http://docs.phaser.io/Phaser.State.html#toc21

    In this case here:
    - preload(): will be called to load our game assets. Once loaded they are cached and any
    other game state may use them.
    - update(): this is the game loop function. It will be called using requestAnimationFrame() in a loop
    until we do something to exit. In this case we switch to the Game state.
     */

    preload: function() {

        // The images below are just placeholders to show how to load assets.
        // Replace them with your own.

        this.load.image('background', 'assets/background.png');
        this.load.image('player', 'assets/player.png');
    },
    update: function() {
        this.state.start('Game');
    }


};