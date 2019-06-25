
var disSahne=new DisSahne();
var icSahne=new IcSahne();



var config={
    type:Phaser.AUTO,
    width:768,
    height:512,
    scene:[icSahne,disSahne],
    physics:{
        default:'arcade',
        arcade:{
            gravity:{y:0}
        }
    }

};

var game=new Phaser.Game(config);