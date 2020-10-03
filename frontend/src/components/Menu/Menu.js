import React from 'react';
import { useDispatch } from 'react-redux';

import { Link, useHistory } from 'react-router-dom';
import { userLogout } from '../../store/modules/user/action.js';
import { MenuStyled } from './menuStyled.js';

export default function Menu({ tela }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogout());
    history.push('/');
  };
  return (
    <MenuStyled mostrar={tela}>
      <ul>
        <li>
          <Link to="/painel">Meu Painel</Link>
        </li>
        <li>
          <Link>Meus Favoritos</Link>
        </li>
        <li>
          <Link>Minhas Vendas</Link>
        </li>
        <li>
          <Link>Minhas Compras</Link>
        </li>
        <li>
          <Link>Meu Perfil</Link>
        </li>
        <li onClick={() => handleLogout()}>Sair</li>
      </ul>
    </MenuStyled>
  );
}
