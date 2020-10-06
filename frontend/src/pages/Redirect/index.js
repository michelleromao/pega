import React from 'react';
import { useHistory } from 'react-router-dom';

function Redirect() {
  const history = useHistory();
  const id = localStorage.getItem('id');
  const sacola = localStorage.getItem('sacola');

  if (id) {
    history.push(`/anuncio/${id}`);
  }
  if (sacola) {
    history.push(`/sacola/`);
    localStorage.removeItem('sacola');
  }

  return <></>;
}
export default Redirect;
