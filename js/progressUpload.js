const socket = new WebSocket('ws://localhost:3000');

// Update the progress bar when receiving messages from the server
socket.addEventListener('message', event => {
    console.log("Hello World")
    const progress = JSON.parse(event.data);
    const progressBarFill = document.getElementById('progressBar');
    progressBarFill.style.width = `${progress.percent}%`;
});