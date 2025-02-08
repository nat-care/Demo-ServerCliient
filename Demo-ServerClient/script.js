const socket = new WebSocket("ws://localhost:8080");
const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("message");
const responseDiv = document.getElementById("response");
socket.onopen = () => {
  console.log("Connected to server.");
};
socket.onmessage = (event) => {
  responseDiv.innerHTML = `Server says: ${event.data}`;
};
sendBtn.addEventListener("click", () => {
  const message = messageInput.value;
  if (message.trim()) {
    socket.send(message);
    messageInput.value = "";
  } else {
    alert("Please enter a message.");
  }
});

socket.onclose = () => {
  console.log("Disconnected from server.");
};
