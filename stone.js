  class Stone {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("PLucking mangoes/stone.png")
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
    }

  };

  