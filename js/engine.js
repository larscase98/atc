let _TICKER;

const COLORS = {
  dark: "#0e3526"
}

function start(intervalLength = 1000) {
  _TICKER = setInterval(() => {
    tick();
  }, intervalLength);
}

function pause() {
  clearInterval(_TICKER);
}

function tick() {
  console.log('tick');


  ctx.fillStyle = COLORS.dark;
  ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

  aircraft.forEach(a => {
    a.tick();
  });
}

function submitCommand(command) {}

function receiveMessage(message, sender, timestamp = null) {
  let li = ce('li');
  li.innerText = `${sender} : ${message}`;

  gebid('incoming').appendChild(li);
}
