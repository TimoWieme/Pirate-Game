import { Player } from "./player.js";
import { Bomb } from "./bomb.js";
import { Pirate } from "./pirate.js";
import { Pirateship } from "./pirateship.js";
import { UI } from "./ui.js";
import { gameObject } from "./gameobject.js";
import { Background } from "./background.js";
export class GameScreen extends gameObject {
    constructor(g) {
        super("gamescreen");
        this.pirate = [];
        this.bomb = [];
        this.pirateship = [];
        this.gameOver = false;
        this.bombTimer = 0;
        this.pirateTimer = 0;
        console.log('Game was created!');
        this.game = g;
        const gameText = document.createElement("info");
        this.div.appendChild(gameText);
        gameText.innerText = "Score 50 points to win the game!";
        this.background = new Background(this.div);
        this.player = new Player();
        for (let i = 0; i < 2; i++) {
            this.pirate.push(new Pirate("Pirate", this));
        }
        this.bomb.push(new Bomb("Bomb"));
        this.pirateship.push(new Pirateship(150, 15));
        this.pirateship.push(new Pirateship(650, 15));
        this.pirateship.push(new Pirateship(0, 650));
        this.pirateship.push(new Pirateship(350, 650));
        this.ui = new UI(g);
    }
    removeElements() {
        if (this.gameOver == false) {
            this.player.remove();
            this.remove();
            for (const pirate of this.pirate) {
                pirate.remove();
            }
            for (const ship of this.pirateship) {
                ship.remove();
            }
            for (const bomb of this.bomb) {
                bomb.remove();
            }
            console.log("Removing player");
            this.background.remove();
            this.ui.remove();
            this.game.showEndScreen();
            this.gameOver = true;
        }
    }
    removePirate(pirate) {
        pirate.remove();
        this.ui.addPoints();
        this.pirate = this.pirate.filter(p => p != pirate);
        if (this.ui.score == 50) {
            console.log("The score is 50");
            this.removeElements();
        }
    }
    update() {
        this.bombTimer++;
        if (this.bombTimer == 200) {
            for (let b = 0; b < 1; b++) {
                this.bomb.push(new Bomb("Bomb"));
            }
            console.log("3 seconden zijn voorbij");
            this.bombTimer = 0;
        }
        this.pirateTimer++;
        if (this.pirateTimer == 120) {
            for (let i = 0; i < 2; i++) {
                this.pirate.push(new Pirate("Pirate", this));
                console.log("Added 2 pirates.");
                this.pirateTimer = 0;
            }
        }
        this.background.update();
        for (const pirate of this.pirate) {
            pirate.update();
            if (pirate.getBoundingRect().left < -100) {
                this.removePirate(pirate);
            }
        }
        for (const ship of this.pirateship) {
            ship.update();
        }
        for (const bomb of this.bomb) {
            bomb.update();
            if (this.x + this.div.clientWidth < 0) {
                bomb.remove();
                this.bomb = this.bomb.filter(b => b != bomb);
                this.bomb.push(new Bomb("Bomb"));
            }
        }
        this.player.update();
        for (let p of this.pirate) {
            if (this.checkCollision(this.player.getBoundingRect(), p.getBoundingRect())) {
                console.log("Hit pirate");
                this.removePirate(p);
            }
        }
        for (let b of this.bomb) {
            if (this.checkCollision(this.player.getBoundingRect(), b.getBoundingRect())) {
                b.remove();
                this.bomb = this.bomb.filter(bomb => bomb != b);
                console.log("Hit bomb");
                this.removeElements();
            }
        }
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
}
//# sourceMappingURL=gamescreen.js.map