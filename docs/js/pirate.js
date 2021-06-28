import { gameObject } from "./gameObject.js";
export class Pirate extends gameObject {
    constructor(tagName, screen) {
        super("Pirate");
        console.log("Pirate was created!");
        this.x = window.innerWidth + 20 + Math.random() * 400;
        this.setNewPos();
    }
    getBoundingRect() {
        return this.div.getBoundingClientRect();
    }
    setNewPos() {
        this.y = Math.floor((Math.random() * (window.innerHeight - this.div.clientHeight - 215) + 115));
    }
    update() {
        this.x -= 3;
        if (this.x + this.div.clientWidth < 0) {
            this.x = window.innerWidth;
            this.setNewPos();
        }
        super.update();
    }
}
//# sourceMappingURL=pirate.js.map