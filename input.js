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

module.exports = {setupInput};
