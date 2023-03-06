class Mover {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(3));
        // this.acc = p5.Vector.random2D();

    }

    update() {

        let mouse = createVector(mouseX, mouseY);
        this.acc = p5.Vector.sub(mouse, this.pos);
        this.acc.setMag(1);

        //this.acc = p5.Vector.random2D();
        this.vel.add(this.acc);
        //this.acc.setMag(0.001);

        this.vel.limit(2);
        this.pos.add(this.vel);

    }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(255, 100);
        ellipse(this.pos.x, this.pos.y, 32);
    }

    edges() {
        if (this.pos.x > width) {
            this.pos.x = 0;
        } else if (this.pos.x < 0) {
            this.pos.x = width;
        }
        if (this.pos.y > height) {
            this.pos.y = 0;
        } else if (this.pos.y < 0) { 
            this.pos.y = height;
        }

    }
}