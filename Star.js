class Star {
  constructor(x, y, z) {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.a = random(200, 255);
  }

  update() {
    this.z = this.z - speed
    if (this.z < 1) {
      this.z = width
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  changeColor() {
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random(200, 255);
  }

  show() {
   
    fill(this.r, this.g, this.b, this.a);
    noStroke();

    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);

    let w = map(this.z, 0, width, 10, 0)

    ellipse(sx, sy, w, w);


    let px = map(this.x / this.pz, 0, 1, 0, width);
    let py = map(this.y / this.pz, 0, 1, 0, height)

    this.pz = this.z;

    let s = map(this.z, 0, width, 10, 0)
    strokeWeight(s);
    stroke(this.r, this.g, this.b, this.a);
    line(px, py, sx, sy);
  }
}