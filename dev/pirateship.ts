import { gameObject } from "./gameobject.js";

export class Pirateship extends gameObject {
    constructor(x: number, y: number) {
        super("pirateShip")
        this.x = x
        this.y = y
    }

    public update(): void {
        // Move PirateShip to the left side of the screen
        this.x += 3

        //When the ship went of the screen on the right side
        if (this.x + this.div.clientWidth > 1800) {
            // Put ship on the left side of the screen
            this.x = -this.div.clientWidth
        }
        super.update()
    }
}