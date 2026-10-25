const r = require("raylib");

function setup(windowW, windowH, noOfCircles, radius) {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowW, windowH, "Random number");
  r.SetTargetFPS(50);
  const pointsX = [];
  const pointsY = [];

  for (let i = 0; i < noOfCircles; i++) {
    pointsX.push(Math.floor(Math.random() * windowW));
    pointsY.push(Math.floor(Math.random() * windowH));
  }

  return { windowW, windowH, pointsX, pointsY, noOfCircles, radius };
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
  const world = setup(800, 800, 500, 10);
  loop(world);
  teardown();
}

function teardown() {
  return r.CloseWindow();
}

function drawLine(world) {
  for (let i = 0; i < world.noOfCircles; i++) {
    r.DrawCircle(world.pointsX[i], world.pointsY[i], world.radius, r.WHITE);
  }
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.SKYBLUE);
  drawLine(world);
  r.EndDrawing();
}

main();
