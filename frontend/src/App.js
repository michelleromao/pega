import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer';
import Index from './pages/Index';
import TestPage from './pages/TestPage';

function App() {
  const [snackbar, setSnackbar] = React.useState({ open: false, message: '' });

  return (
    <>
      <Router>
        <Header />
        <Route exact path="/" component={() => <Index />} />
        <Route path="/teste" component={() => <TestPage />} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
