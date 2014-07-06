/**
 * below we declare GameStates which is an empty object that will contain our game states.
 * We're using this to avoid having multiple globals around.
 */

var GameStates = {};


document.addEventListener("DOMContentLoaded", function(event)  {

    //	Create your Phaser game and inject it into the game div.

    // Game world will fill the whole viewport. If this is not the desired outcome then change those values.
    var width = window.innerWidth;
    var height = window.innerHeight;

    // Phaser.AUTO constant below means it will automatically switch between WebGL or Canvas depending on the platform.
    // Check out docs.phaser.io/Phaser.Game.html
    var game = new Phaser.Game(width, height, Phaser.AUTO, "game");

    /*
    Add the States the game has.

    A game can have multiple states. States have a lifecycle. You use states to create your own game.
    They provides quick access to common functions such as the camera, cache, input, match, sound and more.

    You can use multiple states to better organize your code. In this template we use two states one to load our
    assets and one for the gameloop. We could have done all that in a single state but that could lead to larger files
    that are harder to maintain.

    more info about states at: docs.phaser.io/Phaser.State.html
    */
    game.state.add('Preloader', GameStates.Preloader);   // <-- Loads the assets
    game.state.add('Game', GameStates.Game);             // <-- Game loop.

    //	Now start the preloader state.
    game.state.start('Preloader');

});