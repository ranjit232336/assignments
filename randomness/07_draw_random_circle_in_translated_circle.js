const r = require("raylib");

function setup(
  windowW,
  windowH,
  noOfCircles,
  radius,
  circleX,
  circleY,
  circleR,
) {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowW, windowH, "Random number");
  r.SetTargetFPS(50);
  const pointsX = [];
  const pointsY = [];

  for (let i = 0; i < noOfCircles; i++) {
    const angle = Math.floor(Math.random() * 361);
    const r = Math.floor(Math.random() * (circleR + 1));
    pointsX.push(circleX + r * Math.cos((angle * Math.PI) / 180));
    pointsY.push(circleY + r * Math.sin((angle * Math.PI) / 180));
  }

  return {
    windowW,
    windowH,
    pointsX,
    pointsY,
    noOfCircles,
    radius,
    circleX,
    circleY,
    circleR,
  };
}

function loop(world) {
  while (!r.WindowShouldClose()) {
    draw(world);
  }
}

function main() {
  const world = setup(800, 800, 2000, 5, 400, 400, 300);
  loop(world);
  teardown();
}

function teardown() {
  return r.CloseWindow();
}

function drawCircle(world) {
  for (let i = 0; i < world.noOfCircles; i++) {
    r.DrawCircle(world.pointsX[i], world.pointsY[i], world.radius, r.YELLOW);
  }
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLUE);
  r.DrawCircleLines(world.circleX, world.circleY, world.circleR, r.WHITE);
  drawCircle(world);

  r.EndDrawing();
}

main();
