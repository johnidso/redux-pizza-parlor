import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import './App.css';
import Header from "../Header/Header";

function App() {
  const dispatch = useDispatch();

  const fetchPizzaList = () => {
    axios.get('/api/pizza')
    .then( res => {
        dispatch({type:'SET_PIZZA_LIST', payload: res.data})
    })
    .catch( err => {
        console.log('Error getting Pizzas', err);
    })
  }

  useEffect(() => {
    fetchPizzaList();
  }, []);

  return (
    <>
    <Header />
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
    </>
  );
}

export default App;
