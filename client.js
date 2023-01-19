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

  });
  return conn;
};

module.exports = {connect};
