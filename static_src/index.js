import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from './components/Router';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<MuiThemeProvider>
				<Router />
			</MuiThemeProvider>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
);
