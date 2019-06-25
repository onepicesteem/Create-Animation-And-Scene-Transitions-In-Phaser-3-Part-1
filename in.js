
var player;
var cursor;
var keyObj;

class IcSahne extends Phaser.Scene{
    constructor(config){
        super(config);
        Phaser.Scene.call(this,{key:'in'});
    }
    init(data) {}
    preload(){

        this.load.image('background2','./assets/housein.png');
        this.load.spritesheet('character',
        './assets/character.png',
        {frameWidth:150,frameHeight:117});
    }

    create(){

        this.add.image(384,256,'background2');

        player=this.physics.add.sprite(500,350,'character');
        cursor=this.input.keyboard.createCursorKeys();
        keyObj=this.input.keyboard.addKey('w');

        //player.setCollideWorldBounds(true);

        this.anims.create({
            key:'rightstop',
            frames:[{key:'character',frame:0}],
            frameRate:20
        });

        this.anims.create({
            key:'rightdown',
            frames:[{key:'character',frame:1}],
            frameRate:20
        });

        this.anims.create({
            key:'rightwalk',
            frames:this.anims.generateFrameNumbers('character',{start:2,end:7}),
            frameRate:10,
            repeat:-1
        });

        this.anims.create({
            key:'leftstop',
            frames:[{key:'character',frame:8}],
            frameRate:20
        });

        this.anims.create({
            key:'leftdown',
            frames:[{key:'character',frame:9}],
            frameRate:20
        });

        this.anims.create({
            key:'leftwalk',
            frames:this.anims.generateFrameNumbers('character',{start:10,end:15}),
            frameRate:50,
            repeat:-1
        });

    }

    update(){

        //Set movement on x axis
        player.setVelocityX(0);
        //animation
        player.anims.play('leftwalk',true);

        // if(cursor.left.isDown){
        //     player.setVelocityX(-100);
        //     player.anims.play('leftwalk',true)
        // }

        // if(cursor.right.isDown){
        //     player.setVelocityX(100);
        //     player.anims.play('rightwalk',true)
        // }
        // if(cursor.up.isDown){
        //     player.setVelocityX(0);
        //     player.anims.play('rightstop',true)
        // }

        // if((player.x>20&&player.x<150)&&keyObj.isDown){
        //     this.scene.start('out');
        // }

    }
}