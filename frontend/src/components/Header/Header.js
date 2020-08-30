import React, { useState } from 'react';
import { FiMenu, FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Menu from '../CategoryMenu/Menu';
import './Header.css';

import Bolsa from '../../assets/icons/Bolsa';
import Logo from '../../assets/Logo';
import Pesquisa from '../../assets/icons/Lupa';

export default function Header(props) {
  const user = localStorage.getItem('user');
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="Header">
        <div className="Logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div onClick={() => setMenu(!menu)} className="Categorias">
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
          {user ? (
            <p>{`Olá, ${user}!`}</p>
          ) : (
            <div className="Nologgedin">
              <p>Olá, pegador!</p>
              <Link to="/login">Loga aqui!</Link>
            </div>
          )}

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
      {menu ? <Menu /> : <div />}
    </>
  );
}
