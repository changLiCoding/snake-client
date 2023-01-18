//const net = require("net");
const {connect} = require('./client');
const {setupInput} = require('./input');
// establishes a connection with the game server


// setup interface to handle user input from stdin


console.log("Connecting ...");
connect();
setupInput();
