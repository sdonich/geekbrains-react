const express = require('express');
const bodyParser = require('body-parser');
const chats = require('./data');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/chat/:id', (req, res) => {
  const id = req.params.id;
  const chat = chats[id - 1];
  res.send(chat.messages);
});

app.post('/chat/:id', (req, res) => {
  const id = req.params.id;
  chats[id - 1].messages.push({ text: req.body.message, sender: 'me' });

  setTimeout(() => {
    const chat = chats[id - 1].messages;
    if (chat[chat.length - 1].sender === 'me') {
      chats[id - 1].messages.push({ text: 'hello, its robot', sender: 'bot' });
    }
  }, 5000);

  res.send(chats[id - 1].messages);
})

app.listen(3001, () => {
  console.log('Listening on port 3001');
});