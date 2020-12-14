class Man {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
        this.image=loadImage("walking_1.png");
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        this.scale=0.2;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,350,720,190,190);
    }
};