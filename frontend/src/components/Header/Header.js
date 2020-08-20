import React from 'react'
import { FiMenu, FiChevronDown } from 'react-icons/fi'
import Sacola from '../../assets/icons/sacola.svg'
import Logo from '../../assets/logo.svg'
import Pesquisa from '../../assets/icons/lupa.svg'
import Fernanda from './nanda.png'
import './Header.css'

export default function Header() {
    return (
        <div className="Header">
            <img src={Logo}></img>
            <div className="Categorias">
                <FiMenu /> <p>Categorias</p>
            </div>
                <div className="Pesquisa">
                <input type="search" placeholder="Encontre seu produto aqui! =D"></input>
                <img src={Pesquisa}></img>
            </div>            
            <button id="cta-vender">Vender</button>
            <div className="Usuario">
                <p>Olá, Fernanda</p>
                <img src={Fernanda}></img>
                <FiChevronDown />          
            </div>
            <div className="Sacola">
                <span>3</span><img src={Sacola}></img>
            </div>
            
        </div>
    )
}
