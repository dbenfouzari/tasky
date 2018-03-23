// tslint:disable:no-any
import { createStore as createReduxStore } from 'redux';
import reducers from './reducers';

let store: any;
const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

export default () => {
    if (store) {
        return store;
    }

    store = createReduxStore(reducers, devTools);
    return store;
};
