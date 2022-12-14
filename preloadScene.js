class preloadScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'preloadScene' });
    }

    preload() {

       
        // // chars
        this.load.spritesheet("boy", "assets/boy_64x83.png", {
          frameWidth: 64,
          frameHeight: 83,
        });

        // this.load.atlas('left', 'assets/knight_walk_left.png', 'assets/knight_walk_left.json');
        // this.load.atlas('right', 'assets/knight_walk_right.png', 'assets/knight_walk_right.json');
        // this.load.atlas('up', 'assets/knight_walk_up.png', 'assets/knight_walk_up.json');
        // this.load.atlas('down', 'assets/knight_walk_down.png', 'assets/knight_walk_down.json');

        this.load.atlas('guardleft', 'assets/guard_walk_left.png', 'assets/guard_walk_left.json');
        this.load.atlas('guardright', 'assets/guard_walk_right.png', 'assets/guard_walk_right.json');
        this.load.atlas('guardup', 'assets/guard_walk_up.png', 'assets/guard_walk_up.json');
        this.load.atlas('guarddown', 'assets/guard_walk_down.png', 'assets/guard_walk_down.json');

        this.load.atlas('guardleftanim', 'assets/guard_left_anim.png', 'assets/guard_left_anim.json');

        // this.load.atlas('princess', 'assets/princess.png', 'assets/princess.json');

        this.load.image("scene1","assets/scene1.jpg")


      this.load.audio("ding","assets/ding.mp3");
      this.load.audio("bgmusic","assets/bg_music.mp3");
      this.load.audio("preloadmusic","assets/preloadmusic.mp3");
      this.load.audio("hit","assets/hit.wav");
      this.load.audio("dooropen","assets/doorOpen.wav");
      this.load.audio("win","assets/win.wav");
      this.load.audio("smallhit","assets/smallhit.wav");
      this.load.audio("lose","assets/lose.mp3");
      


    } // end of preload //

    create () {

      let frame = 3;

      this.add.image (1220,540,'scene1')
      this.music = this.sound.add("bgmusic",{loop: true}).setVolume(0.06);
      // this.music = this.sound.add("preloadmusic",{loop: true}).setVolume(0.06);

      this.music.play();

      
    // boy anims
    this.anims.create({
      key: "left-boy",
      frames: this.anims.generateFrameNumbers("boy", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "down-boy",
      frames: this.anims.generateFrameNumbers("boy", { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "right-boy",
      frames: this.anims.generateFrameNumbers("boy", { start: 8, end: 11 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "up-boy",
      frames: this.anims.generateFrameNumbers("boy", { start: 12, end: 15 }),
      frameRate: 10,
      repeat: -1,
    });


       
    
           this.anims.create({ 
            key:'down', 
           frames:[ 
            {key:'down',frame:'knight_27'},
               {key:'down',frame:'knight_28'}, 
               {key:'down',frame:'knight_29'},         
            {key:'down',frame:'knight_30'},
               {key:'down',frame:'knight_31'},
               {key:'down',frame:'knight_32'},
               {key:'down',frame:'knight_33'},
               
           
           ],
           frameRate:10,
           repeat:-10
           });

           this.anims.create({
            key: "guardleftAnim",
            frames: [
              { key: "guardleft", frame: "guard_1" },
              { key: "guardleft", frame: "guard_2" },
              { key: "guardleft", frame: "guard_3" },
              { key: "guardleft", frame: "guard_4" },
              { key: "guardleft", frame: "guard_5" },
              { key: "guardleft", frame: "guard_6" },
              { key: "guardleft", frame: "guard_7" },
              { key: "guardleft", frame: "guard_8" },
              { key: "guardleft", frame: "guard_9" },
              { key: "guardleft", frame: "guard_10" },
              { key: "guardleft", frame: "guard_11" },
              { key: "guardleft", frame: "guard_12" },
              { key: "guardleft", frame: "guard_13" }
            ],
            frameRate: 10,
            repeat: -1,
          });

          this.anims.create({
            key: "guardrightAnim",
            frames: [
              { key: "guardright", frame: "guard_14" },
              { key: "guardright", frame: "guard_15" },
              { key: "guardright", frame: "guard_16" },
              { key: "guardright", frame: "guard_17" },
              { key: "guardright", frame: "guard_18" },
              { key: "guardright", frame: "guard_19" },
              { key: "guardright", frame: "guard_20" },
              { key: "guardright", frame: "guard_21" },
              { key: "guardright", frame: "guard_22" },
              { key: "guardright", frame: "guard_23" },
              { key: "guardright", frame: "guard_24" },
              { key: "guardright", frame: "guard_25" },
              { key: "guardright", frame: "guard_26" }
            ],
            frameRate: 10,
            repeat: -1,
          });

          this.anims.create({
            key: "guardupAnim",
            frames: [
              { key: "guardup", frame: "guard_34" },
              { key: "guardup", frame: "guard_35" },
              { key: "guardup", frame: "guard_36" },
              { key: "guardup", frame: "guard_37" },
              { key: "guardup", frame: "guard_38" },
              { key: "guardup", frame: "guard_39" },
              { key: "guardup", frame: "guard_40" }
              
            ],
            frameRate: 10,
            repeat: -1,
          });

          this.anims.create({
            key: "guarddownAnim",
            frames: [
              { key: "guarddown", frame: "guard_27" },
              { key: "guarddown", frame: "guard_28" },
              { key: "guarddown", frame: "guard_29" },
              { key: "guarddown", frame: "guard_30" },
              { key: "guarddown", frame: "guard_31" },
              { key: "guarddown", frame: "guard_32" },
              { key: "guarddown", frame: "guard_33" }
              
            ],
            frameRate: 10,
            repeat: -1,
          });

          this.anims.create({ 
            key:'guardleftanims', 
           frames:[ 
            {key:'guardleftanim',frame:'Asset 133'},
               {key:'guardleftanim',frame:'Asset 134'}, 
              
           
           ],
           frameRate:2, 
           repeat:-1
           });

          this.anims.create({ 
            key:'princess', 
           frames:[ 
            {key:'princess',frame:'Asset 138'},
               {key:'princess',frame:'Asset 139'}, 
              
           
           ],
           frameRate:2, 
           repeat:-1
           });

          // this.add.sprite(450, 500, "guardleftanim").play("guardleftanims").setScale(0.9);
          // this.add.sprite(100, 100, "guardright").play("guardleftAnim").setScale(1);
          // this.add.sprite(100, 100, "guardup").play("guardleftAnim").setScale(1);
          // this.add.sprite(100, 100, "guarddown").play("guardleftAnim").setScale(1);


        console.log("preloadScene")
        // this.add.text(70,280, 'TO RESCUE THE PRINCESS', 
        //     { font: '40px Rakkas', fill: '#ffffff' });

        // this.add.text(205,195, 'Press SPACEBAR to start the game', 
        //     { font: '17px Rakkas', fill: '#ffffff' });

        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function(){
            
            let playerPos = {};
            playerPos.x = 1175
            playerPos.y = 1080
            playerPos.dir = "up-boy"
            this.scene.start("instructions2",{playerPos: playerPos});
            }, this );
            

    }
} /// end of preloadScene class ///

window.key = 0
window.heart = 3
