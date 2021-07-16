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

// Customer information reducer:

const customerInfo = (state = [], action) => {
    if (action.type === 'ADD_CUSTOMER_INFO') {
    // Create a new array which includes previous customer’s information (objects)
         console.log(`The customer information added was ${action.payload}`);
         return [...state, action.payload];
     }
     return state;
 };

const pizzas = (state=[], action) => {
    if (action.type === 'GET_PIZZAS'){
        return action.payload;
    }
    return state;
}


let storeInstance= createStore(
    combineReducers({
        totalReducer,
        customerInfo,
        pizzaOrders,
        pizzas
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}> <App />  </Provider>, document.getElementById('root'));
