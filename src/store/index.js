import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { rootReducer } from './reducers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(promise, thunk)));

export default store;
