import React from 'react';
import ReactDom from 'react-dom';

const MessageMarkup = () => {
	return <div>I'm fine. Thanks</div>;
};

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			quantity: 0
		};
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler() {
		this.setState({ quantity: this.state.quantity + 1 });
	}

	render() {
		return (
			<React.Fragment>
				<button onClick={this.clickHandler}>Send</button>
				{Array(this.state.quantity).fill('').map((_message, i) => <MessageMarkup key={i} />)}
			</React.Fragment>
		);
	}
}

ReactDom.render(<App id={'ddd'} />, document.getElementById('root'));
