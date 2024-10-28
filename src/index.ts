import { WebSocket, WebSocketServer } from "ws";
import dotenv from "dotenv";
import { EVENTS, ORDERBOOK, CLIENTS_LIST } from "./config/Globals";
import { createClient } from "redis";
dotenv.config();

const port = Number(process.env.PORT) || 8080;
const wss = new WebSocketServer({ port });
const subscriber = createClient();

// Connect to redis client
const connectToRedis = async () => {
  try {
    await subscriber.connect();
    console.log("Connected to Redis");
  } catch (error) {
    console.error("Failed to connect to REdis");
  }
};

connectToRedis();

// Web socket connection
wss.on("connection", (ws: WebSocket) => {
  console.log("Client connected");

  ws.on("open", () => {
    console.log("OPEN");
  });

  ws.on("message", async (data) => {
    const { type, orderbookId } = JSON.parse(data.toString());

    if (type && orderbookId) {
      if (type == "SUBSCRIBE") {
        const socketIsSubscribed = EVENTS.find((item) => item == orderbookId);
        // New Event
        if (!socketIsSubscribed) {
          EVENTS.push(orderbookId);
          CLIENTS_LIST[orderbookId] = [ws];

          await subscriber.subscribe(orderbookId, (message) => {
            const orderbook = message.toString();
            CLIENTS_LIST[orderbookId].forEach((client) => {
              client.send(orderbook);
            });
          });
        } else {
          CLIENTS_LIST[orderbookId].push(ws);
        }
      }

      if (type == "UNSUBSCRIBE") {
        CLIENTS_LIST[orderbookId] = CLIENTS_LIST[orderbookId].filter(
          (item) => item != ws
        );

        // Unsubscribe from the event(channel) with zero clients
        if (CLIENTS_LIST[orderbookId].length === 0) {
          await subscriber.unsubscribe(orderbookId);
          delete CLIENTS_LIST[orderbookId];
        }
      }
    }
  });

  ws.on("error", (err) => {
    console.log(err);
  });

  ws.on("close", () => {
    // Remove client from subscribers list
    for (let orderbookId in CLIENTS_LIST) {
      CLIENTS_LIST[orderbookId] = CLIENTS_LIST[orderbookId].filter(
        (item) => item != ws
      );

      if (CLIENTS_LIST[orderbookId].length === 0) {
        subscriber.unsubscribe(orderbookId);
        delete CLIENTS_LIST[orderbookId];
      }
    }
    console.log("Client disconnected");
  });
});
