import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Course from './components/pages/Course';
import Payment from './components/pages/Payment';
import Cart from './components/pages/Cart';
import Signin from './components/pages/Signin';
import Homepage from './components/pages/Homepage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/course' exact component={Course} />
          <Route path='/payment-process' exact component={Payment} />
          <Route path='/shopping-cart' exact component={Cart} />
          <Route path='/sign-in' exact component={Signin} />
      </Switch>
    </Router>
  );
}

export default App;
