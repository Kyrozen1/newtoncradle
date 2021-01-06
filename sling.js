class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:1,
            angularStiffness:1,
            length:220
        }
        this.pointB = pointB;
        this.pointX = bodyA.x;
        this.poinyY = bodyA.y - 250;
        this.sling = Constraint.create(options);
        World.add(world,this.sling)
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(3.5);
            stroke("#fff");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
}