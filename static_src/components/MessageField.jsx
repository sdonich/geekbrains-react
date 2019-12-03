import React from 'react';
import Message from './Message';

export default class MessageField extends React.Component {
  state = {
    messages: [],
    text: '',
    texting: false
  };

  componentDidUpdate() {
    setTimeout(() => {
      const messages = this.state.messages;
      const lastMessage = messages[messages.length - 1];

      if (!this.state.texting && lastMessage.author !== 'Dummy') {
        const robotAnswer = {
          author: 'Dummy',
          text: 'Say - Ok, Google'
        };
        this.setState({ messages: [...this.state.messages, robotAnswer] });
      }
    }, 3000);
  }

  onChangeMessage = event => {
    const text = event.target.value;
    this.setState({ text, texting: true });
  }

  sendMessage = () => {
    const { messages } = this.state;
    const currentMessage = {
      author: 'You',
      text: this.state.text
    };
    this.setState({ messages: [...messages, currentMessage], text: '', texting: false });
  };

  render() {
    const messages = this.state.messages.length > 0 ?
      this.state.messages.map((message, id) => <Message key={id} text={message.text} author={message.author} />)
      :
      null;

    return (
      <div>
        {messages}
        <input value={this.state.text} placeholder="type..." onChange={this.onChangeMessage} />
        <button onClick={this.sendMessage}>Send</button>
      </div>
    );
  };
}