const r = require("raylib");

function drawCircle(circle) {
  r.DrawCircle(circle.x, circle.y, circle.r, circle.color);
}

function drawPoints(points) {
  for (let i = 0; i < 12; i++) {
    drawCircle(points[i]);
  }
}

function draw(circle, points) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  drawCircle(circle);
  drawPoints(points);
  r.EndDrawing();
}

function running() {
  return !r.WindowShouldClose();
}

function loop(world) {
  while (running()) {
    draw(world.circle, world.points);
  }
}

function teardown() {
  return r.CloseWindow();
}

function sin(angle) {
  return Math.sin((Math.PI * angle) / 180);
}

function cos(angle) {
  return Math.cos((Math.PI * angle) / 180);
}

function generateColor() {
  return {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
    a: 255,
  };
}

function createPoint(x, y, r, color) {
  return { x, y, r, color };
}

function generatePoints(angle, circle) {
  const points = [];

  for (let i = 0; i < 12; i++) {
    points.push(
      createPoint(
        circle.x + circle.r * sin(i * angle),
        circle.y + circle.r * cos(i * angle),
        10,
        generateColor(),
      ),
    );
  }

  return points;
}

function setup(windowW, windowH, radius) {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowW, windowH, "Circle Points");
  r.SetTargetFPS(50);

  const angularDisplacement = 360 / 12;

  const circle = {
    x: windowW / 2,
    y: windowH / 2,
    r: radius,
    color: generateColor(),
  };

  const points = generatePoints(angularDisplacement, circle);

  return { circle, points };
}

function main() {
  const world = setup(400, 400, 150);
  loop(world);
  teardown();
}

main();
