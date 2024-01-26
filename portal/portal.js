class Portal {
    constructor(x, y) {
        this.pos = new Vector(x, y)
        this.rotation = 0
        this.height = 15
        this.width = 120
        this.link = 0
    }

    draw() {
        this.rotation += 0.005
        let camPos = camera.toScreenCoords(this.pos)
        let ctx = area.context
        ctx.fillStyle = "#f67e3c"
        ctx.translate(camPos.x, camPos.y + 5)
        ctx.rotate(this.rotation)
        ctx.roundRect(this.width * -0.5, this.height * -0.5, this.width, this.height, 1000)
        ctx.fill()
        let gradient = ctx.createLinearGradient(0, this.height * 0.5, 0, this.height * 1.5)
        gradient.addColorStop(0, "#ffbb99aa")
        gradient.addColorStop(1, "#ffbb9900")
        ctx.fillStyle = gradient
        ctx.fillRect(this.width * -0.5 + this.height * 0.4, this.height * 0.5, this.width - this.height * 0.8, this.height, 100)
    }
}