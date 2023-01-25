import style from "./main.css";
import Phaser, {Game} from 'phaser';
import BootScene  from './scenes/BootScene';
import GameScene from './scenes/GameScene';

// const canvas = document.getElementById('game-canvas');
const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 300,
    parent: "game-canvas",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y:400},
            debug: true
        }
    },
    scene: [BootScene, GameScene]
}

const game = new Game(config);