function random(min, max) {
  return Math.floor(Math.random() * (max-min) + min);
}

function generateColor() {
  const pai = document.querySelector('#rgb-color');
  pai.innerText = `rgb(${random(0, 256)}, ${random(0, 256)}, ${random(0, 256)})`;
}

function generateOptions() {
  const containerBalls = document.querySelector('#container-balls');
  let ordem = random(0, 6)
  for (let i = 0; i < 6; i++) {
    if(ordem === i) {
      let ball = document.createElement('span');
      ball.classList.add('ball');
      ball.style.backgroundColor = document.querySelector('#rgb-color').innerText;
      containerBalls.appendChild(ball);
    } else {
      let ball = document.createElement('span');
      ball.classList.add('ball');
      ball.style.backgroundColor = `rgb(${random(0, 256)}, ${random(0, 256)}, ${random(0, 256)})`;
      containerBalls.appendChild(ball);
    }
  }
}

generateColor();
generateOptions();
