import React from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import { Message } from './Message';
import '../styles/styles.css';

export default class MessageField extends React.Component {
  static defaultProps = {
    chatId: 1,
  };

  state = {
    chats: [[1, 2], [], []],
    messages: [{ text: "Привет!", sender: 'bot' }, { text: "Как дела?", sender: 'bot' }],
    input: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.messages.length < this.state.messages.length &&
      this.state.messages[this.state.messages.length - 1].sender === 'me') {
      setTimeout(() =>
        this.setState({
          messages: [...this.state.messages, { text: 'Не приставай ко мне, я робот!', sender: 'bot' }]
        }),
        1000);
    }
  }

  handleClick = (message) => {
    this.sendMessage(message)
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleKeyUp = (event, message) => {
    if (event.keyCode === 13) {
      this.sendMessage(message)
    }
  };

  sendMessage = (message, sender) => {
    const currentChat = this.props.chatId - 1;
    const { chats } = this.state;
    chats[currentChat] = [...chats[currentChat], this.state.messages.length + 1];

    this.setState({
      messages: [...this.state.messages, { text: message, sender }],
      input: '',
      chats: chats
    });
  };

  render() {
    const { chats, messages, input } = this.state;
    const { chatId } = this.props;

    const messageElements = chats[chatId - 1].map(messageId => (
      <Message
        key={messageId}
        text={messages[messageId - 1].text}
        sender={messages[messageId - 1].sender}
      />
    ));

    return (
      <React.Fragment>
        <div className="message-field">
          {messageElements}
        </div>
        <div style={{ width: '100%', display: 'flex' }}>
          <TextField
            name="input"
            fullWidth={true}
            hintText="Введите сообщение"
            style={{ fontSize: '22px' }}
            onChange={this.handleChange}
            value={this.state.input}
            onKeyUp={(event) => this.handleKeyUp(event, input, 'me')}
          />
          <FloatingActionButton onClick={() => this.handleClick(input, 'me')}>
            <SendIcon />
          </FloatingActionButton>
        </div>
      </React.Fragment>
    )
  }
}