import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const customer = {customer_name: "Donatello",
street_address: "20 W 34th St",
city: "New York",
zip: "10001",
total: "27.98",
type: "Pickup"}

const pizzas = [{
    id: "1",
    name: 'peperoni',
    price: 12.43
  },{
    id: "2",
    name: 'sausage',
    price: 10.99
  }]

const PizzaCartReducer = (state = pizzas, action) => {
    if(action.type === 'ADD_TO_CART'){
        return [...state, action.payload];
    }
    if(action.type === 'CLEAR_CART'){
        return state = [];
    }
    if(action.type === 'REMOVE_PIZZA'){
        return state.filter(item => item != action.payload)
    }
    return state;
};

// Customer information reducer:
const customerInfo = (state = customer, action) => {
    if (action.type === 'ADD_CUSTOMER_INFO') {
    // Create a new array which includes previous customer’s information (objects)
         console.log(`The customer information added was ${action.payload}`);
         return [...state, action.payload];
     }
     return state;
 };

const storeInstance = createStore(
    combineReducers({
        PizzaCartReducer,
        customerInfo,
    })
);

ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>, 
document.getElementById('root'));
