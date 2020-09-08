import React from 'react';
import { Route } from 'react-router-dom';
import Index from './pages/Index';
import Announcement from './pages/Announcement';

import TestPage from './pages/TestPage';
import Sacola from './pages/Sacola/Sacola';
import Payment from './pages/Sacola/Payment';
import Details from './pages/Sacola/Details';
import Error404 from './pages/Error404/';

function Routes() {
  return (
    <>
      <Route exact path="/" component={() => <Index />} />
      <Route path="/anuncio" component={() => <Announcement />} />
      <Route path="/test" component={() => <TestPage />} />
      <Route path="/sacola" component={() => <Sacola />} />
      <Route path="/payment" component={() => <Payment />} />
      <Route path="/details" component={() => <Details />} />
      <Route path="*" component={() => <Error404 />} />
    </>
  );
}
export default Routes;
