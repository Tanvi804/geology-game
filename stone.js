class Stone {
    constructor(x, y) {
      var options = {
          'restitution':0.2,
          'friction':5,
          'density':3
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      console.log(this.body)
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("grey");
      rect(0,0, this.width, this.height);
      pop();
    }
  }