
var ballRadius = 10;
var x = getCanvas().width / 2;
var y = getCanvas().height - 30;
var dx = 2;
var dy = -2;


function drawBall() {
    getCtx().beginPath();
    getCtx().arc(x, y, ballRadius, 0, Math.PI * 2);
    getCtx().fillStyle = "#0073aa";
    getCtx().fill();
    getCtx().closePath();
















function getX() {
    return x;
}

function setX(number) {
    x = number;
}

function getY() {
    return y;
}

function setY(number) {
    y = number;
}

function getDx() {
    return dx;
}

function setDx(number) {
    dx = number;
}

function getDy() {
    return dy;
}

function setDy(number) {
    dy = number;
}