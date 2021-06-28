import { EndScreen } from "./end.js"
import { gameObject } from "./gameobject.js"
import { GameScreen } from "./gamescreen.js"
import { StartScreen } from "./start.js"

export class Game {

    private screen: gameObject

    constructor(){
        this.showStartScreen()
        this.gameLoop()
    }

    public showStartScreen(){
        this.screen = new StartScreen(this)
    }

    public showGameScreen(){
        this.screen = new GameScreen(this)
    }

    public showEndScreen(){
        console.log("Maak een nieuw endScreen.")
        this.screen = new EndScreen(this)
    }

    private gameLoop(){
        this.screen.update()
        requestAnimationFrame(()=>this.gameLoop())
    }
}

new Game()