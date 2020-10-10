import React from 'react';
import { Route } from 'react-router-dom';
import Index from './pages/Index';
import Announcement from './pages/Announcement';
import CreateAnnouncement from './pages/CreateAnnouncement';

import TestPage from './pages/TestPage';
import Sacola from './pages/Sacola/Sacola';
import Payment from './pages/Sacola/Payment';
import Details from './pages/Sacola/Details';
import Error404 from './pages/Error404/';
import PainelUser from './pages/UserPanel/Index';
import Redirect from './pages/Redirect';

function Routes() {
  return (
    <>
      <Route exact path="/" component={() => <Index />} />
      <Route path="/anuncio/:pathId/" component={() => <Announcement />} />
      <Route path="/test" component={() => <TestPage />} />
      <Route path="/sacola" component={() => <Sacola />} />
      <Route path="/payment" component={() => <Payment />} />
      <Route path="/details/:pathId/" component={() => <Details />} />
      <Route path="/painel" component={() => <PainelUser />} />
      <Route path="/redirect" component={() => <Redirect />} />

      <Route path="/add/anuncio" component={() => <CreateAnnouncement />} />

      {/* <Route path="*" component={() => <Error404 />} />*/}
    </>
  );
}
export default Routes;
