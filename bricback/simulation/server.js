const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const fs = require('fs');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const PORT = 3002;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// WebSocket logic
io.on('connection', (socket) => {
    console.log('Client connected');

    // Handle the 'requestJsonData' event from the client
    socket.on('requestJsonData', () => {
        // Read JSON data from a file (e.g., data.json)
        fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            const jsonData = JSON.parse(data);

            // Send the JSON data to the client
            socket.emit('jsonData', jsonData);
        });
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
