Game = {
  win:{
    width:640,
    height:480
  },

  // This defines our grid's size and the size of each of its tiles
  map_grid: {
    width:  20,
    height: 15,
    tile: {
      width:  32,
      height: 32
    }
  },


  // Initialize and start our game
  start: function() {
    // Start crafty and set a background color so that we can see it's working
    Crafty.init(Game.win.width, Game.win.height);
    Crafty.background('blue');
    
    Crafty.scene("test");
  }
}