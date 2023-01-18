const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data',(data) => {
    console.log(`Message from server: ${data}`);
  });
  conn.on('connect',() => {
    conn.write("Hello from snake client side! ");
  });
  return conn;
};

module.exports = connect;
