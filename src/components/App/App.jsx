import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { HashRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import './App.css';
import Checkout from '../Checkout/Checkout';
import Header from "../Header/Header";
import Admin from "../Admin/Admin";
import CustomerInfo from "../CustomerInfo/CustomerInfo";

import SelectPizza from '../SelectPizza/SelectPizza';


function App() {
  const dispatch = useDispatch();
  const pizzas = useSelector(store => store.pizzas);

  useEffect(() => {
    fetchPizzaList();
    getOrders();
  }, []);

  const fetchPizzaList = () => {
    axios.get('/api/pizza')
    .then( res => {
        dispatch({type:'GET_PIZZAS', payload: res.data})
    })
    .catch( err => {
        console.log('Error getting Pizzas', err);
    })
  }

  const getOrders = () => {
    axios.get('/api/order')
    .then (response => {
      dispatch ({type: 'GET_ORDER_LIST', payload: response.data})
    }) .catch (error =>{
      console.log('AXIOS get orders error', error);
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
    <Router>
      <Route path='/'exact>
        <Header />
      </Route>
      <Route path='/pizzas'>
        <SelectPizza />
      </Route>
      <Route path='/info'>
        <CustomerInfo />
      </Route>
        <Route path='/checkout' component={Checkout}/>
      <Route path='/admin'>
        <Admin getOrders={getOrders}/>
      </Route>
        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>
    </Router>
    </div>
  );
}

export default App;
