class Walker {
    constructor(x, y) {
        this.pos = createVector(x, y);
    }

    update() {
        let vel = this.vel = createVector(random(4), random(-4,4));
        this.pos.add(this.vel);
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

    show() {

        stroke(255);
        strokeWeight(2);
        fill(255, 100);
        ellipse(this.pos.x, this.pos.y, 2);
    }
}