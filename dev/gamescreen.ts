import { Player } from "./player.js"
import { Bomb } from "./bomb.js"
import { Pirate } from "./pirate.js"
import { Pirateship } from "./pirateship.js"
import { UI } from "./ui.js"
import { gameObject } from "./gameobject.js"
import { Game } from "./game.js"
import { Background } from "./background.js"

export class GameScreen extends gameObject {
    //fields
    private player: Player
    private pirate: Pirate[] = []
    private bomb: Bomb[] = []
    private pirateship: Pirateship[] = []
    private ui: UI
    private game: Game
    private background: Background
    private gameOver: boolean = false
    private bombTimer: number = 0
    private pirateTimer: number = 0

    constructor(g: Game) {
        super("gamescreen")
        console.log('Game was created!')
        this.game = g
        const gameText = document.createElement("info")
        this.div.appendChild(gameText)
        gameText.innerText = "Score 50 points to win the game!"
        this.background = new Background(this.div)

        // Create Player
        this.player = new Player()

        // Create 2 pirates to start with
        for (let i = 0; i < 2; i++) {
            this.pirate.push(new Pirate("Pirate", this))
        }
        // Create 1 bomb to start with
        this.bomb.push(new Bomb("Bomb"))


        // Create Pirateships
        this.pirateship.push(new Pirateship(150, 15))
        this.pirateship.push(new Pirateship(650, 15))
        this.pirateship.push(new Pirateship(0, 650))
        this.pirateship.push(new Pirateship(350, 650))

        this.ui = new UI(g)
    }

    // Function to remove all the elements and stop the game. -> Go to the endScreen
    private removeElements() {
        if (this.gameOver == false) {
            this.player.remove()
            this.remove()
            for (const pirate of this.pirate) {
                pirate.remove()
            }
            for (const ship of this.pirateship) {
                ship.remove()
            }
            for (const bomb of this.bomb) {
                bomb.remove()
            }
            console.log("Removing player")
            this.background.remove()
            this.ui.remove()
            this.game.showEndScreen()
            this.gameOver = true
        }
    }

    // Function when player hits pirate. Adds points to score. If score = 50, remove everything and stop game
    private removePirate(pirate: Pirate) {
        pirate.remove()
        this.ui.addPoints()
        this.pirate = this.pirate.filter(p => p != pirate)
        if (this.ui.score == 50) {
            console.log("The score is 50")
            this.removeElements()
        }
    }

    public update() {
        this.bombTimer++
        if (this.bombTimer == 200) {
            // Create Bomb every 3.3 seconds
            for (let b = 0; b < 1; b++) {
                this.bomb.push(new Bomb("Bomb"))
            }
            console.log("3 seconden zijn voorbij")
            this.bombTimer = 0
        }

        this.pirateTimer++
        if (this.pirateTimer == 120) {
            // Create 2 pirates every 2 seconds
            for (let i = 0; i < 2; i++) {
                this.pirate.push(new Pirate("Pirate", this))
                console.log("Added 2 pirates.")
                this.pirateTimer = 0
            }
        }

        this.background.update()
        // Update the pirates
        for (const pirate of this.pirate) {
            pirate.update()
            if (pirate.getBoundingRect().left < -100) {
                this.removePirate(pirate)
            }
        }
        //Update the pirateShips
        for (const ship of this.pirateship) {
            ship.update()
        }

        for (const bomb of this.bomb) {
            bomb.update()
            if (this.x + this.div.clientWidth < 0) {
                // Place pirate on right side of the screen
                bomb.remove()
                this.bomb = this.bomb.filter(b => b != bomb)
                this.bomb.push(new Bomb("Bomb"))
            }
        }

        //Update the player
        this.player.update()

        //When the player collides with pirate, remove pirate
        for (let p of this.pirate) {
            if (this.checkCollision(this.player.getBoundingRect(), p.getBoundingRect())) {
                console.log("Hit pirate")

                this.removePirate(p)
            }
        }

        // When player collides with bomb, remove bomb and all other elements.
        for (let b of this.bomb) {
            if (this.checkCollision(this.player.getBoundingRect(), b.getBoundingRect())) {
                b.remove()
                this.bomb = this.bomb.filter(bomb => bomb != b)
                console.log("Hit bomb")
                this.removeElements()
            }
        }
    }

    private checkCollision(a: ClientRect, b: ClientRect): boolean {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }
}