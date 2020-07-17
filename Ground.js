class Ground {

    constructor() {

        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(400, 650, 1600, 40, options);
        World.add(world, this.body);
    }

    display() {
        fill("pink");
        var pos = this.body.position
        rectMode(CENTER);
        rect(pos.x, pos.y, 800, 20);
    }
} 