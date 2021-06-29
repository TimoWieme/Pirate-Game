export class UI {
    constructor(g) {
        this._score = 0;
        const gameElement = document.querySelector('game');
        this.scoreField = document.createElement("ui");
        gameElement.appendChild(this.scoreField);
        this.game = g;
        this.update();
    }
    get score() {
        return this._score;
    }
    update() {
        let str = `Score : ${this._score}`;
        this.scoreField.innerHTML = str;
    }
    remove() {
        this.scoreField.remove();
    }
    addPoints() {
        this._score++;
        this.update();
    }
}
//# sourceMappingURL=ui.js.map