class Dustbin{
    constructor(x,y){
        this.width=200;
        this.height=200;
        this.thickness=20;                      
        this.angle=0;
        this.bottomBody=Bodies.rectangle(x,y,this.width,this.thickness,{isStatic:true})
        this.leftBody=Bodies.rectangle(x-this.width/2,y-this.height/2,this.thickness,this.height,{isStatic:true})
        this.rightBody=Bodies.rectangle(x+this.width/2,y-this.height/2,this.thickness,this.height,{isStatic:true})
        World.add(world,this.bottomBody)
        World.add(world,this.leftBody)
        World.add(world,this.rightBody)

        this.image=loadImage("sprites/dustbin.png")
    }
    display(){
        var posBottom=this.bottomBody.position;
        var posLeft=this.leftBody.position;
        var posRight=this.rightBody.position;
        push ()
        rectMode(CENTER);
        translate (posLeft.x,posLeft.y)
        rotate (this.angle)
        //rect (0,0,this.thickness,this.height)
        pop ()


        push ()
        rectMode(CENTER);
        translate (posRight.x,posRight.y)
        rotate (-1*this.angle)
        //rect (0,0,this.thickness,this.height)
        pop ()


        push ()
        rectMode(CENTER);
        translate (posBottom.x,posBottom.y)
        rotate (this.angle)
        image (this.image,0-150,0-this.height/2-50,this.width,this.height)
        pop ()
    }
}