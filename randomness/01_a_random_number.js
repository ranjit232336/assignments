const r = require("raylib");

function setup(windowW, windowH, radius) {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowW, windowH, "Random number");
  r.SetTargetFPS(80);

  return { windowW, windowH, radius };
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
  const world = setup(800, 800, 5);
  loop(world);
  teardown();
}

function teardown() {}

function draw(world) {
  const x =
    world.radius +
    Math.floor(Math.random() * (world.windowW - 2 * world.radius));
  const y =
    world.radius +
    Math.floor(Math.random() * (world.windowH - 2 * world.radius));
  r.BeginDrawing();
  //   r.ClearBackground(r.BLACK);

  r.DrawCircle(x, y, world.radius, color());

  r.EndDrawing();
}

main();
