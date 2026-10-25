const r = require("raylib");

function rectInRect(
  windowWidth,
  windowHeight,
  outRectPosX,
  outRectPosY,
  outRectW,
  outRectH,
) {
  const inRectH = 0.8 * outRectH;
  const inRectW = 0.8 * outRectW;


  r.InitWindow(windowWidth, windowHeight, "Vector");
  r.SetTargetFPS(60);


  while (!r.WindowShouldClose()) {
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


rectInRect(600, 800, 130, 140, 340, 370); 
