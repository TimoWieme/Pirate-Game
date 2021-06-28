import { gameObject } from "./gamebject.js";
export class Player extends gameObject {
    constructor() {
        super("player");
        this.verticalSpeed = 0;
        console.log("Player was created!");
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        this.x = 100;
        this.setNewPos();
    }
    getBoundingRect() {
        return this.div.getBoundingClientRect();
    }
    setNewPos() {
        this.y = Math.floor((Math.random() * (window.innerHeight - this.div.clientHeight - 215) + 115));
    }
    update() {
        this.y += this.verticalSpeed;
        super.update();
    }
    onKeyDown(e) {
        switch (e.key) {
            case "ArrowUp":
                this.verticalSpeed = -5;
                break;
            case "ArrowDown":
                this.verticalSpeed = 5;
                break;
        }
    }
    onKeyUp(e) {
        if (e.key == "ArrowUp" || e.key == "ArrowDown") {
            this.verticalSpeed = 0;
        }
    }
}
//# sourceMappingURL=player.js.map