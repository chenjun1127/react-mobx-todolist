import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'mobx-react';
import store from './store';
import './public/stylesheet/main';
ReactDOM.render((
	<Provider todoList = {store}>
	  <App />
	</Provider>
  ), document.getElementById('root'));
