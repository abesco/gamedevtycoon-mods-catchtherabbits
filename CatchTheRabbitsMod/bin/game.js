var CatchTheRabbit = {};
(function(){

     var pinkySheet      = new createjs.SpriteSheet({images: ["./mods/CatchTheRabbits/img/pinky.png"]});
     pinkySheet
     pinkySheet.onComplete = function(e){
        alert("pinkySheet complete");         
     };
     
     // var pinkyAnimation  = new createjs.Sprite(pinkySheet);

     console.log(pinkySheet);

     var bluesadSheet      = new createjs.SpriteSheet({images: ["./mods/CatchTheRabbits/img/bluesad.png"]});
     // var bluesadAnimation  = new createjs.Sprite(bluesadAnimation);

     console.log(bluesadSheet);
 
     // var imgPinky           = new createjs.Bitmap("./mods/CatchTheRabbits/img/pinky.png");
     // var imgBlueSad         = new createjs.Bitmap("./mods/CatchTheRabbits/img/bluesad.png");
    
})();

