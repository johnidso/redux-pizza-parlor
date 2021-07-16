import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from "../Header/Header";


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
    axios.get ('/api/order')
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
    <Router>
      <Header />
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <Route exact path= '/admin' component={Admin}> </Route>
    </Router>
    
     
      
    </>
  );
}

export default App;
