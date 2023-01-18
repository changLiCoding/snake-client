const net = require("net");
const { IP, PORT, NAME} = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.setEncoding("utf8");

  // interpret incoming data as text
  conn.on('data',(data) => {
    console.log(`Message from server: ${data}`);
  });
  conn.on('connect',() => {
    conn.write(`Name: ${NAME}`);
    conn.write('Say: It Works?');

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

module.exports = {connect};
