import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer';
import Index from './pages/Index';
import TestPage from './pages/TestPage';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/" component={() => <Index />} />
        <Route exact path="/test" component={() => <TestPage />} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
