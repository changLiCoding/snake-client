//const net = require("net");
const connect = require('./client');
// establishes a connection with the game server


// setup interface to handle user input from stdin

const handleUserInput = function(key) {
  // your code here
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
setupInput();
console.log("Connecting ...");
connect();
