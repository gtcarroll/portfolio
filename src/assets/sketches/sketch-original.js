/* eslint-disable */
const p = {
  g1: 0,
  g2: 0,
  a: 0,
  b1: 0,
  b2: 0,
  e: 0,
};
const spring = {
  velocity: 0.1,
  displacement: 0.1,
  stiffness: 300,
  damping: 0.3,
  mass: 3,
};
const frames = {
  max: 270,
  letter: 120,
  offset: 20,
};

let canvas; // the p5 canvas
let colors;
let frame = 0;
let reachedMax = false;

export function setup() {
  let sketch = document.querySelector("#sketch");
  let canvas = createCanvas(700, 350);
  canvas.parent(sketch);

  colors = {
    bg: color(255, 241, 152),
    fg1: color(255, 161, 152),
    fg2: color(152, 224, 255),
  };

  noStroke();
  ellipseMode(CORNER);
  createCanvas(700, 350);
}

export function draw() {
  // console.log("drawing");
  if (frame < frames.max) {
    // update timing values
    p.g1 = springPercent(frame / frames.letter);
    p.g2 = springPercent(
      Math.max(0, (frame - frames.offset / 2) / frames.letter)
    );
    p.a = springPercent(Math.max(0, (frame - frames.offset) / frames.letter));
    p.b1 = springPercent(
      Math.max(0, (frame - 2 * frames.offset) / frames.letter)
    );
    p.b2 = springPercent(
      Math.max(0, (frame - (5 * frames.offset) / 2) / frames.letter)
    );
    p.e = springPercent(
      Math.max(0, (frame - 3 * frames.offset) / frames.letter)
    );

    // draw letters
    background(colors.bg);
    drawG(50, 100, 150, p.g1, p.g2);
    drawB(350, 100, 150, p.b1, p.b2);
    drawE(500, 100, 150, p.e);
    drawA(200, 100, 150, p.a);

    frame++;
  }
}

function springPercent(t) {
  const d = spring.damping * 3 * Math.sqrt(spring.stiffness * spring.mass);
  const alpha = -d / (2 * spring.mass);
  const b = Math.pow(d, 2) - 4 * spring.mass * spring.stiffness;
  const beta = Math.sqrt(-b) / (2 * spring.mass);
  const c1 = spring.displacement;
  const c2 = (spring.velocity - c1 * alpha) / beta;

  const y =
    c1 * Math.exp(alpha * t) * Math.cos(beta * t) +
    c2 * Math.exp(alpha * t) * Math.sin(beta * t);

  return 1 - y * 10;
}

function drawG(x, y, w, p1, p2) {
  // draw circle
  let c = {
    x: x + ((3 * w) / 5) * (1 - p2),
    y: y + ((3 * w) / 5) * (1 - p2),
    w: w,
  };
  fill(colors.fg2);
  ellipse(c.x, c.y, c.w);

  // draw mask
  let mask = {
    x: x + (5 * w) / 3,
    y: y + (5 * w) / 3,
    w: (6 * w) / 3,
  };
  fill(colors.bg);
  triangle(mask.x, mask.y, mask.x - mask.w, mask.y, mask.x, mask.y - mask.w);

  // draw triangle
  let tri = {
    x: x + (9 * w) / 10 - (w / 2) * (1 - p1),
    y: y + w + (w / 2) * (1 - p1),
    w: (2 * w) / 5,
    fill: colors.fg1,
  };
  fill(tri.fill);
  triangle(tri.x, tri.y, tri.x, tri.y - tri.w, tri.x - tri.w, tri.y - tri.w);
}

function drawA(x, y, w, p) {
  // draw triangle
  let tri = {
    x: x + w / 10,
    y: y + w + w * (1 - p),
    h: w,
  };
  // const yMax = Math.max(y + w, tri.y);
  let yMax = tri.y;
  if (tri.y < y + w || reachedMax) {
    reachedMax = true;
    yMax = y + w;
  }

  fill(colors.fg1);
  triangle(
    tri.x,
    yMax,
    tri.x + (4 * w) / 5,
    yMax,
    tri.x + (2 * w) / 5,
    tri.y - tri.h
  );

  // draw mask
  fill(colors.bg);
  rect(x, y + w, w, tri.h);
}

function drawB(x, y, w, p1, p2) {
  // draw top circle
  let c1 = {
    x: x - (w / 3) * (1 - p1),
    y: y,
    w: w / 2,
  };
  fill(colors.fg1);
  ellipse(c1.x, c1.y, c1.w);

  // draw bottom circle
  let c2 = {
    x: x - (w / 2) * (1 - p2),
    y: y + w / 3,
    w: (2 * w) / 3,
  };
  fill(colors.fg2);
  ellipse(c2.x, c2.y, c2.w);

  // draw mask
  fill(colors.bg);
  rect(x - w / 2, y, (2 * w) / 3, w);
}

function drawE(x, y, w, p) {
  // draw rect
  let r = {
    x: x + (3 * w) / 5,
    y: y,
    w: ((3 * w) / 5) * p,
    h: w,
  };
  fill(colors.fg1);
  rect(r.x - r.w, r.y, r.w, r.h);
}
