import React from 'react';
import ReactDom from 'react-dom';
import MessageField from './components/MessageField';

class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<MessageField />
		);
	}
}

ReactDom.render(<App />, document.getElementById('root'));
