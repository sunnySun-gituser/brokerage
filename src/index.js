import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import App from './constainers/App';
import * as serviceWorker from './serviceWorker';
import repositoryReducer from './store/reducers/repositoryReducer'
import {Provider} from 'react-redux';
import errorHandlerReducer from './store/reducers/errorHandlerReducer';
import {createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';


const rootReducers = combineReducers({
    repository: repositoryReducer,
    errorHandler: errorHandlerReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
