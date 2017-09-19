import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root/Root';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';
import './index.css';

const store = configureStore();

ReactDOM.render(
    <Root store={store} />,
     document.getElementById('root')
);
registerServiceWorker();
