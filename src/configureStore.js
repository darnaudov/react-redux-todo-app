import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import { saveState, loadState  } from './localStorage';
import todoApp from './reducers';

const configureStore = () => {
    const initialState = loadState();
    const store = createStore(todoApp, initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    store.subscribe(throttle(() => {
        saveState({
            todos: store.getState().todos
        });
    }, 1000));

    return store;
};

export default configureStore;

