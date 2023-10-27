const http = require("http");
const socketIO = require("socket.io");

const PORT = 3000;

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