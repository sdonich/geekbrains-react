import React from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import { Message } from './Message';
import { connect } from 'react-redux';
import { getChat, sendMessage } from '../store/actions';
import '../styles/styles.css';

class MessageField extends React.Component {
	static defaultProps = {
		chatId: 1
	};

	state = {
		input: ''
	};

	componentDidMount() {
		this.props.getChat(this.props.chatId);
	}

	componentDidUpdate(prevProps) {
		const { chatId, getChat, messages } = this.props;

		if (chatId !== prevProps.chatId) {
			getChat(chatId);
		}

		if (messages && messages.length > 0 && messages[messages.length - 1].sender !== 'bot') {
			setTimeout(() => {
				getChat(this.props.chatId);
			}, 3000);
		}
	}

	handleClick = (message) => {
		this.props.sendMessage(message, this.props.chatId);
		this.setState({ input: '' });
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleKeyUp = (event, message) => {
		if (event.keyCode === 13) {
			this.setState({ input: '' });
			this.props.sendMessage(message, this.props.chatId);
		}
	};

	render() {
		const { messages } = this.props;
		const { input } = this.state;

		const messageElements = messages.map((message, id) => (
			<Message key={id} text={message.text} sender={message.sender} />
		));

		return (
			<React.Fragment>
				<div className="message-field">{messageElements}</div>
				<div style={{ width: '100%', display: 'flex' }}>
					<TextField
						name="input"
						fullWidth={true}
						hintText="Введите сообщение"
						style={{ fontSize: '22px' }}
						onChange={this.handleChange}
						value={this.state.input}
						onKeyUp={(event) => this.handleKeyUp(event, input)}
					/>
					<FloatingActionButton onClick={() => this.handleClick(input)}>
						<SendIcon />
					</FloatingActionButton>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		messages: state.chat
	};
};

export default connect(mapStateToProps, { getChat, sendMessage })(MessageField);
