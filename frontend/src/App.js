import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer';
import Routes from './Routes';

import Userphoto from './assets/photos/userphoto.png';
import Login from './pages/Login/';
import Signup from './pages/Signup/';
import Succeed from './pages/Succeed';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" component={() => <Login />} />
          <Route path="/signup" component={() => <Signup />} />
          <Route exact path="/success" component={() => <Succeed />} />
          <Fragment>
            <Header userPhoto={Userphoto} />
            <Routes />
            <Footer />
          </Fragment>
        </Switch>
      </Router>
    </>
  );
}

export default App;
