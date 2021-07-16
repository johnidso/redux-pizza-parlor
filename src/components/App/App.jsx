import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from "../Header/Header";
import { useDispatch, useSelector } from 'react-redux';
import Admin from "../Admin/Admin";
import { HashRouter as Router, Route, Link} from 'react-router-dom';




function App() {
  
  const dispatch = useDispatch();

  const pizzaOrders = useSelector (store => store.pizzaOrders);

  useEffect(() => {
    getOrders();
  }, [])
  //GET ORDERS REQUEST
  const getOrders = () => {
    axios.get('/api/order')
    .then((response) =>{
      console.log('AXIOS GET ORDERS response:', response)
      dispatch({ type: `GET_ORDER_LIST`, payload: response.data });
      })
      .catch( error => {
        console.log(error);
        alert(`Could not get orders at this time. Try again later.`, error);
      })
  }
  
  return (
    <>
  
      <Header />
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      {/* <Route exact path= '/admin' component={Admin}> </Route> */}
      <Admin />
    
    
    
      
    </>
  );
}

export default App;
