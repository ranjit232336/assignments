const r = require("raylib");

function draw(points, angle) {
  r.BeginDrawing();
  r.ClearBackground(r.GRAY);

  r.DrawTriangle(points.p1, points.p3, points.p2, r.MAGENTA);
  r.DrawText(
    `Angle :${Math.round((angle * 180) / Math.PI)}`,
    50,
    550,
    30,
    r.SKYBLUE,
  );

  r.EndDrawing();
}

function running() {
  return !r.WindowShouldClose();
}

function loop(world) {
  while (running()) {
    draw(world.points, world.angleWithHorizontal);
  }
}

function teardown() {
  return r.CloseWindow();
}

function distance(p1, p2) {
  return ((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2) ** 0.5;
}

function calculateThirdPoint(p1, p2, angle) {
  const p3 = { y: p1.y };

  p3.x = p1.x + distance(p1, p2) * Math.cos(angle);

  if (p1.x > p2.x) {
    p3.x = p1.x - distance(p1, p2) * Math.cos(angle);
  }

  return p3;
}

function slope(p1, p2) {
  return (p2.y - p1.y) / (p2.x - p1.x);
}

function setup(windowW, windowH) {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowW, windowH, "Angle");
  r.SetTargetFPS(50);

  const points = {
    p1: { x: 100, y: 300 },
    p2: { x: 350, y: 150 },
  };

  const angleWithHorizontal = Math.abs(Math.atan(slope(points.p1, points.p2)));

  points.p3 = calculateThirdPoint(points.p1, points.p2, angleWithHorizontal);

  return { points, angleWithHorizontal };
}

function main() {
  const world = setup(600, 600);

  loop(world);
  teardown();
}

main();
