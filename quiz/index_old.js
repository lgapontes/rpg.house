const YouTube = require('youtube-live-chat');

const yt = new YouTube('UCdrjTU8TWQO29NRoCdbEvCQ', 'AIzaSyB6hsJq9upTevgRKl2geF91gHlvbDGiXZA');

var dtCorte = '2016-06-23 09:07:21.2-07:00';
var sirlockeeId = 'drjTU8TWQO29NRoCdbEvCQ';
var contadorBase = {
  h1: 0,
  h2: 0,
  h3: 0,
  h4: 0,
  h5: 0
};
var contador = contadorBase;

yt.on('ready', () => {
  console.log('ready!')
  yt.listen(1000)
})

yt.on('message', data => {

  dtAtual = data.snippet.publishedAt;

  if (dtAtual.localeCompare(dtCorte) == 1) {
    if (data.snippet.authorChannelId == sirlockeeId) {
      dtCorte = dtAtual;
      contador = contadorBase;
    } else {
      msg = data.snippet.displayMessage;
      if (msg.includes("#1")) {
        contador.h1 = contador.h1 + 1;
      }
      if (msg.includes("#2")) {
        contador.h2 = contador.h2 + 1;
      }
      if (msg.includes("#3")) {
        contador.h3 = contador.h3 + 1;
      }
      if (msg.includes("#4")) {
        contador.h4 = contador.h4 + 1;
      }
      if (msg.includes("#5")) {
        contador.h5 = contador.h5 + 1;
      }
    }

  }
})

yt.on('error', error => {
  console.error(error)
})
