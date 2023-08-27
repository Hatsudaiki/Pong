const ball = document.getElementById("ball");
const paddle = document.getElementById("paddle");

let ballX = 300;
let ballY = 200;
let ballSpeedX = 5;
let ballSpeedY = 3;

let paddleY = 150;

function updateGameArea() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballX >= 590 || ballX <= 0) {
    ballSpeedX *= -1;
  }

  if (ballY >= 390 || ballY <= 0) {
    ballSpeedY *= -1;
  }

  if (
    ballY + ballSpeedY > paddleY &&
    ballY + ballSpeedY < paddleY + 100 &&
    ballX + ballSpeedX > 590 - 10
  ) {
    ballSpeedX *= -1;
  }

  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" && paddleY > 0) {
    paddleY -= 10;
  } else if (event.key === "ArrowDown" && paddleY < 300) {
    paddleY += 10;
  }

  paddle.style.top = paddleY + "px";
});

setInterval(updateGameArea, 16);
