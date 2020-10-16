
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Header from './components/Header/Header';
import Footer from './components/Footer';
import Routes from './Routes';
import Recovery from './pages/ForgotPassword/ForgotPassword';
import Userphoto from './assets/photos/userphoto.png';
import Login from './pages/Login/';
import Signup from './pages/Signup/';
import Error404 from './pages/Error404/';

import Succeed from './pages/Succeed';
import Redirect from './pages/Redirect';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={() => <Login />} />
          <Route path="/signup" component={() => <Signup />} />
          <Route path="/recovery" component={() => <Recovery />} />
          <Route exact path="/success" component={() => <Succeed />} />

          <Fragment>
            <Header userPhoto={Userphoto} />
            <Routes />
            <Footer />
          </Fragment>

        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
