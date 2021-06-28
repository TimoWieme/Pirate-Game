import { gameObject } from "./gamebject.js"
import { Game } from "./game.js"

export class EndScreen extends gameObject {

    private game :Game

    constructor(g: Game) {
        super("endscreen")
        this.game = g

        const text = document.createElement("div")
        const btn = document.createElement("button")

        this.div.appendChild(text)
        this.div.appendChild(btn)


        text.innerText = "The game is over"
        btn.innerText = "Go back to start"

        btn.addEventListener("click", () => this.gotoStartScreen())
    }

    private gotoStartScreen() {
        this.remove()
        this.game.showStartScreen()
    }
}