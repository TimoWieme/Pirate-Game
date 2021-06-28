import { gameObject } from "./gameobject.js";

export class Pirateship extends gameObject{
    constructor(x: number, y: number){
        super("pirateShip")

        this.x = x
        this.y = y



    }

    public update() : void{
        // Laat de boot naar links gaan op het scherm
        this.x +=3

        //Als de boot helemaal aan de linkerkant van het scherm is:
        if(this.x + this.div.clientWidth > 1800) {
            // Zet de boot dan weer aan de rechterkant van het scherm
            this.x = -this.div.clientWidth
        }
        super.update()
    }
}