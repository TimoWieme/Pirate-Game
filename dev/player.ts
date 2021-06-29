import { gameObject } from "./gameobject.js";

export class Player extends gameObject {
    private verticalSpeed: number = 0

    constructor() {
        super("player")
        console.log("Player was created!")

        // Event listeners for arrow up and arrow down
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))

        // Set the x to 100
        this.x = 100
        // Call the function to generatte a random y value
        this.setNewPos()
    }

    public getBoundingRect(): DOMRect {
        return this.div.getBoundingClientRect()
    }

    // Function to generate a random y value
    private setNewPos() {
        this.y = Math.floor((Math.random() * (window.innerHeight - this.div.clientHeight - 215) + 115))
    }

    public update(): void {
        super.update()
        // Add the vertical speed to the y-value
        let newy = this.y + this.verticalSpeed
        // Make sure player cant get out of the screen
        if (newy > 0 && newy + this.getBoundingRect().height < window.innerHeight) {
            this.y = newy
        }
    }

    private onKeyDown(e: KeyboardEvent): void {

        // Check if the key in the event matches the pressed key
        switch (e.key) {
            // When the "ArrowUp" key is pressed
            case "ArrowUp":
                // Give the vertical speed a negative value
                this.verticalSpeed = -5
                break
            // When the "ArrowDown" key is pressed
            case "ArrowDown":
                // Give the vertical speed a positive value
                this.verticalSpeed = 5
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        // Check if ArrowUp or ArrowDown key has been released
        if (e.key == "ArrowUp" || e.key == "ArrowDown") {
            // Make the vertical speed 0
            this.verticalSpeed = 0
        }
    }
}
