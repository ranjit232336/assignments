const r = require("raylib");

function connectPointsOnEllipse(p1, p2, color) {
  r.DrawLineEx(p1, p2, 5, color);
}

function drawEllipse(ellipse) {
  let i = 0;
  for (; i < ellipse.points.length - 1; i++) {
    connectPointsOnEllipse(
      ellipse.points[i],
      ellipse.points[i + 1],
      ellipse.color,
    );
  }

  connectPointsOnEllipse(ellipse.points[i], ellipse.points[0], ellipse.color);
}

function draw(ellipse) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  drawEllipse(ellipse);

  r.EndDrawing();
}

function running() {
  return !r.WindowShouldClose();
}

function loop(world) {
  while (running()) {
    draw(world.ellipse);
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

function createPoint(X, Y) {
  return { x: X, y: Y };
}

function generatePointsOnEllipse(angle, ellipse) {
  const points = [];

  for (let i = 0; i < 360; i++) {
    points.push(
      createPoint(
        ellipse.x + ellipse.horizontalRadius * sin(i * angle),
        ellipse.y + ellipse.verticleRadius * cos(i * angle),
      ),
    );
  }

  return points;
}

function setup(windowW, windowH) {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowW, windowH, "Polygon");
  r.SetTargetFPS(50);

  const angularDisplacement = 1;

  const ellipse = {
    x: 300,
    y: 200,
    horizontalRadius: 200,
    verticleRadius: 100,
    color: generateColor(),
  };

  ellipse.points = generatePointsOnEllipse(angularDisplacement, ellipse);

  return { ellipse };
}

function main() {
  const world = setup(600, 600);
  loop(world);
  teardown();
}

main();
