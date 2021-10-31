function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const rgbColor = document.querySelector('#rgb-color');

function generateColor() {
  rgbColor.innerText = `rgb(${random(0, 256)}, ${random(0, 256)}, ${random(0, 256)})`;
}

generateColor();

function generateOptions() {
  const containerBalls = document.querySelector('#container-balls');
  const ordem = random(0, 6);
  for (let i = 0; i < 6; i += 1) {
    if (ordem === i) {
      const ball = document.createElement('span');
      ball.classList.add('ball');
      ball.style.backgroundColor = rgbColor.innerText;
      containerBalls.appendChild(ball);
    } else {
      const ball = document.createElement('span');
      ball.classList.add('ball');
      ball.style.backgroundColor = `rgb(${random(0, 256)}, ${random(0, 256)}, ${random(0, 256)})`;
      containerBalls.appendChild(ball);
    }
  }
}

generateOptions();

function checkAnswer(e) {
  const color = rgbColor.innerText;
  const answer = document.querySelector('#answer');
  const element = e.target;
  if (element.id !== 'container-balls') {
    const elementColor = element.style.backgroundColor;
    if (color === elementColor) {
      answer.innerText = 'Acertou!';
    } else {
      answer.innerText = 'Errou! Tente novamente!';
    }
  }
}

document.querySelector('#container-balls').addEventListener('click', checkAnswer);
