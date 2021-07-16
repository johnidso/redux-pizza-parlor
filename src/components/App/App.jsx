import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from "../Header/Header";
import Admin from "../Admin/Admin";

const dispatch = useDispatch();

function App() {
  state = {
    pizzaList: [],
    orderList: [],
  }

  useEffect(() => {
    getOrders();
  }, [])
  //GET ORDERS REQUEST
  const getOrders = () => {
    axios.get('/Orders')
    .then((response) =>{
      console.log('AXIOS GET ORDERS response:', response)
      dispatch({ type: `SET_ORDER_LIST`, payload: response.data });
      })
      .catch( error => {
        console.log(error);
        alert(`Could not get orders at this time. Try again later.`);
      })
  }
  
  return (
    <>
    <Header />
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
    </>
  );
}

export default App;
