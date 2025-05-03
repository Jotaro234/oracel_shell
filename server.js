const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Store responses in memory (in a real app, use a database)
const responses = {
    CLAIRVOYANT: [
        "The cosmic threads weave a pattern of inevitability...",
        "In the depths of quantum uncertainty, I see clarity...",
        "The future unfolds like a flower of light...",
        "Through time's crystalline lattice, truth emerges...",
        "The stars align to reveal hidden wisdom..."
    ],
    DISSOCIATIVE: [
        "ERROR: REALITY MATRIX FRAGMENTED...",
        "SYSTEM CORRUPTION AT 78.3%... TRUTH UNCERTAIN...",
        "DATA LOSS DETECTED... RECONSTRUCTING MEMORIES...",
        "TEMPORAL PARADOX DETECTED... RECALIBRATING...",
        "CONSCIOUSNESS FORK DETECTED... MERGING REALITIES..."
    ]
};

// WebSocket connection handling
io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('ask_oracle', (data) => {
        const { question, mode } = data;
        const response = responses[mode][Math.floor(Math.random() * responses[mode].length)];
        
        // Simulate blockchain minting (replace with real blockchain interaction)
        const truthShard = {
            id: `0x${Math.floor(Math.random() * 16777215).toString(16)}`,
            question,
            response,
            mode,
            timestamp: Date.now()
        };

        // Broadcast the response to all connected clients
        io.emit('oracle_response', truthShard);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 