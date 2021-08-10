class Rope
{
    constructor(bodyA,pointB)
    {
        var option={
            bodyA:bodyA,
            pointB:pointB,
            length:100,
            stiffness:0.05      
          }
          this.pointB=pointB
          this.bodyA=bodyA

          this.sling=Constraint.create(option)

          World.add(world,this.sling)

    }

fly()
{
this.sling.bodyA=null


}


    display()
    {
if(this.sling.bodyA){

var pointA= this.sling.bodyA.position
var pointB= this.pointB

stroke("Orange")
strokeWeight(5)
line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}

}


