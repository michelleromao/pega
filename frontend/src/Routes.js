import React from 'react';
import { Route } from 'react-router-dom';

function Routes() {
  return <Route exact path="/" component={() => <Index />} />;
}
export default Routes;
