class Paper {
    constructor(x,y,r){
        var options={
        //bouncy thing
        restitution:0.3,
        //friction is friction
        friction:0,
        //and density is density
        density:1.2

        }
        this.body=Bodies.circle(x,y,(r-20)/2,options)
        World.add(world,this.body)
        this.radius=r;
        this.image=loadImage("sprites/paper (1).png")
    }
    display(){
        var paperPos=this.body.position;
        push ()
        //rectMode(CENTER);
        translate (paperPos.x,paperPos.y)
        //rotate (this.angle)
        image (this.image,0,0,this.radius,this.radius)
        pop ()
    }
}