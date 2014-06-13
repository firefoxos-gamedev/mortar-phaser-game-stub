GameStates.Game = function(game) {};

/**
 * This is the Game game state. Its our game loop responsible for the game itself.
 *
 * In the create() function we setup the display.
 * In the update() function we do the game loop.
 *
 * To learn more about states refer to:
 * Refer to: http://docs.phaser.io/Phaser.State.html
 */

GameStates.Game.prototype = {
    create: function() {

        // Add the background
        this.add.sprite(0, 0, 'background');

        // Add the player
        this.player = this.add.sprite(300, 240, 'player');
        this.physics.arcade.enable(this.player);
        this.player.enableBody = true;
        this.player.body.collideWorldBounds = true;

        // Add cursor input.
        this.cursors = this.input.keyboard.createCursorKeys()
    },

    update: function() {
        /*
        This function is called in a loop using requestAnimationFrame(). It is our game loop, our heartbeat.
        Every time it is called we process the user input and update the display.
         */


        /*
         Movement of the player using touch.

         in this case we're just moving him
         on one axis.

         The keyboard example shows two axis movement.

         To learn more about handling input refer to:
         http://docs.phaser.io/Phaser.Input.html
         */

        if (this.input.pointer1.isDown) {
            if (this.input.pointer1.worldX > 240) {
                this.player.body.velocity.x = 150;
            }

            if (this.input.pointer1.worldX <= 240) {
                this.player.body.velocity.x = -150;
            }
        }

        /*
        Moving the player using the keyboard keys.

        The move here is continuous because we apply
        a velocity to the axis.
        */

        if (this.cursors.right.isDown) {
            this.player.body.velocity.x = 150;
        }

        if (this.cursors.left.isDown) {
            this.player.body.velocity.x = -150;
        }

        if (this.cursors.down.isDown) {
            this.player.body.velocity.y = 150;
        }

        if (this.cursors.up.isDown) {
            this.player.body.velocity.y = -150;
        }

    }

};
