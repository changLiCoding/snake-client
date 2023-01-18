const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: // IP address here,
    port: // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data',(data) => {
    console.log(`Message from server: ${data}`)
  })
  conn.on('connect',() => {
    conn.write("Hello from snake client side! ")
  })
  return conn;
};

console.log("Connecting ...");
connect();
