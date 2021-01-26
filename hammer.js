class Hammer {
    constructor(x,y) {
      var options = {
          'restitution':0.5,
          'friction':1,
          'density':2
         
      }
      this.body = Bodies.rectangle(x, y, 100,20, options);
      this.width = 100;
      this.height = 20;
      
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("yellow");
        rect(0,0, this.width, this.height);
        pop()
      }
  }