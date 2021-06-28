import { gameObject } from "./gameObject.js";

export class Bomb extends gameObject{
    constructor(tagName: string)  {
        super("Bomb")
        console.log("Bomb was added!")
        
        // Generate a random x and y value within de width and height of the viewport
        this.x = window.innerWidth
        this.setNewPos()
    }

    private setNewPos(){
        this.y = Math.floor((Math.random() * (window.innerHeight- this.div.clientHeight - 215) + 115))   
    }

    public getBoundingRect() : DOMRect {
        return this.div.getBoundingClientRect()
    }


    public update() : void {
        // Move the Bomb (x-value) to the left. 
        this.x -= 3

        // Check if Bomb is completely out of the screen on the left side
        if(this.x + this.div.clientWidth < 0) {
            // Place Bomb on right side of the screen
            this.x = window.innerWidth
            // Generate a random y-value
            this.setNewPos()
        }
        super.update()

    }
}