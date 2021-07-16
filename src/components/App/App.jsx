import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { HashRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import './App.css';
import Header from "../Header/Header";
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

  return (
    <Router>
      <Route path='/'>
        <Header />
        <SelectPizza />
      </Route>
      <Route path='/info'>

      </Route>
      <Route path='/checkout'>

      </Route>
      <Route path='/admin'>
        
      </Route>

      
        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>
      
    </Router>
  );
}

export default App;
