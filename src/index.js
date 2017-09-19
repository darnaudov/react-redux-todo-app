import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';
import todoApp from './reducers/todoApp';
import App from './components/app/App';
import { saveState, loadState  } from './localStorage/localStorage';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const initialState = loadState();
const store = createStore(todoApp, initialState);
store.subscribe(throttle(() => {
    saveState({
        todos: store.getState().todos
    });
}, 1000));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('root')
);
registerServiceWorker();
