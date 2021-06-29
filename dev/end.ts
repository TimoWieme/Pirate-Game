import { gameObject } from "./gameobject.js"
import { Game } from "./game.js"

export class EndScreen extends gameObject {

    private game: Game

    constructor(g: Game) {
        super("endscreen")
        this.game = g

        // Create div element
        const text = document.createElement("div")
        // Create button element
        const btn = document.createElement("button")

        // Add elements to the game
        this.div.appendChild(text)
        this.div.appendChild(btn)

        // Add text to the divs
        text.innerText = "The game is over"
        btn.innerText = "Go back to start"

        // Eventlistener on button to go to the startScreen
        btn.addEventListener("click", () => this.gotoStartScreen())
    }

    // function to go to the startscreen and remove the current screen.
    private gotoStartScreen() {
        this.remove()
        this.game.showStartScreen()
    }
}