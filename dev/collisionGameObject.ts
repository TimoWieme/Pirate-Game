
export class collisionGameObject{
    protected div: HTMLElement

    public getBoundingRect() : DOMRect {
        return this.div.getBoundingClientRect()
    }
}