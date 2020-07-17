const YouTube = require('youtube-live-chat');

const connection = mysql.createConnection({
  host     : 'XXX',
  port     : XXX,
  user     : 'linuc318_sir',
  password : 'linuX321',
  database : 'linuc318_sirlockee_db'
});

connection.connect(function(err){
  if(err) return console.log('Erro na conexao com banco: ' + err);
  console.log('Banco conectado!');
})

const yt = new YouTube('UCdrjTU8TWQO29NRoCdbEvCQ', 'AIzaSyB6hsJq9upTevgRKl2geF91gHlvbDGiXZA');

var dtCorte = '2016-06-23 09:07:21.2-07:00';
var sirlockeeId = 'drjTU8TWQO29NRoCdbEvCQ';

yt.on('ready', () => {
  console.log('Conectado ao youtube')
  yt.listen(10000)
})

yt.on('message', data => {

  dtAtual = data.snippet.publishedAt;
  let autor = data.snippet.authorChannelId;
  let msg = data.snippet.displayMessage;
  let corte = 0;
  let salvar = false;



  if (dtAtual.localeCompare(dtCorte) == 1) {
    if (autor == sirlockeeId) {
      if (msg.includes("#")) {
        dtCorte = dtAtual;
        corte = 1;
        salvar = true;
      }
    } else {
      msg = data.snippet.displayMessage;
      if ( (msg == "#1") || (msg == "#2") || (msg == "#3") || (msg == "#4") || (msg == "#5") ) {
        salvar = true;
      }
    }

    if (salvar) {
      query = `insert into posts (usuario, valor, corte) values ?`;
      const values = [ [autor, msg, corte] ];
      conn.query(sql, [values], function (error, results, fields){
            if(error) return console.log(error);
            conn.end();
        });
    }

  }

  console.log(`POST >> ${dtAtual} | ${autor} | ${msg} | ${corte}`);

})

yt.on('error', error => {
  console.error(error)
})
