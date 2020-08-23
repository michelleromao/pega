import React from 'react';
import { FiMenu, FiChevronDown } from 'react-icons/fi';
import './Header.css';

import Bolsa from '../../assets/icons/Bolsa';
import Logo from '../../assets/Logo';
import Pesquisa from '../../assets/icons/Lupa';

export default function Header(props) {
  const user = localStorage.getItem('user');
  return (
    <div className="Header">
      <div className="Logo">
        <Logo />
      </div>
      <div className="Categorias">
        <FiMenu /> <p>Categorias</p>
      </div>
      <div className="Pesquisa">
        <input
          type="search"
          placeholder="Encontre seu produto aqui! =D"
        ></input>
        <Pesquisa />
      </div>
      <button id="cta-vender">Vender</button>
      <div className="Usuario">
        <p>{user ? `Olá, ${user}!` : 'Olá, pegador!'}</p>
        {user ? (
          <>
            <img src={props.userPhoto} />
            <FiChevronDown />
          </>
        ) : (
          false
        )}
      </div>
      <div className="Sacola">
        <span>{props.itemsCart}</span>
        <Bolsa />
      </div>
    </div>
  );
}
