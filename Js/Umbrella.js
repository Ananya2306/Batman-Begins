class Umbrella{
    constructor(x,y){
var options ={
    // giveisStaic true 
    isStatic : true
}
    
// give shape of the body and add image to it
    this.body = Bodies.rectangle(x, y, width,height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("Image/img.png");
    World.add(world, this.body);
}
    // make display function to give the height and width and angle of the body + image
display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 200,300);
    pop();
  };
}
