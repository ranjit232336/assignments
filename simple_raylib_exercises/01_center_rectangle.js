const r = require("raylib");


function rectAtCentre(windowWidth, windowHeight, FPS, rectWidth, rectHeight) {
  r.InitWindow(windowWidth, windowHeight, "Vector");
  r.SetTargetFPS(FPS);

  while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(
      (windowWidth - rectWidth) / 2,
      (windowHeight - rectHeight) / 2,
      rectWidth,
      rectHeight,
      r.RED,
    );

    r.EndDrawing();

  }

  r.CloseWindow();

}


rectAtCentre(820, 800, 80, 450, 550);

