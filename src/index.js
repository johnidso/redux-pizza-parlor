import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';

const pizzaOrders = (state = [], action ) => {
    if (action.type ==='GET_ORDER_LIST') {
        return [...state, action.payload];
    }
    return state
}

const totalReducer = (state=0, action) => {
    if (action.type === "UPDATE_TOTAL"){
        state += Number(action.payload);
        return state
    }
    return state
}

let storeInstance= createStore(
    combineReducers({
        totalReducer,
        pizzaOrders,
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}> <App />  </Provider>, document.getElementById('root'));
