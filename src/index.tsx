import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import createStore from './store/createStore';

const renderApp = () => {
    ReactDOM.render(
        <Provider store={createStore()}>
            <App/>
        </Provider>,
        document.getElementById('root') as HTMLElement
    );
};
// tslint:disable:no-any
if ((module as any).hot) {
    (module as any).hot.accept('./App', function() {
      renderApp();
  });
}
// tslint:enable:no-any

renderApp();
registerServiceWorker();
