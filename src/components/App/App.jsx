import React from 'react';
import axios from 'axios';
import './App.css';
import Checkout from '../Checkout/Checkout';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <Router>
        <Route exact path = '/' >
          <p>Pizza is great.</p>
        </Route>
        <Route path='/checkout' component={Checkout}/>
      </Router>
    </div>
  );
}

export default App;
