// Exercise: A live chatroom!
//
// Insert three elements in the document:
//
//   1. A <ul> where incoming messages will be appended
//
//   2. A text input where you can write chat messages
//
//   3. A submit button so you can send chat messages
//
// Edit the <chat-box> attributes in the index.html file as instructed
// and then use those attributes to connect to a chat server over
// WebSockets.  Details on how to communicate with the chat server can
// be found here:
//
//   https://github.com/pjones/wschat
//
class ChatBox extends HTMLElement {
  // Set up the shadow DOM:
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const list = document.createElement('ul');
    const form = document.createElement('form');
    const input = document.createElement('input');
    const button = document.createElement('input');

    input.setAttribute('type', 'text');
    input.setAttribute('name', 'message');
    input.setAttribute('placeholder', 'Type your message');

    button.setAttribute('type', 'submit');

    form.appendChild(input);
    form.appendChild(button);

    this.chatInput = input;
    this.chatForm = form;
    this.chatList = list;

    this.shadowRoot.appendChild(form);
    this.shadowRoot.appendChild(list);

    // configuration for the chat
    this.chatHost = this.getAttribute('data-host');
    this.chatUser = this.getAttribute('data-user');

    // exercise: store it in the session for later
    this.messagesCache = [];

    const messagesString = sessionStorage.getItem('chatMessages');
    const messages = messagesString && JSON.parse(messagesString);
    messages && messages.forEach((message) => {
      this.addMessage(message);
    });
  }

  addMessage(message) {
    const newMessage = document.createElement('li');
    newMessage.innerHTML = message.message;
    this.chatList.prepend(newMessage);

    this.messagesCache.push(message);
    sessionStorage.setItem('chatMessages', JSON.stringify(this.messagesCache));
  }

  // Create a new WebSocket and set up callbacks for sending and
  // receiving messages.
  //
  // If you get stuck here is an example implementation:
  //
  //   https://github.com/pjones/wschat/blob/master/examples/example.js
  connectedCallback() {
    let ws = new WebSocket(`ws://${this.chatHost}`);

    ws.addEventListener('message', (e) => {
      console.log("incoming message: " + e.data);
      const message = JSON.parse(e.data);
      this.addMessage(message);
    });

    this.chatForm.addEventListener('submit', (e) => {
      console.log("sending message to server");
      e.preventDefault();

      const message = {
        user: this.chatUser,
        message: this.chatInput.value
      };

      // add our message
      this.addMessage(message);

      // send it along
      ws.send(JSON.stringify(message));
    });
  }

  disconnectedCallback() { }
}

customElements.define("chat-box", ChatBox);
