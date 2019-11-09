import {combineReducers, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import search from '../reducers/search';

const createRootReducer = () => combineReducers({
    search
});

const middlewares = [thunk];
const logger = createLogger({
    duration: true
});
middlewares.push(logger);

const store = createStore(createRootReducer(), applyMiddleware(...middlewares));

export {
    store
};