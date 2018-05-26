import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
require('dotenv').config();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
