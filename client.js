const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });
  conn.setEncoding("utf8");

  // interpret incoming data as text
  conn.on('data',(data) => {
    console.log(`Message from server: ${data}`);
  });
  conn.on('connect',(message) => {
    conn.write("Name: CHL");

    //setInterval(() => {
    //  conn.write('Move: up');
    //}, 50);



    //conn.write('Move: up');


    //conn.write("Successfully connected to game server");
    //conn.write("Hello from client!");
    //console.log('Successfully connected to game server');
  });
  return conn;
};

module.exports = connect;
