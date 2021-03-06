import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { FiMenu, FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import MenuVertical from '../Menu/Menu';
import Menu from '../CategoryMenu/Menu';


import Bolsa from '../../assets/icons/Bolsa';
import Logo from '../../assets/Logo';
import Pesquisa from '../../assets/icons/Lupa';
import {
  ContentHeader,
  Brand,
  Categorias,
  Search,
  Nologgedin,
  Sacola,
  Quantity,
  Vender,
} from './style';
import api from '../../services/api';

export default function Header(props) {
  const user = useSelector((user) => user.user.name);
  const bagLength = useSelector((bag) => bag.bag.announcements.length);
  const idUser = useSelector((user) => user.user.idUser);
  const [photoUrl, setPhotoUrl] = useState('');
  const [menu, setMenu] = useState(false);
  const [menuv, setMenuv] = useState('none');

  useEffect(() => {
    async function getPhotoUser() {
      if (user) {
        const idPhoto = await api.get(`/photosuser/${idUser}`);
        setPhotoUrl(idPhoto.data[0].filename);
      }
    }
    getPhotoUser();
  }, []);

  function abrirMenu() {
    if (menuv === 'none') {
      setMenuv('block');
      document.querySelector('.Usuario svg').style =
        'transform: rotateX(180deg);';
    }
    if (menuv === 'block') {
      setMenuv('none');
      document.querySelector('.Usuario svg').style =
        'transform: rotateX(360deg);';
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
          <Link to="/search"><Pesquisa /></Link>

        </Search>
        {user ? (
          <Link to="/add/anuncio">
            <Vender id="cta-vender">Vender</Vender>
          </Link>
        ) : (
          <Link to="/login">
            <Vender id="cta-vender">Vender</Vender>
          </Link>
        )}

        <div className="Usuario">
          {user ? (
            <p>{`Olá, ${user.split(' ')[0]}!`}</p>
          ) : (
            <Nologgedin>
              <Link
                to="/login"
                style={{ fontSize: '15px', fontFamily: 'Poppins' }}
              >
                Loga aqui!
              </Link>
            </Nologgedin>
          )}

          {user ? (
            <div
              onClick={abrirMenu}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <img src={`http://localhost:3333/files/user/${photoUrl}`} />
              <FiChevronDown />
              <MenuVertical tela={menuv} />
            </div>
          ) : (
            false
          )}
        </div>
        <Link to={`/sacola`}>
          <Sacola>
            {bagLength ? (
              <Quantity>
                <p>{bagLength}</p>
              </Quantity>
            ) : (
              <></>
            )}
            <Bolsa />
          </Sacola>
        </Link>
      </ContentHeader>
      {menu ? <Menu /> : <div />}
    </>
  );
}
