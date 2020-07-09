let canvas
let h1
let h2
let stars = [];
let speed;
let x = 300
let y = 50
let button
let button1
let slider


function setup() {
  canvas = createCanvas(displayWidth, 400);
  canvas.position(0, 2 / 6 * height);

  // background(0);

  h1 = createElement('h1', 'MP/H');
  h2 = createElement('h2', '0');
  h1.position(330, 50);
  h2.position(300, 88);

  button = createButton('Blast Off')
  button.mousePressed(begin)

  for (let i = 0; i < 1000; i++) {
    stars[i] = new Star()
    //stars[i].show();
    stars[i].update()
  }

  slider = createSlider(0, 70, 35)


}

function begin() {

  for (let i = 0; i < 1000; i++) {
    stars[i] = new Star()
    //stars[i].show();
    stars[i].update()

  }
  if (button1) {} else {
    button1 = createButton('Cosmic')
  }
  button1.mousePressed(cosmic)
}

function cosmic() {
  for (let star of stars) {
    star.changeColor();
  }
}

function draw() {
  background(0);
  speed = slider.value()
  //maps h2 to the speed of light with mouseX
  c = map(speed, 0, 70, 0, 671000000);
  if (button1) {
    h2.html(c)
  } else { h2.html(0)}

  //maps the speed of stars to mouseX


  //positions the reference point to the middle of the canvas
  translate(width / 2, height / 2);

  //button.mousePressed(begin)
  //begin();


  for (let star of stars) {
    star.update();
    star.show();
  }
}