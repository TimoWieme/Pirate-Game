import { gameObject } from "./gameobject.js"
import { GameScreen } from "./gamescreen.js"

export class Pirate extends gameObject {
    constructor(tagName: string, screen: GameScreen) {
        super("Pirate")
        console.log("Pirate was created!")

        // Generate a random x value
        this.x = window.innerWidth + 20 + Math.random() * 400
        // Call function to generate random y value
        this.setNewPos()
    }

    public getBoundingRect(): DOMRect {
        return this.div.getBoundingClientRect()
    }

    // Generate random y value
    private setNewPos() {
        this.y = Math.floor((Math.random() * (window.innerHeight - this.div.clientHeight - 215) + 115))
    }

    public update(): void {
        // Move the pirate (x-value) to the left. 
        this.x -= 3
        // Check if pirate is completely out of the screen on the left side
        if (this.x + this.div.clientWidth < 0) {
            // Place pirate on right side of the screen
            this.x = window.innerWidth
            // Generate a random y-value
            this.setNewPos()
        }
        super.update()

    }
}