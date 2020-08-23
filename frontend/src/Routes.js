import React from 'react';
import { Route } from 'react-router-dom';
import Index from './pages/Index';
import Announcement from './pages/Announcement';

import TestPage from './pages/TestPage';

function Routes() {
  return (
    <>
      <Route exact path="/" component={() => <Index />} />
      <Route path="/anuncio" component={() => <Announcement />} />

      <Route path="/test" component={() => <TestPage />} />
    </>
  );
}
export default Routes;
