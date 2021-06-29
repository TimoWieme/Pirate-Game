export class gameObject {
    //fields
    protected x: number = 0
    protected y: number = 0
    protected div: HTMLElement

    constructor(name: string) {
        const gameElement = document.querySelector('game') as HTMLElement
        this.div = document.createElement(name)
        gameElement.appendChild(this.div)
    }

    public update() {
        // Draw the player on the right coordinates.
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public remove() {
        this.div.remove()
    }
}