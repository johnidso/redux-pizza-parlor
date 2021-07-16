import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';

const totalReducer = (state=0, action) => {
    if (action.type === "UPDATE_TOTAL"){
        state += Number(action.payload);
        return state
    }
    return state
}

const pizzas = (state=[], action) => {
    if (action.type === 'ADD_PIZZA'){
        return [...state, action.payload];
    } else if (action.type === 'REMOVE_PIZZA') => {
        return 
    }
}

let storeInstance= createStore(
    combineReducers({
        totalReducer,
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}> <App />  </Provider>, document.getElementById('root'));
