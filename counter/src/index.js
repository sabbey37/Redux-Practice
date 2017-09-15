import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CounterContainer from './containers/CounterDisplay';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import {createStore} from 'redux';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}> 
        <CounterContainer />
    </Provider>, document.getElementById('root'));
registerServiceWorker();