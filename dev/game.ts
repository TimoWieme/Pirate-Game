import { EndScreen } from "./end.js"
import { gameObject } from "./gameobject.js"
import { GameScreen } from "./gamescreen.js"
import { StartScreen } from "./start.js"

export class Game {

    private screen: gameObject

    // Open startScreen when the game is started
    constructor() {
        this.showStartScreen()
        this.gameLoop()
    }

    // Function to make a new startScreen
    public showStartScreen() {
        this.screen = new StartScreen(this)
    }

    // Create Gamescreen
    public showGameScreen() {
        this.screen = new GameScreen(this)
    }

    // Create EndScreen
    public showEndScreen() {
        this.screen = new EndScreen(this)
    }

    private gameLoop() {
        this.screen.update()
        requestAnimationFrame(() => this.gameLoop())
    }
}

new Game()