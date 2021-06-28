export class gameObject {
    constructor(name) {
        this.x = 0;
        this.y = 0;
        const gameElement = document.querySelector('game');
        this.div = document.createElement(name);
        gameElement.appendChild(this.div);
    }
    update() {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    remove() {
        this.div.remove();
    }
}
//# sourceMappingURL=gameobject.js.map