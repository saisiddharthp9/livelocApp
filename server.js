const express = require("express");
const app = express();
const port = 3000;
const http = require("http");
const { Server } = require("socket.io");
// const cors = require("cors");

app.use(express.json());
app.use(express.static("public"));
// app.use(cors());

const server = http.createServer(app);
const io = new Server(server);

// app.get("/", (req, res) => {
//   res.send("The Server is online!");
// });

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("message", (message) => {
    console.log(`Received message: ${message}`);
    // Broadcast the message to all connected clients
    socket.broadcast.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
server.listen(port, () => {
  console.log(`port is listening to http://localhost:${port}`);
});
