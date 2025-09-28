import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const wss = new WebSocketServer({ port: 3001 });

wss.on("connection", (ws) => {
    console.log("✅ New client connected");
    ws.on("message", async (message) => {
        console.log(`📩 Received: ${message}`);
        const res = await client.user.create({
            data: {
                username: Math.random().toString(),
                password: Math.random().toString()
            }
        });
        console.log(res);
        const allUsers = await client.user.findMany();
        console.log("All users in DB:", allUsers);
        // client ko wapas reply bhejo
        ws.send(`Server reply: ${message}`);
    });
    ws.on("close", () => {
        console.log("❌ Client disconnected");
    });

    ws.send("👋 Welcome! You are connected to WebSocket server.");

});

console.log("🚀 WebSocket server running on ws://localhost:3001");