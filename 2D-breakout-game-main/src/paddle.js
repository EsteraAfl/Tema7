function drawPaddle() {
	getCtx().beginPath();
	getCtx().rect(paddleX, getCanvas().height - paddleHeight, paddleWidth, paddleHeight);
	getCtx().fillStyle = "#0073aa";
	getCtx().fill();
    getCtx().closePath();
    





    function getPaddleHeight() {
        return paddleHeight;
    }
    
    function setPaddleHeight(number) {
        paddleHeight = number;
    }
    
    function getPaddleWidth() {
        return paddleWidth;
    }
    
    function setPaddleWidth(number) {
        paddleWidth = number;
    }
    
    function getPaddleX() {
        return paddleX;
    }
    
    function setPaddleX(number) {
        paddleX = number;
    }