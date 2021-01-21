function drawBricks() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status === 1) {
                var brickX = (r * (brickWidth + brickPadding)) + brickOffsetLeft;
                var brickY = (c * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                getCtx().beginPath();
                getCtx().rect(brickX, brickY, brickWidth, brickHeight);
                getCtx().fillStyle = "#0073aa";
                getCtx().fill();
                getCtx().closePath();
            }