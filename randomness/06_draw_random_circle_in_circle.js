const r = require("raylib");

function setup(windowW, windowH, noOfCircles, radius) {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowW, windowH, "Random number");
  r.SetTargetFPS(50);
  const pointsX = [];
  const pointsY = [];

  for (let i = 0; i < noOfCircles; i++) {
    const angle = Math.floor(Math.random() * 91);
    const r = Math.floor(Math.random() * (windowH + 1));
    pointsX.push(r * Math.cos((angle * Math.PI) / 180));
    pointsY.push(r * Math.sin((angle * Math.PI) / 180));
  }

  return { windowW, windowH, pointsX, pointsY, noOfCircles, radius };
}

function loop(world) {
  while (!r.WindowShouldClose()) {
    draw(world);
  }
}

function main() {
  const world = setup(800, 400, 100, 10);
  loop(world);
  teardown();
}

function teardown() {
  return r.CloseWindow();
}

function drawCircle(world) {
  for (let i = 0; i < world.noOfCircles; i++) {
    r.DrawCircle(world.pointsX[i], world.pointsY[i], world.radius, r.WHITE);
  }
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLUE);
  drawCircle(world);
  r.DrawCircleLines(0, 0, world.windowH, r.WHITE);
  //   r.DrawCircle(
  //     (world.windowH / 2) * Math.cos((45 * Math.PI) / 180),
  //     (world.windowH / 2) * Math.sin((45 * Math.PI) / 180),
  //     world.radius,
  //     r.YELLOW,
  //   );
  r.EndDrawing();
}

main();
