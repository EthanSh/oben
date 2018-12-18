import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import './index.css';
import App from './componets/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer)

render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();