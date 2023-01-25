import {Scene} from 'phaser';

class BootScene extends Scene {
    constructor(){
        super("scene-boot");
    }

    preload(){
        this.load.image("zumcrl",'assets/zumcrl.png');

        this.load.audio("dvoyage",'assets/bgm/digitalVoyage.mp3');
    }

    create(){
        this.scene.start('scene-game');
    }
}

export default BootScene;