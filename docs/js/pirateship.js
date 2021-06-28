import { gameObject } from "./gameObject.js";
export class Pirateship extends gameObject {
    constructor(x, y) {
        super("pirateShip");
        this.x = x;
        this.y = y;
    }
    update() {
        this.x += 3;
        if (this.x + this.div.clientWidth > 1800) {
            this.x = -this.div.clientWidth;
        }
        super.update();
    }
}
//# sourceMappingURL=pirateship.js.map