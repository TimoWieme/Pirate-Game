import { gameObject } from "./gameobject.js"
import { Game } from "./game.js"

export class StartScreen extends gameObject {

    private game : Game
    
    constructor(g:Game) {
        super("startscreen")
        this.game = g        
        const text = document.createElement("div")
        const instruction = document.createElement("div")
        const btn = document.createElement("button")
        
        this.div.appendChild(text)
        this.div.appendChild(btn)
        this.div.appendChild(instruction)
        
        text.innerText = "Pirate killer"
        instruction.innerText = "Kill the pirates, avoid the bombs!"
        btn.innerText = "START GAME"
        
        btn.addEventListener("click", () => this.gotoGameScreen())
    }

    private gotoGameScreen(){
        this.remove()
        this.game.showGameScreen()
    }

}