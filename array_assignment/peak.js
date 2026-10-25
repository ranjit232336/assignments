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

function peakElement(arr) {
  const peakIndex = [];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) peakIndex.push(i);
  }

  return peakIndex;
}

function setup(windowW, windowH, sizeOfData, barWidth, gapWidth) {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowW, windowH, "Peak");
  r.SetTargetFPS(60);
  const data = createData(sizeOfData, windowH);

  return { windowW, windowH, barWidth, gapWidth, data };
}

function drawLine(metaData) {
  let lineX = 0;
  for (let i = 1; i < metaData.data.length; i++) {
    const lineY1 =
      metaData.windowH -
      (metaData.data[i - 1] / largestElement(metaData.data)) *
        0.9 *
        metaData.windowH;
    const lineY2 =
      metaData.windowH -
      (metaData.data[i] / largestElement(metaData.data)) *
        0.9 *
        metaData.windowH;

    r.DrawLine(lineX, lineY1, lineX + 20, lineY2, r.BLACK);

    lineX += 20;
  }
}

function drawPeaks(metaData) {
  const peakIndex = peakElement(metaData.data);
  for (let i = 0; i < peakIndex.length; i++) {
    const X = peakIndex[i] * 20;
    const Y =
      metaData.windowH -
      (metaData.data[peakIndex[i]] / largestElement(metaData.data)) *
        0.9 *
        metaData.windowH;
    r.DrawCircle(X, Y, 5, r.RED);
  }
}

function draw(metaData) {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  drawLine(metaData);
  drawPeaks(metaData);
  r.EndDrawing();
}

function loop(metaData) {
  while (running()) {
    draw(metaData);
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
  const metaData = setup(900, 800, 40, 5, 2);
  loop(metaData);
}

main();
