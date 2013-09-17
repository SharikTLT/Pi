Crafty.scene("test", function() {
	Crafty.e('PlayerCharacter').at(1, 1);
    Crafty.e("2D,DOM,FPS,Text").attr({maxValues:20}).css({color:"white"}).css({'font-size':'20'}).bind("MessureFPS",function(fps){ this.text("FPS"+fps.value);  })
    for(var i = 1; i<11;++i){
    	for(var j=1;j<11;++j){
    		Crafty.e('MapCell').at(i,j);
    	}
    }
});