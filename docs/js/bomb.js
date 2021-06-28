import { gameObject } from "./gameobject.js";
export class Bomb extends gameObject {
    constructor(tagName) {
        super("Bomb");
        console.log("Bomb was added!");
        this.x = window.innerWidth;
        this.setNewPos();
    }
    setNewPos() {
        this.y = Math.floor((Math.random() * (window.innerHeight - this.div.clientHeight - 215) + 115));
    }
    getBoundingRect() {
        return this.div.getBoundingClientRect();
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
//# sourceMappingURL=bomb.js.map