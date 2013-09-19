// The Grid component allows an element to be located
//  on a grid of tiles
Crafty.c('Grid', {
  init: function() {
    this.attr({
      w: Game.map_grid.tile.width,
      h: Game.map_grid.tile.height
    })
  },
 
  // Locate this entity at the given position on the grid
  at: function(x, y) {
    if (x === undefined && y === undefined) {
      return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }
    } else {
      this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
      return this;
    }
  }
});
/*
	Map
*/
Crafty.c('PiLogicMapCell', {
    type:null,
    canWalk:true,
    canSee:true,
    object:null,
    init:function(){
    	this.requires('Grid');
    },
    buildCell:function(attr){
    	for(var i in attr){
    		if(this[i]!=undefined){
    			this[i]=attr[i];
    		}
    	}
    	return this;
    },
   	putOn:function(obj){
   		if(this.canWalk==false) return false;
   		this.object = null;
   		this.object = obj;
   	}
});

Crafty.c('PiLogicMap', {
	mapArr:[],
	sizes:{
		w:null,
		h:null
	},
	buildMap:function(width, height, mapString){
		this.sizes.w = width;
		this.sizes.h = height;
		this.mapArr = this.parseMapString(mapString);
	},
	parseMapString:function(str){
		var totalCells = this.sizes.w*this.sizes.h;
		if(totalCells != str.length) throw "Sizes and mapString does not match";
		
	}
});















/*
	Units
*/
Crafty.c('Actor', {
init: function() {
    this.requires('2D, Canvas, Grid');
  }

});

Crafty.c('PlayerCharacter', {
  init: function() {
    this.requires('Actor, Fourway, Color, Grid')
      .fourway(4)
      .color('white');
  }
});

Crafty.c('MapCell', {
	selected:false,
	init:function(){
		this.requires('Actor, SFloor, Mouse');
		this.bind('MouseOver', function(){
			this.sprite(32, 0, 32, 32);
		});
		this.bind('MouseOut', function(){
			this.selectCurrentState();
		});
		this.bind('MouseUp', function(){
			console.log('click');
			if(this.selected){
				this.selected = false;
				this.sprite(0, 0, 32, 32);
			}else{
				this.selected = true;
				this.sprite(64, 0, 32, 32);
			}
			
		});
	},
	selectCurrentState:function(){
		if(this.selected){
				this.sprite(64, 0, 32, 32);
			}else{
				this.sprite(0, 0, 32, 32);
			}
	}

	
});