const r = require("raylib");

function createData(sizeOfData, height) {
  let data = [];

  for (let i = 0; i < sizeOfData; i++) {
    data.push(Math.floor(height * Math.random()));
    // data.push(i);
  }
  return data;
}

function largestElement(arr) {
  let larg = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (larg < arr[i]) larg = arr[i];
  }

  return larg;
}

function average(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

function setup(windowW, windowH, sizeOfData, barWidth, gapWidth) {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowW, windowH, "Bar Chart");
  r.SetTargetFPS(60);
  const data = createData(sizeOfData, windowH);

  return { windowW, windowH, barWidth, gapWidth, data };
}

function drawBars(bar) {
  for (let i = 0; i < bar.data.length; i++) {
    const recX = i * bar.gapWidth + i * bar.barWidth;
    const recY =
      bar.windowH -
      (bar.data[i] / largestElement(bar.data)) * 0.9 * bar.windowH;
    r.DrawRectangle(recX, recY, bar.barWidth, bar.windowH, r.DARKBLUE);
  }
}

function drawAverageLine(bar) {
  const lineY =
    bar.windowH -
    (average(bar.data) / largestElement(bar.data)) * 0.9 * bar.windowH;

  r.DrawLine(0, lineY, bar.windowW, lineY, r.RED);
}

function draw(bar) {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  drawBars(bar);
  drawAverageLine(bar);
  r.EndDrawing();
}

function loop(bar) {
  while (running()) {
    draw(bar);
  }
  teardown();
}

function teardown() {
  return r.CloseWindow();
}

function running() {
  return !r.WindowShouldClose();
}

function main() {
  const bar = setup(900, 800, 200, 5, 2);
  loop(bar);
}

main();
