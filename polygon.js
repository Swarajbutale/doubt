class Polygon
{
    constructor() {
        var options = {
            isStatic : false
        }
        this.polygon = Bodies.circle(50,200,20,options)
        this.image = loadImage("polygon.png")
       
        World.add(world,this.polygon)
    }
    display() {
        imageMode(CENTER)
        image(this.image,50,200,20,20)
    }
}