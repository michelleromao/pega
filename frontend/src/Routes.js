import React from 'react';
import { Route } from 'react-router-dom';
import Index from './pages/Index';
import Announcement from './pages/Announcement';
import CreateAnnouncement from './pages/CreateAnnouncement';
import EditAnnouncement from './pages/EditAnnouncement';


import TestPage from './pages/TestPage';
import Sacola from './pages/Sacola/Sacola';
import Payment from './pages/Sacola/Payment';
import Details from './pages/Sacola/Details';
import Error404 from './pages/Error404/';
import PainelUser from './pages/UserPanel/Index';
import Redirect from './pages/Redirect';
import Profile from './pages/Profile';
import Search from './pages/Search/Search';
import ExcluirConta from './pages/ExcluirConta'
import ContaExcluida from './pages/ContaRemovida'
function Routes() {
  return (
    <>
      <Route exact path="/" component={() => <Index />} />
      <Route path="/profile/:pathId/" component={() => <Profile />} />

      <Route path="/anuncio/:pathId/" component={() => <Announcement />} />
      <Route path="/test" component={() => <TestPage />} />
      <Route path="/sacola" component={() => <Sacola />} />
      <Route path="/payment" component={() => <Payment />} />
      <Route path="/details/:pathId/" component={() => <Details />} />
      <Route path="/painel" component={() => <PainelUser />} />
      <Route path="/redirect" component={() => <Redirect />} />
      <Route path="/search" component={()=> <Search/>}/>
      <Route path="/excluir-conta" component={()=> <ExcluirConta/>}/>
      <Route path="/add/anuncio" component={() => <CreateAnnouncement />} />
      <Route path="/contaremovida" component={() => <ContaExcluida />} />
      <Route path="/editar/anuncio/:pathId/" component={() => <EditAnnouncement />} />


      {/* <Route path="*" component={() => <Error404 />} />*/}
    </>
  );
}
export default Routes;
