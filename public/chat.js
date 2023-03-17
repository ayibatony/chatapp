// JavaScript
$(document).ready(() => {
    const socket = io();

    const chatBox = $("#chatBox");
    const inputField = $("#inputField");
    const sendButton = $("#sendButton");

    function appendMessage(message, sender) {
      const messageElement = $("<div>")
        .addClass("message-text")
        .attr("id", sender)
        .text(message);

      const timestamp = new Date().toLocaleTimeString();
      const timestampElement = $("<span>")
        .addClass("timestamp")
        .text(timestamp);

      const messageContainer = $("<div>").addClass(
        `message-container ${sender}`
      );
      const messageOuterContainer = $("<div>").addClass(
        `message-outer-container ${sender}`
      );
      messageElement.html(message.replace(/\n/g, "<br>"));
      messageOuterContainer.append(messageContainer);
      messageContainer.append(messageElement, timestampElement);
      chatBox.append(messageOuterContainer);
      chatBox.scrollTop(chatBox.prop("scrollHeight"));
    }

    function sendMessage() {
      const message = inputField.val();
      if (message === "") {
        return;
      }
      appendMessage(message, "user");
      socket.emit("user-message", message);
      inputField.val("");
    }

    socket.on("bot-message", (message) => {
      appendMessage(message, "bot");
    });

    sendButton.on("click", sendMessage);
    inputField.on("keydown", (event) => {
      if (event.key === "Enter") {
        sendMessage();
      }
    });
  });