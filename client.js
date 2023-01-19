const net = require("net");
const server = net.createServer();

const connect = function () {
  const conn = net.createConnection({
    host: "172.29.32.215",
    port: 50541,
  });

  conn.on("error", function (data) {
    console.log("erro", data);
  });

  conn.on("connect", function () {
    console.log("Welcome to the game!");
    conn.write("Name: MAP");
    conn.write("Move: up");
    
  });

  conn.setEncoding("utf8");

  return conn;

  
};

module.exports = connect;
