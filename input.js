const { connect } = require("./client");
const connection = connect();


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  

  const handleUserInput = function (key) {
    if (key === "\u0003") process.exit();
    if (key === "w") {
      connection.write("Move: up");
    }
    if (key === "s") {
      connection.write("Move: down");
    }
    if (key === "a") {
      connection.write("Move: left");
    }
    if (key === "d") {
      connection.write("Move: right");
    }
    if (key === "y") connection.write("Say: Sup!");
    if (key === "u") connection.write("Say: War!");
    if (key === "i") connection.write("Say: Battle?");
    prevKey = key;
  };
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
