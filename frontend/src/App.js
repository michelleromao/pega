import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Header from './components/Header/Header';
import Footer from './components/Footer';
import Routes from './Routes';

import Userphoto from './assets/photos/userphoto.png';
import Login from './pages/Login/';
import Signup from './pages/Signup/';
import Error404 from './pages/Error404/';

import Succeed from './pages/Succeed';
import Order from './components/OrderBy/OrderBy';
function App() {
  return (
   <Order></Order>
  );
}

export default App;
