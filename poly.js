class Poly{
    constructor(bodyA, pointB){


        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
            

        }
        
        this.pointB = pointB
        this.rope = Constraint.create(options);
       
        World.add(world, this.rope);
    }

    fly(){
        this.rope.bodyA = null;
    }

    display(){
       // image(this.sling1,200,20)
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(7);
            stroke("#301608")

                line(pointA.x-20, pointA.y, pointB.x-15, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y);

            

            
            
            
        }
    }
    
}