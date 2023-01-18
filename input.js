let connection;

const handleUserInput = function(key) {
  // your code here
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
  if (key === 'w') {
    //conn.write('');
    connection.write('Move: up');
  }
  if (key === 's') {
    //conn.write('');
    connection.write('Move: down');
  }
  if (key === 'a') {
    //conn.write('');
    connection.write('Move: left');
  }
  if (key === 'd') {
    //conn.write('');
    connection.write('Move: up');
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

module.exports = {setupInput};
