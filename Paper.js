class Paper {

    constructor() {
        var options = {
            isStatic: false,
            density: 1.5,
            friction: 1.5
        }

        this.body = Bodies.circle(200, 300, 70, options);
        World.add(world, this.body);
        this.image=loadImage("paper.png");
    }

    display() {
        fill("pink");
        var pos=this.body.position
        ellipseMode(CENTER);
        ellipse(this.body, 50, 600 ,70,70)
        imageMode(CENTER);
        image(this.image, pos.x, pos.y ,70,70);
    }
}