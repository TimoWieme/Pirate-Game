import { gameObject } from "./gameobject.js"
import { Game } from "./game.js"

export class StartScreen extends gameObject {

    private game: Game

    constructor(g: Game) {
        super("startscreen")
        this.game = g

        // Create Divs and button
        const text = document.createElement("div")
        const instruction = document.createElement("div")
        const btn = document.createElement("button")

        // Add divs and button to the game
        this.div.appendChild(text)
        this.div.appendChild(btn)
        this.div.appendChild(instruction)

        text.innerText = "Pirate killer"
        instruction.innerText = "Kill the pirates, avoid the bombs!"
        btn.innerText = "START GAME"

        // Eventlistener on button, when clicked you go to the gameScreen
        btn.addEventListener("click", () => this.gotoGameScreen())
    }

    // Function to go to the game screen and remove the current screen.
    private gotoGameScreen() {
        this.remove()
        this.game.showGameScreen()
    }

}