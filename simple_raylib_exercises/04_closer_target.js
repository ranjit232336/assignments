const r = require("raylib");

const windowW = 1000;
const windowH = 900;


function setup() {
    r.InitWindow(windowW, windowH, "Closer Target");
    r.SetTargetFPS(60);
}


const sourceX = 0.25 * windowW;
const sourceY = 0.5 * windowH;
const RADIUS = 30;
const t1X = 2 / 3 * windowW;
const t1Y = 1 / 3 * windowH;
const t2X = 8 / 9 * windowW;
const t2Y = 0.9 * windowH;


function sqr(x) {
    return x * x;
}


function distance(x1, y1, x2, y2) {
    return sqr(x1 - x2) + sqr(y1 - y2);
}


let tX = t1X;
let tY = t1Y;


if (distance(sourceX, sourceY, t2X, t2Y) < distance(sourceX, sourceY, t1X, t1Y)) {

    tX = t2X;
    tY = t2Y;
}

function drawCircle() {
    r.DrawCircle(sourceX, sourceY, RADIUS, r.RED);
    r.DrawCircle(t1X, t1Y, RADIUS, r.BLUE);
    r.DrawCircle(t2X, t2Y, RADIUS, r.BLUE);
}


function drawLine() {
    r.DrawLine(sourceX, sourceY, tX, tY, r.BLACK);
}


function draw() {
    drawCircle();
    drawLine();

}


function loop() {


    while (!r.WindowShouldClose()) {
        r.BeginDrawing();
        r.ClearBackground(r.WHITE);
        drawCircle();
        drawLine();
        r.EndDrawing();


    }
    r.CloseWindow();


}

function main() {
    setup();
    loop();

}


main();