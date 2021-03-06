const ws = require('ws');
const server = new ws.Server({ port: 8080 });

server.on('connection', ws => {
  ws.on('error', err => {
    console.log(err);
  });

  ws.on('message', msg => {
    console.log(msg);

    ws.send('Thanks for the message, kind stranger!');
  });
});

// Adding this stops the ECONNRESET error from throwing
server.on('disconnect', ws => {
  console.log('Client disconnected.');
});
