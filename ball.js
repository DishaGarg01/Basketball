class Ball
{
    constructor(x,y,r)

    {
        var options={
            restitution:1,
            friction:1,
            density:0.05
        }
        this.body=Bodies.circle(x,y,r,options)
        this.r=r

this.image=loadImage("basketball.jpg")

        World.add(world,this.body)
    }

    display()
    {
        var pos=this.body.position
        var angle=this.body.angle

        push()
translate(pos.x,pos.y)

rotate(angle)

imageMode(CENTER)
image(this.image,0,0,this.r)

pop()


    }
}