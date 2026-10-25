const r = require("raylib");

function setup(
  windowW,
  windowH,
  noOfCircles,
  radius,
  rectTopLeftX,
  rectTopLeftY,
  rectRightDownX,
  rectRightDownY,
) {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowW, windowH, "Random number");
  r.SetTargetFPS(50);
  const pointsX = [];
  const pointsY = [];

  for (let i = 0; i < noOfCircles; i++) {
    pointsX.push(
      rectTopLeftX +
        Math.floor(Math.random() * (rectRightDownX - rectTopLeftX)),
    );
    pointsY.push(
      rectTopLeftY +
        Math.floor(Math.random() * (rectRightDownY - rectTopLeftY)),
    );
  }

  return { windowW, windowH, pointsX, pointsY, noOfCircles, radius };
}

function loop(world) {
  while (!r.WindowShouldClose()) {
    draw(world);
  }
}

function main() {
  const world = setup(800, 800, 200, 10, 200, 300, 700, 600);
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
