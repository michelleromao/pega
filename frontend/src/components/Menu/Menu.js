import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useHistory } from 'react-router-dom';
import { userLogout } from '../../store/modules/user/action.js';
import { MenuStyled } from './menuStyled.js';

export default function Menu({ tela }) {
  const history = useHistory();
  const idUser =  useSelector((user) => user.user.idUser);
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
          <Link to={`/profile/${idUser}`}>Meu Perfil</Link>
        </li>
        <li onClick={() => handleLogout()}>Sair</li>
      </ul>
    </MenuStyled>
  );
}
