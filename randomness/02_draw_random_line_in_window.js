const r = require("raylib");

function setup(windowW, windowH, noOfLines) {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowW, windowH, "Random number");
  r.SetTargetFPS(50);
  const points = [];

  for (let i = 0; i < noOfLines; i++) {
    points.push(Math.floor(Math.random() * windowW));
  }

  return { windowW, windowH, points, noOfLines };
}

function loop(world) {
  while (!r.WindowShouldClose()) {
    draw(world);
  }
}

function color() {
  return {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
    a: 255,
  };
}

function main() {
  const world = setup(800, 800, 100);
  loop(world);
  teardown();
}

function teardown() {
  return r.CloseWindow();
}

function drawLine(world) {
  for (let i = 0; i < world.noOfLines; i++) {
    r.DrawLineEx(
      { x: world.points[i], y: 0 },
      { x: world.points[i], y: world.windowH },
      1,
      r.BLUE,
    );
  }
}

function draw(world) {
  r.BeginDrawing();
  drawLine(world);
  r.EndDrawing();
}

main();
