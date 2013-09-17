Crafty.scene("test", function() {
	Crafty.e('PlayerCharacter').at(1, 1);
    Crafty.e("2D,DOM,FPS,Text").attr({maxValues:10}).css({color:"white"}).css({'font-size':'20'}).bind("MessureFPS",function(fps){ this.text("FPS"+fps.value);  })

});