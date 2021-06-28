import { gameObject } from "./gamebject.js"

export class Background extends gameObject {

    constructor(tag : HTMLElement) {
        super("background")
        this.x = 0
        tag.prepend(this.div)
    }

    public update() {
        this.x--
        this.div.style.backgroundPosition = `${this.x}px 0px`
    }
}