import { WebSocketServer } from "ws";
import dotenv from "dotenv";
dotenv.config();

const port = Number(process.env.PORT) || 3000;
const wss = new WebSocketServer({ port });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("open", () => {
    console.log("OPEN");
  });

  ws.on("message", (data) => {
    const message = data.toString();
    wss.clients.forEach((client) => client.send(message));
  });
  ws.on("error", (err) => {
    console.log(err);
  });
  ws.on("close", () => {
    console.log("Client Disconnected");
  });
});
