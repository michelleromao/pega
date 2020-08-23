import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer';
import Index from './pages/Index';
import TestPage from './pages/TestPage';
import Routes from './Routes';

import Userphoto from './assets/photos/userphoto.png';

function App() {
  return (
    <>
      <Header userPhoto={Userphoto} />

      <Router>
        <Routes />
      </Router>
      <Footer />
    </>
  );
}

export default App;
