class Basket
{
    constructor(x,y,width,height)
    {
        var option ={
        isStatic:true
        }
        this.width=width
        this.height=height

        this.body=Bodies.rectangle(x,y,width,height,option)

        this.image=loadImage("basket.jpg")


        World.add(world,this.body)
    }

    display()
    {
var pos=this.body.position

push()

imageMode(CENTER)
image(this.image,pos.x,pos.y,this.width,this.height)

    }
}