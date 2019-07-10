/**
 * I'm a super simple chat server you can run with node
 * 	node chat-server.js
 *
 * Interact with me:
 *
 * https://www.npmjs.com/package/ws
 * https://www.npmjs.com/package/ws#sending-and-receiving-text-data
 */
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 3030 });

wss.on("headers", function(headers) {
  console.log(headers);
});

// Broadcast to all.
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

wss.on("connection", (ws, req) => {
  // headers, cookies, etc...
  //console.log(req);
  //const token = req.headers['x-auth-token'].split(/\s*,\s*/)[0];

  ws.on("message", message => {
    console.log("ws received: %s", message);

    // send to the sender
    //ws.send(message);

    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.send(
    JSON.stringify({
      user: "root",
      message: "---Welcome---"
    })
  );
});
