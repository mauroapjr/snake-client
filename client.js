const { Server } = require("http");
const net = require("net");
const server = net.createServer();

const connect = function () {
  const conn = net.createConnection({
    host: "172.29.32.215",
    port: 50541,
  });

  conn.on("connect", function () {
    console.log("Welcome to the game!");
    conn.write("Name: MAP");
    conn.write("Move: up");
    // //setInterval(() => {
    //   conn.write("Move: up");
    // }, 2000);
  });

  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");

module.exports = connect;
