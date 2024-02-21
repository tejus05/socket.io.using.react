import express from 'express'
import http from 'http'
import { Server } from 'socket.io';
import cors from 'cors'

const app = express();
const httpServer = http.createServer(app);

app.use(cors());

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  socket.on("send_message", (message) => {
    socket.broadcast.emit("received_message",message);
  })
});

httpServer.listen(3000, () => {
  console.log("listening on port 3000");
})