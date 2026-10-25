const r = require("raylib");

function centerRectInRect(
  windowWidth,
  windowHeight,
  outRectW,
  outRectH,
  inRectW,
  inRectH,
) {
  r.InitWindow(windowWidth, windowHeight, "Vector");
  r.SetTargetFPS(60);

  while (!r.WindowShouldClose()) {
    let outRectPosX = (windowWidth - outRectW) / 2;
    let outRectPosY = (windowHeight - outRectH) / 2;

    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(outRectPosX, outRectPosY, outRectW, outRectH, r.WHITE);
    r.DrawRectangle(
      outRectPosX + (outRectW - inRectW) / 2,
      outRectPosY + (outRectH - inRectH) / 2,
      inRectW,
      inRectH,
      r.RED,
    );


    r.EndDrawing();


  }

  r.CloseWindow();

}

centerRectInRect(600, 800, 500, 540, 400, 360);

