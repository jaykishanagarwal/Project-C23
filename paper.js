class paper {
    constructor(x,y,width,height){
        var option={
            isStatic : false,
            rectitution : 0.3,
            friction :0.5,
            density :1.2
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        World.add(world,this.body);


    }
    display(){
        var position=this.body.position;
        rectMode(CENTER);
        fill(0,0,255);
        rect(position.x,position.y,this.width,this.height);
    }
};