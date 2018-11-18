import {
    createStore,
    combineReducers,
    applyMiddleware } from 'redux';

import logger from "redux-logger";

import { todoListReducer } from './reducers/index';

import { readFromLocalStorage, writeToLocalStorage } from '../helpers/localStorage'

// const logger = store => next => action => {
//     let result;
//     console.groupCollapsed("dispatching", action.type);
//     console.log('prev state', store.getState());
//     console.log('action', action);
//     result = next(action);
//     console.log('next state', store.getState());
//     console.groupEnd();
// };

const saver = store => next => action => {
    let result = next(action);
    writeToLocalStorage(store.getState());
    return result;
};

const storeFactory = () =>
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({todoListReducer}),
        readFromLocalStorage()
    );

export default storeFactory;
