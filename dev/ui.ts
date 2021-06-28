import { Game } from "./game.js"

export class UI {
    private scoreField: HTMLElement
    private game: Game
    private _score: number = 0

    constructor(g: Game) {
        const gameElement = document.querySelector('game') as HTMLElement
        this.scoreField = document.createElement("ui")
        gameElement.appendChild(this.scoreField)
        this.game = g
        this.update()
    }

    public get score(): number {
        return this._score
    }

    public update() {
        let str = `Score : ${this._score}`
        this.scoreField.innerHTML = str
    }
    
    public remove(){
        this.scoreField.remove()
    }

    public addPoints() {
        this._score++
        this.update()
    }

    public clearScore() {
        this.scoreField.remove()
    }
}