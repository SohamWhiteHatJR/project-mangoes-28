class Tree{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'isStatic' : true,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.image = loadImage("Plucking mangoes/tree.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 485,485);
        pop();
      }
}