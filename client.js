const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "172.29.32.215",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");


module.exports = connect