const http = require("http");
const socketIO = require("socket.io");
import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Healthy");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

const server = http.createServer();
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});

const io = socketIO(server);
const activeUsers = new Set();

io.on("connection", (socket) => {
    console.log("Made socket connection");

    socket.on("message", (data) => {
        console.log(data);
    });
});
