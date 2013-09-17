Game = {
  win:{
    width:640,
    height:480
  },

  // This defines our grid's size and the size of each of its tiles
  map_grid: {
    width:  24,
    height: 16,
    tile: {
      width:  16,
      height: 16
    }
  },


  // Initialize and start our game
  start: function() {
    // Start crafty and set a background color so that we can see it's working
    Crafty.init(Game.win.width, Game.win.height);
    Crafty.background('green');
  }
}