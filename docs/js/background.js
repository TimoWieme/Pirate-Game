import { gameObject } from "./gameobject.js";
export class Background extends gameObject {
    constructor(tag) {
        super("background");
        this.x = 0;
        tag.prepend(this.div);
    }
    update() {
        this.x--;
        this.div.style.backgroundPosition = `${this.x}px 0px`;
    }
}
//# sourceMappingURL=background.js.map