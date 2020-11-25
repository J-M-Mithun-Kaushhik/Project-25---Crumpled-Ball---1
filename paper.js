class Paper {
    constructor(x, y, radius) {
      this.body = Bodies.circle(x, y, radius, height,options);
      this.radius = radius;
      World.add(world, this.body);

      var options ={
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
      }
    }
    display(){
      var pos =this.body.position;
      fill("pink");
      circle(pos.x,pos.y,this.radius*2);
    }
  }
  