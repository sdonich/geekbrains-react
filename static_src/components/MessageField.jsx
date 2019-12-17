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
    messages: [{ text: "Привет!", sender: 'bot', chatId: 1 }, { text: "Как дела?", sender: 'bot', chatId: 1 }],
    input: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const chatId = this.props.chatId;

    if (prevState.messages.length < this.state.messages.length &&
      this.state.messages[this.state.messages.length - 1].sender === 'me') {
      const robotChatId = prevProps.chatId === chatId ? chatId : prevProps.chatId;

      setTimeout(() =>
        this.setState({
          messages: [...this.state.messages, { text: 'Не приставай ко мне, я робот!', sender: 'bot', chatId: robotChatId }]
        }),
        1000);
    }
  }

  handleClick = (message, sender) => {
    this.sendMessage(message, sender)
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleKeyUp = (event, message, sender) => {
    if (event.keyCode === 13) {
      this.sendMessage(message, sender)
    }
  };

  sendMessage = (message, sender) => {
    const currentMessage = { text: message, sender, chatId: this.props.chatId };

    this.setState({
      messages: [...this.state.messages, currentMessage],
      input: ''
    });
  };

  render() {
    const { messages, input } = this.state;
    const { chatId } = this.props;

    const messageElements = messages
      .filter(message => message.chatId === chatId)
      .map((message, id) => (
        <Message
          key={id}
          text={message.text}
          sender={message.sender}
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