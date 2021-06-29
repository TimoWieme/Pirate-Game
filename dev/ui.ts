import { Game } from "./game.js"

export class UI {
    //fields
    private scoreField: HTMLElement
    private game: Game
    private _score: number = 0

    constructor(g: Game) {
        const gameElement = document.querySelector('game') as HTMLElement

        // Create scoreField
        this.scoreField = document.createElement("ui")
        //Add scorefield to game
        gameElement.appendChild(this.scoreField)
        this.game = g
        this.update()
    }

    // Get the score
    public get score(): number {
        return this._score
    }

    public update() {
        let str = `Score : ${this._score}`
        this.scoreField.innerHTML = str
    }

    public remove() {
        this.scoreField.remove()
    }

    // Add points to score counter
    public addPoints() {
        this._score++
        this.update()
    }
}