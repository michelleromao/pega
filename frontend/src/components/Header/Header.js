import React, { useState } from 'react';
import { FiMenu, FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import MenuVertical from '../Menu/Menu';
import Menu from '../CategoryMenu/Menu';
import './Header.css';

import Bolsa from '../../assets/icons/Bolsa';
import Logo from '../../assets/Logo';
import Pesquisa from '../../assets/icons/Lupa';
import { ContentHeader, Brand, Categorias, Search, Nologgedin, Sacola } from './style'


export default function Header(props) {
  const user = localStorage.getItem('user');
  const [menu, setMenu] = useState(false);
  const [menuv,setMenuv] = useState('none')
  function abrirMenu() {
    if (menuv === 'none') {
      setMenuv('block');
      document.querySelector('.Usuario svg').style = 'transform: rotateX(180deg);';
    } if (menuv === 'block') {
      setMenuv('none');
      document.querySelector('.Usuario svg').style = 'transform: rotateX(360deg);';
    }
  }
  return (
    <>
      <ContentHeader>     
        <Brand>
          <Link to="/">
            <Logo />
          </Link>
        </Brand>
        <Categorias onClick={() => setMenu(!menu)}>
          <FiMenu /> <p>Categorias</p>
        </Categorias>
        <Search>
          <input
            type="search"
            placeholder="Encontre seu produto aqui! =D"
          ></input>
          <Pesquisa />
        </Search>
        <button id="cta-vender">Vender</button>
        <div className="Usuario">
          {user ? (
            <p>{`Olá, ${user}!`}</p>
          ) : (
            <Nologgedin>
              <Link to="/login">Loga aqui!</Link>
            </Nologgedin>
          )}

          {user ? (
            <>
              <img src={props.userPhoto} onClick={abrirMenu}/>
              <FiChevronDown onClick={abrirMenu}/>
              <MenuVertical tela={menuv}/>
            </>
          ) : (
            false
          )}
        </div>
        <Sacola>
          <span>{props.itemsCart}</span>
          <Bolsa />
        </Sacola>
      </ContentHeader>
      {menu ? <Menu /> : <div />}
    </>
  );
}
