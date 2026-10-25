const r = require("raylib");

function drawPolygonSide(p1, p2, color) {
  r.DrawLineEx(p1, p2, 5, color);
}

function drawPolygon(polygon) {
  let i = 0;
  for (; i < polygon.noOfSides - 1; i++) {
    drawPolygonSide(polygon.points[i], polygon.points[i + 1], polygon.color);
  }

  drawPolygonSide(polygon.points[i], polygon.points[0], polygon.color);
}

function draw(polygon) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  drawPolygon(polygon);

  r.EndDrawing();
}

function running() {
  return !r.WindowShouldClose();
}

function loop(world) {
  while (running()) {
    draw(world.polygon);
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

function createVertexPoint(X, Y) {
  return { x: X, y: Y };
}

function generateVertexPoints(angle, polygon) {
  const points = [];

  for (let i = 0; i < polygon.noOfSides; i++) {
    points.push(
      createVertexPoint(
        polygon.x + polygon.r * sin(((2 * i + 1) / 2) * angle),
        polygon.y + polygon.r * cos(((2 * i + 1) / 2) * angle),
      ),
    );
  }

  return points;
}

function setup(windowW, windowH, radius, noOfSides) {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowW, windowH, "Polygon");
  r.SetTargetFPS(50);

  const angularDisplacement = 360 / noOfSides;

  const polygon = {
    x: windowW / 2,
    y: windowH / 2,
    r: radius,
    color: generateColor(),
    noOfSides,
  };

  polygon.points = generateVertexPoints(angularDisplacement, polygon);

  return { polygon };
}

function main() {
  const world = setup(400, 400, 150, 7);
  loop(world);
  teardown();
}

main();
