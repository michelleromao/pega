import React from 'react';
import { useHistory } from 'react-router-dom';

function Redirect() {
  const history = useHistory();
  const id = localStorage.getItem('id');

  history.push(`/anuncio/${id}`);

  return <></>;
}
export default Redirect;
