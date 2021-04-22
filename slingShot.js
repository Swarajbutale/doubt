class SlingShot
{
     constructor(bodyA,pointB) {
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 40,
            stiffness : 0.2
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
     }
     display() {
         pointA = this.bodyA.position;
         pointB = this.pointB;
         //this.sling(pointA,pointB);
     }
     fly() {
         bodyA = null;
     }
}