const WebSocket = require("ws");
const host = "127.0.0.1";
const portNumber = 8080;
var os = require("os");
var hostname = os.hostname();

const wss = new WebSocket.Server({ port: portNumber }, () => {
  //console.clear();
  console.log("WebSocket server Name:" + hostname);
  //console.log('WebSocket server is running on ws://localhost:8080');
  console.log(`WebSocket server is running on ws://${host}:${portNumber}`);
});
wss.on("connection", (ws) => {
  console.log("Demo-Client Connected.");
  ws.on("message", (message) => {
    console.log(`Received: ${message}`);
    if (message == "What you name?") {
      ws.send(`My name is ${hostname}`);
    } else ws.send(`Server received: ${message}`);
  });
  ws.on("close", () => {
    console.log("Demo-Client Disconnected.");
  });
});
