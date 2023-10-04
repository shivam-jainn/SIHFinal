document.addEventListener('DOMContentLoaded', () => {
    const runSimulationButton = document.getElementById('runSimulationButton');
    const simulationDataDiv = document.getElementById('simulationData');

    // Create a WebSocket connection
    const socket = io();

    runSimulationButton.addEventListener('click', () => {
        // Emit a 'requestJsonData' event to the server
        socket.emit('requestJsonData');
    });

    // Listen for the 'jsonData' event from the server
    socket.on('jsonData', (data) => {
        // Display the JSON data in the simulationDataDiv
        const jsonData = JSON.stringify(data, null, 2); // Pretty-print JSON
        simulationDataDiv.innerHTML = `<pre>${jsonData}</pre>`;
    });
});
