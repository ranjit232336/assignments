const r = require("raylib");

const windowW = 700;
const windowH = 800;
const c1X = 100;
const c1Y = 120;
const c1R = 30;
const c2X = 120;
const c2Y = 150;
const c2R = 30;

function setup() {
    r.InitWindow(windowW, windowH, " Intersecting Circles ");
    r.SetTargetFPS(60);
}


function update() {
    r.ImageClearBackground(r.WHITE);
}


function draw() {

}

function sqrt(x) {
    return x ** 0.5;
}

function sqr(x) {
    return x * x;
}


function distance() {
    return sqrt(sqr(c1X - c2X) + sqr(c1Y - c2Y));
}

function choseColor() {
    if (distance() > c1R + c2R) return r.BLACK;
    return r.RED;

}


function drawCircle() {
    r.DrawCircle(c1X, c1Y, c1R, choseColor());
    r.DrawCircle(c2X, c2Y, c2R, choseColor());

}


function loop() {


    while (!r.WindowShouldClose()) {

        r.BeginDrawing();
        r.ClearBackground(r.WHITE);
        drawCircle();

        r.EndDrawing();

    }

    r.CloseWindow();

}


function main() {
    setup();
    loop();
}

main();