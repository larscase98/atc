let _TICKER;

function start(intervalLength) {
  _TICKER = setInterval(tick, intervalLength);
}

function pause() {
  clearInterval(_TICKER);
}

function tick() {
  aircraft.forEach(a => {
    a.tick();
  });
}

function receiveMessage(msg, timestamp = null) {
  
} 

function gebid(id) { return document.getElementById(id); }